'use client'

import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion'
import { cn } from '@/src/libs/utils'
import Link from 'next/link'

type NavItem = {
  name: string
  link: string
  icon?: React.ReactNode
}

export const FloatingNav = ({
  navItems,
  className,
  logo
}: {
  navItems: NavItem[]
  className?: string
  logo?: React.ReactNode
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      const previous = scrollYProgress.getPrevious()
      const direction = current - (previous ?? 0)

      if (current < 0.05) {
        setVisible(false)
      } else {
        setVisible(direction < 0)
      }
    }
  })

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'fixed inset-x-0 top-10 z-[5000] mx-auto flex w-[90%] items-center justify-between gap-6 space-x-4 rounded-full border border-transparent bg-white px-5 py-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:w-[30%] lg:px-6 dark:border-white/[0.2] dark:bg-black',
          className
        )}
      >
        {logo && (
          <Link
            href='/'
            className='flex cursor-pointer items-center justify-center'
          >
            {logo}
          </Link>
        )}
        <div className='flex items-center justify-end gap-5'>
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className='relative flex cursor-pointer items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
            >
              <span className='hidden text-sm'>{navItem.name}</span>
            </a>
          ))}
          <button className='relative cursor-pointer rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white'>
            <Link href='/auth'>
              <span>Beach Reservation</span>
              <span className='absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent' />
            </Link>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
