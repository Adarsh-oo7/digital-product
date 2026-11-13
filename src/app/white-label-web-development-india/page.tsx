import Link from "next/link";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "White Label Web & App Development Agency India | NDA Partner",
  description:
    "Confidential white-label web, Next.js, WordPress, Flutter & AI development partner in India (Kerala) for US, UK, UAE & Australian agencies. From $15/hr under strict NDA.",
  path: "/white-label-web-development-india",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "white label web development agency in india",
    "white label web development services in india",
    "white label software development india",
    "white label wordpress development india",
    "outsource agency web development india",
    "offshore white label partner kerala",
  ],
});

export default function WhiteLabelIndiaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label Web, Software & AI Development Partner in India",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["United States", "United Kingdom", "Australia", "United Arab Emirates", "Canada", "Germany"],
    description:
      "NDA-protected white-label Next.js, WordPress/WooCommerce, Flutter, CRM, and Technical SEO fulfillment for overseas digital agencies.",
    offers: {
      "@type": "Offer",
      price: "15",
      priceCurrency: "USD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does your white-label partnership work for overseas agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We sign a strict mutual NDA and non-solicitation agreement, build under your agency's brand and Git/staging URLs, and never contact your end clients. You keep 100% of the client relationship and agency margin.",
        },
      },
      {
        "@type": "Question",
        name: "What tech stacks do you fulfill on a white-label basis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js / React, WordPress & WooCommerce, Shopify, Flutter mobile apps, Node.js / Python / PostgreSQL backends, Odoo ERP, WhatsApp AI chatbots, and Technical SEO / Core Web Vitals optimization.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Outsource India", item: `${SITE_URL}/outsource-software-development-india` },
      { "@type": "ListItem", position: 3, name: "White Label Web Development India", item: `${SITE_URL}/white-label-web-development-india` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            For US, UK, UAE &amp; Australian Agencies · 100% NDA &amp; Non-Solicitation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            White-Label Web &amp; Software Partner in{" "}
            <span className="text-purple-600">India (Kerala)</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scale your agency&apos;s delivery capacity without hiring full-time local payroll. Our
            9-person engineering team in Kerala builds your clients&apos;{" "}
            <strong>Next.js websites, WooCommerce stores, Flutter apps, CRMs &amp; AI bots</strong>{" "}
            confidentially under your brand — at <strong>$15/hr</strong> or fixed white-label
            project pricing.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg"
            >
              Request White-Label Rate Card &amp; NDA
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20run%20an%20agency%20outside%20India%20and%20need%20a%20white-label%20development%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { title: "Zero Client-Poaching Guarantee", desc: "Mutual NDA + strict non-solicitation. We work via your Slack/email or private staging links with zero DPS branding." },
            { title: "95+ Core Web Vitals Standard", desc: "Every white-label Next.js or WordPress build passes strict mobile speed, Technical SEO, and schema QA before handover." },
            { title: "60%+ Agency Margin", desc: "Predictable fixed-scope quotes or dedicated monthly pods so you sell at local US/UK/AU/UAE rates and keep healthy margins." },
          ].map((c) => (
            <div key={c.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h2>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
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
