import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";
import OverseasCaseStudiesShowcase from "@/components/seo/OverseasCaseStudiesShowcase";

export const metadata = pageMetadata({
  title: "Web Development Company Alappuzha | Resorts, Houseboats & SEO",
  description:
    "Web design, software & SEO company in Alappuzha (Allepey), Cherthala, Kayamkulam & Chengannur. Direct-booking houseboat/resort websites, e-commerce & POS from ₹5,000.",
  path: "/web-development-alappuzha",
  absoluteTitle: true,
  keywords: [
    "web development company in alappuzha",
    "web design company alappuzha",
    "website development alappuzha",
    "houseboat booking website development kerala",
    "resort website development alappuzha",
    "ai seo agency in kayamkulam",
    "software company in alappuzha",
    "web development cherthala chengannur",
  ],
});

export default function WebDevelopmentAlappuzhaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web, Resort Booking & Software Development Company in Alappuzha",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["Alappuzha", "Cherthala", "Kayamkulam", "Chengannur", "Haripad", "Mavelikkara", "Kuttanad", "Kerala"],
    description:
      "Commission-free houseboat & resort booking websites, coir/seafood exporter B2B portals, clinic websites, and Local SEO for Alappuzha businesses from ₹5,000.",
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
        name: "Do you build direct-booking websites for Alappuzha houseboats, homestays, and resorts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build high-speed direct-booking websites with date availability, Razorpay/international card payments, and instant WhatsApp itinerary confirmations so Alappuzha houseboat and resort owners stop losing 18–25% commission to OTAs.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website or SEO package cost in Alappuzha, Cherthala, or Kayamkulam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter business and homestay websites start at ₹5,000–₹8,000 (3–5 days), custom booking or exporter portals cost ₹15,000–₹35,000, and Local Google Maps & AI SEO starts at ₹5,000/month.",
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
      { "@type": "ListItem", position: 3, name: "Web Development Alappuzha", item: `${SITE_URL}/web-development-alappuzha` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-100 text-cyan-800 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Alappuzha (Allepey) · Cherthala · Kayamkulam · Chengannur · Mavelikkara
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Web &amp; Software Development Company in{" "}
            <span className="text-cyan-600">Alappuzha</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From <strong>commission-free houseboat &amp; backwater resort booking engines</strong> to{" "}
            <strong>coir &amp; seafood export B2B websites, hospital portals, and retail POS
            billing</strong> across Alappuzha, Cherthala, Kayamkulam, and Chengannur — starting at{" "}
            <strong>₹5,000</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-cyan-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-cyan-700 transition shadow-lg"
            >
              Get Free Alappuzha Quote
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20a%20website%20for%20my%20business%20in%20Alappuzha"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Senior Engineer
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              title: "Houseboats, Resorts & Homestays",
              href: "/website-development-for-hotels-resorts-kerala",
              desc: "Direct room & cruise booking websites with international SEO (UK, Europe, GCC, Australia tourists) and WhatsApp automation.",
            },
            {
              title: "Coir, Marine & Spice Exporters",
              href: "/manufacturing-website-kerala",
              desc: "Global B2B product catalogues, RFQ inquiry funnels, and multi-currency export trade portals.",
            },
            {
              title: "Kayamkulam & Cherthala Retail & Clinics",
              href: "/clinic-website-development-kerala",
              desc: "Doctor appointment portals, supermarket/pharmacy GST billing, and Google Maps 3-Pack local SEO.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-cyan-300 transition block"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <span className="text-xs font-semibold text-cyan-700">Explore Solution →</span>
            </Link>
          ))}
        </div>

        <OverseasCaseStudiesShowcase regionLabel="Alappuzha Hospitality, Exporters & Enterprises" />

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
