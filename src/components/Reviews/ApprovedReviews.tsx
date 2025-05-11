import { getApprovedReviewsQuery } from '@/src/libs/apis'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

export default async function ApprovedReviews() {
  const reviews = await getApprovedReviewsQuery()

  return (
    <section className='relative flex h-[25rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased lg:h-[30rem]'>
      <InfiniteMovingCards items={reviews} direction='right' speed='slow' />
    </section>
  )
}
