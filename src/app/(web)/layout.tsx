import { Kanit } from 'next/font/google'
import localFont from 'next/font/local'
import { NextAuthProvider } from '@/src/providers/AuthProvider'
import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Toast from '@/src/components/Toast/Toast'
import './globals.css'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

const milky = localFont({
  src: '../../../public/fonts/Milky-BF656b1e9e88c3a.woff',
  variable: '--font-milky',
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${kanit.variable} ${milky.variable} body-bg font-normal antialiased`}
      >
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
