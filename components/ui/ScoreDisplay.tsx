export default function ScoreDisplay({ 
  score, 
  locations 
}: { 
  score: number
  locations: number 
}) {
  return (
    <div className="text-right">
      <div className="text-2xl font-bold">{score} points</div>
      <div className="text-sm text-gray-600">
        Locations guessed: {locations}
      </div>
    </div>
  )
} 