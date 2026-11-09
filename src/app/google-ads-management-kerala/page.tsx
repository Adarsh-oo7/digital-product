import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Google Ads & PPC Agency in Trivandrum & Kerala | DPS",
  description:
    "ROI-tracked Google Ads & PPC agency in Trivandrum & Kerala. Direct Google Ads expert managing Search, Performance Max & YouTube campaigns from ₹5,000/mo.",
  path: "/google-ads-management-kerala",
  absoluteTitle: true,
  keywords: [
    "google ads agency in trivandrum",
    "ppc in trivandrum",
    "ppc agency kerala",
    "google ads agency in kerala",
    "google ads agency kerala",
    "google advertisement kerala",
    "google ads kerala",
    "google ads services in kerala",
    "google ads expert in kerala",
    "best google ads expert in kerala",
    "google ads consultant trivandrum",
    "google ads consultant kerala",
    "google ads management services in ernakulam",
    "ppc agency trivandrum",
    "google ads kochi",
  ],
});

export default function GoogleAdsManagementKeralaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does Google Ads management cost in Kerala and Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Google Ads management fee in Kerala and Trivandrum starts at ₹5,000/month for starter Search campaigns and ₹10,000/month for multi-campaign Search, Performance Max, and YouTube lead generation (ad spend is paid directly to your own Google Ads account with 100% transparency).",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Digital Product Solutions as your Google Ads agency in Trivandrum & Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike agencies that send paid clicks to slow homepage brochures, our engineering team builds sub-second Next.js landing pages with server-side conversion tracking (GA4 + GTM + WhatsApp click events) so every rupee of Google advertisement spend in Kerala is tracked to a real phone call or WhatsApp lead.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide Google Ads management services in Ernakulam (Kochi), Kollam, and Kozhikode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — from our Trivandrum headquarters, we manage geo-fenced and pin-code targeted Google Ads campaigns across Ernakulam (Kochi), Trivandrum, Kollam, Kozhikode, Thrissur, Kannur, Kottayam, and international markets (Australia, UAE, UK).",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Agency in Kerala & Trivandrum",
    provider: {
      "@type": "LocalBusiness",
      name: "Digital Product Solutions",
      url: "https://www.digitalproductsolutions.in",
      telephone: "+919400355185",
      priceRange: "₹5000 - ₹15000",
    },
    areaServed: [
      "Thiruvananthapuram",
      "Ernakulam",
      "Kochi",
      "Kollam",
      "Kozhikode",
      "Kerala",
    ],
    description:
      "ROI-tracked Google Search Ads, Performance Max, Display, and YouTube ad management in Trivandrum, Kochi (Ernakulam), and across Kerala.",
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "INR",
    },
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
        name: "Google Ads Management Kerala",
        item: "https://www.digitalproductsolutions.in/google-ads-management-kerala",
      },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold">
            Google Ads Agency in Trivandrum, Kochi &amp; Kerala · Direct PPC Consultant
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Google Ads Agency in{" "}
            <span className="text-blue-600">Kerala &amp; Trivandrum</span> —{" "}
            ROI-Tracked PPC Campaigns
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Work directly with an experienced{" "}
            <strong>Google Ads expert and consultant in Kerala</strong> (
            <Link href="/adarsh-b-s" className="text-blue-700 underline">
              Adarsh B S
            </Link>
            ). We engineer high-converting{" "}
            <strong>Google advertisement campaigns in Kerala</strong> — combining
            exact/phrase-match Search intent, negative-keyword hygiene, fast
            Next.js landing pages, and WhatsApp conversion tracking across{" "}
            <strong>
              Trivandrum, Kochi (Ernakulam), Kollam, Kozhikode &amp; Thrissur
            </strong>{" "}
            starting from <strong>₹5,000/month</strong>.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Free Google Ads Audit
            </Link>
            <Link
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20a%20Google%20Ads%20campaign%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Google Ads Consultant
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Google Ads Services in Kerala We Deliver
            </h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "High-Intent Google Search Ads (Call-Only, WhatsApp & Lead Form Extensions)",
                "Geo-Fenced Local Campaigns in Trivandrum, Ernakulam (Kochi), Kollam & Kozhikode",
                "Performance Max & E-Commerce Google Shopping Feed Optimization",
                "Dedicated Sub-Second Next.js Landing Pages (Higher Quality Score & Lower CPC)",
                "GA4 + Google Tag Manager + Enhanced Conversions & WhatsApp Event Tracking",
                "Weekly Negative Keyword Pruning to Eliminate Wasted Click Spend",
                "100% Ad-Account Ownership — You Pay Google Directly, Zero Markup on Ad Spend",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Transparent Google Ads Management Packages
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    1. Local Search Ads Starter
                  </h3>
                  <span className="text-blue-700 font-extrabold text-lg">
                    ₹5,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  1–2 Search/Call campaigns for clinics, local services, or
                  retail in Trivandrum/Kochi. Includes keyword setup, call/WhatsApp
                  tracking &amp; negative keyword cleanup.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    2. Growth PPC + Custom Landing Page
                  </h3>
                  <span className="text-blue-700 font-extrabold text-lg">
                    ₹10,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Multi-campaign Search + Performance Max/Remarketing, custom
                  high-converting landing page, GTM conversion events, and
                  bi-weekly ROAS optimization.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    3. E-Commerce &amp; International Google Ads
                  </h3>
                  <span className="text-blue-700 font-extrabold text-lg">
                    ₹15,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Google Merchant Center feeds, multi-region bidding (India,
                  Australia, UAE, UK), YouTube video action ads, and CRM/WhatsApp
                  API lead routing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Frequently Asked Questions — Google Ads in Kerala
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "How much does Google Ads management cost in Kerala and Trivandrum?",
                a: "Our Google Ads management fee in Kerala and Trivandrum starts at ₹5,000/month for starter Search campaigns and ₹10,000/month for multi-campaign Search, Performance Max, and YouTube lead generation (ad spend is paid directly to your own Google Ads account with 100% transparency).",
              },
              {
                q: "Why choose Digital Product Solutions as your Google Ads agency in Trivandrum & Kerala?",
                a: "Unlike agencies that send paid clicks to slow homepage brochures, our engineering team builds sub-second Next.js landing pages with server-side conversion tracking (GA4 + GTM + WhatsApp click events) so every rupee of Google advertisement spend in Kerala is tracked to a real phone call or WhatsApp lead.",
              },
              {
                q: "Do you provide Google Ads management services in Ernakulam (Kochi), Kollam, and Kozhikode?",
                a: "Yes — from our Trivandrum headquarters, we manage geo-fenced and pin-code targeted Google Ads campaigns across Ernakulam (Kochi), Trivandrum, Kollam, Kozhikode, Thrissur, Kannur, Kottayam, and international markets (Australia, UAE, UK).",
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

        <div className="mb-16 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/seo-services",
                icon: "🔍",
                title: "Best SEO Company in Kerala",
                desc: "Rank on Google organically from ₹5,000/mo",
              },
              {
                href: "/ai-chatbot-development-kerala",
                icon: "🤖",
                title: "AI Chatbot Development",
                desc: "Qualify Google Ads leads 24/7 on WhatsApp",
              },
              {
                href: "/digital-marketing-trivandrum",
                icon: "📈",
                title: "Digital Marketing Trivandrum",
                desc: "Full-stack digital marketing in Trivandrum",
              },
              {
                href: "/adarsh-b-s",
                icon: "👨‍💻",
                title: "Consult with Adarsh B S",
                desc: "Founder, AI Consultant & Search Strategist",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition group"
              >
                <span className="text-blue-600 font-bold text-lg">
                  {item.icon}
                </span>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-blue-600">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-blue-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-4">
            Starting at &#8377;5,000/month
          </h2>
          <p className="mb-8 text-blue-100 text-lg">
            Based in Trivandrum · Serving Kochi (Ernakulam), Kollam &amp; all of
            Kerala · Reply within 2 hours
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-blue-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Get Free Google Ads Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
