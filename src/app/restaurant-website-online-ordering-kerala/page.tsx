import Link from "next/link";

export const metadata = {
  title: "Restaurant Website & Online Ordering System in Kerala | Digital Product Solutions",
  description: "Restaurant website development with online ordering & QR menu for Kerala restaurants. WhatsApp order notifications, table booking & delivery management. Starting ₹25,000.",
  keywords: "restaurant website development Kerala, online ordering system restaurant Kerala, QR menu Kerala, restaurant app Kerala, food delivery website Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/restaurant-website-online-ordering-kerala" },
  openGraph: {
    title: "Restaurant Website & Online Ordering System in Kerala | Digital Product Solutions",
    description: "Restaurant website development with online ordering & QR menu for Kerala restaurants. WhatsApp order notifications, table booking & delivery management. Starting ₹25,000.",
    url: "https://www.digitalproductsolutions.in/restaurant-website-online-ordering-kerala",
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
        "name": "How much does a restaurant website with online ordering cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Restaurant website with online ordering starts at ₹25,000. A full system with QR menu, delivery management and WhatsApp integration starts from ₹45,000." }
      },
      {
        "@type": "Question",
        "name": "Can you build a QR code menu for my restaurant in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we build QR digital menus that work on any smartphone without app download. Customers scan, browse and order directly from your WhatsApp or website." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Restaurant Website & Online Ordering in Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-orange-600">Restaurant Website & Online Ordering in Kerala</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We build restaurant websites with online ordering systems, QR digital menus and WhatsApp order notifications for Kerala restaurants, cafes and cloud kitchens. Get direct orders — no OTA commission.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg">
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
              "Online Food Ordering System",
              "QR Digital Menu (No App Required)",
              "WhatsApp Order Notifications",
              "Table Booking & Reservation System",
              "Multiple Branch Management",
              "Food Delivery Zone Management",
              "Loyalty & Coupon System",
              "Google Maps & Local SEO Integration"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">&#10004;</span>
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
              { q: "How much does a restaurant website with online ordering cost in Kerala?", a: "Restaurant website with online ordering starts at ₹25,000. A full system with QR menu, delivery management and WhatsApp integration starts from ₹45,000." },
              { q: "Can you build a QR code menu for my restaurant in Kerala?", a: "Yes — we build QR digital menus that work on any smartphone without app download. Customers scan, browse and order directly from your WhatsApp or website." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-orange-50 border border-orange-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp Automation for Restaurants", desc: "Auto-order confirmations & delivery updates" },
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "Restaurant Chatbot", desc: "AI-powered order-taking & table booking bot" },
              { href: "/social-media-management", icon: "📱", title: "Restaurant Social Media Marketing", desc: "Instagram & Facebook marketing for restaurants" },
              { href: "/contact", icon: "📞", title: "Free Consultation", desc: "Talk to our restaurant tech specialists" }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-400 transition group">
                <span className="text-orange-600 font-bold text-lg">{item.icon}</span>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-orange-600">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-orange-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;25,000</h2>
          <p className="mb-8 text-orange-100 text-lg">Based in Trivandrum, Kerala &middot; Serving all of India &middot; Reply within 2 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-orange-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-orange-500 text-white border border-white/30 hover:bg-orange-400 transition-all duration-300">
              WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
