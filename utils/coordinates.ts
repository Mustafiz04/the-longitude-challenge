interface Location {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  continent: Continent;
  country: string;
  landmarks: string[];
}

type Continent = 
  | "Europe" 
  | "North America" 
  | "South America" 
  | "Asia" 
  | "Africa" 
  | "Oceania";

// Famous locations for initial game data
export const FAMOUS_LOCATIONS: Location[] = [
  {
    name: "Paris, France",
    coordinates: [48.8566, 2.3522],
    continent: "Europe",
    country: "France",
    landmarks: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  },
  {
    name: "New York City, USA",
    coordinates: [40.7128, -74.006],
    continent: "North America",
    country: "United States",
    landmarks: ["Statue of Liberty", "Central Park", "Empire State Building"],
  },
  {
    name: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    continent: "Asia",
    country: "Japan",
    landmarks: ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple"],
  },
  {
    name: "Sydney, Australia",
    coordinates: [-33.8688, 151.2093],
    continent: "Oceania",
    country: "Australia",
    landmarks: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"],
  },
  {
    name: "Cairo, Egypt",
    coordinates: [30.0444, 31.2357],
    continent: "Africa",
    country: "Egypt",
    landmarks: ["Great Pyramids", "Sphinx", "Nile River"],
  },
  {
    name: "Rio de Janeiro, Brazil",
    coordinates: [-22.9068, -43.1729],
    continent: "South America",
    country: "Brazil",
    landmarks: [
      "Christ the Redeemer",
      "Copacabana Beach",
      "Sugarloaf Mountain",
    ],
  },
  {
    name: "London, UK",
    coordinates: [51.5074, -0.1278],
    continent: "Europe",
    country: "United Kingdom",
    landmarks: ["Big Ben", "Tower Bridge", "Buckingham Palace"],
  },
  {
    name: "Moscow, Russia",
    coordinates: [55.7558, 37.6173],
    continent: "Europe",
    country: "Russia",
    landmarks: ["Red Square", "Saint Basil's Cathedral", "Kremlin"],
  },
  {
    name: "Cape Town, South Africa",
    coordinates: [-33.9249, 18.4241],
    continent: "Africa",
    country: "South Africa",
    landmarks: ["Table Mountain", "Robben Island", "Cape of Good Hope"],
  },
  {
    name: "Dubai, UAE",
    coordinates: [25.2048, 55.2708],
    continent: "Asia",
    country: "United Arab Emirates",
    landmarks: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
  },
];

export function getRandomLocation(): Location {
  const randomIndex = Math.floor(Math.random() * FAMOUS_LOCATIONS.length);
  return FAMOUS_LOCATIONS[randomIndex];
}

export function formatCoordinates(lat: number, lng: number): string {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(
    4
  )}° ${lngDir}`;
}

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

export interface Hint {
  type: "continent" | "country" | "landmark";
  text: string;
}

export function getHint(location: Location, usedHints: Hint[]): Hint | null {
  const availableHints: Hint[] = [
    { type: "continent" as const, text: `This location is in ${location.continent}` },
    { type: "country" as const, text: `This location is in ${location.country}` },
    ...location.landmarks.map(landmark => ({
      type: "landmark" as const,
      text: `Near ${landmark}`
    }))
  ];

  const unusedHints = availableHints.filter(
    (hint) =>
      !usedHints.some(
        (used) => used.type === hint.type && used.text === hint.text
      )
  );

  if (unusedHints.length === 0) return null;
  return unusedHints[Math.floor(Math.random() * unusedHints.length)];
}
