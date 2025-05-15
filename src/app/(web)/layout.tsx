import { NextAuthProvider } from '@/src/providers/AuthProvider'
import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Toast from '@/src/components/Toast/Toast'
import { useViewportHeightFix } from '@/src/hooks/useViewportHeightFix'
import './globals.css'

export const metadata = {
  title: 'Farsha Mountain Lounge',
  description:
    'Farsha brings you along a journey of original antique pieces collected in the years',
  icons: {
    icon: '/FarshaProfilePic.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useViewportHeightFix()
  return (
    <html lang='en'>
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
