'use client'

import { FloatingNav } from '../ui/floating-navbar'
import { IconHome } from '@tabler/icons-react'
import Image from 'next/image'

const Header = () => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    }
  ]
  return (
    <header className='relative w-full'>
      <FloatingNav
        navItems={navItems}
        logo={
          <Image
            src='/FarshaProfilePic.png'
            alt='Logo'
            width={50}
            height={50}
            className='img'
          />
        }
      />
    </header>
  )
}

export default Header
