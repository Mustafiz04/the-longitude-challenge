"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, } from "lucide-react";
import { useState } from "react";

interface GameHeaderProps {
  title: string;
}

const gameModes = [
  { name: 'Classic', path: '/play' },
  { name: 'Time Attack', path: '/time-attack' },
  { name: 'Culture Quest', path: '/culture-quest' },
]

export default function GameHeader({ title }: GameHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="md:flex gap-4">
          {gameModes.map((mode) => (
            <Link key={mode.name} href={mode.path} passHref>
              <Button variant="link">{mode.name}</Button>
            </Link>
          ))}
        </div>
        {menuOpen && (
          <div className="absolute bg-white shadow-md rounded-md mt-2 md:hidden z-10">
            {gameModes.map((mode) => (
              <Link key={mode.name} href={mode.path} passHref>
                <Button 
                  variant="link" 
                  onClick={() => setMenuOpen(false)} 
                  className="block w-full text-left p-2 hover:bg-gray-100 transition duration-200"
                >
                  {mode.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 