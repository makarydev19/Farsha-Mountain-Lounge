import { NextAuthProvider } from '@/src/providers/AuthProvider'
import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Toast from '@/src/components/Toast/Toast'
import './globals.css'
import ViewportHeightFix from '@/src/components/ViewportHeight/ViewportHeightFix'

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
  return (
    <html lang='en'>
      <body className='body-bg font-normal antialiased'>
        <ViewportHeightFix />
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
