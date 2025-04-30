import { Inter } from "next/font/google";
import AnimatedSky from "@/components/AnimatedSky";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import ChatbotAndSocialButtons from "@/components/ChatbotAndSocialButtons";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

// Base metadata
export const metadata = {
  title: {
    default: "Digital Product Solutions | Best Web Development Agency in Kerala, Attingal, Korani",
    template: "%s | Digital Product Solutions",
  },
  description:
    "Digital Product Solutions is the best web development agency and digital solutions provider in Kerala, Attingal, and Korani. We offer custom websites, e-commerce solutions, SEO services, and more to elevate your online presence.",
  keywords: [
    "best web development agency Kerala",
    "best digital solutions Kerala",
    "web development Attingal",
    "digital solutions Attingal",
    "web development Korani",
    "custom websites Kerala",
    "e-commerce solutions Kerala",
    "SEO services Kerala",
  ],
  openGraph: {
    title: "Digital Product Solutions | Best Web Development Agency in Kerala, Attingal, Korani",
    description:
      "Transform your business with Digital Product Solutions, the leading web development agency and digital solutions provider in Kerala, Attingal, and Korani.",
    url: "https://www.digitalproductsolutions.in/",
    type: "website",
    images: [
      {
        url: "https://www.digitalproductsolutions.in/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Digital Product Solutions - Best Web Development Agency in Kerala",
      },
    ],
  },
};

// Dynamic metadata generation
export async function generateMetadata({ params, searchParams }) {
  // Fallback base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.digitalproductsolutions.in";
  
  // Construct pathname from params (for dynamic routes) or fallback to current route
  let pathname = "/";
  if (params && params.slug) {
    pathname = `/${params.slug.join("/")}`;
  } else {
    // For static routes, infer from known routes (adjust based on your routes)
    const knownRoutes = ["ai-services", "contact", "portfolio", "about", "book"];
    const route = Object.keys(searchParams).length ? "" : knownRoutes.find(route => route);
    pathname = route ? `/${route}` : "/";
  }

  // Ensure trailing slash for consistency
  const canonicalUrl = `${baseUrl}${pathname === "/" ? "" : pathname}${pathname.endsWith("/") ? "" : "/"}`;

  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Digital Product Solutions" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Optional: For Apple devices */}

        {/* Fastbots script */}
        <Script
          src="https://app.fastbots.ai/embed.js"
          data-bot-id="cm74658eg0tkgsvk7iw855klb"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}
      >
        <AnimatedSky />
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />

        {/* Structured Data for SEO */}
        <Script id="schema-script" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "Digital Product Solutions",
                alternateName: "Best Web Development Agency in Kerala",
                url: "https://www.digitalproductsolutions.in/",
                sameAs: [
                  "https://www.instagram.com/digital_prodect_solutions/",
                  "https://www.threads.net/@digital_prodect_sale",
                  "https://www.linkedin.com/company/digitalproduct",
                ],
              },
              {
                "@type": "Organization",
                name: "Digital Product Solutions",
                url: "https://www.digitalproductsolutions.in/",
                logo: "https://www.digitalproductsolutions.in/logo.png", // Replace with actual logo URL
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Attingal, Korani",
                  addressRegion: "Kerala",
                  addressCountry: "India",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-123-456-7890", // Replace with actual phone number
                  contactType: "Customer Service",
                },
                sameAs: [
                  "https://www.instagram.com/digital_prodect_solutions/",
                  "https://www.threads.net/@digital_prodect_sale",
                  "https://www.linkedin.com/company/digitalproduct",
                ],
              },
            ],
          })}
        </Script>

        <ChatbotAndSocialButtons />
      </body>
    </html>
  );
}