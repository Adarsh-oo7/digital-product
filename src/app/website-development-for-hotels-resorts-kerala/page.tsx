import Link from "next/link";

export const metadata = {
  title: "Website Development for Hotels & Resorts in Kerala | Digital Product Solutions",
  description:
    "Hotel & resort website development in Kerala — room booking engines, photo galleries, tour packages & guest reviews. Serving Backwater resorts, homestays & luxury hotels. Starting ₹35,000.",
  keywords: "hotel website development Kerala, resort website Kerala, backwater resort website, homestay website Kerala, hotel booking website Trivandrum",
  alternates: { canonical: "https://www.digitalproductsolutions.in/website-development-for-hotels-resorts-kerala" },
  openGraph: {
    title: "Website Development for Hotels & Resorts in Kerala | Digital Product Solutions",
    description: "Professional hotel & resort websites with online booking for Kerala's hospitality industry. Starting ₹35,000.",
    url: "https://www.digitalproductsolutions.in/website-development-for-hotels-resorts-kerala",
    type: "website",
  },
};

export default function HotelResortWebsiteKerala() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a hotel website cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Hotel website development in Kerala starts at ₹35,000 for a basic property website with photo gallery, room types and contact forms. Websites with online booking engine integration start from ₹60,000." }
      },
      {
        "@type": "Question",
        "name": "Can you build a website for a backwater resort or homestay in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we specialize in hospitality websites for backwater resorts, treehouse stays, heritage hotels, Ayurvedic retreats and homestays across Kerala. We understand what travelers search for and build accordingly." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-amber-100 text-amber-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Hotel & Resort Website Development — Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Website Development for <span className="text-amber-600">Hotels & Resorts</span> in Kerala
            <br /> Direct Bookings. More Revenue. Less Commission.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build <strong>hotel and resort websites with online booking engines</strong> for Kerala&apos;s hospitality industry — backwater resorts, luxury hotels, homestays, Ayurvedic retreats and heritage properties. Get direct bookings and reduce OTA commissions.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition shadow-lg">Get Hotel Website Quote</Link>
            <Link href="/software-development" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">View All Solutions</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What We Build for Hotels</h2>
            <ul className="space-y-4 text-gray-600">
              {["Online Room Booking Engine", "Photo Gallery & Virtual Tours", "Room Type & Pricing Pages", "Restaurant & Amenities Showcase", "Tour Package & Activity Listings", "Guest Review Integration", "WhatsApp Chatbot for Guest Queries", "SEO for 'hotel in Kerala' searches"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-amber-600 font-bold">✔</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Types of Properties We Serve</h2>
            <ul className="space-y-4 text-gray-600">
              {["Backwater Resorts & Houseboats", "Luxury Hotels & Heritage Properties", "Budget Hotels & Guest Houses", "Homestays & B&Bs", "Ayurvedic Retreat Centers", "Tree Houses & Eco Resorts", "Beach Resorts (Kovalam, Varkala)", "Hill Station Properties (Munnar, Wayanad)"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-green-500 font-bold">✔</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much does a hotel website cost in Kerala?", a: "Hotel website development starts at ₹35,000 for a basic site. Websites with online booking engine integration start from ₹60,000." },
              { q: "Can you build a website for a backwater resort or homestay in Kerala?", a: "Yes — we specialize in hospitality websites for backwater resorts, treehouse stays, heritage hotels, Ayurvedic retreats and homestays across Kerala." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-amber-50 border border-amber-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/digital-marketing-trivandrum", icon: "📈", title: "Digital Marketing for Hotels Kerala", desc: "Google Ads, Meta Ads & SEO for hospitality" },
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "Hotel Chatbot", desc: "Automate guest queries & room bookings" },
              { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp Automation for Hotels", desc: "Auto-replies, check-in info & guest services" },
              { href: "/seo-services", icon: "🔍", title: "SEO for Hotels Kerala", desc: "Rank for 'hotel in Kerala' searches" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-amber-400 transition group">
                <span className="text-amber-600 font-bold text-lg">{item.icon}</span>
                <div><div className="font-semibold text-gray-800 group-hover:text-amber-600">{item.title}</div><div className="text-sm text-gray-500">{item.desc}</div></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-amber-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-4">Starting at ₹35,000</h2>
          <p className="mb-8 text-amber-100 text-lg">Get direct bookings with a professional hotel website. Built in 7–14 days.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-amber-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get Free Hotel Website Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
