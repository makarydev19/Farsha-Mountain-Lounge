'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Seating from '@/public/assets/sitting (2).png'
import Alcohol from '@/public/assets/wine.png'
import WaterFront from '@/public/assets/sunset.png'
import TableService from '@/public/assets/booked.png'
import { TextAnimate } from '@/src/components/ui'

const Services = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: i * 0.3 }
      }))
    } else {
      controls.start({
        y: '100%',
        opacity: 0,
        transition: { duration: 0.5 }
      })
    }
  }, [controls, inView])

  const features = [
    { img: Alcohol, title: 'Full Bar' },
    { img: Seating, title: 'Outdoor Seating' },
    { img: WaterFront, title: 'Waterfront' },
    { img: TableService, title: 'Table Service' }
  ]

  return (
    <section ref={ref} className='py-28'>
      <main className='space-y-12'>
        <div className='relative z-10 mx-auto w-full space-y-3 text-center lg:w-[65%]'>
          <h2 className='text-2xl font-semibold text-red-400 lg:text-3xl'>
            Our Services
          </h2>
          <TextAnimate
            className='font-milky text-3xl lg:text-5xl'
            animation='blurInUp'
            as={'h1'}
            delay={0.5}
          >
            Where comfort meets thoughtful hospitality.
          </TextAnimate>
        </div>
        <div className='flex w-full flex-col items-center justify-evenly gap-12 lg:flex-row'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center space-y-2 text-center'
              animate={controls}
              initial={{ y: '-100%', opacity: 0 }}
              custom={index}
            >
              <div className='flex h-24 items-center justify-center'>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={70}
                  height={70}
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  )
}

export default Services
