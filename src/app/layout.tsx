import './globals.css'
import { Inter } from 'next/font/google'
import AnimatedSky from '../components/AnimatedSky'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SocialButtons from '../components/SocialButtons'
import Script from "next/script"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Digital Product | Web Development Agency",
  description:
    "Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization. Transform your online presence with our expert team.",
  keywords: "digital product, web development agency, custom websites, e-commerce solutions, SEO optimization",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.digitalproduct.com" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
        <AnimatedSky />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <SocialButtons />
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Product",
              "alternateName": "Digital Product Web Development Agency",
              "url": "https://www.digitalproduct.com",
              "description": "Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization."
            }
          `}
        </Script>
      </body>
    </html>
  )
}

