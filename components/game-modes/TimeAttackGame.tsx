'use client'

import { useState, useCallback, useEffect } from 'react'
import dynamic from "next/dynamic";

// import GameMap from '@/components/map/GameMap'
import { getRandomCoordinates, calculateDistance } from '@/utils/coordinates'
import { Button } from '@/components/ui/button'

const GameMap = dynamic(() => import("@/components/map/GameMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const TIME_LIMIT = 120 // 2 minutes in seconds

export default function TimeAttackGame() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [targetLocation, setTargetLocation] = useState<[number, number] | null>(null)
  const [showTarget, setShowTarget] = useState(false)
  const [score, setScore] = useState(0)
  const [guessCount, setGuessCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [isGameOver, setIsGameOver] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Any code that requires `window` can go here
    }
  }, []);

  const startGame = useCallback(() => {
    setIsGameStarted(true)
    setTargetLocation(getRandomCoordinates())
    setShowTarget(false)
    setScore(0)
    setGuessCount(0)
    setTimeLeft(TIME_LIMIT)
    setIsGameOver(false)
  }, [])

  const handleGuess = useCallback((lat: number, lng: number) => {
    if (!targetLocation) return;

    const distance = calculateDistance(
      lat, 
      lng, 
      targetLocation[0], 
      targetLocation[1]
    );
    
    // Calculate points based on distance
    // Using exponential decay for scoring - closer guesses get more points
    const points = Math.round(5000 * Math.exp(-distance / 1000));
    
    setScore((prev) => prev + points);
    setShowTarget(true); // Show the guess marker and line
  }, [targetLocation])

  const handleConfirmLocation = useCallback(() => {
    setGuessCount((prev) => prev + 1)
    setShowTarget(true)
    
    // Short delay before next location
    setTimeout(() => {
      setTargetLocation(getRandomCoordinates())
      setShowTarget(false)
      setResetKey((prev) => prev + 1)
    }, 2000)
  }, [])

  // Timer effect
  useEffect(() => {
    if (!isGameStarted || isGameOver) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameOver(true)
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isGameStarted, isGameOver])

  if (!isGameStarted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Time Attack Mode</h1>
        <p>Find as many locations as you can in 2 minutes!</p>
        <Button onClick={startGame}>Start Game</Button>
      </div>
    )
  }

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Game Over!</h1>
        <p>Final Score: {score}</p>
        <p>Locations Found: {guessCount}</p>
        <Button onClick={startGame}>Play Again</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>Score: {score}</div>
        <div>Time Left: {timeLeft}s</div>
        <div>Guesses: {guessCount}</div>
      </div>
      {/* Always show target coordinates when game is active */}
      {targetLocation && (
        <div className="text-center mb-2 p-2 bg-secondary rounded-md">
          <p className="font-medium">Find this location:</p>
          <p>{targetLocation[0].toFixed(4)}°, {targetLocation[1].toFixed(4)}°</p>
        </div>
      )}
      <GameMap
        targetLocation={targetLocation || undefined}
        showTarget={showTarget}
        onGuess={handleGuess}
        onConfirmLocation={handleConfirmLocation}
        resetKey={resetKey}
        isClickable={!showTarget && !isGameOver}
      />
    </div>
  )
} 