import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Website & Software Agency Attingal, Korani & Technopark",
  description:
    "Registered IT & web development agency at NH 66, Korani (Attingal–Kazhakootam–Technopark corridor). Websites from ₹5,000, local SEO & custom apps. Visit our office.",
  path: "/website-development-attingal",
  absoluteTitle: true,
  keywords: [
    "website development attingal",
    "web designer near attingal",
    "digital marketing agency in attingal",
    "software company near technopark",
    "web development kazhakootam",
    "web developer varkala",
    "it company korani trivandrum",
    "seo company attingal",
  ],
});

export default function WebsiteDevelopmentAttingalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website, Software & Digital Marketing in Attingal, Korani & Technopark",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.latitude,
        longitude: business.longitude,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        addressLocality: business.addressLocality,
        addressRegion: business.addressRegion,
        postalCode: business.postalCode,
        addressCountry: business.addressCountry,
      },
    },
    areaServed: [
      "Attingal",
      "Korani",
      "Kazhakootam",
      "Technopark Trivandrum",
      "Varkala",
      "Pothencode",
      "Kilimanoor",
      "Chirayinkeezhu",
    ],
    description:
      "In-person & WhatsApp-direct website development, SEO, and custom software engineering headquartered at NH 66, Korani near Attingal and Technopark.",
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
        name: "Where is Digital Product Solutions located near Attingal and Technopark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our office is located directly on NH 66, Korani, Thiruvananthapuram, Kerala 695104 — just 5 minutes from Attingal town and 15 minutes from Kazhakootam / Technopark. Clients from Attingal, Varkala, Pothencode, and Trivandrum can meet our developers in person.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a business website cost near Attingal or Varkala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter business websites cost ₹5,000–₹8,000 (delivered in 3–5 days), growth corporate sites cost ₹10,000–₹18,000, and Local SEO / Google Maps optimization starts at ₹5,000/month.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Trivandrum Services", item: `${SITE_URL}/digital-marketing-trivandrum` },
      { "@type": "ListItem", position: 3, name: "Attingal, Korani & Technopark", item: `${SITE_URL}/website-development-attingal` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            HQ: NH 66, Korani · 5 Min from Attingal · 15 Min from Technopark
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Website &amp; Software Agency in{" "}
            <span className="text-indigo-600">Attingal, Korani &amp; Technopark</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Work face-to-face with a registered 9-member engineering team right on{" "}
            <strong>NH 66, Korani (695104)</strong>. We build websites, e-commerce stores, clinic &amp;
            resort booking systems, and Local Google Maps SEO for businesses in{" "}
            <strong>Attingal, Varkala, Kazhakootam, Technopark, Pothencode &amp; Kilimanoor</strong>{" "}
            starting at <strong>₹5,000</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/book"
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Book In-Office or Call Consultation
            </Link>
            <a
              href={business.mapsPlaceIdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Directions to Korani Office →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Attingal &amp; Kilimanoor Retail</h2>
            <p className="text-sm text-gray-600">
              Showrooms, jewellery, clinics, and supermarkets — fast websites, POS GST billing, and
              Google Maps #1 local pack ranking.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Varkala Resorts &amp; Homestays</h2>
            <p className="text-sm text-gray-600">
              Commission-free direct room booking websites, WhatsApp auto-confirmations, and
              international tourist SEO.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Kazhakootam &amp; Technopark</h2>
            <p className="text-sm text-gray-600">
              Startup MVPs, SaaS portals, AI RAG chatbots, and dedicated Next.js / Flutter
              engineering support.
            </p>
          </div>
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
