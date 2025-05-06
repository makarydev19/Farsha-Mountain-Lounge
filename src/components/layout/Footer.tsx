'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import Link from 'next/link'

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
      ref={ref}
      className='rounded-t-4xl bg-black/60 pt-28 pb-5 text-white'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    >
      <div className='mx-auto px-4'>
        <div className='mb-20'>
          <h2 className='font-milky mb-6 text-center text-5xl font-bold text-red-400'>
            Contact Us
          </h2>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className='mx-auto w-full space-y-4 lg:w-3/5'
            >
              <div className='grid w-full grid-cols-1 gap-x-5 gap-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='text-base font-medium text-white dark:text-gray-100'
                  >
                    Your name
                  </label>
                  <div className='relative mt-2.5'>
                    <input
                      type='text'
                      value={currentName}
                      onChange={e => setCurrentName(e.target.value)}
                      placeholder='Name'
                      required
                      className='block w-full rounded-md border border-zinc-800 bg-zinc-900 px-4 py-4 text-white placeholder-gray-500 caret-red-500 transition-all duration-200 focus:border-red-400 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-x-5 gap-y-4'>
                <div>
                  <label
                    htmlFor='message'
                    className='text-base font-medium text-gray-900 dark:text-gray-100'
                  >
                    Your Message
                  </label>
                  <div className='relative mt-2.5'>
                    <textarea
                      value={currentMessage}
                      onChange={e => setCurrentMessage(e.target.value)}
                      placeholder='Message'
                      required
                      className='block w-full rounded-md border border-zinc-800 bg-zinc-900 px-4 py-4 text-white placeholder-gray-500 caret-red-400 transition-all duration-200 focus:border-red-400 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-x-5 gap-y-4'>
                <div>
                  <label
                    htmlFor='email'
                    className='text-base font-medium text-gray-900 dark:text-gray-100'
                  >
                    Your Email
                  </label>
                  <div className='relative mt-2.5'>
                    <input
                      type='email'
                      value={currentEmail}
                      onChange={e => setCurrentEmail(e.target.value)}
                      placeholder='Email'
                      required
                      className='block w-full rounded-md border border-zinc-800 bg-zinc-900 px-4 py-4 text-white placeholder-gray-500 caret-red-400 transition-all duration-200 focus:border-red-400 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className='font-milky w-full cursor-pointer rounded border border-black bg-red-400 py-4 text-2xl font-bold tracking-widest text-black transition hover:border-blue-100 hover:bg-black hover:text-white'
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <p className='text-center text-xl font-bold text-white/90'>
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </div>

      <motion.div className='space-y-6 text-center'>
        <div>
          <h2 className='font-milky text-5xl lg:text-6xl'>Follow Us</h2>
        </div>
        <div className='flex justify-center space-x-10 text-4xl lg:text-5xl'>
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

        <div className='px-5 lg:px-20'>
          <hr className='my-10 border-blue-100' />
          <div className='flex w-full flex-col items-center justify-center'>
            <div className='mx-auto w-40'>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src='/Farsha_M_Logo_page-0001-removebg.png'
                  alt='Farsha Logo'
                  width={160}
                  height={160}
                  onClick={scrollTop}
                  className='mx-auto cursor-pointer'
                />
              </motion.div>
            </div>
            <p className='mt-6 w-full text-center text-base md:w-auto dark:text-gray-100'>
              © Copyright 2025, All Rights Reserved by{' '}
              <br className='block lg:hidden' />
              <span className='font-inter font-semibold'>
                {' '}
                Farsha Mountain Lounge
              </span>
            </p>
            <div className='flex items-center justify-center'>
              <p className='text-base dark:text-gray-100'>SITE BY</p>
              <div className='w-16'>
                <Link href={'https://makend.vercel.app/'}>
                  <Image
                    src={`/MyLogoDM.png`}
                    alt='logo'
                    width={100}
                    height={100}
                    className='img'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer
