'use client'

import { TextAnimate } from '@/src/components/ui/TextAnimate'
// import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
// import { FcGoogle } from 'react-icons/fc'
// import { signUp } from 'next-auth-sanity/client'
// import { signIn, useSession } from 'next-auth/react'
// import toast from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
import Image from 'next/image'

// const defaultFormData = {
//   email: '',
//   name: '',
//   password: ''
// }

const Auth = () => {
  // const [formData, setFormData] = useState(defaultFormData)

  // const inputStyles =
  //   'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target
  //   setFormData({ ...formData, [name]: value })
  // }

  // const { data: session } = useSession()
  // const router = useRouter()

  // useEffect(() => {
  //   if (session) router.push('/')
  // }, [router, session])

  // const loginHandler = async () => {
  //   try {
  //     await signIn()
  //     router.push('/')
  //   } catch (error) {
  //     console.log(error)
  //     toast.error("Something wen't wrong")
  //   }
  // }

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   try {
  //     const user = await signUp(formData)
  //     if (user) {
  //       toast.success('Success. Please sign in')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     toast.error("Something wen't wrong")
  //   } finally {
  //     setFormData(defaultFormData)
  //   }
  // }

  return (
    <section className='h-screen'>
      <main className='relative h-full w-full'>
        <div className='relative h-full w-full'>
          <Image
            className='img'
            src='/assets/beachCover.jpg'
            alt='cover'
            width={1000}
            height={1000}
            priority
          />

          {/* Overlay */}
          <div className='absolute inset-0 z-10 bg-black/70'></div>

          {/* Text */}
          <div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
            <TextAnimate
              className='font-milky text-center text-8xl font-bold text-blue-100 md:text-8xl'
              animation='blurInUp'
              by='character'
              duration={1}
            >
              Coming Soon
            </TextAnimate>
          </div>
        </div>
      </main>
    </section>

    // <section className='container mx-auto'>
    //   <div className='mx-auto w-80 space-y-4 p-6 sm:p-8 md:w-[70%] md:space-y-6'>
    //     <div className='mb-8 flex flex-col items-center justify-between md:flex-row'>
    //       <h1 className='text-xl leading-tight font-bold tracking-tight md:text-2xl'>
    //         Create an account
    //       </h1>
    //       <p>OR</p>
    //       <span className='inline-flex items-center'>
    //         <FcGoogle
    //           onClick={loginHandler}
    //           className='ml-3 cursor-pointer text-4xl'
    //         />
    //       </span>
    //     </div>

    //     <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
    //       <input
    //         type='email'
    //         name='email'
    //         placeholder='name@company.com'
    //         required
    //         className={inputStyles}
    //         value={formData.email}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         type='text'
    //         name='name'
    //         placeholder='John Doe'
    //         required
    //         className={inputStyles}
    //         value={formData.name}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         type='password'
    //         name='password'
    //         placeholder='password'
    //         required
    //         minLength={6}
    //         className={inputStyles}
    //         value={formData.password}
    //         onChange={handleInputChange}
    //       />

    //       <button
    //         type='submit'
    //         className='bg-tertiary-dark w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none'
    //       >
    //         Sign Up
    //       </button>
    //     </form>

    //     <button onClick={loginHandler} className='text-blue-700 underline'>
    //       login
    //     </button>
    //   </div>
    // </section>
  )
}

export default Auth
