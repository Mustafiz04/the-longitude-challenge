import { Country } from '@/types/country'

const countries: Country[] = [
  {
    name: 'France',
    code: 'FR',
    flagColors: ['blue', 'white', 'red'],
    capital: 'Paris',
    cuisine: ['Croissants', 'Baguettes', 'Coq au Vin'],
    sports: ['Football', 'Rugby', 'Cycling'],
    landmarks: ['Eiffel Tower', 'Louvre Museum', 'Palace of Versailles'],
    historicalEvents: ['French Revolution (1789)', 'Napoleon Era', 'Liberation of Paris (1944)'],
    famousPersonalities: ['Napoleon Bonaparte', 'Marie Curie', 'Victor Hugo'],
    traditions: ['Bastille Day', 'Wine Making', 'Fashion Week'],
    continent: 'Europe',
    // ... other properties
  },
  // Add more countries here
]

export const getRandomCountry = (): Country => {
  const randomIndex = Math.floor(Math.random() * countries.length)
  return countries[randomIndex]
} 