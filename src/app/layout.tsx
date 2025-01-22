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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Adarsh B S" />
        <meta name="keywords" content="digital product, web development agency, custom websites, e-commerce solutions, SEO optimization" />
        <meta name="description" content="Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization. Transform your online presence with our expert team." />
        <link rel="canonical" href="https://digital-product.adarshbs.com/" />
        <meta property="og:title" content="Digital Product | Web Development Agency" />
        <meta property="og:description" content="Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization." />
        <meta property="og:url" content="https://digital-product.adarshbs.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://digital-product.adarshbs.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Product | Web Development Agency" />
        <meta name="twitter:description" content="Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization." />
        <meta name="twitter:image" content="https://digital-product.adarshbs.com/twitter-image.jpg" />
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
              "url": "https://digital-product.adarshbs.com/",
              "description": "Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization.",
              "sameAs": [
                "https://www.instagram.com/digital_prodect_sale/",
                "https://twitter.com/digitalproduct",
                "https://www.linkedin.com/company/digitalproduct"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}
