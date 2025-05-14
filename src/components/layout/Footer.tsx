'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import Link from 'next/link'
import Form from '../ui/ReusableForm'
import { Field } from '@/types/types'

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: false })

  const handleFormSubmit = async (values: Record<string, string>) => {
    const templateParams = {
      name: values.name,
      message: values.message,
      email: values.email
    }

    await emailjs.send(
      'service_farsha',
      'template_farsha',
      templateParams,
      'Z9gvpMaOGrk9N-kE'
    )
  }

  const scrollTop = () => {
    scroll.scrollToTop()
  }

  const footerFields: Field[] = [
    {
      id: 'name',
      label: 'Your Name',
      placeholder: 'Name',
      type: 'text', // ✅ 'text' is valid
      required: true
    },
    {
      id: 'message',
      label: 'Your Message',
      placeholder: 'Message',
      type: 'textarea', // ✅ 'textarea' is valid
      required: true
    },
    {
      id: 'email',
      label: 'Your Email',
      placeholder: 'Email',
      type: 'email', // ✅ 'email' is valid
      required: true
    }
  ]

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
          <Form
            fields={footerFields}
            onSubmit={handleFormSubmit}
            submitText='Submit'
            successMessage='Thank you! Your message has been sent.'
            errorMessage='Something went wrong.'
            className='mx-auto w-full space-y-4 lg:w-3/5'
          />
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
                  loading='eager'
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
                <Link href='https://makend.vercel.app/'>
                  <Image
                    src='/MyLogoDM.png'
                    alt='logo'
                    width={100}
                    height={100}
                    className='img'
                    loading='eager'
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
