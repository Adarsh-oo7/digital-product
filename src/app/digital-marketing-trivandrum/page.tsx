import Link from "next/link";

export const metadata = {
  title: "Digital Marketing Agency in Trivandrum | Kerala | Digital Product Solutions",
  description:
    "Top digital marketing agency in Trivandrum, Kerala. SEO, Google Ads, Meta Ads, social media & WhatsApp marketing for Trivandrum businesses. Free consultation available.",
  keywords: "digital marketing agency Trivandrum, online marketing Trivandrum, SEO Trivandrum, Google Ads Trivandrum, social media marketing Trivandrum Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/digital-marketing-trivandrum" },
  openGraph: {
    title: "Digital Marketing Agency in Trivandrum | Kerala | Digital Product Solutions",
    description: "SEO, Google Ads, social media & WhatsApp marketing for Trivandrum businesses. Based in Trivandrum. Call +919400355185.",
    url: "https://www.digitalproductsolutions.in/digital-marketing-trivandrum",
    type: "website",
  },
};

export default function DigitalMarketingTrivandrum() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best digital marketing agency in Trivandrum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Digital Product Solutions is a leading digital marketing agency in Trivandrum, Kerala. We offer SEO, Google Ads, Meta Ads, social media management and WhatsApp automation for local businesses." }
      },
      {
        "@type": "Question",
        "name": "How much does digital marketing cost in Trivandrum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing services in Trivandrum start at ₹3,000/month for social media management, ₹5,000/month for SEO, and ₹10,000/month for Google or Meta Ads management." }
      },
      {
        "@type": "Question",
        "name": "Do you offer Google Ads management in Trivandrum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we offer Google Ads (Search, Display, YouTube) management for Trivandrum businesses including hospitals, real estate, education and retail." }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.digitalproductsolutions.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.digitalproductsolutions.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Digital Marketing Trivandrum", "item": "https://www.digitalproductsolutions.in/digital-marketing-trivandrum" }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Digital Marketing — Trivandrum, Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Marketing Agency in <span className="text-blue-600">Trivandrum</span>
            <br /> Grow Your Business Online
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a <strong>full-service digital marketing agency based in Trivandrum, Kerala</strong>. We help local businesses grow with SEO, Google Ads, Meta Ads, social media management and WhatsApp automation. <strong>Trivandrum&apos;s digital agency</strong> that knows your local market.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20need%20digital%20marketing%20in%20Trivandrum" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Digital Marketing Services in Trivandrum</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                { text: "SEO & Local SEO (Google Map Pack Ranking)", link: "/seo-services" },
                { text: "Google Ads (Search, Display & YouTube)", link: "/google-ads-management-kerala" },
                { text: "Meta Ads (Facebook & Instagram)", link: "/social-media-management" },
                { text: "Social Media Management", link: "/social-media-management" },
                { text: "WhatsApp Marketing & Automation", link: "/whatsapp-automation-kerala" },
                { text: "AI Chatbots & Lead Generation", link: "/ai-chatbot-development-kerala" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✔</span>
                  <Link href={item.link} className="hover:text-blue-600 transition">{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Us as Your Trivandrum Digital Partner</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Based in Trivandrum — we know the local market",
                "Talk directly to the developer, no middlemen",
                "Transparent monthly reporting",
                "Results-focused — we track leads, not just rankings",
                "Serving 20+ Kerala businesses",
                "Starting from ₹3,000/month — affordable for SMEs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve in Trivandrum</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", name: "Hospitals & Clinics", link: "/seo-for-doctors-clinics-kerala" },
              { icon: "🏨", name: "Hotels & Resorts", link: "/website-development-for-hotels-resorts-kerala" },
              { icon: "🏗️", name: "Real Estate & Builders", link: "/real-estate-builder-website-development-kerala" },
              { icon: "🍽️", name: "Restaurants & Cafes", link: "/restaurant-website-online-ordering-kerala" },
              { icon: "🏫", name: "Schools & Education", link: "/school-education-management-software-kerala" },
              { icon: "🛒", name: "Retail & E-commerce", link: "/ecommerce-website-development-kerala" },
            ].map((ind, i) => (
              <Link key={i} href={ind.link} className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition group text-center">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-gray-800 group-hover:text-blue-600">{ind.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* CITY LINKS */}
        <div className="mb-20 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Digital Marketing Across Kerala</h2>
          <p className="text-gray-600 mb-6">We don&apos;t just serve Trivandrum — we provide digital marketing and SEO services across Kerala.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: "Kollam", link: "/digital-marketing-kollam" },
              { city: "Kozhikode", link: "/digital-marketing-kozhikode" },
              { city: "Kannur", link: "/seo-services-kannur" },
              { city: "Kottayam", link: "/web-development-kottayam" },
              { city: "Palakkad", link: "/web-development-palakkad" },
              { city: "Local SEO Kerala", link: "/local-seo-kerala" },
            ].map((c, i) => (
              <Link key={i} href={c.link} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition text-sm font-medium text-gray-700 hover:text-blue-600">
                <span>📍</span> {c.city}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "Which is the best digital marketing agency in Trivandrum?", a: "Digital Product Solutions is a leading digital marketing agency in Trivandrum, Kerala. We offer SEO, Google Ads, Meta Ads, social media management and WhatsApp automation for local businesses." },
              { q: "How much does digital marketing cost in Trivandrum?", a: "Digital marketing services in Trivandrum start at ₹3,000/month for social media management, ₹5,000/month for SEO, and ₹10,000/month for Google or Meta Ads management." },
              { q: "Do you offer Google Ads management in Trivandrum?", a: "Yes — we offer Google Ads (Search, Display, YouTube) management for Trivandrum businesses including hospitals, real estate, education and retail." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-blue-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Trivandrum&apos;s Digital Growth Partner</h2>
          <p className="mb-8 text-blue-100 text-lg">
            📍 Based in Trivandrum · Serving all of Kerala · Reply within 2 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-blue-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Marketing Audit
            </Link>
            <Link href="tel:+919400355185" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-blue-500 text-white border border-white/30 hover:bg-blue-400 transition-all duration-300">
              📞 Call Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
