'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Pagination } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/pagination'

const Home = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const swiperRef = useRef<SwiperRef>(null)

  const handleClick = (index: number) => {
    setActiveButton(index)
    swiperRef.current?.swiper?.slideTo(index)
  }

  const handleSlideChange = () => {
    const index = swiperRef.current?.swiper?.realIndex
    if (typeof index === 'number') setActiveButton(index)
  }

  return (
    <motion.section className='relative min-h-[110vh]'>
      {/* Buttons */}
      <div className='absolute top-[82%] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center rounded-xl border border-black/20 backdrop-blur-3xl'>
        {[
          { id: 0, label: 'lounge', bg: "bg-[url('/assets/gallery-13.jpg')]" },
          { id: 1, label: 'beach', bg: "bg-[url('/assets/Beach3.jpg')]" },
          { id: 2, label: 'gallery', bg: "bg-[url('/assets/IMG_0251.jpg')]" }
        ].map(({ id, label, bg }) => (
          <div
            key={id}
            className={`opacity-50 ${activeButton === id ? 'opacity-100' : ''}`}
          >
            <button
              title={label}
              onClick={() => handleClick(id)}
              className={`m-2 rounded-sm bg-cover bg-center px-10 py-5 ${bg} ${
                activeButton === id ? 'border-2 border-white' : ''
              }`}
            />
          </div>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        className='h-[101vh] w-full'
        loop
        speed={600}
        parallax
        modules={[Parallax, Pagination]}
        onSlideChange={handleSlideChange}
        style={
          {
            '--swiper-navigation-color': '#fff9',
            '--swiper-pagination-color': '#fff9'
          } as React.CSSProperties
        }
      >
        {/* Slide 1 */}
        <SwiperSlide className='relative p-24 text-lg text-white'>
          <div
            slot='container-start'
            data-swiper-parallax='-23%'
            className='absolute top-0 left-0 h-full w-[130%]'
          >
            <div className='relative h-[101vh] w-full'>
              <div className='absolute inset-0 z-10 bg-black/30' />
              <video
                src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746134755/LoungeHori_idzixa.mp4'
                autoPlay
                muted
                loop
                preload='auto'
                playsInline
                className='hidden h-full w-full object-cover md:block'
              />

              <video
                src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746134755/LoungeHori_idzixa.mp4'
                autoPlay
                muted
                loop
                preload='auto'
                playsInline
                className='block h-full w-[130%] object-cover md:hidden'
              />
            </div>
          </div>
          <div className='relative flex h-full w-full flex-col items-center justify-center'>
            <div
              data-swiper-parallax='-300'
              className='relative flex flex-col items-center justify-center'
            >
              {/* <div className='absolute -left-2'>
                <h2 className='font-milky -mb-20 text-5xl text-red-400'>
                  Welcome to
                </h2>
              </div> */}
              <div className='relative top-8 w-40 lg:top-13 lg:w-60'>
                <Image
                  src={`/FarshaProfilePic-removebg-preview (1).png`}
                  alt='logo'
                  width={200}
                  height={200}
                  className='img'
                />
              </div>
              <h1 className='font-milky text-center text-4xl text-nowrap md:text-8xl'>
                Mountain Lounge
              </h1>
            </div>
            {/* <div data-swiper-parallax='-100'>
              <p className='mt-2 text-center text-xl'>
                Bringing you the hottest lounge on Earth
              </p>
            </div> */}
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className='relative p-24 text-lg text-white'>
          <div
            slot='container-start'
            data-swiper-parallax='-23%'
            className='absolute top-0 left-0 h-full w-[130%]'
          >
            <div className='relative h-[101vh] w-full'>
              <div className='absolute inset-0 z-10 bg-black/30' />
              <video
                src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746134755/LoungeHori_idzixa.mp4'
                autoPlay
                preload='auto'
                muted
                loop
                playsInline
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          {/* <div
            data-swiper-parallax='-300'
            className='mt-32 text-center text-4xl font-light md:text-6xl'
          >
            Our Farsha Beach
          </div> */}
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className='relative p-24 text-lg text-white'>
          <div
            slot='container-start'
            data-swiper-parallax='-23%'
            className='absolute top-0 left-0 h-full w-[130%]'
          >
            <div className='relative h-[101vh] w-full'>
              <div className='absolute inset-0 z-10 bg-black/30' />
              <video
                src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746134755/LoungeHori_idzixa.mp4'
                autoPlay
                muted
                preload='auto'
                loop
                playsInline
                className='block h-full w-[130%] object-cover md:hidden'
              />
              <video
                src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746134755/LoungeHori_idzixa.mp4'
                autoPlay
                preload='auto'
                muted
                loop
                playsInline
                className='hidden h-full w-full object-cover md:block'
              />
            </div>
          </div>
          {/* <div
            data-swiper-parallax='-300'
            className='mt-32 text-center text-4xl font-light md:text-6xl'
          >
            Our Farsha Gallery
          </div> */}
        </SwiperSlide>
      </Swiper>
    </motion.section>
  )
}

export default Home
