import { Metadata } from 'next'
import CultureQuestGame from '@/components/game-modes/CultureQuestGame'

export const metadata: Metadata = {
  title: 'Culture Quest - Country Guessing Game',
  description: 'Guess countries based on their culture, food, history, and more!',
}

export default function CultureQuestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8">
      <CultureQuestGame />
    </main>
  )
} 