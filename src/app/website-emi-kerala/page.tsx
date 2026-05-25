import { Metadata } from "next";
import EMIPageClient from "./EMIPageClient";

export const metadata: Metadata = {
  title: "Anniversary Website EMI Offer Kerala | Website Worth ₹16,000 at ₹7,499 | Limited Time",
  description:
    "Get a premium business website worth ₹16,000 for only ₹7,499. Includes 1 year free hosting, responsive design, secure setup, fast performance and EMI options. Limited anniversary offer valid till 25/06/2026. Start with ₹1000.",
  keywords: [
    "Website EMI Kerala",
    "Website Development EMI",
    "Affordable Business Website Kerala",
    "Website on EMI India",
    "Small Business Website Package",
    "Website Starting ₹7499",
    "Website Design EMI Plans",
    "Anniversary Website Offer Kerala",
    "Premium Website Kerala",
    "Website EMI Thiruvananthapuram",
    "Website EMI Kochi",
    "Business Website Kerala",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.digitalproductsolutions.in/website-emi-kerala",
  },
  openGraph: {
    title: "Premium Website EMI Offer Kerala | Website Worth ₹16,000 at ₹7,499",
    description:
      "Get a premium business website worth ₹16,000 for only ₹7,499 with 1 year free hosting, responsive design, and EMI options. Offer ends 25/06/2026.",
    images: ["https://www.digitalproductsolutions.in/images/emi-offer-og.jpg"],
    url: "https://www.digitalproductsolutions.in/website-emi-kerala",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anniversary Website EMI Offer Kerala | ₹7,499",
    description:
      "Premium business website worth ₹16,000 at ₹7,499. 1 Year free hosting. EMI from ₹1000. Offer ends 25/06/2026.",
    images: ["https://www.digitalproductsolutions.in/images/emi-offer-og.jpg"],
  },
};

export default function EMIPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium Business Website Package – Anniversary Offer",
    description:
      "Premium business website worth ₹16,000 available at ₹7,499. Includes 1 year free hosting, responsive design, WhatsApp integration, SEO setup and flexible EMI options. Offer valid till 25/06/2026.",
    offers: {
      "@type": "Offer",
      price: "7499",
      priceCurrency: "INR",
      availability: "https://schema.org/LimitedAvailability",
      priceValidUntil: "2026-06-25",
      url: "https://www.digitalproductsolutions.in/website-emi-kerala",
    },
    brand: {
      "@type": "Organization",
      name: "Digital Product Solutions",
      url: "https://www.digitalproductsolutions.in",
      telephone: "+919400355185",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EMIPageClient />
    </>
  );
}