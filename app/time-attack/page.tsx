import { Metadata } from 'next'
import TimeAttackGame from '@/components/game-modes/TimeAttackGame'
import GameHeader from "@/components/layout/GameHeader";

export const metadata: Metadata = {
  title: 'Time Attack - Longitude Challenge',
  description: 'Guess as many locations as possible within the time limit!',
}

export default function TimeAttackPage() {
  return (
    <main className="space-y-4">
      <GameHeader title="Time Attack Mode" />
      <div className="container mx-auto p-4 space-y-4 max-w-6xl">
        <TimeAttackGame />
      </div>
    </main>
  )
} 