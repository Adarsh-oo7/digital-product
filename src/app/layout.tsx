import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedSky from "@/components/AnimatedSky";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import ChatbotAndSocialButtons from "@/components/ChatbotAndSocialButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Product | Web Development Agency",
  description:
    "Digital Product is a top web development agency offering custom websites, e-commerce solutions, and SEO services. Transform your online presence today!",
  keywords:
    "digital product, web development agency, custom websites, e-commerce solutions, SEO optimization",
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
        <meta name="author" content="Adarsh B S" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:title"
          content="Software, App & Web Development Agency in Trivandrum Kerala | Digital Product Solutions"
        />
        <meta
          property="og:description"
          content="Digital Product Solutions — Software development, mobile apps, SEO, WhatsApp automation & Al solutions for Kerala businesses. 20+ businesses helped. Based in Trivandrum. Call +919400355185"
        />
        <meta property="og:url" content="https://www.digitalproductsolutions.in/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="./img/logo.png" sizes="any" />
        <meta name="google-site-verification" content="DHDeaZm4O1GPWicrshCNxCRNOAjRdlqeaOdddGQnZ5I" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Digital Product Solutions",
              "url": "https://www.digitalproductsolutions.in",
              "telephone": "+919400355185",
              "description": "Software development, mobile app development, SEO, social media management, business automation and AI solutions for Kerala businesses. Based in Trivandrum, Kerala. 20+ businesses helped.",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 09:00-19:00",
              "areaServed": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kottayam", "Thrissur", "Kollam", "Kerala"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thiruvananthapuram",
                "addressLocality": "Thiruvananthapuram",
                "addressRegion": "Kerala",
                "postalCode": "695001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.5241",
                "longitude": "76.9366"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services for Kerala Businesses",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Development Kerala", "description": "Custom web apps and business software starting ₹15,000" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Development Kerala", "description": "Android and iOS apps for Kerala businesses starting ₹25,000" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services Kerala", "description": "Google ranking for Kerala businesses starting ₹5,000/month" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management Kerala", "description": "Instagram and Facebook management starting ₹3,000/month" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation Kerala", "description": "WhatsApp and business automation starting ₹10,000" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Solutions Kerala", "description": "AI chatbots and automation for Kerala businesses starting ₹12,000" } }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}
      >
        <AnimatedSky />
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />

        <Script
          src="https://app.fastbots.ai/embed.js"
          data-bot-id="cm74658eg0tkgsvk7iw855klb"
          strategy="lazyOnload"
        />

        <Script
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          type="module"
          strategy="lazyOnload"
        />

        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Product",
              "alternateName": "Digital Product Web Development Agency",
              "url": "https://www.digitalproductsolutions.in/",
              "sameAs": [
                "https://www.instagram.com/digital_product_solutions/",
                "https://www.threads.net/@digital_prodect_sale",
                "https://www.linkedin.com/company/digital-product-adarsh/"
              ]
            }
          `}
        </Script>

        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}