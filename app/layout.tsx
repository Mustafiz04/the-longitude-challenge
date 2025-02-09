import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/map.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Longitude Challenge',
  description: 'Test your geography knowledge with coordinates!',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
