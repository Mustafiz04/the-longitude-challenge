"use client";

import { useEffect, useRef, useState } from 'react';
import { MapContainer, GeoJSON, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Feature } from 'geojson';
import { Layer, LeafletMouseEvent } from 'leaflet';
import worldGeoData from '@/public/world-countries.json';

interface WorldMapProps {
  selectedCountry: string | null;
  correctCountry: string | null;
  onSelectCountry: (countryName: string) => void;
  isGameOver: boolean;
}

export default function WorldMap({ 
  selectedCountry, 
  correctCountry, 
  onSelectCountry, 
  isGameOver 
}: WorldMapProps) {
  const geoJsonRef = useRef(null);
  const [incorrectSelections, setIncorrectSelections] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCountry && selectedCountry !== correctCountry) {
      setIncorrectSelections(prev => [...prev, selectedCountry]);
    }
  }, [selectedCountry, correctCountry]);

  useEffect(() => {
    if (!isGameOver) {
      setIncorrectSelections([]);
    }
  }, [isGameOver]);

  // Style for each country
  const getCountryStyle = (countryName: string) => {
    if (countryName === correctCountry) {
      return {
        fillColor: '#4ade80', // green for correct
        weight: 1,
        opacity: 1,
        color: '#666',
        fillOpacity: 0.7
      };
    }

    if (incorrectSelections.includes(countryName)) {
      return {
        fillColor: '#ef4444', // red for wrong selection
        weight: 1,
        opacity: 1,
        color: '#666',
        fillOpacity: 0.7
      };
    }

    return {
      fillColor: '#cccccc',
      weight: 1,
      opacity: 1,
      color: '#666',
      fillOpacity: 0.7
    };
  };

  const onEachFeature = (feature: Feature, layer: Layer) => {
    // Add hover effect
    layer.on({
      mouseover: (e: LeafletMouseEvent) => {
        const layer = e.target;
        layer.setStyle({
          fillOpacity: 0.9,
          weight: 2
        });
      },
      mouseout: (e: LeafletMouseEvent) => {
        const layer = e.target;
        layer.setStyle({
          fillOpacity: 0.7,
          weight: 1
        });
      },
      click: () => {
        if (!isGameOver && feature.properties?.name) {
          onSelectCountry(feature.properties.name);
        }
      }
    });

    // Add tooltip
    if (feature.properties?.name) {
      layer.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: 'center',
        className: 'country-tooltip'
      });
    }
  };

  return (
    <div className="w-full h-[400px] relative overflow-hidden rounded-lg border">
      <MapContainer
        center={[20, 0]}
        zoom={1}
        minZoom={1}
        maxZoom={5}
        scrollWheelZoom={true}
        dragging={true}
        zoomControl={false}
        style={{ height: '100%', width: '100%', background: '#1f2937' }}
      >
        <ZoomControl position="bottomright" />
        <GeoJSON
          ref={geoJsonRef}
          data={worldGeoData as GeoJSON.FeatureCollection}
          style={(feature) => 
            getCountryStyle(feature?.properties?.name || '')
          }
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  );
} 