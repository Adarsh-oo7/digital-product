import Link from "next/link";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";
import OverseasCaseStudiesShowcase from "@/components/seo/OverseasCaseStudiesShowcase";

export const metadata = pageMetadata({
  title: "Shopify Development Company in Kerala | Store Setup & Custom Themes",
  description:
    "Best Shopify development company in Kerala & India. Custom Shopify & headless Next.js stores with Razorpay, Shiprocket, Tabby/Tamara & WhatsApp from ₹15,000 ($299).",
  path: "/shopify-development-company-kerala",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "shopify development company in kerala",
    "shopify website development company in kerala",
    "shopify developer kerala",
    "best shopify developers in kerala",
    "shopify development in kerala",
    "shopify developer charges kerala",
    "hire shopify developers india",
    "shopify agency dubai kerala",
  ],
});

export default function ShopifyDevelopmentKeralaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shopify & D2C E-Commerce Development Company in Kerala",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kerala", "United Arab Emirates", "Saudi Arabia", "United Kingdom", "Australia"],
    description:
      "End-to-end Shopify store setup, custom Liquid/Hydrogen themes, Razorpay/Shiprocket/Tabby integrations, and E-Commerce SEO for Kerala & GCC brands.",
    offers: {
      "@type": "Offer",
      price: "15000",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are your Shopify developer charges in Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Shopify store development packages in Kerala start at ₹15,000 ($299) for a complete conversion-optimized store setup (payment gateway, shipping, 25 products, WhatsApp cart recovery), and ₹30,000–₹65,000 for custom Liquid/Headless Next.js themes, multi-currency (INR/AED/SAR/GBP/AUD), and ERP/POS sync.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose Shopify, WooCommerce, or Custom Next.js for my Kerala or GCC store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose Shopify if you want zero server maintenance and instant global checkout (Tabby, Tamara, Stripe, Razorpay). Choose WooCommerce or Custom Next.js if you want zero monthly platform subscription fees and 100% custom backend workflows. Our Kerala team builds all three.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "E-Commerce Development", item: `${SITE_URL}/ecommerce-website-development-kerala` },
      { "@type": "ListItem", position: 3, name: "Shopify Development Kerala", item: `${SITE_URL}/shopify-development-company-kerala` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Shopify &amp; D2C E-Commerce Experts · Kerala, UAE, Saudi Arabia, UK &amp; Australia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Shopify Development Company in{" "}
            <span className="text-green-600">Kerala &amp; Global Markets</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hire experienced <strong>Shopify developers in Kerala</strong> (Trivandrum &amp; Kochi)
            to launch high-converting D2C stores. We configure{" "}
            <strong>custom Liquid &amp; headless Next.js themes, Razorpay/UPI, Shiprocket, GCC
            Tabby/Tamara/PayTabs, WhatsApp abandoned-cart recovery, and Product JSON-LD SEO</strong>{" "}
            starting at <strong>₹15,000 ($299)</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Get Free Shopify Store Estimate
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20to%20build%20a%20Shopify%20store"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Shopify Architect
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              title: "Starter Shopify Launch",
              price: "₹15,000 ($299) · 5–7 Days",
              desc: "Premium theme customization, Razorpay/Stripe/UPI checkout, Shiprocket delivery sync, WhatsApp chat & 25 products.",
            },
            {
              title: "Custom D2C & GCC Shopify",
              price: "₹30,000 ($599) · 10–14 Days",
              desc: "Bilingual English/Arabic RTL support, Tabby/Tamara BNPL, automated WhatsApp cart recovery & E-Commerce SEO schema.",
            },
            {
              title: "Headless Shopify + ERP/POS",
              price: "₹55,000+ ($1,100+)",
              desc: "Next.js Hydrogen storefront, Odoo ERP or retail POS inventory sync, and custom B2B wholesale pricing tiers.",
            },
          ].map((pkg) => (
            <div key={pkg.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-sm font-bold text-green-600 mb-2">{pkg.price}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>

        <OverseasCaseStudiesShowcase regionLabel="D2C Brands in Kerala, UAE, Saudi Arabia, UK & Australia" />

        <div className="space-y-4 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((f) => (
            <div key={f.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{f.name}</h3>
              <p className="text-gray-600 text-sm">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
