import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title:
    "Best Digital Marketing Company & AI SEO Agency in Kollam | Pricing from ₹3,000/mo",
  description:
    "Partner with the best digital marketing company, AI SEO agency & digital marketing expert in Kollam, Kerala. Transparent digital marketing pricing in Kollam from ₹3,000/mo — SEO, Google Ads, WhatsApp automation & Next.js websites.",
  path: "/digital-marketing-kollam",
  absoluteTitle: true,
  keywords: [
    "digital marketing in kollam",
    "digital marketing company in kollam",
    "digital marketing agency in kollam",
    "best digital marketing expert in kollam",
    "best digital marketer in kollam",
    "digital marketing expert in kollam",
    "freelance digital marketer in kollam",
    "ai seo agency in kollam",
    "digital marketing pricing in kollam",
    "digital marketing strategist in kollam",
    "digital marketing kollam",
  ],
});

export default function DigitalMarketingKollamPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing & AI SEO Agency in Kollam",
    provider: {
      "@type": "LocalBusiness",
      name: "Digital Product Solutions",
      url: "https://www.digitalproductsolutions.in",
      telephone: "+919400355185",
      priceRange: "₹3000 - ₹15000",
    },
    areaServed: ["Kollam", "Karunagappally", "Kottarakkara", "Punalur", "Paravur", "Kerala"],
    description:
      "AI SEO, Google Ads, social media marketing, WhatsApp automation, and fast Next.js website development for businesses in Kollam, Kerala.",
    offers: {
      "@type": "Offer",
      price: "3000",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the digital marketing pricing in Kollam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our transparent digital marketing pricing in Kollam starts at ₹3,000/month for Social Media & Local Presence, ₹5,000/month for Local SEO & AI SEO optimization, and ₹10,000/month for full-funnel Google Ads, Meta Ads & WhatsApp lead automation.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best digital marketing expert and AI SEO agency in Kollam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital Product Solutions, led by Founder & AI/SEO Consultant Adarsh B S, serves Kollam businesses directly from our Trivandrum/Korani engineering hub (just 45 minutes from Kollam district border). You work directly with the digital marketing strategist and engineer rather than junior account managers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer freelance-style direct access for Kollam businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — businesses searching for a freelance digital marketer in Kollam choose us because we combine direct 1-on-1 strategist access on WhatsApp (+91 94003 55185) with the full engineering power of a 9-member software and AI automation team.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.digitalproductsolutions.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Marketing Kollam",
        item: "https://www.digitalproductsolutions.in/digital-marketing-kollam",
      },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold">
            Digital Marketing Company &amp; AI SEO Agency — Kollam, Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best Digital Marketing &amp;{" "}
            <span className="text-emerald-600">AI SEO Agency in Kollam</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Work directly with a proven{" "}
            <strong>digital marketing expert and AI SEO specialist in Kollam</strong>{" "}
            (<Link href="/adarsh-b-s" className="text-emerald-700 underline">Adarsh B S</Link>).
            From Google Maps 3-Pack rankings and AI search optimization to
            high-converting Google Ads and WhatsApp automation — we help businesses
            across <strong>Kollam, Karunagappally, Kottarakkara, Paravur &amp; Punalur</strong>{" "}
            scale leads with transparent pricing starting at{" "}
            <strong>₹3,000/month</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg"
            >
              Get Free Kollam SEO &amp; Ads Audit
            </Link>
            <Link
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20help%20with%20Digital%20Marketing%20in%20Kollam"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Strategist Directly
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              AI SEO &amp; Digital Marketing Services in Kollam
            </h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "AI SEO Agency in Kollam — Rank on Google, ChatGPT & AI Overviews",
                "Local SEO & Google Business Profile (Maps 3-Pack for Kollam)",
                "Google Search Ads & Meta (Instagram/Facebook) Lead Generation",
                "WhatsApp Business API & AI Chatbot Lead Qualification",
                "High-Speed Next.js Website & E-Commerce Store Development",
                "Direct Access to Digital Marketing Strategist (No Middlemen)",
                "Monthly Google Search Console Impressions & Conversion Reports",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Transparent Digital Marketing Pricing in Kollam
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    1. Social &amp; Local Presence Starter
                  </h3>
                  <span className="text-emerald-700 font-extrabold text-lg">
                    ₹3,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Google Business Profile weekly updates, local citation
                  management, and social channel optimization for Kollam shops
                  &amp; clinics.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    2. Kollam Local SEO &amp; AI SEO Plan
                  </h3>
                  <span className="text-emerald-700 font-extrabold text-lg">
                    ₹5,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Full on-page &amp; technical SEO, Kollam keyword targeting,
                  JSON-LD schema, AI search optimization (GEO), and Search
                  Console tracking.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    3. Full-Funnel Ads + SEO + WhatsApp CRM
                  </h3>
                  <span className="text-emerald-700 font-extrabold text-lg">
                    ₹10,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Google Search Ads + Meta lead ads + Local SEO + automated
                  WhatsApp lead capture for hospitals, builders, hospitality
                  &amp; retail in Kollam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Frequently Asked Questions — Digital Marketing in Kollam
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "What is the digital marketing pricing in Kollam?",
                a: "Our transparent digital marketing pricing in Kollam starts at ₹3,000/month for Social Media & Local Presence, ₹5,000/month for Local SEO & AI SEO optimization, and ₹10,000/month for full-funnel Google Ads, Meta Ads & WhatsApp lead automation.",
              },
              {
                q: "Who is the best digital marketing expert and AI SEO agency in Kollam?",
                a: "Digital Product Solutions, led by Founder & AI/SEO Consultant Adarsh B S, serves Kollam businesses directly from our Korani/Attingal border hub (just 35–45 minutes from Kollam). You work directly with the digital marketing strategist and engineer rather than junior account managers.",
              },
              {
                q: "Do you offer freelance-style direct access for Kollam businesses?",
                a: "Yes — businesses searching for a freelance digital marketer in Kollam choose us because we combine direct 1-on-1 strategist access on WhatsApp (+91 94003 55185) with the full engineering power of a 9-member software and AI automation team.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Explore More Kerala Cities We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: "Trivandrum", href: "/digital-marketing-trivandrum" },
              { city: "Kollam", href: "/digital-marketing-kollam" },
              { city: "Kozhikode", href: "/digital-marketing-kozhikode" },
              { city: "Kannur", href: "/seo-services-kannur" },
              { city: "Kottayam", href: "/web-development-kottayam" },
              { city: "Palakkad", href: "/web-development-palakkad" },
            ].map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 transition text-sm font-medium text-gray-700 hover:text-emerald-600"
              >
                <span>📍</span>
                {c.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            All Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/seo-services", icon: "🔍", title: "SEO Services Kerala" },
              { href: "/local-seo-kerala", icon: "📍", title: "Local SEO Kerala" },
              {
                href: "/software-development",
                icon: "💻",
                title: "Software Development",
              },
              { href: "/app-development-kerala", icon: "📱", title: "App Development Kerala" },
              {
                href: "/ai-chatbot-development-kerala",
                icon: "🤖",
                title: "AI Chatbot Development",
              },
              {
                href: "/whatsapp-automation-kerala",
                icon: "💬",
                title: "WhatsApp Automation",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 transition group"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-gray-700 group-hover:text-emerald-600">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-emerald-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">
            Starting at &#8377;3,000/month
          </h2>
          <p className="mb-8 text-emerald-100 text-lg">
            📍 Serving Kollam, Karunagappally, Kottarakkara &amp; All of Kerala
            &middot; Reply within 2 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-emerald-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="tel:+919400355185"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-emerald-500 text-white border border-white/30 hover:bg-emerald-400 transition-all duration-300"
            >
              📞 Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
