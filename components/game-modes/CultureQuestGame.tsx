"use client";

import { useState, useEffect, useCallback } from "react";
import GameHeader from "../layout/GameHeader";
import { Country } from "@/types/country";
import { getRandomCountry } from "@/utils/countries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, AlertCircle, Heart, ArrowRight } from "lucide-react";

interface Hint {
  text: string;
  points: number;
}

export default function CultureQuestGame() {
  const [country, setCountry] = useState<Country | null>(null);
  const [score, setScore] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [hints, setHints] = useState<Hint[]>([]);
  const [guess, setGuess] = useState("");
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const startNewGame = useCallback(() => {
    const newCountry = getRandomCountry();
    setCountry(newCountry);
    setScore(100);
    setGameOver(false);
    setCurrentHintIndex(0);
    setHints(generateHints(newCountry));
    setLives(3);
    setGuess("");
    setMessage(null);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const generateHints = (country: Country) => {
    return [
      {
        text: `This country's flag has ${country.flagColors.length} colors`,
        points: 1,
      },
      {
        text: `The flag colors include: ${country.flagColors.join(", ")}`,
        points: 3,
      },
      { text: `The capital city is ${country.capital}`, points: 5 },
      {
        text: `Famous cuisine includes: ${country.cuisine.join(", ")}`,
        points: 7,
      },
      { text: `Popular sports: ${country.sports.join(", ")}`, points: 10 },
      { text: `Famous landmarks: ${country.landmarks.join(", ")}`, points: 15 },
      { text: `Historical events: ${country.historicalEvents[0]}`, points: 20 },
      {
        text: `Famous personalities: ${country.famousPersonalities.join(", ")}`,
        points: 20,
      },
      {
        text: `Cultural traditions: ${country.traditions.join(", ")}`,
        points: 20,
      },
      { text: `This country is located in ${country.continent}`, points: 20 },
    ];
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guess.trim()) return;

    const isCorrect = guess.toLowerCase() === country?.name.toLowerCase();

    if (isCorrect) {
      setGameOver(true);
      setMessage({
        text: `Congratulations! You found ${country.name} with ${score} points!`,
        type: "success",
      });
    } else {
      const pointsToDeduct = hints[currentHintIndex].points;
      setScore((prev) => Math.max(0, prev - pointsToDeduct));
      setLives((prev) => prev - 1);

      if (lives <= 1) {
        setGameOver(true);
        setMessage({
          text: `Game Over! The country was ${country?.name}`,
          type: "error",
        });
      } else {
        setMessage({
          text: `Wrong guess! ${lives - 1} ${
            lives - 1 === 1 ? "try" : "tries"
          } remaining`,
          type: "error",
        });
      }
    }
    setGuess("");
  };

  const showNextHint = () => {
    if (currentHintIndex < hints.length - 1) {
      setCurrentHintIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <GameHeader title="Culture Quest" />

      <Card className="mt-8 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">Score: {score}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">{lives}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Current Hints:</h3>
            <div className="space-y-3">
              {hints.slice(0, currentHintIndex + 1).map((hint, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-md shadow-sm"
                >
                  <span className="font-medium">{hint.text}</span>
                  <span className="text-sm text-red-500">
                    (-{hint.points} points)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : message.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              <div className="flex items-center gap-2">
                {message.type === "error" && (
                  <AlertCircle className="h-5 w-5" />
                )}
                {message.text}
              </div>
            </div>
          )}

          {!gameOver && (
            <form onSubmit={handleGuess} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Enter country name..."
                  className="flex-1"
                />
                <Button type="submit">Guess</Button>
              </div>

              <Button
                type="button"
                onClick={showNextHint}
                disabled={currentHintIndex === hints.length - 1}
                variant="outline"
                className="w-full"
              >
                Next Hint <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          {gameOver && (
            <Button onClick={startNewGame} className="w-full">
              Play Again
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
