import { Metadata } from 'next'
import DailyChallengeGame from '@/components/game-modes/DailyChallengeGame'

export const metadata: Metadata = {
  title: 'Daily Challenge - Country Guessing Game',
  description: 'Daily country guessing challenge with 10 hints. New challenge every day!',
}

export default function DailyChallengePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8">
      <DailyChallengeGame />
    </main>
  )
} 