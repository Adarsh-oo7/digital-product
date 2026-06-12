import Link from "next/link";

export const metadata = {
  title: "WhatsApp Automation for Kerala Businesses | Digital Product Solutions",
  description:
    "WhatsApp Business automation for Kerala SMEs — auto-replies, order confirmations, appointment reminders & lead follow-ups. Based in Trivandrum. Starting ₹10,000.",
  keywords: "WhatsApp automation Kerala, WhatsApp bot Trivandrum, WhatsApp business automation, WhatsApp automation for restaurants Kerala, WhatsApp auto-reply business",
  alternates: { canonical: "https://www.digitalproductsolutions.in/whatsapp-automation-kerala" },
  openGraph: {
    title: "WhatsApp Automation for Kerala Businesses | Digital Product Solutions",
    description: "Automate your WhatsApp Business — replies, orders, appointments & follow-ups. Kerala businesses served from Trivandrum. Starting ₹10,000.",
    url: "https://www.digitalproductsolutions.in/whatsapp-automation-kerala",
    type: "website",
  },
};

export default function WhatsAppAutomationKerala() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is WhatsApp Business automation?",
        "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp Business automation means setting up automated replies, order confirmations, appointment reminders and follow-up messages so your business responds to customers 24/7 without manual effort." }
      },
      {
        "@type": "Question",
        "name": "How much does WhatsApp automation cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp automation services in Kerala start at ₹10,000 for a basic setup. More complex multi-flow automation with CRM integration starts from ₹25,000." }
      },
      {
        "@type": "Question",
        "name": "Can WhatsApp automation work for my restaurant in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — WhatsApp automation is perfect for restaurants. It can handle table bookings, share the digital menu, confirm orders and send delivery updates automatically." }
      },
      {
        "@type": "Question",
        "name": "Is WhatsApp automation legal in India?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, WhatsApp Business API automation is fully legal in India when using official Meta-approved channels. We help businesses set up WhatsApp Cloud API or verified BSP integrations." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            WhatsApp Automation — Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            WhatsApp Automation for <span className="text-green-600">Kerala Businesses</span>
            <br /> Reply Instantly. Sell More. Save Time.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Automate your <strong>WhatsApp Business</strong> messages — auto-replies, order confirmations, appointment reminders and lead follow-ups. Used by restaurants, clinics, shops and hotels across <strong>Trivandrum, Kochi, Kollam</strong> and Kerala.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg">
              Automate My WhatsApp
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20WhatsApp%20automation%20for%20my%20business" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        {/* WHAT WE AUTOMATE */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What We Automate on WhatsApp</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Instant Auto-Replies to Customer Queries",
                "Order Confirmations & Status Updates",
                "Appointment Booking & Reminders",
                "Lead Follow-Up Sequences",
                "Payment Confirmations & Invoices",
                "Product Catalogue Sharing",
                "Post-Purchase Review Requests",
                "Delivery & Tracking Notifications",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Industries We Serve</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                { icon: "🍽️", text: "Restaurants & Cloud Kitchens", link: "/restaurant-website-online-ordering-kerala" },
                { icon: "🏥", text: "Hospitals, Clinics & Ayurveda Centers", link: "/website-development-for-hospitals-clinics-kerala" },
                { icon: "🏨", text: "Hotels, Resorts & Homestays", link: "/website-development-for-hotels-resorts-kerala" },
                { icon: "🛒", text: "Retail Shops & E-commerce", link: "/ecommerce-website-development-kerala" },
                { icon: "🏗️", text: "Real Estate & Builders", link: "/real-estate-builder-website-development-kerala" },
                { icon: "💇", text: "Salons, Spas & Wellness Centers", link: "/contact" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">{item.icon}</span>
                  <Link href={item.link} className="hover:text-green-600 transition">{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our WhatsApp Automation Process</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Audit & Planning", "Flow Design", "WhatsApp API Setup", "Launch & Monitor"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-green-600 font-bold text-xl mb-4">{`0${i + 1}`}</div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What is WhatsApp Business automation?", a: "WhatsApp Business automation means setting up automated replies, order confirmations, appointment reminders and follow-up messages so your business responds to customers 24/7 without manual effort." },
              { q: "How much does WhatsApp automation cost in Kerala?", a: "WhatsApp automation services in Kerala start at ₹10,000 for a basic setup. More complex multi-flow automation with CRM integration starts from ₹25,000." },
              { q: "Can WhatsApp automation work for my restaurant in Kerala?", a: "Yes — WhatsApp automation is perfect for restaurants. It can handle table bookings, share the digital menu, confirm orders and send delivery updates automatically." },
              { q: "Is WhatsApp automation legal in India?", a: "Yes, WhatsApp Business API automation is fully legal in India when using official Meta-approved channels. We help businesses set up WhatsApp Cloud API or verified BSP integrations." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED LINKS */}
        <div className="mb-16 bg-green-50 border border-green-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/ai-chatbot-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">🤖</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">AI Chatbot Development Kerala</div><div className="text-sm text-gray-500">Full AI chatbot for your website or WhatsApp</div></div>
            </Link>
            <Link href="/business-automation" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-blue-600 font-bold text-lg">⚙️</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">Business Automation Kerala</div><div className="text-sm text-gray-500">Automate your full business workflow</div></div>
            </Link>
            <Link href="/ai-powered-solutions" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-purple-600 font-bold text-lg">🧠</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">AI-Powered Solutions</div><div className="text-sm text-gray-500">Full AI solutions stack for Kerala businesses</div></div>
            </Link>
            <Link href="/contact" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-green-600 font-bold text-lg">📞</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">Free Consultation</div><div className="text-sm text-gray-500">Talk to Adarsh — reply within 2 hours</div></div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-green-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at ₹10,000</h2>
          <p className="mb-8 text-green-100 text-lg">
            Stop missing customer messages. Automate your WhatsApp and let your business reply 24/7.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-green-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get WhatsApp Automation Setup
          </Link>
        </div>

      </div>
    </section>
  );
}
