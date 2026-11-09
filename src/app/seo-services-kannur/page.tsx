import { pageMetadata } from "@/lib/seo";
﻿import Link from "next/link";

export const metadata = pageMetadata({
  title: "SEO Company & Agency in Kannur | AI SEO Services Kannur",
  description:
    "Top SEO company & AI SEO agency in Kannur, Kerala. Local Google Maps SEO, technical SEO & website ranking backed by 189,800+ GSC impressions. From ₹5,000/mo.",
  path: "/seo-services-kannur",
  absoluteTitle: true,
  keywords: [
    "seo company kannur",
    "seo agency kannur",
    "seo services in kannur",
    "seo services kannur",
    "ai seo agency in kannur",
    "best seo company in kannur",
    "local seo kannur",
  ],
});

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Digital Product Solutions",
    url: "https://www.digitalproductsolutions.in",
    telephone: "+919400355185",
    areaServed: ["Kannur", "Kerala"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "NH 66, Korani",
      addressLocality: "Thiruvananthapuram",
      postalCode: "695104",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best SEO company and SEO agency in Kannur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital Product Solutions provides engineering-led SEO services in Kannur, backed by 189,800+ verified Google Search Console impressions and 6,380+ organic clicks across client properties. We deliver local Google Business Profile (Maps) optimization, technical Next.js SEO, and AI search visibility (GEO) starting from ₹5,000/month.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer AI SEO agency services in Kannur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. As an AI SEO agency serving Kannur and North Malabar businesses, we implement structured JSON-LD entity schemas, llms.txt documentation, and automated Google Indexing API & Bing IndexNow pipelines so your Kannur business ranks on Google Search, Google Maps, and AI assistants like ChatGPT and Perplexity.",
        },
      },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            SEO Company &amp; AI SEO Agency — Kannur, Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SEO Company &amp; Agency in <span className="text-green-600">Kannur</span>
            <br />AI SEO &amp; Google Ranking Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with a proven <strong>SEO company and AI SEO agency in Kannur, Kerala</strong>. From local Google Business Profile (Maps) ranking and technical SEO to Next.js web development and WhatsApp automation — we help Kannur businesses dominate local search starting from <strong>₹5,000/month</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20help%20with%20SEO%20Services%20in%20Kannur" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              WhatsApp Now
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Services We Offer in Kannur</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "SEO & Google Rankings",
                "Website Design & Development",
                "Mobile App Development",
                "WhatsApp Automation",
                "AI Chatbots",
                "Social Media Management",
                "Google & Meta Ads",
                "Business Automation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Kannur Businesses Choose Us</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Kerala-based team that understands local markets",
                "Low competition in Kannur — rank faster",
                "Fast delivery — 7 days average",
                "Talk directly to the developer",
                "Transparent pricing from ₹5,000/month",
                "Proven results for 20+ Kerala businesses"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20 bg-green-50 border border-green-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore More Kerala Cities We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: "Trivandrum", href: "/digital-marketing-trivandrum" },
              { city: "Kollam", href: "/digital-marketing-kollam" },
              { city: "Kozhikode", href: "/digital-marketing-kozhikode" },
              { city: "Kannur", href: "/seo-services-kannur" },
              { city: "Kottayam", href: "/web-development-kottayam" },
              { city: "Palakkad", href: "/web-development-palakkad" },
            ].map((c, i) => (
              <Link key={i} href={c.href} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition text-sm font-medium text-gray-700 hover:text-green-600">
                <span>📍</span>{c.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">All Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/seo-services", icon: "🔍", title: "SEO Services Kerala" },
              { href: "/local-seo-kerala", icon: "📍", title: "Local SEO Kerala" },
              { href: "/software-development", icon: "💻", title: "Software Development" },
              { href: "/app-development", icon: "📱", title: "App Development" },
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "AI Chatbot Development" },
              { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp Automation" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-gray-700 group-hover:text-green-600">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-green-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;5,000/month</h2>
          <p className="mb-8 text-green-100 text-lg">
            📍 Serving Kannur &amp; All of Kerala &middot; Reply within 2 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-green-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="tel:+919400355185" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-green-500 text-white border border-white/30 hover:bg-green-400 transition-all duration-300">
              📞 Call Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
