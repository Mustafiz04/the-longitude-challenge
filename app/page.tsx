import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Explore the World with GeoQuiz
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Test your geography knowledge, learn about countries, and challenge yourself with our interactive quizzes
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/play">Start Playing</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/countries">Explore Countries</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">🎮 Interactive Games</h3>
                <p className="text-sm text-muted-foreground">
                  Challenge yourself with various geography quizzes and games
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">🗺️ Country Explorer</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about countries, their flags, capitals, and more
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">📊 Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your learning journey and improve your geography knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
