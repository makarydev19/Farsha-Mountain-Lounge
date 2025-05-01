'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
// import { links } from '@/src/data/data'

const Footer = () => {
  const [currentName, setCurrentName] = useState('')
  const [currentMessage, setCurrentMessage] = useState('')
  const [currentEmail, setCurrentEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: false })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const templateParams = {
        name: currentName,
        message: currentMessage,
        email: currentEmail
      }

      await emailjs.send(
        'service_farsha',
        'template_farsha',
        templateParams,
        'Z9gvpMaOGrk9N-kEL'
      )

      setSubmitted(true)
      setCurrentName('')
      setCurrentMessage('')
      setCurrentEmail('')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  const scrollTop = () => {
    scroll.scrollToTop()
  }

  return (
    <motion.section
      id='footer'
      className='bg-black py-10 text-white'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    >
      <div className='mx-auto max-w-5xl px-4'>
        <div className='mb-10'>
          <h2 className='mb-6 text-center text-2xl font-bold text-red-400'>
            Contact Us
          </h2>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className='mx-auto max-w-xl space-y-4'
            >
              <input
                type='text'
                value={currentName}
                onChange={e => setCurrentName(e.target.value)}
                placeholder='Name'
                required
                className='w-full rounded border border-red-400 bg-black px-4 py-2 text-center text-white'
              />
              <textarea
                value={currentMessage}
                onChange={e => setCurrentMessage(e.target.value)}
                placeholder='Your Message'
                required
                className='resize-vertical h-32 w-full rounded border border-red-400 bg-black px-4 py-2 text-white'
              />
              <input
                type='email'
                value={currentEmail}
                onChange={e => setCurrentEmail(e.target.value)}
                placeholder='Your Email'
                required
                className='w-full rounded border border-red-400 bg-black px-4 py-2 text-center text-white'
              />
              <button
                type='submit'
                className='w-full rounded border border-red-500 bg-red-500 py-2 text-white transition hover:bg-black'
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className='text-center text-xl font-bold text-white/90'>
              Thank you! Your message has been sent.
            </p>
          )}
        </div>

        <motion.div ref={ref} className='space-y-6 text-center'>
          <div className='flex justify-center space-x-4 text-2xl'>
            <motion.a
              href='https://www.facebook.com/FarshaMountainLounge/'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href='https://www.instagram.com/farsha_mountain_lounge/'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
          </div>

          <div className='mx-auto w-40'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Image
                src='/assets/Farsha_M Logo_page-0001.jpg'
                alt='Farsha Logo'
                width={160}
                height={160}
                onClick={scrollTop}
                className='mx-auto cursor-pointer'
              />
            </motion.div>
          </div>

          {/* <ul className='mt-6 flex flex-wrap justify-center gap-10 text-sm'>
            {links.slice(0, -1).map(({ name, path }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ delay: index * 0.1 }}
                className='cursor-pointer hover:text-red-500'
              >
                <a href={`#${path}`}>{name}</a>
              </motion.li>
            ))}
          </ul> */}

          <div className='text-xs text-white/50'>
            <p>
              Copyright &copy; 2024; Designed by{' '}
              <span className='font-medium text-white/70 uppercase'>
                Makary
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Footer
