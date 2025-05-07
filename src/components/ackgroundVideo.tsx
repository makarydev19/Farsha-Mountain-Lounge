// components/BackgroundVideo.tsx (❌ NO 'use client')

const BackgroundVideo = () => {
  return (
    <div className='absolute inset-0 z-0'>
      {/* Overlay gradient */}
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent' />

      {/* Desktop Video */}
      <video
        src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652595/ptzbyi4ej1odjlq5nrgn.mp4'
        autoPlay
        muted
        loop
        preload='auto'
        playsInline
        className='hidden h-full w-full object-cover lg:block'
        poster='/fallback-desktop.jpg'
      />

      {/* Mobile Video */}
      <video
        src='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652737/aqraovp1gvobcehlhc4p.mp4'
        autoPlay
        muted
        loop
        preload='auto'
        playsInline
        className='block h-full w-full object-cover lg:hidden'
        poster='/fallback-mobile.jpg'
      />
    </div>
  )
}

export default BackgroundVideo
