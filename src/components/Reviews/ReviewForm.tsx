'use client'

import { Field } from '@/types/types'
import ReusableForm from '../ui/ReusableForm'

const fields: Field[] = [
  {
    id: 'message',
    label: 'Your Review',
    type: 'textarea',
    placeholder: 'Write your review here...',
    required: true
  },
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true
  }
]

export default function ReviewForm() {
  const handleSubmit = async (values: Record<string, string>) => {
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || 'Submission failed')
    }
  }

  return (
    <section className='relative mx-auto w-[90%] self-center lg:w-3/5'>
      <ReusableForm
        fields={fields}
        onSubmit={handleSubmit}
        submitText='Submit Review'
        successMessage='Review submitted. Awaiting approval.'
        errorMessage='Submission failed. Please try again.'
      />
    </section>
  )
}
