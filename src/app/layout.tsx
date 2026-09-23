import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import ChatbotAndSocialButtons from "@/components/ChatbotAndSocialButtons";
import ClientCursor from "@/components/ClientCursor";
import { business, postalAddressSchema, geoSchema, SITE_URL } from "@/lib/business";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Website, App and Software Development in Kerala",
    template: "%s | Digital Product Solutions",
  },
  description:
    "Trivandrum team in Korani for websites, custom software, mobile apps, SEO and WhatsApp automation. Direct developer access and published prices.",
  keywords: [
    "Website Development Kerala",
    "App Development Trivandrum",
    "SEO Services Kerala",
    "Software Development Trivandrum",
    "WhatsApp Automation Kerala",
    "Web Design Company Trivandrum",
    "Digital Product Solutions",
    "Freelance Software Developer Kerala",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": SITE_URL, "x-default": SITE_URL },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
    apple: "/img/logo.png",
  },
  openGraph: {
    title: "Website & App Development Team in Trivandrum, Kerala",
    description:
      "Kerala team in Trivandrum for websites, software, apps, SEO and WhatsApp automation. Direct developer access from Korani.",
    url: SITE_URL,
    siteName: "Digital Product Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/img/logo.png`,
        width: 1200,
        height: 630,
        alt: "Digital Product Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, App and Software Development in Kerala",
    description:
      "Trivandrum team in Korani for websites, custom software, mobile apps, SEO and WhatsApp automation.",
    images: [`${SITE_URL}/img/logo.png`],
  },
  verification: {
    google: "DHDeaZm4O1GPWicrshCNxCRNOAjRdlqeaOdddGQnZ5I",
  },
};

const rootSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      legalName: business.legalName,
      alternateName: ["DPS Kerala", "Digital Product Solutions Trivandrum", "Digital Product Solutions Korani"],
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      image: `${SITE_URL}/img/logo.png`,
      telephone: business.telephone,
      email: business.emailSchema,
      description:
        "Registered MSME IT company in Korani, Thiruvananthapuram, Kerala. Websites, software, mobile apps, SEO, WhatsApp automation and AI solutions for Kerala businesses.",
      priceRange: "₹₹",
      openingHours: business.openingHours,
      address: postalAddressSchema,
      geo: geoSchema,
      hasMap: business.mapsUrl,
      areaServed: [
        "Thiruvananthapuram",
        "Kochi",
        "Kozhikode",
        "Kottayam",
        "Thrissur",
        "Kollam",
        "Kannur",
        "Palakkad",
        "Kerala",
        "India",
      ],
      sameAs: [
        business.mapsUrl,
        ...business.sameAs,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services for Kerala Businesses",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Development Kerala",
              description: "Custom web apps and business software starting ₹15,000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development Kerala",
              description: "Professional responsive business websites starting ₹5,000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "App Development Kerala",
              description: "Android and iOS apps for Kerala businesses starting ₹25,000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services Kerala",
              description: "Local SEO and Google Business Profile support for Kerala businesses starting ₹5,000/month",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WhatsApp Automation Kerala",
              description: "Official WhatsApp Cloud API and business automation starting ₹10,000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Management Kerala",
              description: "Instagram and Facebook management starting ₹3,000/month",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Solutions Kerala",
              description: "AI chatbots and automation for Kerala businesses starting ₹12,000",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Digital Product Solutions",
      alternateName: ["DPS Kerala", "Digital Product Solutions Trivandrum"],
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
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

        <link rel="icon" href="/img/logo.png" sizes="any" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM facts for Digital Product Solutions" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootSchema),
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

        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}