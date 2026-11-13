import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Web Development Company in Kochi | Next.js & E-Commerce",
  description:
    "Top web development & e-commerce website development company in Kochi (Infopark, Kakkanad, Edappally & Ernakulam). Fast Next.js & WooCommerce builds from ₹5,000.",
  path: "/web-development-kochi",
  absoluteTitle: true,
  keywords: [
    "web development company in kochi",
    "website development company in kochi",
    "best web development company in kochi",
    "ecommerce website development company in kochi",
    "web design company in kochi",
    "web application development company in kochi",
    "web development company in ernakulam",
    "nextjs developer kochi",
    "software company in kochi",
  ],
});

export default function WebDevelopmentKochiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web & E-Commerce Development Company in Kochi",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: [
      "Kochi",
      "Ernakulam",
      "Kakkanad",
      "Infopark Kochi",
      "Edappally",
      "Aluva",
      "Panampilly Nagar",
      "Vyttila",
      "Marine Drive Kochi",
    ],
    description:
      "Custom Next.js websites, WooCommerce & Razorpay e-commerce stores, and web applications for Kochi & Ernakulam businesses from ₹5,000.",
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
        name: "How much does website development cost in Kochi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business websites for Kochi & Ernakulam SMEs start at ₹5,000–₹8,000 (1–3 pages, 3–5 days), Growth corporate websites cost ₹10,000–₹18,000 (5–7 pages with Technical SEO), and custom Razorpay/UPI e-commerce stores or web portals start at ₹25,000–₹35,000+.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Digital Product Solutions over large Infopark agencies in Kochi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Large Infopark agencies typically require ₹1,00,000+ minimums, 6–10 week timelines, and route you through junior account managers. We give Kochi businesses direct WhatsApp access to senior engineers, 7-day MVP turnarounds, 95+ Core Web Vitals, and 100% source-code ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build e-commerce websites and mobile apps for Kochi businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build high-speed Next.js and WooCommerce online stores with Razorpay, Cashfree, Shiprocket, and WhatsApp order notifications, as well as Android & iOS mobile apps for retail, clinics, jewellery, and B2B exporters across Ernakulam.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Web Development Kerala", item: `${SITE_URL}/website-development-kerala` },
      { "@type": "ListItem", position: 3, name: "Web Development Kochi", item: `${SITE_URL}/web-development-kochi` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Kochi &amp; Ernakulam · Infopark, Kakkanad, Edappally &amp; Panampilly Nagar
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Web Development Company in{" "}
            <span className="text-blue-600">Kochi &amp; Ernakulam</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for a reliable{" "}
            <strong>website &amp; e-commerce development company in Kochi</strong> without Infopark
            enterprise retainers? Digital Product Solutions engineers sub-second Next.js websites,
            Razorpay/UPI online stores, and custom web apps for Ernakulam businesses — starting at{" "}
            <strong>₹5,000</strong> with direct senior-engineer WhatsApp access.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Free Kochi Project Estimate
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20a%20website%20for%20my%20business%20in%20Kochi"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Engineer Directly
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Business & Corporate Websites",
              price: "₹5,000 – ₹18,000",
              desc: "High-speed Next.js sites for Kochi clinics, law firms, builders, logistics & service companies with Google Maps & Technical SEO built in.",
            },
            {
              title: "E-Commerce & D2C Storefronts",
              price: "₹25,000 – ₹55,000",
              desc: "Custom Next.js or WooCommerce stores with Razorpay, UPI, Shiprocket shipping, GST invoicing, and WhatsApp order alerts.",
            },
            {
              title: "Custom Web Apps & Odoo / CRM",
              price: "₹15,000 – ₹75,000+",
              desc: "Bespoke portals, booking engines, B2B dealer dashboards, and WhatsApp Cloud API automation for Ernakulam enterprises.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <div className="text-sm font-bold text-blue-600 mb-2">{card.price}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Digital Product Solutions vs Kochi Infopark Agencies vs Freelancers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-3 pr-4">Criteria</th>
                  <th className="py-3 pr-4 text-blue-700 font-bold">Digital Product Solutions</th>
                  <th className="py-3 pr-4">Large Kochi / Infopark Firms</th>
                  <th className="py-3">Solo Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-3 pr-4 font-medium">Website Starting Price</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">₹5,000 – ₹18,000 (Published)</td>
                  <td className="py-3 pr-4">₹60,000 – ₹2,50,000+</td>
                  <td className="py-3">₹4,000 – ₹15,000 (Unverified)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Launch Timeline</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">3 – 10 Days</td>
                  <td className="py-3 pr-4">4 – 10 Weeks</td>
                  <td className="py-3">Unpredictable</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Core Web Vitals &amp; SEO</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">Next.js 95+ Speed + JSON-LD</td>
                  <td className="py-3 pr-4">Extra Retainer Fee</td>
                  <td className="py-3">Slow Template Themes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Code &amp; Domain Ownership</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">100% Client Owned</td>
                  <td className="py-3 pr-4">Contract Dependent</td>
                  <td className="py-3">Often Locked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serving Every Business Hub in Ernakulam &amp; Kochi
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Whether you run a dental clinic in <strong>Panampilly Nagar</strong>, a boutique or
            restaurant in <strong>Fort Kochi &amp; Edappally</strong>, a logistics or marine export
            business near <strong>Willingdon Island &amp; Marine Drive</strong>, or a SaaS startup in{" "}
            <strong>Kakkanad / Infopark</strong>, our Kerala engineering team delivers fast,
            SEO-ranked web systems with transparent milestones.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/digital-marketing-kochi" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">
              Digital Marketing &amp; SEO in Kochi →
            </Link>
            <Link href="/app-development-kerala" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">
              Android &amp; iOS App Development Cochin →
            </Link>
            <Link href="/ecommerce-website-development-kerala" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">
              E-Commerce Development Kerala →
            </Link>
            <Link href="/website-cost-calculator" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">
              Website Cost Calculator →
            </Link>
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
