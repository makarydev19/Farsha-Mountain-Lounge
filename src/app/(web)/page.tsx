'use client'

import { Hero, Reviews } from '@/src/sections/Home'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const About = dynamic(() => import('@/src/sections/Home').then(m => m.About))
const History = dynamic(() =>
  import('@/src/sections/Home').then(m => m.History)
)
const Services = dynamic(() =>
  import('@/src/sections/Home').then(m => m.Services)
)
const Guidelines = dynamic(() =>
  import('@/src/sections/Home').then(m => m.Guidelines)
)

// Do the same for other sections...

export default function Home() {
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRest(true)
    }, 2000) // Match Hero animation duration
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Hero />
      <About />
      {showRest && (
        <>
          <History />
          <Services />
          <Guidelines />
        </>
      )}
      <Reviews />
    </>
  )
}
