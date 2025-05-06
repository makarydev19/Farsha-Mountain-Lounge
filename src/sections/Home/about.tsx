'use client'

import { TextAnimate } from '@/src/components/ui/TextAnimate'
import { useWindowSize } from '@/src/hooks/useWindowSize'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const images = [
  '/assets/gallery-13.jpg',
  '/assets/IMG22.jpg',
  '/assets/gallery-12.jpg',
  '/assets/gallery-5.jpg',
  '/assets/farshaLounge8.jpg',
  '/assets/IMG11.jpg',
  '/assets/farshaLounge6.jpg'
]

export default function AboutUsSection() {
  const ref = useRef(null)
  const { width } = useWindowSize()
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Determine spacing based on screen width
  const xGap = width > 1024 ? 150 : width > 768 ? 100 : 60
  const yCurve = width > 1024 ? 100 : width > 768 ? 70 : 40

  const positions = [
    { x: -3 * xGap, y: -yCurve },
    { x: -2 * xGap, y: -yCurve * 0.7 },
    { x: -1 * xGap, y: -yCurve * 0.4 },
    { x: 0, y: 0 },
    { x: 1 * xGap, y: -yCurve * 0.4 },
    { x: 2 * xGap, y: -yCurve * 0.7 },
    { x: 3 * xGap, y: -yCurve }
  ]

  return (
    <section className='relative flex flex-col items-center justify-center overflow-hidden px-5 py-20 lg:px-20'>
      {/* Centered Header */}
      <div
        ref={ref}
        className='relative z-10 mx-auto w-full space-y-3 text-center lg:w-[65%]'
      >
        <h2 className='text-3xl font-semibold text-red-400'>About Us</h2>
        <TextAnimate
          className='font-milky text-3xl lg:text-5xl'
          animation='blurInUp'
          as={'h1'}
        >
          Farsha brings you along a journey of original antique pieces collected
          in the years.
        </TextAnimate>
      </div>

      {/* Container to hold all images with 3D perspective */}
      <div
        className='relative flex h-[300px] w-full items-center justify-center lg:h-[500px]'
        style={{ perspective: '1000px' }}
      >
        {images.map((src, idx) => {
          const isCenterImage = idx === 3

          return (
            <motion.img
              key={idx}
              src={src}
              alt={`Image ${idx}`}
              style={{
                zIndex: isCenterImage ? 100 : 100 - Math.abs(3 - idx),
                transformStyle: 'preserve-3d'
              }}
              className='absolute h-32 w-28 rounded-lg object-cover shadow-xl lg:h-56 lg:w-52'
              initial={{
                x: 0, // Centered horizontally
                y: 0, // Centered vertically
                rotate: idx % 2 === 0 ? -5 : 5, // Small alternating rotation
                rotateY: 0,
                scale: 1,
                opacity: 1 // Initially invisible
              }}
              animate={
                isInView
                  ? {
                      x: isCenterImage ? 0 : `${positions[idx].x}px`,
                      y: isCenterImage ? 0 : `${positions[idx].y}px`,
                      scale: isCenterImage ? 1.1 : 0.9,
                      rotateY: idx < 3 ? 15 : idx > 3 ? -15 : 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                        delay: 0.5,
                        ease: 'easeInOut'
                      }
                    }
                  : {}
              }
            />
          )
        })}
      </div>
    </section>
  )
}
