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
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      <head>
        {/* Preload desktop video */}
        <link
          rel='preload'
          as='fetch'
          href='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652595/ptzbyi4ej1odjlq5nrgn.mp4'
          type='video/mp4'
          crossOrigin='anonymous'
        />

        {/* Preload mobile video */}
        <link
          rel='preload'
          as='fetch'
          href='https://res.cloudinary.com/dfksduzaw/video/upload/v1746652737/aqraovp1gvobcehlhc4p.mp4'
          type='video/mp4'
          crossOrigin='anonymous'
        />
        <link rel='icon' href='/FarshaProfilePic.png' />
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
