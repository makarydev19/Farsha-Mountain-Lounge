'use client'

import { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'
// import { FaStream } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false)
  // const [showMenu, setShowMenu] = useState(false)
  const animationControls = useAnimation()

  const changeHeader = () => {
    if (window.scrollY >= 85) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }

  const scrollTop = () => {
    animateScroll.scrollToTop()
  }

  useEffect(() => {
    const sequence = async () => {
      await animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeInOut' }
      })
    }
    sequence()
    window.addEventListener('scroll', changeHeader)
    return () => {
      window.removeEventListener('scroll', changeHeader)
    }
  }, [animationControls])
  const { data: session } = useSession()

  console.log(session)
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={animationControls}
      className={`${scrollHeader ? 'scroll-header' : ''} absolute top-[10%] left-1/2 z-10 z-50 mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-wrap items-center px-20 py-10 text-xl max-sm:px-10 md:flex-nowrap`}
    >
      <div className='md:2/3 flex w-full items-center'>
        <Link
          onClick={scrollTop}
          href='/'
          className='w-20 rounded-2xl font-black'
        >
          <Image
            src={`/Farsha_M Logo_page-0001.jpg`}
            alt='Logo'
            width={100}
            height={100}
            className='img'
          />
        </Link>
        {/* <ul className='ml-5 flex items-center'>
          <li className='flex items-center'>
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className='h-19 w-10 overflow-hidden rounded-full'>
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='size-7 cursor-pointer' />
                )}
              </Link>
            ) : (
              <Link href='/auth'>
                <FaUserCircle className='size-7 cursor-pointer' />
              </Link>
            )}
          </li>
        </ul> */}
      </div>

      <ul className='mt-4 flex w-full items-center justify-between text-white md:w-1/3'>
        <li className='transition-all duration-500 hover:-translate-y-2'>
          <Link href='/'>Home</Link>
        </li>
        <li className='mx-7 transition-all duration-500 hover:-translate-y-2'>
          <Link href='/auth'>Reservation</Link>
        </li>
      </ul>
    </motion.header>
  )
}

export default Header
