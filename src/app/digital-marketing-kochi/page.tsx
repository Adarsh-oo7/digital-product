import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Digital Marketing & AI SEO Agency Kochi | From ₹3,000/mo",
  description:
    "ROI-focused digital marketing, Google Ads & AI SEO agency in Kochi (Kakkanad, Edappally, Aluva & Ernakulam). Local Maps 3-Pack & lead generation from ₹3,000/mo.",
  path: "/digital-marketing-kochi",
  absoluteTitle: true,
  keywords: [
    "digital marketing agency in kochi",
    "digital marketing company in kochi",
    "seo company in kochi",
    "google ads agency kochi",
    "social media marketing agency in kochi",
    "digital marketing agency in kochi aluva",
    "online marketing agency in kochi",
    "ai seo agency kochi",
  ],
});

export default function DigitalMarketingKochiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing & AI SEO Agency in Kochi",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["Kochi", "Ernakulam", "Aluva", "Kakkanad", "Edappally", "Vyttila", "Kerala"],
    description:
      "Google Ads, Local Maps SEO, AI SEO (GEO), social media marketing, and WhatsApp lead automation for Kochi businesses from ₹3,000/mo.",
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
        name: "How much do digital marketing services cost in Kochi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our digital marketing plans for Kochi businesses start at ₹3,000/month for Social Media & Local Presence, ₹5,000/month for Technical & Local Google Maps SEO, and ₹10,000/month for managed Google Search Ads, Meta Ads & WhatsApp lead capture.",
        },
      },
      {
        "@type": "Question",
        name: "Can you rank my Kochi business in Google Maps 3-Pack and ChatGPT / AI Overviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We optimize your Google Business Profile, local Ernakulam citations, LocalBusiness/FAQPage JSON-LD schema, and llms.txt entity signals — backed by 189,800+ verified Google Search Console impressions across our active portfolio.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle Google Ads and WhatsApp lead automation for Kochi clinics and real estate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build high-converting landing pages paired with Google Search Ads and instant WhatsApp Cloud API auto-responders so every Kochi enquiry is qualified in seconds.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "SEO Services Kerala", item: `${SITE_URL}/seo-services` },
      { "@type": "ListItem", position: 3, name: "Digital Marketing Kochi", item: `${SITE_URL}/digital-marketing-kochi` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Kochi &amp; Ernakulam Growth Agency · Verified 189,800+ GSC Impressions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Marketing &amp;{" "}
            <span className="text-emerald-600">AI SEO Agency in Kochi</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stop paying Kochi marketing agencies for vanity likes. Digital Product Solutions pairs{" "}
            <strong>Technical &amp; AI SEO, Google Maps 3-Pack domination, Google Search Ads, and
            WhatsApp lead automation</strong> starting at <strong>₹3,000/month</strong> — engineered
            for real enquiries across Kochi, Kakkanad, Edappally, Aluva, and Vyttila.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg"
            >
              Request Free Kochi SEO Audit
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20digital%20marketing%20%26%20SEO%20for%20my%20Kochi%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp SEO Strategist
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "AI SEO & Google Maps 3-Pack",
              price: "From ₹5,000 / month",
              desc: "Rank for 'near me' & Kochi city keywords across Google Search, Google Maps, ChatGPT & Perplexity with schema + Core Web Vitals.",
            },
            {
              title: "Google Ads & Meta Lead Gen",
              price: "From ₹10,000 / month",
              desc: "High-intent Search & Instagram campaigns with dedicated landing pages and GA4 WhatsApp/call conversion tracking.",
            },
            {
              title: "WhatsApp Automation & CRM",
              price: "From ₹10,000 one-time",
              desc: "24/7 AI WhatsApp bots that qualify Kochi prospects, send brochures/pricing, and book appointments automatically.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <div className="text-sm font-bold text-emerald-600 mb-2">{item.price}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kochi Industries We Help Rank #1
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We build high-intent search &amp; ad funnels for <strong>dental &amp; fertility clinics
            in Panampilly Nagar</strong>, <strong>builders &amp; interior designers in Kakkanad &amp;
            Vyttila</strong>, <strong>hotels &amp; resorts in Fort Kochi</strong>, and{" "}
            <strong>B2B exporters &amp; retail brands in Aluva &amp; Edappally</strong>.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/web-development-kochi" className="px-4 py-2 bg-white rounded-full border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-100">
              Web Development Company in Kochi →
            </Link>
            <Link href="/seo-services" className="px-4 py-2 bg-white rounded-full border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-100">
              Best SEO &amp; AI SEO Company Kerala →
            </Link>
            <Link href="/google-ads-management-kerala" className="px-4 py-2 bg-white rounded-full border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-100">
              Google Ads Management Kerala →
            </Link>
            <Link href="/local-seo-kerala" className="px-4 py-2 bg-white rounded-full border border-emerald-200 text-emerald-700 font-medium hover:bg-emerald-100">
              Local Maps SEO Kerala →
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
