import './globals.css'
import { Inter } from 'next/font/google'
import AnimatedSky from '../components/AnimatedSky'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import SocialButtons from '../components/SocialButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Product - Web Development Agency',
  description: 'Professional web development services for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
        <AnimatedSky />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <SocialButtons />
      </body>
    </html>
  )
}

