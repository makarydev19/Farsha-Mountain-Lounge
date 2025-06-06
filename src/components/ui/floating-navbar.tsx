'use client'

import React, { useState, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion'
import { cn } from '@/src/libs/utils'
import Link from 'next/link'
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useSession, signOut, signIn } from 'next-auth/react'
import { TbBeach } from 'react-icons/tb'

export default function FloatingNav({
  className,
  logo
}: {
  className?: string
  logo?: React.ReactNode
}) {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const [showUserPanel, setShowUserPanel] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { data: session } = useSession()

  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      const previous = scrollYProgress.getPrevious()
      const direction = current - (previous ?? 0)
      setVisible(current >= 0.05 && direction < 0)
    }
  })

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShowUserPanel(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowUserPanel(false)
    }, 300) // 300ms delay
  }

  return (
    <>
      <AnimatePresence mode='wait'>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'fixed inset-x-0 top-10 z-[5000] mx-auto flex w-[98%] items-center justify-between gap-6 rounded-full border border-white/[0.2] bg-black px-5 py-2 shadow-md lg:w-[35%] lg:px-6',
              className
            )}
          >
            <div className='flex items-center gap-x-3'>
              {logo && (
                <Link
                  href='/'
                  className='flex w-20 items-center justify-center py-2 lg:w-28'
                >
                  {logo}
                </Link>
              )}
              <div
                className='relative w-10'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    width={50}
                    height={50}
                    className='img rounded-full'
                    loading='eager'
                  />
                ) : (
                  <FaUserCircle className='size-7 text-white' />
                )}
              </div>
            </div>

            <div className='flex items-center justify-end gap-5'>
              <button className='relative rounded-3xl border border-white/[0.2] px-4 py-2 text-base font-medium text-white'>
                <Link href='/reservations'>
                  <span className='flex items-center gap-1'>
                    Reservation
                    <TbBeach className='text-3xl' />
                  </span>
                  <span className='absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent' />
                </Link>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && showUserPanel && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className='fixed top-[15%] left-[31%] z-[4000] w-fit -translate-x-1/2 rounded-b-3xl border border-zinc-600 bg-zinc-950 px-6 pt-3 pb-2 text-center text-white shadow-xl lg:top-[111px] lg:left-[45%]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {session?.user ? (
              <div className='flex flex-col items-center gap-1'>
                <p className='font-semibold'>{session.user.name}</p>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className='flex cursor-pointer items-center gap-2 rounded text-white hover:text-red-400'
                >
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className='flex cursor-pointer items-center gap-2 text-white hover:text-red-400'
              >
                <FaSignInAlt />
                <p>Sign In</p>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
