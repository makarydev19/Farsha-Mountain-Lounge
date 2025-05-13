// app/api/review/route.ts
import sanityClient from '@/src/libs/sanity'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, message, rating } = await req.json()

  if (!name || !message || !rating) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const result = await sanityClient.create({
      _type: 'review',
      name,
      message,
      rating: Number(rating),
      approved: false
    })

    return NextResponse.json({ success: true, data: result }, { status: 201 })
  } catch (error) {
    console.error('Review submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    )
  }
}
