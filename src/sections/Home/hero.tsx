import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative h-screen w-full'>
      {/* Background Videos */}
      <div className='absolute inset-0 z-0'>
        {/* Overlay gradient */}
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent' />

        <video
          src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652595/ptzbyi4ej1odjlq5nrgn.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          controls={false}
          className='hidden h-full w-full object-cover lg:block'
        />

        <video
          src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652737/aqraovp1gvobcehlhc4p.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          controls={false}
          className='block h-full w-full object-cover lg:hidden'
        />
      </div>

      {/* Centered Content */}
      <div className='relative z-20 flex h-full w-full flex-col items-center justify-end pb-52 text-white lg:pb-20'>
        <div className='relative top-8 w-40 lg:top-12 lg:w-60'>
          <Image
            src='/FarshaProfilePic-removebg-preview (1).png'
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
