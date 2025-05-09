'use client'

import Image from 'next/image'
import { useState } from 'react'

const Hero = () => {
  const [videoReady, setVideoReady] = useState(false)

  const handleCanPlay = () => {
    setVideoReady(true)
  }

  return (
    <section className='relative h-screen w-full'>
      {/* Background Video or Fallback */}
      <div className='absolute inset-0 z-0'>
        {/* Fallback image while video is loading */}
        {!videoReady && (
          <Image
            src='/assets/DJI_20241217162508_0633_D.JPG'
            alt='Fallback'
            fill
            priority
            className='rounded-b-4xl object-cover'
          />
        )}

        {/* Loading Overlay */}
        {!videoReady && (
          <div className='absolute inset-0 z-20 flex items-center justify-center rounded-b-4xl bg-black/50'>
            <div className='text-center text-white'>
              <div className='mx-auto mb-2 h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent' />
              <p className='text-sm'>Loading video...</p>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className='absolute inset-0 z-10 rounded-b-4xl bg-gradient-to-t from-black/50 via-black/10 to-transparent' />

        {/* Desktop Video */}
        <video
          src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746797930/FarshaHori_vokvzp.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          controls={false}
          onCanPlay={handleCanPlay}
          className={`hidden h-full w-full rounded-b-4xl object-cover lg:block ${
            videoReady ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        />

        {/* Mobile Video */}
        <video
          src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746798444/FarshaVer_eslr9x.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          controls={false}
          onCanPlay={handleCanPlay}
          className={`block h-full w-full rounded-b-4xl object-cover lg:hidden ${
            videoReady ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
        />
      </div>

      {/* Foreground content */}
      <div className='relative z-30 flex h-full w-full flex-col items-center justify-end pb-32 text-white lg:pb-14'>
        <div className='relative top-1 w-52 lg:top-2 lg:w-72'>
          <Image
            src='/FarshaLogo.png'
            alt='logo'
            width={200}
            height={200}
            className='img'
          />
        </div>
        <h1 className='font-milky text-center text-5xl text-nowrap text-red-400 md:text-8xl'>
          Mountain Lounge
        </h1>
      </div>
    </section>
  )
}

export default Hero
