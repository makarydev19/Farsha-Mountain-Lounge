'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section className='relative h-screen w-full'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 z-10 bg-black/30' />
        <video
          src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746219150/Lounge_Hori_y2uyyi.mp4'
          autoPlay
          muted
          loop
          preload='auto'
          playsInline
          className='h-full w-full object-cover'
        />
      </div>

      {/* Centered Content */}
      <div className='relative z-20 flex h-full w-full flex-col items-center justify-center text-white'>
        <div className='relative top-8 w-40 lg:top-13 lg:w-60'>
          <Image
            src='/FarshaProfilePic-removebg-preview (1).png'
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
    </motion.section>
  )
}

export default Hero
