'use client'

import { countries } from "@/constants/countries"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CountryDetailsProps {
  countryCode: string
}

export function CountryDetails({ countryCode }: CountryDetailsProps) {
  const country = countries.find((c) => c.code === countryCode)

  if (!country) {
    return <div>Country not found</div>
  }

  const formatNumber = (num: number | undefined) => {
    return num?.toLocaleString() || 'N/A'
  }

  // Function to get country flag emoji
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  const details = [
    { label: "Capital", value: country.capital || 'N/A' },
    { label: "Region", value: country.region || 'N/A' },
    { label: "Subregion", value: country.subregion || 'N/A' },
    { label: "Population", value: formatNumber(country.population) },
    { label: "Area", value: country.area ? `${formatNumber(country.area)} km²` : 'N/A' },
    { label: "Languages", value: Array.isArray(country.languages) ? country.languages.join(", ") : 'N/A' },
    { label: "Currency", value: country.currency?.name + " (" + country.currency?.symbol + ")" || 'N/A' },
    { label: "Landlocked", value: country.landlocked ? "Yes" : "No" },
    { 
      label: "Borders", 
      value: Array.isArray(country.borders) && country.borders.length > 0 
        ? country.borders.join(", ") 
        : 'None' 
    },
  ]

  return (
    <ScrollArea className="h-full mt-6">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-6xl">{getFlagEmoji(country.code)}</span>
        <div>
          <h2 className="text-2xl font-bold">{country.name}</h2>
          <p className="text-muted-foreground">{country.name}</p>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {details.map((detail) => (
              <div key={detail.label} className="grid grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">
                  {detail.label}
                </div>
                <div className="col-span-2">{detail.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  )
} 