import Link from "next/link";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";
import OverseasCaseStudiesShowcase from "@/components/seo/OverseasCaseStudiesShowcase";

export const metadata = pageMetadata({
  title: "Hire Indian Developers (Kerala) | UK, Australia, UAE & US",
  description:
    "Hire dedicated Indian developers from our registered Kerala engineering agency. Senior Next.js, Flutter, Python, Django & Odoo engineers from $15/hr or $1,800/mo under NDA.",
  path: "/hire-indian-developers",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "hire indian developers",
    "hire indian developers from uk",
    "hire indian developers from australia",
    "hire indian developers from us",
    "hire indian developers from canada",
    "hire indian programmers",
    "hire dedicated developers india",
    "hire kerala developers",
  ],
});

export default function HireIndianDevelopersPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hire Dedicated Indian Developers (Kerala Engineering Agency)",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["United Kingdom", "Australia", "United Arab Emirates", "United States", "Canada", "Saudi Arabia", "Germany", "Singapore"],
    description:
      "Hire dedicated Next.js, React, Flutter, Python/Django, Odoo ERP, and AI developers from Kerala, India at $15–$22/hr or fixed project milestones under NDA.",
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
        name: "How do I hire Indian developers from the UK, Australia, UAE, US, or Canada without freelancer risk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instead of gambling on solo freelancers who may disappear mid-sprint, you contract directly with Digital Product Solutions — a registered 9-person MSME software agency in Kerala, India. You get 1-on-1 Slack/WhatsApp/GitHub access to your assigned senior developer plus team backup and NDA protection.",
        },
      },
      {
        "@type": "Question",
        name: "What is the hourly and monthly rate to hire dedicated Indian developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hourly engagements start at $15–$22/hr (£12–£18/hr, A$23–A$34/hr, AED 55–80/hr), part-time pods (80 hrs/mo) cost $1,100/month, and full-time dedicated senior engineers (160 hrs/mo) cost $1,800–$2,400/month with zero recruitment fees.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Outsource Software India", item: `${SITE_URL}/outsource-software-development-india` },
      { "@type": "ListItem", position: 3, name: "Hire Indian Developers", item: `${SITE_URL}/hire-indian-developers` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Hire Dedicated Developers in India (Kerala) · UK · Australia · UAE · USA · Canada
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hire Senior{" "}
            <span className="text-indigo-600">Indian Developers</span> from Our Kerala Agency
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Searching for how to <strong>hire Indian developers from the UK, Australia, UAE, USA, or
            Canada</strong>? Get freelance-direct communication and pricing (
            <strong>$15–$22/hr</strong> or <strong>$1,800/mo full-time</strong>) backed by a
            registered 9-member Kerala engineering studio with verified live production rankings.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Start a 14-Day Trial Sprint
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20to%20hire%20a%20dedicated%20developer%20from%20your%20Kerala%20team"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Founder &amp; Lead Architect
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              title: "Next.js, React & TypeScript",
              rate: "$15/hr · $1,800/mo",
              desc: "High-speed SaaS frontends, marketing platforms, headless Shopify/WordPress, and Core Web Vitals SEO engineering.",
            },
            {
              title: "Flutter iOS & Android Apps",
              rate: "$16/hr · $1,950/mo",
              desc: "Single-codebase mobile applications with offline sync, push notifications, Stripe/Razorpay, and App Store publishing.",
            },
            {
              title: "Python, Django, Odoo & AI/RAG",
              rate: "$18/hr · $2,200/mo",
              desc: "Custom REST APIs, PostgreSQL, Odoo ERP modules, WhatsApp Cloud API bots, and OpenAI/Gemini RAG agents.",
            },
          ].map((role) => (
            <div key={role.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-sm font-bold text-indigo-600 mb-2">{role.rate}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        <OverseasCaseStudiesShowcase regionLabel="UK, Australian, UAE, Saudi & North American Founders" />

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
