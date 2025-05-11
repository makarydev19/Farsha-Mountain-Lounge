import { Review, ReviewCardItem } from '../models/review'
import sanityClient from './sanity'
import * as queries from './sanityQueries'

export async function getUserData(userId: string) {
  const result = await sanityClient.fetch(
    queries.getUserDataQuery,
    { userId },
    { cache: 'no-cache' }
  )

  return result
}

export async function getApprovedReviewsQuery(): Promise<ReviewCardItem[]> {
  const reviews = await sanityClient.fetch(queries.getApprovedReviewsQuery, {})

  return reviews.map((review: Review) => ({
    quote: review.message,
    name: review.name
  }))
}
