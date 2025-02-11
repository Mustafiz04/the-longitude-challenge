'use client'

import { Card } from "@/components/ui/card"
import { countries } from "@/constants/countries"
import { CountryDetails } from "@/components/countries/CountryDetails"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CountriesPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [continentFilter, setContinentFilter] = useState<string>('all')
  const [populationFilter, setPopulationFilter] = useState<string>('all')
  const [regionFilter, setRegionFilter] = useState<string>('all')
  const [currencyFilter, setCurrencyFilter] = useState<string>('all')

  // Get unique values for filters
  const continents = Array.from(new Set(countries.map(country => country.continent))).sort()
  const regions = Array.from(new Set(countries.map(country => country.region).filter(Boolean))).sort()
  const currencies = Array.from(
    new Set(
      countries
        .filter(country => country.currency?.code)
        .map(country => country.currency!.code)
    )
  ).sort()

  const populationRanges = [
    { label: 'Less than 1M', value: 'lt1m', min: 0, max: 1_000_000 },
    { label: '1M - 10M', value: '1m-10m', min: 1_000_000, max: 10_000_000 },
    { label: '10M - 50M', value: '10m-50m', min: 10_000_000, max: 50_000_000 },
    { label: '50M - 100M', value: '50m-100m', min: 50_000_000, max: 100_000_000 },
    { label: 'Over 100M', value: 'gt100m', min: 100_000_000, max: Infinity },
  ]

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesContinent = continentFilter === 'all' || country.continent === continentFilter
    const matchesRegion = regionFilter === 'all' || country.region === regionFilter
    const matchesCurrency = currencyFilter === 'all' || country.currency?.code === currencyFilter
    
    let matchesPopulation = true
    if (populationFilter !== 'all' && country.population) {
      const range = populationRanges.find(r => r.value === populationFilter)
      if (range) {
        matchesPopulation = country.population >= range.min && country.population < range.max
      }
    }

    return matchesSearch && matchesContinent && matchesRegion && matchesCurrency && matchesPopulation
  })

  // Function to get country flag emoji
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Countries of the World</h1>
        <p className="text-muted-foreground">
          Explore information about countries, their flags, capitals, and more
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        <Input
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <Select value={continentFilter} onValueChange={setContinentFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Select continent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Continents</SelectItem>
            {continents.map((continent) => (
              <SelectItem key={continent} value={continent}>
                {continent}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={regionFilter} onValueChange={setRegionFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            {regions.map((region) => (
              <SelectItem key={region} value={region || ''}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={populationFilter} onValueChange={setPopulationFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Population range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Populations</SelectItem>
            {populationRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={currencyFilter} onValueChange={setCurrencyFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Currencies</SelectItem>
            {currencies.map((currency) => (
              <SelectItem key={currency} value={currency}>
                {currency}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="h-[calc(100vh-300px)] rounded-md border p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredCountries.map((country) => (
            <Card
              key={country.code}
              className={`p-4 cursor-pointer transition-colors hover:bg-secondary/50`}
              onClick={() => setSelectedCountry(country.code)}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getFlagEmoji(country.code)}</span>
                <span className="font-medium">{country.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Sheet open={selectedCountry !== null} onOpenChange={() => setSelectedCountry(null)}>
        <SheetContent side="right" className="w-full sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Country Details</SheetTitle>
          </SheetHeader>
          {selectedCountry && <CountryDetails countryCode={selectedCountry} />}
        </SheetContent>
      </Sheet>
    </div>
  )
} 