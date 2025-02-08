"use client";

import GameMap from "@/components/map/GameMap";
import { useState } from "react";
import {
  getRandomLocation,
  formatCoordinates,
  calculateDistance,
  getHint,
} from "@/utils/coordinates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { MapPin, HelpCircle } from "lucide-react";
import { Hint } from "@/utils/coordinates";
import Link from "next/link";

export default function PlayPage() {
  const [score, setScore] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(getRandomLocation());
  const [showTarget, setShowTarget] = useState(false);
  const [roundComplete, setRoundComplete] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const [tempMarker, setTempMarker] = useState<[number, number] | null>(null);
  const [isMapClickable, setIsMapClickable] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [hints, setHints] = useState<Hint[]>([]);
  const [hintsRemaining, setHintsRemaining] = useState(3);

  const handleMarkerPlace = (lat: number, lng: number) => {
    setTempMarker([lat, lng]);
  };

  const handleConfirmLocation = () => {
    if (!tempMarker) return;

    const dist = calculateDistance(
      tempMarker[0],
      tempMarker[1],
      currentLocation.coordinates[0],
      currentLocation.coordinates[1]
    );
    setDistance(dist);
    setShowTarget(true);
    setRoundComplete(true);
    setIsMapClickable(false);

    // Calculate score based on distance
    let newRoundScore = 0;
    if (dist <= 5) newRoundScore = 100;
    else if (dist <= 50) newRoundScore = 80;
    else if (dist <= 200) newRoundScore = 60;
    else if (dist <= 500) newRoundScore = 30;
    else newRoundScore = 10;

    setRoundScore(newRoundScore);
    setScore((prevScore) => prevScore + newRoundScore);
  };

  const handleHint = () => {
    if (hintsRemaining <= 0) return;

    const newHint = getHint(currentLocation, hints);
    if (newHint) {
      setHints((prev) => [...prev, newHint]);
      setHintsRemaining((prev) => prev - 1);
    }
  };

  const startNewRound = () => {
    setCurrentLocation(getRandomLocation());
    setShowTarget(false);
    setRoundComplete(false);
    setDistance(null);
    setTempMarker(null);
    setIsMapClickable(true);
    setResetKey((prev) => prev + 1);
    setRoundScore(0);
    setHints([]);
    setHintsRemaining(3);
  };

  return (
    <main className="container mx-auto p-4 space-y-4 max-w-6xl">
      <div className="flex">
        <Link href="/" passHref>
          <Button variant="outline" className="mb-4">
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">The Longitude Challenge</h1>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Badge variant="secondary" className="text-lg px-4 py-1">
            Total Score: {score}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Target Location
            </CardTitle>
            <div className="flex items-center gap-2">
              {!roundComplete && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleHint}
                  disabled={hintsRemaining <= 0}
                  className="flex items-center gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  Hints: {hintsRemaining}
                </Button>
              )}
              {roundComplete && (
                <Badge variant={roundScore > 50 ? "success" : "destructive"}>
                  {roundScore} points
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-mono">
            {formatCoordinates(...currentLocation.coordinates)}
          </p>
          {hints.length > 0 && (
            <div className="mt-2 space-y-1">
              {hints.map((hint, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  Hint {index + 1}: {hint.text}
                </p>
              ))}
            </div>
          )}
          {distance && (
            <>
              <Separator className="my-2" />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Distance from target: {distance.toFixed(2)} km
                </p>
                <Progress
                  value={Math.max(0, 100 - distance / 10)}
                  className="h-2"
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <GameMap
        onMarkerPlace={handleMarkerPlace}
        onConfirmLocation={handleConfirmLocation}
        targetLocation={currentLocation.coordinates}
        showTarget={showTarget}
        isClickable={isMapClickable}
        resetKey={resetKey}
      />

      {roundComplete && (
        <div className="flex justify-center">
          <Button onClick={startNewRound} size="lg" className="px-8">
            Next Round
          </Button>
        </div>
      )}
    </main>
  );
}
