import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Web & Software Development Company Thrissur | From ₹5,000",
  description:
    "Trusted web design & software development company in Thrissur. Websites, e-commerce, jewellery & clinic CRM, and GST POS billing software from ₹5,000.",
  path: "/web-development-thrissur",
  absoluteTitle: true,
  keywords: [
    "web development company in thrissur",
    "best web design company in thrissur",
    "website development company in thrissur",
    "software development company in thrissur",
    "it company in thrissur",
    "best software company in thrissur",
    "jewellery website development thrissur",
    "ecommerce website thrissur",
  ],
});

export default function WebDevelopmentThrissurPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web & Software Development Company in Thrissur",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["Thrissur", "Guruvayur", "Irinjalakuda", "Chalakudy", "Kunnamkulam", "Kodungallur", "Kerala"],
    description:
      "Custom websites, jewellery & retail e-commerce, clinic/hospital portals, and GST billing/CRM software for Thrissur businesses from ₹5,000.",
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
        name: "How much does website or software development cost in Thrissur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business websites in Thrissur start at ₹5,000–₹8,000 (3–5 days), corporate/multi-page sites at ₹10,000–₹18,000, and custom CRM, POS billing, or e-commerce platforms at ₹15,000–₹35,000+ with 100% source-code ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build specialized websites and CRM for Thrissur jewellery, textiles, and clinics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build high-trust catalogue & e-commerce websites for Thrissur jewellery showrooms and textile brands, plus patient appointment websites and WhatsApp follow-up CRMs for clinics and hospitals.",
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
      { "@type": "ListItem", position: 3, name: "Web Development Thrissur", item: `${SITE_URL}/web-development-thrissur` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-800 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Thrissur · Swaraj Round, Guruvayur, Irinjalakuda &amp; Chalakudy
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Web &amp; Software Development Company in{" "}
            <span className="text-amber-600">Thrissur</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built for Thrissur&apos;s highest-growth sectors — <strong>jewellery showrooms, textile
            brands, hospitals, coaching centres, and NRI-funded enterprises</strong>. Get fast Next.js
            websites, custom CRM/ERP software, and local SEO starting at <strong>₹5,000</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-amber-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-700 transition shadow-lg"
            >
              Get Free Thrissur Estimate
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20a%20website%20or%20software%20in%20Thrissur"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Senior Engineer
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Jewellery & Textile Stores", href: "/jewellery-website-kerala", desc: "Gold-rate display, WhatsApp catalogue enquiries & Razorpay e-commerce." },
            { title: "Hospitals & Clinics", href: "/clinic-website-development-kerala", desc: "Doctor schedules, online booking & Google Maps #1 healthcare SEO." },
            { title: "POS & GST Billing Software", href: "/pos-billing-software-kerala", desc: "Multi-branch retail, supermarket & hotel billing with inventory." },
            { title: "Coaching & LMS Portals", href: "/lms-development-company-kerala", desc: "Mock tests, student admission CRM & video course platforms." },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-amber-300 transition block"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <span className="text-xs font-semibold text-amber-700">Explore Solution →</span>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
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
