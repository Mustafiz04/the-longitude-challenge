export interface DailyChallengeStats {
  userId?: string;  // Optional - will be null for anonymous users
  played: number;
  foundPercentage: number;
  currentStreak: number;
  maxStreak: number;
}

export interface DailyChallengeHistory {
  userId?: string;  // Optional - will be null for anonymous users
  country: string;
  time: string;
  hintsUsed: number;
  isCorrect: boolean;
  hints: string[];
  date: string;
  guessedCountries: { [key: string]: boolean };
}

export interface LastPlayedDate {
  userId?: string;  // Optional - will be null for anonymous users
  date: string;
} 