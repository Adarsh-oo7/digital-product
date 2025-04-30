import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedSky from "@/components/AnimatedSky";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import ChatbotAndSocialButtons from "@/components/ChatbotAndSocialButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Best Web Developer in Kerala & Attingal | Digital Product Solutions",
    template: "%s | Digital Product Solutions"
  },
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
  alternates: {
    canonical: "https://www.digitalproductsolutions.in",
  },
  openGraph: {
    title: "Best Web Developer in Kerala & Attingal | Digital Product Solutions",
    description: "Top-rated web development agency in Attingal, Kerala. Custom websites, e-commerce solutions & SEO services.",
    url: "https://www.digitalproductsolutions.in",
    siteName: "Digital Product Solutions",
    images: [
      {
        url: "https://www.digitalproductsolutions.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Product Solutions - Web Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Developer in Kerala & Attingal",
    description: "Professional web development services in Kerala with focus on Attingal region. Custom solutions for businesses.",
    images: ["https://www.digitalproductsolutions.in/twitter-image.jpg"],
  },
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
        <link rel="manifest" href="/site.webmanifest" />
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
              "priceRange": "$$",
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

        {/* Service Schema */}
        <Script id="service-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Digital Product Solutions"
              },
              "description": "Professional web development services in Kerala with focus on Attingal region",
              "areaServed": {
                "@type": "State",
                "name": "Kerala"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Services"
                    }
                  }
                ]
              }
            }
          `}
        </Script>

        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}