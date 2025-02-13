'use client'

import { useState, useEffect } from 'react'
import { Country } from '@/types/country'
import { getAllCountries } from '../constants/countries'

interface CountrySearchProps {
  onSelect: (country: Country | null) => void
}

export default function CountrySearch({ onSelect }: CountrySearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    setCountries(getAllCountries())
  }, [])

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredCountries(filtered)
      setIsDropdownOpen(true)
    } else {
      setFilteredCountries([])
      setIsDropdownOpen(false)
    }
  }, [searchTerm, countries])

  const handleSelect = (country: Country) => {
    setSearchTerm('')  // Clear the search term
    setIsDropdownOpen(false)
    onSelect(country)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredCountries.length > 0) {
      handleSelect(filteredCountries[0])
    }
  }

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full rounded-lg border p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {isDropdownOpen && filteredCountries.length > 0 && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border bg-white shadow-lg">
          {filteredCountries.map((country) => (
            <button
              key={country.code}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleSelect(country)}
            >
              {country.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 