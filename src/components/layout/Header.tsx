import Image from 'next/image'
import { Navbar } from '../ui'

const Header = () => {
  return (
    <header className='relative w-full'>
      <Navbar
        logo={
          <Image
            src='/FarshaLogo.png'
            alt='Logo'
            width={100}
            height={100}
            className='img'
            priority
          />
        }
      />
    </header>
  )
}

export default Header
