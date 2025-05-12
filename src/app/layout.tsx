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
          content="Digital Product | Web Development Agency"
        />
        <meta
          property="og:description"
          content="Digital Product is a leading web development agency specializing in custom websites, e-commerce solutions, and SEO optimization."
        />
        <meta property="og:url" content="https://www.digitalproductsolutions.in/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="DHDeaZm4O1GPWicrshCNxCRNOAjRdlqeaOdddGQnZ5I" />


        {/* Use simple Script tag without event handlers if you don't need them */}
        <Script
          src="https://app.fastbots.ai/embed.js"
          data-bot-id="cm74658eg0tkgsvk7iw855klb"
          strategy="lazyOnload"
        />
        
        {/* Or use the client component if you need event handlers */}
        {/* <ChatbotScript /> */}
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}
      >
        <AnimatedSky />
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />

        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Product",
              "alternateName": "Digital Product Web Development Agency",
              "url": "https://digital-product.adarshbs.com/",
              "sameAs": [
                "https://www.instagram.com/digital_prodect_sale/",
                "https://www.threads.net/@digital_prodect_sale",
                "https://www.linkedin.com/company/digitalproduct"
              ]
            }
          `}
        </Script>

        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}