import Link from "next/link";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Outsource Software & Web Development to India | Kerala",
  description:
    "Affordable software, web & AI development outsourcing to India (Kerala). Save 60–75% vs US, UK, UAE & Australian agencies — fixed-price from $299 or $15/hr with NDA.",
  path: "/outsource-software-development-india",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "outsource software development to india",
    "outsourcing software development company in india",
    "outsource web development india",
    "offshore web development company india",
    "affordable software development company india",
    "hire dedicated developers in india",
    "cost to hire dedicated developers in india",
    "outsource software development kerala",
    "offshore software development india",
  ],
});

export default function OutsourceSoftwareIndiaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Affordable Offshore Software & Web Development Outsourcing to India (Kerala)",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["United States", "United Kingdom", "United Arab Emirates", "Australia", "Saudi Arabia", "Germany", "Canada", "Singapore"],
    description:
      "Fixed-price and dedicated-developer outsourcing from Kerala, India for startups, SMEs, and agencies in the USA, UK, UAE, GCC, Australia, and Europe.",
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "USD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to outsource a website or software project to India (Kerala)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business websites start at $299–$699 (3–7 days), custom e-commerce or booking portals at $750–$1,800, and custom SaaS/CRM/Flutter mobile apps at $1,500–$4,500+ — typically 60–75% more affordable than local agencies in the USA, UK, UAE, or Australia. Dedicated senior developers are available at $15–$22/hr.",
        },
      },
      {
        "@type": "Question",
        name: "Do I get 100% source code ownership and NDA protection when outsourcing to Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We sign a mutual NDA before discovery, push code directly to your GitHub/GitLab repository, and transfer 100% intellectual property, cloud hosting, and database credentials upon milestone completion.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle timezones and international payments for clients outside India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Kerala team overlaps directly with UAE/GCC (1.5h difference), Australia/Perth (2.5h), UK/Europe (4.5–5.5h), and US East Coast mornings/evenings. We accept Wise, international wire/SWIFT, Stripe, PayPal, and Razorpay International in USD, GBP, AUD, AED, and EUR.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "International Solutions", item: `${SITE_URL}/international-business-digital-solutions` },
      { "@type": "ListItem", position: 3, name: "Outsource Software Development India", item: `${SITE_URL}/outsource-software-development-india` },
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
            Global Outsourcing Hub · Kerala, India · Trusted in Australia, UK, UAE &amp; USA
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Outsource Software &amp; Web Development to{" "}
            <span className="text-blue-600">India (Kerala)</span> at Affordable Rates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build high-performance <strong>Next.js websites, Flutter mobile apps, custom SaaS/CRM,
            and AI chatbots</strong> with a registered 9-person engineering team in Kerala, India.
            Get senior-engineer quality at <strong>60–75% lower cost</strong> than local agencies in
            the USA, UK, UAE, or Australia — starting at <strong>$299 fixed-price</strong> or{" "}
            <strong>$15/hr</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Free Project Quote (USD / GBP / AUD / AED)
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20am%20outside%20India%20and%20want%20to%20outsource%20a%20project%20to%20your%20Kerala%20team"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Lead Engineer
            </a>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100 mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2026 Cost Comparison: Local Overseas Agencies vs Digital Product Solutions (India)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-3 pr-4">Project Type</th>
                  <th className="py-3 pr-4 text-blue-700 font-bold">Our India / Kerala Rate</th>
                  <th className="py-3 pr-4">USA / UK / Australia Agency</th>
                  <th className="py-3">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-3 pr-4 font-medium">High-Speed Business Website (Next.js)</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">$299 – $699 (£240 / A$450 / AED 1,100)</td>
                  <td className="py-3 pr-4">$2,500 – $8,000+</td>
                  <td className="py-3">5 – 10 Days</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">E-Commerce / Booking Store (Stripe / Tabby)</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">$750 – $1,800</td>
                  <td className="py-3 pr-4">$5,000 – $15,000+</td>
                  <td className="py-3">2 – 3 Weeks</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Custom SaaS / CRM / Odoo ERP</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">$1,500 – $4,500+</td>
                  <td className="py-3 pr-4">$15,000 – $60,000+</td>
                  <td className="py-3">3 – 6 Weeks</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Dedicated Senior Developer</td>
                  <td className="py-3 pr-4 font-semibold text-blue-700">$15 – $22 / hr (or Monthly Pod)</td>
                  <td className="py-3 pr-4">$90 – $180 / hr</td>
                  <td className="py-3">Immediate Start</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              title: "Proven International Delivery",
              desc: "Built & ranked Care N Cure Group in Perth, Australia (82,824+ Google Search Console impressions, #1.0 for aged care agencies in WA) plus 20+ live production deployments.",
            },
            {
              title: "Direct Engineer Access + NDA",
              desc: "No bloated sales layers or lost-in-translation handoffs. You speak directly with your architect on WhatsApp/Slack/Zoom, with Git repo access from day one.",
            },
            {
              title: "Timezone & Currency Friendly",
              desc: "Daily overlap with Dubai (GST), London (GMT/BST), Perth/Sydney (AWST/AEST), and US East Coast. Pay via Wise, SWIFT, Stripe, or PayPal in milestones.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore Regional Outsourcing Hubs</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/uae" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">UAE &amp; Dubai Hub →</Link>
            <Link href="/gcc" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">Saudi &amp; GCC Hub →</Link>
            <Link href="/au" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">Australia (Perth/Sydney) →</Link>
            <Link href="/uk" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">UK (London) Hub →</Link>
            <Link href="/white-label-web-development-india" className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-100">White-Label Agency Partner →</Link>
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
