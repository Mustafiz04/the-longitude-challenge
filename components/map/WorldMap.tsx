"use client";

import dynamic from 'next/dynamic';
// Dynamically import Leaflet with no SSR
const LeafletMap = dynamic(
  () => import('./LeafletMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] rounded-lg border overflow-hidden bg-gray-100 flex items-center justify-center">
        Loading map...
      </div>
    )
  }
);

interface WorldMapProps {
  correctCountry: string | null;
  onSelectCountry: (countryName: string) => void;
  isGameOver: boolean;
  guessedCountries: { [key: string]: boolean };
}

export default function WorldMap(props: WorldMapProps) {
  return <LeafletMap {...props} />;
} 