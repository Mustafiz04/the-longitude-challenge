"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import { Button } from "@/components/ui/button";

// Create custom markers using Lucide icons
const createCustomIcon = (color: string, label?: string) => {
  return divIcon({
    className: "custom-icon",
    html: `
      <div class="w-8 h-8 ${color}">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        ${label ? `<div class="marker-label">${label}</div>` : ""}
      </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

const userIcon = createCustomIcon("text-blue-500", "Your guess");
const targetIcon = createCustomIcon("text-red-500", "Target");

interface MapClickHandlerProps {
  onMapClick: (lat: number, lng: number) => void;
  isClickable: boolean;
}

function MapClickHandler({ onMapClick, isClickable }: MapClickHandlerProps) {
  useMapEvents({
    click: (e) => {
      if (!isClickable) return;
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

interface GameMapProps {
  onMarkerPlace?: (lat: number, lng: number) => void;
  onConfirmLocation?: () => void;
  targetLocation?: [number, number];
  showTarget?: boolean;
  timeLimit?: number;
  isClickable?: boolean;
  resetKey?: number;
}

export default function GameMap({
  onMarkerPlace,
  onConfirmLocation,
  targetLocation,
  showTarget = false,
  isClickable = true,
  resetKey = 0,
}: GameMapProps) {
  const [userMarker, setUserMarker] = useState<[number, number] | null>(null);

  const handleMapClick = useCallback(
    (lat: number, lng: number) => {
      setUserMarker([lat, lng]);
      onMarkerPlace?.(lat, lng);
    },
    [onMarkerPlace]
  );

  useEffect(() => {
    setUserMarker(null);
  }, [resetKey]);

  return (
    <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
        <MapClickHandler
          onMapClick={handleMapClick}
          isClickable={isClickable}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userMarker && <Marker position={userMarker} icon={userIcon} />}
        {showTarget && targetLocation && (
          <>
            <Marker position={targetLocation} icon={targetIcon} />
            {userMarker && (
              <Polyline
                positions={[userMarker, targetLocation]}
                color="red"
                dashArray="5, 10"
              />
            )}
          </>
        )}
      </MapContainer>
      {userMarker && !showTarget && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] flex gap-2">
          <Button variant="outline" onClick={() => setUserMarker(null)}>
            Try Again
          </Button>
          <Button onClick={onConfirmLocation}>Confirm Location</Button>
        </div>
      )}
    </div>
  );
}
