"use client";

import { useState, useEffect, useMemo } from "react";
import { Country } from "@/types/country";
import CountrySearch from "@/components/CountrySearch";
import WorldMap from "@/components/map/WorldMap";
import { countryHints } from "@/constants/countryHints";
import { getRandomCountry } from "@/utils/countries";
import { countries } from "@/constants/countries";
import { motion } from "framer-motion";

interface GameState {
  isStarted: boolean;
  hintsRemaining: number;
  startTime: number | null;
  isGameOver: boolean;
  currentHintIndex: number;
  elapsedTime: number;
  isCorrectGuess: boolean;
}

interface GameStats {
  played: number;
  foundPercentage: number;
  currentStreak: number;
  maxStreak: number;
}

interface GameHistory {
  country: string;
  time: string;
  hintsUsed: number;
  isCorrect: boolean;
  hints: string[];
  date: string;
}

interface GuessHistory {
  country: string;
  isCorrect: boolean;
  hints: number;
}

export default function DailyChallengeGame() {
  const [canPlay, setCanPlay] = useState(true);
  const [gameState, setGameState] = useState<GameState>({
    isStarted: false,
    hintsRemaining: 9,
    startTime: null,
    isGameOver: false,
    currentHintIndex: 0,
    elapsedTime: 0,
    isCorrectGuess: false,
  });

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [displayTime, setDisplayTime] = useState("0:00");

  const [stats, setStats] = useState<GameStats>({
    played: 0,
    foundPercentage: 0,
    currentStreak: 0,
    maxStreak: 0,
  });
  const [nextGameTime, setNextGameTime] = useState<string>("");

  const [gameHistory, setGameHistory] = useState<GameHistory | null>(null);

  const [showStatsPopup, setShowStatsPopup] = useState(false);
  const [guessHistory, setGuessHistory] = useState<GuessHistory[]>([]);
  const [points, setPoints] = useState(0);

  const newCountry = getRandomCountry();
  const dailyCountry = useMemo(() => newCountry, []); // TODO: Implement daily selection
  const countryHintList = useMemo(() => {
    const hintSequence = countryHints[dailyCountry.code]?.find(
      (sequence) => sequence.difficulty === "easy"
    );
    return hintSequence?.hints || [];
  }, [dailyCountry]);

  // Check if the user can play
  useEffect(() => {
    const lastPlayedDate = localStorage.getItem("lastPlayedDate");
    const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

    if (lastPlayedDate === today) {
      setCanPlay(false);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState.isStarted && !gameState.isGameOver) {
      timer = setInterval(() => {
        const newElapsedTime = Date.now() - (gameState.startTime || Date.now());
        setDisplayTime(formatTime(newElapsedTime));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.isStarted, gameState.isGameOver, gameState.startTime]);

  useEffect(() => {
    // Load stats from localStorage
    const savedStats = localStorage.getItem("dailyChallengeStats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }

    // Update next game countdown
    const updateCountdown = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const timeLeft = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setNextGameTime(
        `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load game history on mount
  useEffect(() => {
    const lastPlayedDate = localStorage.getItem("lastPlayedDate");
    const today = new Date().toISOString().split("T")[0];
    const savedHistory = localStorage.getItem("dailyChallengeHistory");

    if (lastPlayedDate === today && savedHistory) {
      setCanPlay(false);
      setGameHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleStart = () => {
    setGameState((prev) => ({
      ...prev,
      isStarted: true,
      startTime: Date.now(),
    }));
  };

  const handleMapClick = (countryName: string) => {
    // Find the country object from the name instead of code
    const country = countries.find((c) => c.name === countryName);
    if (country) {
      handleGuess(country);
    }
  };

  const calculatePoints = (timeInSeconds: number, hintsUsed: number) => {
    const basePoints = 100000;
    const timeDeduction = timeInSeconds * 100;
    const hintDeduction = hintsUsed * 5000;
    return Math.max(basePoints - timeDeduction - hintDeduction, 0);
  };

  const handleGuess = (currentCountry: Country | null) => {
    if (!currentCountry || !gameState.isStarted || gameState.isGameOver) return;

    const isCorrect =
      currentCountry.name.toLowerCase() === dailyCountry.name.toLowerCase();
    setSelectedCountry(currentCountry.name);

    // Calculate hintsUsed at the beginning
    const hintsUsed = 10 - gameState.hintsRemaining;

    // Track the guess
    const newGuessHistory = [
      ...guessHistory,
      {
        country: currentCountry.name,
        isCorrect,
        hints: hintsUsed,
      },
    ];
    setGuessHistory(newGuessHistory);

    if (isCorrect) {
      const earnedPoints = calculatePoints(Date.now() - (gameState.startTime || Date.now()), hintsUsed);
      setPoints(earnedPoints);

      const newStats = {
        played: stats.played + 1,
        foundPercentage: Math.round(
          ((stats.played * (stats.foundPercentage / 100) + 1) /
            (stats.played + 1)) *
            100
        ),
        currentStreak: stats.currentStreak + 1,
        maxStreak: Math.max(stats.maxStreak, stats.currentStreak + 1),
      };
      setStats(newStats);
      localStorage.setItem("dailyChallengeStats", JSON.stringify(newStats));

      const history: GameHistory = {
        country: dailyCountry.name,
        time: displayTime,
        hintsUsed: hintsUsed,
        isCorrect: true,
        hints: countryHintList
          .slice(0, gameState.currentHintIndex + 1)
          .map((h) => h.text),
        date: new Date().toISOString().split("T")[0],
      };
      localStorage.setItem("dailyChallengeHistory", JSON.stringify(history));
      localStorage.setItem(
        "lastPlayedDate",
        new Date().toISOString().split("T")[0]
      );

      setGameState((prev) => ({
        ...prev,
        isGameOver: true,
        isCorrectGuess: true,
      }));

      // Show popup on correct guess
      setShowStatsPopup(true);
    } else {
      // Always show next hint when guess is incorrect and hints are available
      if (gameState.currentHintIndex < countryHintList.length - 1) {
        setGameState((prev) => ({
          ...prev,
          hintsRemaining: prev.hintsRemaining - 1,
          currentHintIndex: prev.currentHintIndex + 1,
          isGameOver: prev.hintsRemaining <= 1,
          isCorrectGuess: false,
        }));

        // Show popup if this was the last hint
        if (gameState.hintsRemaining <= 1) {
          const earnedPoints = calculatePoints(Date.now() - (gameState.startTime || Date.now()), 10);
          setPoints(earnedPoints);

          const newStats = {
            played: stats.played + 1,
            foundPercentage: Math.round(
              ((stats.played * (stats.foundPercentage / 100)) /
                (stats.played + 1)) *
                100
            ),
            currentStreak: 0,
            maxStreak: stats.maxStreak,
          };
          setStats(newStats);
          localStorage.setItem("dailyChallengeStats", JSON.stringify(newStats));

          const history: GameHistory = {
            country: dailyCountry.name,
            time: displayTime,
            hintsUsed: 10,
            isCorrect: false,
            hints: countryHintList
              .slice(0, gameState.currentHintIndex + 1)
              .map((h) => h.text),
            date: new Date().toISOString().split("T")[0],
          };
          localStorage.setItem(
            "dailyChallengeHistory",
            JSON.stringify(history)
          );
          localStorage.setItem(
            "lastPlayedDate",
            new Date().toISOString().split("T")[0]
          );

          setShowStatsPopup(true);
        }
      } else {
        // No more hints available
        setGameState((prev) => ({
          ...prev,
          hintsRemaining: 0,
          isGameOver: true,
          isCorrectGuess: false,
        }));
        setShowStatsPopup(true);
      }
    }
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  // Update the WorldMap component to match CultureQuest implementation
  const worldMap = useMemo(
    () => (
      <WorldMap
        selectedCountry={selectedCountry}
        correctCountry={gameState.isGameOver ? dailyCountry.name : null} // Use name instead of code
        onSelectCountry={handleMapClick}
        isGameOver={gameState.isGameOver}
      />
    ),
    [selectedCountry, gameState.isGameOver, dailyCountry]
  );

  const StatsPopup = () => (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl max-w-xl w-full mx-4 text-white relative">
        <button
          onClick={() => {
            setShowStatsPopup(false);
            window.location.reload();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        <h2 className="text-5xl font-bold text-center mb-6">Good Job!</h2>

        <p className="text-xl text-center text-gray-300 mb-8">
          You found {dailyCountry.name} in {displayTime}, using{" "}
          {10 - gameState.hintsRemaining} hints!
        </p>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-1">{stats.played}</div>
            <div className="text-sm text-gray-400">Played</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-1">
              {stats.foundPercentage}%
            </div>
            <div className="text-sm text-gray-400">Found %</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-1">{stats.currentStreak}</div>
            <div className="text-sm text-gray-400">Streak</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-1">{stats.maxStreak}</div>
            <div className="text-sm text-gray-400">Max streak</div>
          </div>
        </div>

        <div className="text-4xl font-bold text-center mb-8">
          {points.toLocaleString()} points
        </div>

        {guessHistory.length > 0 && (
          <div className="border border-gray-800 rounded-lg p-4 mb-8 space-y-2">
            {guessHistory.map((guess, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-gray-300"
              >
                <span>{guess.country}</span>
                <span className="flex gap-1">
                  {Array(guess.hints)
                    .fill("✓")
                    .map((mark, i) => (
                      <span key={i} className="text-emerald-500">
                        {mark}
                      </span>
                    ))}
                </span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => {
            alert("Share functionality coming soon!");
          }}
          className="w-full bg-emerald-500 text-white py-4 rounded-lg text-lg font-semibold 
                     hover:bg-emerald-600 transition-colors"
        >
          SHARE
        </button>
      </div>
    </div>
  );

  if (!canPlay) {
    return (
      <div className="flex w-full max-w-4xl flex-col items-center gap-6 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex w-full justify-between mb-4">
          <span className="text-lg font-semibold text-gray-800">
            Hints Used: {gameHistory?.hintsUsed || 0}
          </span>
          <span className="text-lg font-semibold text-gray-800">
            Time: {gameHistory?.time || "0:00"}
          </span>
        </div>

        <div className="w-full h-[400px] rounded-lg overflow-hidden cursor-pointer shadow-md">
          <WorldMap
            selectedCountry={gameHistory?.country || null}
            correctCountry={gameHistory?.country || null}
            onSelectCountry={() => {}}
            isGameOver={true}
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-800">
            {gameHistory?.isCorrect ? "Good Job!" : "Game Over!"}
          </h2>
          <h1>
            You found {gameHistory?.country} in {gameHistory?.time}, using{" "}
            {gameHistory?.hintsUsed} hints!
          </h1>

          <div className="grid grid-cols-4 gap-8 text-center my-4">
            <div>
              <div className="text-3xl font-bold">{stats.played}</div>
              <div className="text-sm text-gray-600">Played</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.foundPercentage}%</div>
              <div className="text-sm text-gray-600">Found %</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.currentStreak}</div>
              <div className="text-sm text-gray-600">Streak</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.maxStreak}</div>
              <div className="text-sm text-gray-600">Max streak</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 w-full shadow-md">
            <div className="space-y-3">
              {gameHistory?.hints.map((hint, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-md shadow-sm"
                >
                  <span className="font-medium">
                    Hint #{index + 1}: {hint}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            className="rounded-lg bg-green-500 px-6 py-3 text-lg font-semibold text-white hover:bg-green-600"
            onClick={() => {
              alert("Share functionality coming soon!");
            }}
          >
            SHARE
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Try again tomorrow!</p>
          <p className="text-orange-500">New daily game in: {nextGameTime}</p>
        </div>
      </div>
    );
  }

  if (!gameState.isStarted) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold">Daily Challenge</h1>
        <p className="text-lg">
          Guess today&apos;s country with 10 hints. New challenge every day!
        </p>
        <button
          onClick={handleStart}
          className="rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-600"
        >
          Start Challenge
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-6">
      <div className="flex w-full justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-700">
          Hints: {gameState.hintsRemaining}/10
        </span>
        <span className="text-lg font-medium text-gray-700">{displayTime}</span>
      </div>

      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        {worldMap}
      </div>

      <div className="w-full">
        <CountrySearch onSelect={handleGuess} />
      </div>

      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="space-y-2 p-4">
          {gameState.isStarted && countryHintList.length > 0 ? (
            countryHintList
              .slice(0, gameState.currentHintIndex + 1)
              .map((hint, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-medium">
                    Hint #{index + 1}: {hint.text}
                  </span>
                </motion.div>
              ))
          ) : (
            <div className="text-gray-500 text-center py-4">
              No hints available
            </div>
          )}
        </div>
      </div>

      {showStatsPopup && <StatsPopup />}
    </div>
  );
}
