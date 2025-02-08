import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, MapPin, Trophy, Brain } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center gap-8 text-center">
        <div className="space-y-4">
          <div className="relative inline-block">
            <Globe className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse" />
            <div className="absolute -top-2 -right-2">
              <MapPin className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Longitude Challenge
          </h1>
          <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
            Test your geography knowledge with an engaging coordinate-guessing game. How well do you know your world?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/play">
            <Button size="lg" className="text-lg px-8">
              Play Now
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8">
            How to Play
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-lg">Precise Coordinates</h3>
                <p className="text-sm text-muted-foreground">
                  Place markers on exact coordinates and test your geographic precision
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Brain className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-lg">Strategic Hints</h3>
                <p className="text-sm text-muted-foreground">
                  Use helpful hints about continents, countries, and landmarks
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Trophy className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-lg">Score Points</h3>
                <p className="text-sm text-muted-foreground">
                  Earn points based on the accuracy of your guesses
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Longitude Challenge. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
