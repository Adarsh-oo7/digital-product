import Link from "next/link";

export const metadata = {
  title: "Website Development for Builders & Real Estate in Kerala | Digital Product Solutions",
  description: "Professional real estate & builder website development in Kerala. Property listings, virtual tours, EMI calculator & CRM for lead management. Starting ₹35,000.",
  keywords: "real estate website development Kerala, builder website Kerala, property website Trivandrum, real estate CRM Kerala, developer website Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/real-estate-builder-website-development-kerala" },
  openGraph: {
    title: "Website Development for Builders & Real Estate in Kerala | Digital Product Solutions",
    description: "Professional real estate & builder website development in Kerala. Property listings, virtual tours, EMI calculator & CRM for lead management. Starting ₹35,000.",
    url: "https://www.digitalproductsolutions.in/real-estate-builder-website-development-kerala",
    type: "website",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a real estate website cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Real estate website development in Kerala starts at ₹35,000 for a basic builder portfolio. Full websites with property listings, virtual tours and CRM integration start from ₹75,000." }
      },
      {
        "@type": "Question",
        "name": "Can you build a lead management system for my real estate business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we build real estate CRM systems that capture leads from your website, WhatsApp and social media, and track them through the sales funnel." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-slate-100 text-slate-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Website Development for Builders & Real Estate in Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-slate-600">Website Development for Builders & Real Estate in Kerala</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We build professional websites for real estate developers and builders across Kerala. Property listings with virtual tours, floor plan downloads, EMI calculators and CRM for managing customer inquiries. Based in Trivandrum.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              WhatsApp Us
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What We Offer</h2>
            <ul className="space-y-4 text-gray-600">
              {[
              "Property Listing with Photo Gallery",
              "Virtual Tour & Video Integration",
              "Floor Plan & Brochure Downloads",
              "EMI Calculator & Price Filter",
              "Lead Capture & CRM Integration",
              "WhatsApp Chatbot for Site Visits",
              "RERA Compliance Information",
              "Google Maps & Location Pages"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-slate-600 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Digital Product Solutions?</h2>
            <ul className="space-y-4 text-gray-600">
              {["Based in Trivandrum, Kerala", "20+ Kerala Businesses Served", "Fast 7-Day Delivery Average", "Direct Communication — No Middlemen", "Transparent Pricing, No Hidden Fees", "Post-Launch Support Included"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much does a real estate website cost in Kerala?", a: "Real estate website development in Kerala starts at ₹35,000 for a basic builder portfolio. Full websites with property listings, virtual tours and CRM integration start from ₹75,000." },
              { q: "Can you build a lead management system for my real estate business?", a: "Yes — we build real estate CRM systems that capture leads from your website, WhatsApp and social media, and track them through the sales funnel." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-slate-50 border border-slate-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "Real Estate Chatbot", desc: "Lead qualification & site visit scheduling" },
              { href: "/google-ads-management-kerala", icon: "📈", title: "Real Estate Google Ads Kerala", desc: "Targeted ads for property buyers" },
              { href: "/seo-services", icon: "🔍", title: "Real Estate SEO Kerala", desc: "Rank for property searches in Kerala" },
              { href: "/contact", icon: "📞", title: "Free Consultation", desc: "Talk to our real estate specialists" }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-slate-400 transition group">
                <span className="text-slate-600 font-bold text-lg">{item.icon}</span>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-slate-600">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-slate-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;35,000</h2>
          <p className="mb-8 text-slate-100 text-lg">Based in Trivandrum, Kerala &middot; Serving all of India &middot; Reply within 2 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-slate-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-slate-500 text-white border border-white/30 hover:bg-slate-400 transition-all duration-300">
              WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
