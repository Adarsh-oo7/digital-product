import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";
import OverseasCaseStudiesShowcase from "@/components/seo/OverseasCaseStudiesShowcase";

export const metadata = pageMetadata({
  title: "Web & Software Company Malappuram, Kottakkal & Perinthalmanna",
  description:
    "Web development, software & digital marketing company in Malappuram, Perinthalmanna, Kottakkal, Manjeri & Tirur. Websites, hospital/Ayurveda portals & POS from ₹5,000.",
  path: "/web-development-malappuram",
  absoluteTitle: true,
  keywords: [
    "web development company in malappuram",
    "website development company in malappuram",
    "web design company in malappuram",
    "best web development company in malappuram",
    "web development company perinthalmanna",
    "software company in malappuram",
    "it company in malappuram",
    "digital marketing and software development company in malappuram",
    "web development kottakkal manjeri tirur",
  ],
});

export default function WebDevelopmentMalappuramPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web, Software & Digital Marketing Company in Malappuram, Kottakkal & Perinthalmanna",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: [
      "Malappuram",
      "Perinthalmanna",
      "Kottakkal",
      "Manjeri",
      "Tirur",
      "Nilambur",
      "Ponnani",
      "Kondotty",
      "Edappal",
      "Kerala",
    ],
    description:
      "Custom Next.js websites, e-commerce stores, hospital & Ayurveda portals, supermarket POS billing, and GCC/NRI business software for Malappuram district from ₹5,000.",
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website or software development cost in Malappuram, Kottakkal, or Perinthalmanna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business websites start at ₹5,000–₹8,000 (3–5 days), corporate/hospital/college websites cost ₹10,000–₹18,000, and custom e-commerce stores, POS billing, or CRM software start at ₹15,000–₹35,000+ with 100% source-code ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build websites and ERP/POS systems for GCC/NRI-owned businesses in Malappuram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many entrepreneurs in Malappuram, Kottakkal, Tirur, and Perinthalmanna run businesses across both Kerala and the GCC (Dubai, Riyadh, Doha, Muscat). We build multi-branch POS, Arabic/English RTL websites, and WhatsApp Cloud API automation supporting both INR and GCC operations.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Website Development Kerala", item: `${SITE_URL}/website-development-kerala` },
      { "@type": "ListItem", position: 3, name: "Web Development Malappuram", item: `${SITE_URL}/web-development-malappuram` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Malappuram · Perinthalmanna · Kottakkal · Manjeri · Tirur · Nilambur
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Web &amp; Software Development Company in{" "}
            <span className="text-emerald-600">Malappuram, Kottakkal &amp; Perinthalmanna</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engineered for Malappuram&apos;s fastest-growing sectors —{" "}
            <strong>multi-specialty hospitals &amp; Kottakkal Ayurveda clinics, supermarkets &amp;
            hypermarkets, jewellery &amp; furniture showrooms, and GCC/NRI enterprises</strong>.
            Launch fast Next.js websites, POS billing, and AI WhatsApp automation starting at{" "}
            <strong>₹5,000</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg"
            >
              Get Free Malappuram Project Quote
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20a%20website%20or%20software%20in%20Malappuram"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Senior Engineer
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              title: "Kottakkal & Perinthalmanna Healthcare",
              href: "/hospital-website-development-kerala",
              desc: "Ayurvedic wellness centers, hospitals & dental clinics — doctor booking, international patient SEO & WhatsApp bots.",
            },
            {
              title: "Supermarket & Pharmacy POS",
              href: "/supermarket-pharmacy-billing-software-kerala",
              desc: "Fast barcode GST billing, batch/expiry medicine tracking, and multi-branch inventory for Tirur & Manjeri retailers.",
            },
            {
              title: "Furniture, Gold & Retail E-Commerce",
              href: "/ecommerce-website-development-kerala",
              desc: "High-speed Razorpay/UPI & WhatsApp catalogue websites for showrooms across Nilambur, Edappal & Kondotty.",
            },
            {
              title: "GCC & NRI Business Systems",
              href: "/gcc",
              desc: "Bilingual English/Arabic websites, ZATCA/VAT ERP, and cross-border dashboards for Kerala-GCC business owners.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-emerald-300 transition block"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <span className="text-xs font-semibold text-emerald-700">Explore Solution →</span>
            </Link>
          ))}
        </div>

        <OverseasCaseStudiesShowcase regionLabel="Malappuram, Kerala & GCC Entrepreneurs" />

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
