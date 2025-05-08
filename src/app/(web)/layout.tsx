import { NextAuthProvider } from '@/src/providers/AuthProvider'
import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Toast from '@/src/components/Toast/Toast'
import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          as='video'
          href='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652595/ptzbyi4ej1odjlq5nrgn.mp4'
          type='video/mp4'
        />
        <link
          rel='preload'
          as='video'
          href='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652737/aqraovp1gvobcehlhc4p.mp4'
          type='video/mp4'
        />
      </head>
      <body className='body-bg font-normal antialiased'>
        <NextAuthProvider>
          <Toast />
          <main className='text-white'>
            <Header />
            {children}
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  )
}
