import React from 'react'
import ApprovedReviews from '@/src/components/Reviews/ApprovedReviews'
import ReviewForm from '@/src/components/Reviews/ReviewForm'
import { TextAnimate } from '@/src/components/ui'

const reviews = () => {
  return (
    <section className='py-14 lg:py-32'>
      <main>
        <div className='relative z-10 mx-auto w-full space-y-3 text-center lg:w-[65%]'>
          <h2 className='text-2xl font-semibold text-red-400 lg:text-3xl'>
            Our Reviews
          </h2>
          <TextAnimate
            className='font-milky text-3xl lg:text-5xl'
            animation='blurInUp'
            as={'h1'}
            delay={0.5}
          >
            What our clients say
          </TextAnimate>
        </div>
        <ApprovedReviews />
        <div className='mb-6 px-5 text-center lg:px-20'>
          <TextAnimate
            className='font-milky text-3xl lg:text-5xl'
            animation='blurInUp'
            as={'h1'}
            delay={0.5}
          >
            We&apos;d love your feedback!
          </TextAnimate>
          <p className='mx-auto max-w-md text-base text-gray-400'>
            Your review helps others and helps us grow.
          </p>
        </div>
        <ReviewForm />
      </main>
    </section>
  )
}

export default reviews
