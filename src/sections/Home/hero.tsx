'use client'

import { TextAnimate } from '@/src/components/ui'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'

const Hero = () => {
  const [videoReady, setVideoReady] = useState(false)

  const handleCanPlay = () => setVideoReady(true)

  return (
    <>
      <Head>
        {/* Preload hint for faster video loading */}
        <link
          rel='preload'
          as='video'
          href='https://res.cloudinary.com/dfksduzaw/video/upload/v1746797930/FarshaHori_vokvzp.mp4'
          type='video/mp4'
        />
      </Head>

      <section className='relative h-screen w-full'>
        {/* Background Video or Fallback */}
        <div className='absolute inset-0 z-0'>
          {!videoReady && (
            <>
              <Image
                src='/assets/DJI_20241217162508_0633_D.JPG'
                alt='Fallback'
                fill
                priority
                loading='eager'
                className='hidden rounded-b-4xl object-cover lg:block'
              />
              <Image
                src='/assets/VertCover.png'
                alt='Fallback'
                fill
                priority
                loading='eager'
                className='block rounded-b-4xl object-cover lg:hidden'
              />
              <div className='absolute inset-0 z-20 flex items-center justify-center rounded-b-4xl bg-black/50'>
                <div className='text-white'>
                  <div className='h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent' />
                </div>
              </div>
            </>
          )}

          {/* Overlay gradient */}
          <div className='absolute inset-0 z-10 rounded-b-4xl bg-gradient-to-t from-black/50 via-black/10 to-transparent' />

          {/* Videos */}
          <video
            src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746797930/FarshaHori_vokvzp.mp4'
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            controls={false}
            onCanPlay={handleCanPlay}
            className={`hidden h-full w-full rounded-b-4xl object-cover lg:block ${
              videoReady ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700`}
          />
          <video
            src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746798444/FarshaVer_eslr9x.mp4'
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            controls={false}
            onCanPlay={handleCanPlay}
            className={`block h-full w-full rounded-b-4xl object-cover lg:hidden ${
              videoReady ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700`}
          />
        </div>

        {/* Foreground Content */}
        <div className='relative z-30 flex h-full w-full flex-col items-center justify-end pb-32 text-white lg:pb-14'>
          <div className='relative top-1 w-52 lg:top-2 lg:w-72'>
            <Image
              src='/FarshaLogo.png'
              alt='logo'
              width={200}
              height={200}
              className='img'
              priority
              loading='eager'
            />
          </div>
          <TextAnimate
            animation='fadeIn'
            by='character'
            delay={0.5}
            className='font-milky text-center text-5xl text-nowrap text-red-400 md:text-8xl'
          >
            Mountain Lounge
          </TextAnimate>
        </div>
      </section>
    </>
  )
}

export default Hero
