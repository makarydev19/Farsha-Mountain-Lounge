'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { GalleryItem } from '@/types/types'
import { gallery } from '@/src/data/data'
import Image from 'next/image'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const openImage = (item: GalleryItem) => {
    setSelectedImage(item)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <section id='gallery' className='mb-24'>
      <h2 className="relative mb-12 text-center text-3xl font-bold tracking-wide uppercase before:absolute before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-sm before:text-gray-400 before:content-['Gallery']">
        Our Photo Gallery
      </h2>

      <Swiper
        effect='coverflow'
        grabCursor
        centeredSlides
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className='w-full py-12'
      >
        {gallery.map(item => (
          <SwiperSlide
            key={item.id}
            className='flex h-[30px] w-[30px] items-center justify-center'
          >
            <motion.img
              src={item.img as string}
              alt={`Gallery image ${item.id}`}
              className='h-full w-full cursor-pointer rounded-xl object-cover'
              onClick={() => openImage(item)}
              whileHover={{ scale: 1.05 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className='bg-opacity-70 fixed inset-0 z-[1000] flex items-center justify-center bg-black px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              className='relative w-full'
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                width={100}
                height={100}
                src={selectedImage.img as string}
                alt='Selected image'
                className='img'
              />
              <button
                className='absolute top-4 right-4 text-4xl text-white'
                onClick={closeImage}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
