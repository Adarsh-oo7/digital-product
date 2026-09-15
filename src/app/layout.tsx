import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import ChatbotAndSocialButtons from "@/components/ChatbotAndSocialButtons";
import ClientCursor from "@/components/ClientCursor";
import { business, postalAddressSchema, SITE_URL } from "@/lib/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Website & App Development Team in Trivandrum, Kerala",
    template: "%s | Digital Product Solutions",
  },
  description:
    "Kerala team in Trivandrum for websites, software, apps, SEO and WhatsApp automation. Direct developer access from Korani.",
  openGraph: {
    title: "Website & App Development Team in Trivandrum, Kerala",
    description:
      "Kerala team in Trivandrum for websites, software, apps, SEO and WhatsApp automation. Direct developer access from Korani.",
    url: SITE_URL,
    siteName: "Digital Product Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Development Team in Trivandrum, Kerala",
    description:
      "Kerala team in Trivandrum for websites, software, apps, SEO and WhatsApp automation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(location.protocol==='http:')location.replace('https://'+location.host+location.pathname+location.search+location.hash);",
          }}
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Adarsh B S" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Analytics */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W95558LF2R"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W95558LF2R');
      `}
        </Script>


        <link rel="icon" href="./img/logo.png" sizes="any" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM facts for Digital Product Solutions" />
        <meta name="google-site-verification" content="DHDeaZm4O1GPWicrshCNxCRNOAjRdlqeaOdddGQnZ5I" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": business.legalName,
              "url": SITE_URL,
              "telephone": business.telephone,
              "description": "Software development, mobile app development, SEO, social media management, business automation and AI solutions for Kerala businesses. Office in Korani, Thiruvananthapuram district. 20+ businesses helped.",
              "priceRange": "₹₹",
              "openingHours": business.openingHours,
              "areaServed": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kottayam", "Thrissur", "Kollam", "Kannur", "Palakkad", "Kerala"],
              "address": postalAddressSchema,
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
        className={`${inter.className}  text-black flex flex-col min-h-screen`}
      >

        <Navbar />
        <ClientCursor />

        <main className="flex-grow">{children}</main>
        <Footer />

        <Script
          src="https://app.fastbots.ai/embed.js"
          data-bot-id="cm74658eg0tkgsvk7iw855klb"
          strategy="lazyOnload"
        />

        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Product Solutions",
              "alternateName": ["DPS Kerala", "Digital Product Solutions Trivandrum"],
              "url": "https://www.digitalproductsolutions.in/",
              "sameAs": [
                "https://www.instagram.com/digital_product_solutions/",
                "https://www.facebook.com/Digital.Product.kerala/",
                "https://www.linkedin.com/company/digital-product-adarsh/"
              ]
            }
          `}
        </Script>

        <Script id="local-business-schema" type="application/ld+json">
          {`
{
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": "Digital Product Solutions",
 "url": "https://www.digitalproductsolutions.in/",
 "logo": "https://www.digitalproductsolutions.in/img/logo.png",
 "image": "https://www.digitalproductsolutions.in/img/logo.png",
 "telephone": "+919400355185",
 "email": "adarsh@digitalproductsolutions.in",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "Mangalapuram Panchayat, Korani, Chempakamangalam",
   "addressLocality": "Korani",
   "addressRegion": "Kerala",
   "postalCode": "695104",
   "addressCountry": "IN"
 },
 "openingHours": "Mo-Sa 09:00-19:00",
 "priceRange": "₹₹",
 "areaServed": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kottayam", "Thrissur", "Kollam", "Kannur", "Palakkad", "Kerala"],
 "sameAs": [
   "https://www.instagram.com/digital_product_solutions/",
   "https://www.facebook.com/Digital.Product.kerala/",
   "https://www.linkedin.com/company/digital-product-adarsh/"
 ],
 "serviceType": [
   "Website Development",
   "SEO Services",
   "Local SEO Kerala",
   "Web Design",
   "App Development",
   "AI Chatbot Development",
   "WhatsApp Automation",
   "Business Automation",
   "Social Media Management",
   "Digital Marketing Trivandrum"
 ]
}
`}
        </Script>
        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}