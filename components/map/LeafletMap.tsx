"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon issue
interface IconDefaultPrototype extends L.Icon.Default {
  _getIconUrl?: string;
}

delete (L.Icon.Default.prototype as IconDefaultPrototype)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LeafletMapProps {
  selectedCountry: string | null;
  correctCountry: string | null;
  onSelectCountry: (countryName: string) => void;
  isGameOver: boolean;
}

export default function LeafletMap({
  selectedCountry,
  correctCountry,
  onSelectCountry,
  isGameOver,
}: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current).setView([20, 0], 2);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    let isMounted = true;  // Add mount check flag

    fetch('/world-countries.json')
      .then(response => response.json())
      .then(data => {
        if (!isMounted) return;  // Check if still mounted

        if (geoJsonLayerRef.current) {
          geoJsonLayerRef.current.remove();
        }

        const geoJsonLayer = L.geoJSON(data, {
          style: (feature) => ({
            fillColor: getCountryColor(feature?.properties?.name),
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
          }),
          onEachFeature: (feature, layer) => {
            if (feature.properties?.name) {
              layer.on({
                mouseover: (e) => {
                  const l = e.target;
                  l.setStyle({
                    fillOpacity: 0.9,
                    weight: 2
                  });
                },
                mouseout: (e) => {
                  const l = e.target;
                  l.setStyle({
                    fillOpacity: 0.7,
                    weight: 1
                  });
                },
                click: () => {
                  if (!isGameOver) {
                    onSelectCountry(feature.properties.name);
                  }
                }
              });
              
              layer.bindTooltip(feature.properties.name, {
                permanent: false,
                direction: 'center'
              });
            }
          }
        });

        if (isMounted && map) {  // Check both mount status and map existence
          geoJsonLayer.addTo(map);
          geoJsonLayerRef.current = geoJsonLayer;
        }
      })
      .catch(error => {
        if (isMounted) {
          console.error('Error loading GeoJSON:', error);
        }
      });

    return () => {
      isMounted = false;  // Clean up mount flag
      if (geoJsonLayerRef.current) {
        geoJsonLayerRef.current.remove();
        geoJsonLayerRef.current = null;
      }
    };
  }, [isGameOver, onSelectCountry]);

  const getCountryColor = (countryName: string | undefined) => {
    if (!countryName) return '#CCCCCC';
    
    if (correctCountry) {
      if (countryName === correctCountry) return '#4CAF50';
      if (countryName === selectedCountry) return '#F44336';
      return '#CCCCCC';
    }
    
    if (countryName === selectedCountry) return '#2196F3';
    return '#CCCCCC';
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-[400px] rounded-lg border overflow-hidden z-0"
    />
  );
} 