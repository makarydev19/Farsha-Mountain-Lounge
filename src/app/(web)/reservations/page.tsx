'use client'

import { TextAnimate } from '@/src/components/ui'
import Image from 'next/image'

const page = () => {
  return (
    <section className='h-screen'>
      <main className='relative h-full w-full'>
        <div className='relative h-full w-full'>
          <Image
            className='img'
            src='/assets/BEACHbg.jpg'
            alt='cover'
            width={1000}
            height={1000}
            priority
            loading='eager'
          />

          {/* Overlay */}
          <div className='absolute inset-0 z-10 bg-black/70'></div>

          {/* Text */}
          <div className='absolute top-1/2 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2'>
            <TextAnimate
              className='font-milky text-center text-3xl font-bold text-blue-100 md:text-4xl'
              animation='slideUp'
              by='word'
              duration={1}
              delay={0.5}
            >
              Reservations
            </TextAnimate>
            <TextAnimate
              animation='blurIn'
              by='character'
              duration={1}
              delay={1}
              className='font-milky text-center text-5xl text-nowrap text-blue-300 md:text-8xl'
            >
              Beach Lounge
            </TextAnimate>
            <TextAnimate
              className='font-milky pb-4 text-center text-3xl font-bold text-blue-100 md:text-4xl'
              animation='blurIn'
              by='character'
              duration={1}
              delay={1.5}
            >
              Coming Soon
            </TextAnimate>
          </div>
        </div>
      </main>
    </section>
  )
}

export default page
