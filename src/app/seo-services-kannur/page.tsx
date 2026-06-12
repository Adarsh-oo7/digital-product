import Link from "next/link";

export const metadata = {
  title: "SEO Services in Kannur | Digital Product Solutions",
  description: "Professional seo services services in Kannur, Kerala. Expert digital solutions for local businesses — SEO, web development, WhatsApp automation & AI. Based in Trivandrum. Starting from ₹5,000/month.",
  keywords: "SEO services Kannur, SEO company Kannur Kerala, Google ranking Kannur, local SEO Kannur",
  alternates: { canonical: "https://www.digitalproductsolutions.in/seo-services-kannur" },
  openGraph: {
    title: "SEO Services in Kannur | Digital Product Solutions",
    description: "Professional seo services for Kannur businesses. Starting from ₹5,000/month.",
    url: "https://www.digitalproductsolutions.in/seo-services-kannur",
    type: "website",
  },
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Product Solutions",
    "url": "https://www.digitalproductsolutions.in",
    "telephone": "+919400355185",
    "areaServed": ["Kannur", "Kerala"],
    "address": { "@type": "PostalAddress", "addressLocality": "Thiruvananthapuram", "addressRegion": "Kerala", "addressCountry": "IN" }
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            SEO Services — Kannur, Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SEO Services in <span className="text-green-600">Kannur</span>
            <br />Digital Growth for Kannur Businesses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide professional <strong>seo services services in Kannur, Kerala</strong>. From SEO and web development to WhatsApp automation and AI chatbots — we help Kannur businesses grow online. Based in Trivandrum, serving all of Kerala.
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
