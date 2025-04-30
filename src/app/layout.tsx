import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedSky from "@/components/AnimatedSky";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import ChatbotAndSocialButtons from "@/components/ChatbotAndSocialButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Web Developer in Kerala & Attingal | Digital Product Solutions",
  description: "Top-rated web development agency in Attingal, Kerala. Custom websites, e-commerce solutions & SEO services. 10+ years experience serving Kerala businesses.",
  keywords: [
    "best web developer in Kerala",
    "top web developer in Attingal",
    "website development company Kerala",
    "e-commerce solutions Attingal",
    "SEO services Kerala",
    "professional web design Trivandrum",
    "custom website development Kerala"
  ],
  authors: [{ name: "Adarsh B S", url: "https://www.digitalproductsolutions.in" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.digitalproductsolutions.in/" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Best Web Developer in Kerala & Attingal | Digital Product Solutions" />
        <meta property="og:description" content="Top-rated web development agency in Attingal, Kerala. Custom websites, e-commerce solutions & SEO services." />
        <meta property="og:url" content="https://www.digitalproductsolutions.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Digital Product Solutions" />
        <meta property="og:image" content="https://www.digitalproductsolutions.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Developer in Kerala & Attingal" />
        <meta name="twitter:description" content="Professional web development services in Kerala with focus on Attingal region. Custom solutions for businesses." />
        <meta name="twitter:image" content="https://www.digitalproductsolutions.in/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Chatbot Script */}
        <Script
          src="https://app.fastbots.ai/embed.js"
          data-bot-id="cm74658eg0tkgsvk7iw855klb"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
        <AnimatedSky />
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />

        {/* Local Business Schema */}
        <Script id="local-business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Digital Product Solutions",
              "image": "https://www.digitalproductsolutions.in/logo.jpg",
              "@id": "https://www.digitalproductsolutions.in",
              "url": "https://www.digitalproductsolutions.in",
              "telephone": "+919400355185",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Korani P O",
                "addressLocality": "Attingal",
                "addressRegion": "Kerala",
                "postalCode": "695104",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.6969",
                "longitude": "76.8141"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/Digital.Product.kerala/",
                "https://www.instagram.com/digital_product_solutions/",
                "https://www.linkedin.com/company/digitalproductsolutions"
              ]
            }
          `}
        </Script>

        {/* WebSite Schema */}
        <Script id="website-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Product Solutions",
              "alternateName": "Web Development Company in Kerala",
              "url": "https://www.digitalproductsolutions.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.digitalproductsolutions.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>

        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}