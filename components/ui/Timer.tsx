export default function Timer({ seconds }: { seconds: number }) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return (
    <div className="text-2xl font-mono">
      {String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}
    </div>
  )
} 