export function calculateScore(
  guessedLat: number,
  guessedLng: number,
  actualLat: number,
  actualLng: number
): number {
  // Calculate distance using the Haversine formula
  const R = 6371 // Earth's radius in kilometers
  const dLat = toRad(actualLat - guessedLat)
  const dLon = toRad(actualLng - guessedLng)
  const lat1 = toRad(guessedLat)
  const lat2 = toRad(actualLat)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c

  // Score calculation based on distance
  if (distance <= 5) return 100 // Perfect score within 5km
  if (distance <= 50) return Math.floor(90 - (distance - 5) * 0.2) // 80-90 points
  if (distance <= 200) return Math.floor(70 - (distance - 50) * 0.133) // 50-70 points
  if (distance <= 500) return Math.floor(40 - (distance - 200) * 0.1) // 10-40 points
  return 0 // Way off

}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180)
} 