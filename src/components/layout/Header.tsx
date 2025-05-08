import Image from 'next/image'
import { Navbar } from '../ui'

const Header = () => {
  return (
    <header className='relative w-full'>
      <Navbar
        logo={
          <Image
            src='/FarshaProfilePic-removebg-preview (1).png'
            alt='Logo'
            width={60}
            height={60}
            className='img'
          />
        }
      />
    </header>
  )
}

export default Header
