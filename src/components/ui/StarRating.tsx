// components/ui/StarRating.tsx
'use client'

type StarRatingProps = {
  value: number
  onChange: (value: number) => void
}

export default function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className='flex gap-1 text-yellow-400'>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type='button'
          onClick={() => onChange(star)}
          className={`text-4xl ${value >= star ? 'text-yellow-400' : 'text-gray-400'}`}
        >
          ★
        </button>
      ))}
    </div>
  )
}
