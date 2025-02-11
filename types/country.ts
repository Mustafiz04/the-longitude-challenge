export interface Country {
  name: string
  code: string
  flagColors: string[]
  capital: string
  cuisine: string[]
  sports: string[]
  landmarks: string[]
  historicalEvents: string[]
  famousPersonalities: string[]
  traditions: string[]
  continent: string
  region?: string
  subregion?: string
  population?: number
  area?: number
  languages?: string[]
  landlocked?: boolean
  currency?: {
    code: string
    name: string
    symbol: string
  }
  borders?: string[]
} 