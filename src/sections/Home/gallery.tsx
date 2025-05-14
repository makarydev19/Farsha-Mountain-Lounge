import React from 'react'
import Image from 'next/image'
import { gallery } from '@/src/data/data'
import {
  DraggableCardBody,
  DraggableCardContainer
} from '@/src/components/ui/draggable-card'
import { TextAnimate } from '@/src/components/ui'

const Gallery = () => {
  return (
    <section className='pt-20'>
      <div className='relative z-10 mx-auto w-full space-y-3 text-center lg:w-[65%]'>
        <h2 className='text-2xl font-semibold text-red-400 lg:text-3xl'>
          Our Gallery
        </h2>
        <TextAnimate
          className='font-milky text-3xl lg:text-5xl'
          animation='blurInUp'
          as={'h1'}
          delay={0.5}
        >
          Light, Color, Emotion.
        </TextAnimate>
      </div>
      <DraggableCardContainer className='relative flex min-h-screen w-full items-center justify-center overflow-clip'>
        <p className='absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-800 md:text-4xl'>
          Step into a World of ✨Enchantment✨
        </p>
        {gallery.map((item, idx) => (
          <DraggableCardBody key={idx} className={item.className}>
            <Image
              src={item.image}
              alt='gallery'
              className='pointer-events-none relative z-10 h-80 w-80'
              width={350}
              height={350}
              loading='lazy'
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  )
}

export default Gallery
