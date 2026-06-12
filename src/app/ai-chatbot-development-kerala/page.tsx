import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Development in Kerala | WhatsApp Chatbot | Digital Product Solutions",
  description:
    "AI chatbot development for Kerala businesses — hospitals, hotels, restaurants, retail. WhatsApp chatbots, website chatbots & appointment booking bots. Based in Trivandrum. Starting ₹12,000.",
  keywords: "AI chatbot development Kerala, WhatsApp chatbot Kerala, chatbot for hospital Kerala, chatbot for restaurant Kerala, AI chatbot Trivandrum, chatbot development India",
  alternates: { canonical: "https://www.digitalproductsolutions.in/ai-chatbot-development-kerala" },
  openGraph: {
    title: "AI Chatbot Development in Kerala | WhatsApp Chatbot | Digital Product Solutions",
    description: "Custom AI chatbots for Kerala businesses. WhatsApp bots, appointment bots & customer support automation. Based in Trivandrum.",
    url: "https://www.digitalproductsolutions.in/ai-chatbot-development-kerala",
    type: "website",
  },
};

export default function AIChatbotDevelopmentKerala() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does an AI chatbot cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "AI chatbot development in Kerala starts at ₹12,000 for a basic WhatsApp or website chatbot. Prices vary based on complexity, integrations (CRM, booking systems) and the number of conversation flows." }
      },
      {
        "@type": "Question",
        "name": "What types of chatbots do you build for Kerala businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "We build WhatsApp chatbots, website chatbots, appointment booking bots for hospitals and clinics, restaurant order bots, real estate lead qualification bots and customer support automation for retail businesses across Kerala." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a chatbot?",
        "acceptedAnswer": { "@type": "Answer", "text": "A basic WhatsApp chatbot can be delivered in 7–14 days. More complex AI chatbots with CRM integration and multiple flows typically take 3–6 weeks." }
      },
      {
        "@type": "Question",
        "name": "Can I get a chatbot for my hospital or clinic in Trivandrum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we specialize in healthcare chatbots for clinics, hospitals and Ayurvedic centers in Trivandrum and across Kerala. These handle appointment booking, patient queries, and doctor availability." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Chatbot Development Kerala",
    "provider": { "@type": "LocalBusiness", "name": "Digital Product Solutions", "url": "https://www.digitalproductsolutions.in", "telephone": "+919400355185" },
    "areaServed": ["Thiruvananthapuram", "Kochi", "Kollam", "Kozhikode", "Kerala"],
    "description": "Custom AI chatbot and WhatsApp automation development for Kerala businesses.",
    "offers": { "@type": "Offer", "price": "12000", "priceCurrency": "INR" }
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            AI Chatbot Development — Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Chatbot Development in <span className="text-indigo-600">Kerala</span>
            <br /> WhatsApp, Website & Appointment Bots
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build intelligent <strong>AI chatbots for Kerala businesses</strong> — hospitals, hotels, restaurants, retail shops and more. Automate customer queries, appointment booking and lead generation via <strong>WhatsApp and your website</strong>. Based in <strong>Trivandrum</strong>, serving all of Kerala.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Build My Chatbot
            </Link>
            <Link
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20an%20AI%20chatbot%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* WHAT WE BUILD */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Types of Chatbots We Build</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "WhatsApp Business Chatbots (24/7 auto-reply)",
                "Appointment Booking Bots (hospitals, clinics, salons)",
                "Restaurant Order & Table Booking Bots",
                "Real Estate Lead Qualification Bots",
                "E-commerce Support & Order Tracking Bots",
                "AI-Powered Customer Support Bots",
                "Hotel Room Booking & Guest Service Bots",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Kerala Businesses Need Chatbots</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Answer customer queries 24/7 without staff",
                "Reduce missed leads from unanswered WhatsApp messages",
                "Automate appointment scheduling for clinics & salons",
                "Qualify leads before they reach your sales team",
                "Handle 100s of queries simultaneously",
                "Integrate with your existing CRM & booking system",
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
          <h2 className="text-3xl font-bold text-center mb-10">Industries We Build Chatbots For in Kerala</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", name: "Hospitals & Clinics", desc: "Appointment booking, patient queries, doctor availability", link: "/website-development-for-hospitals-clinics-kerala" },
              { icon: "🏨", name: "Hotels & Resorts", desc: "Room booking, check-in info, local attractions", link: "/website-development-for-hotels-resorts-kerala" },
              { icon: "🍽️", name: "Restaurants & Cafes", desc: "Table booking, menu queries, order status", link: "/restaurant-website-online-ordering-kerala" },
              { icon: "🛒", name: "Retail & E-commerce", desc: "Product queries, order tracking, returns", link: "/ecommerce-website-development-kerala" },
              { icon: "🏗️", name: "Builders & Real Estate", desc: "Site visit scheduling, project inquiries, lead capture", link: "/real-estate-builder-website-development-kerala" },
              { icon: "🏫", name: "Schools & Colleges", desc: "Admission queries, fee payment, timetable info", link: "/school-education-management-software-kerala" },
            ].map((ind, i) => (
              <Link key={i} href={ind.link} className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-indigo-400 hover:shadow-md transition group">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-indigo-600">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How We Build Your Chatbot</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Discovery & Planning", "Conversation Design", "Development & Testing", "Launch & Support"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-indigo-600 font-bold text-xl mb-4">{`0${i + 1}`}</div>
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
              { q: "How much does an AI chatbot cost in Kerala?", a: "AI chatbot development in Kerala starts at ₹12,000 for a basic WhatsApp or website chatbot. Prices vary based on complexity, integrations and conversation flows." },
              { q: "What types of chatbots do you build for Kerala businesses?", a: "We build WhatsApp chatbots, website chatbots, appointment booking bots for hospitals/clinics, restaurant order bots, real estate lead bots and customer support automation." },
              { q: "How long does it take to build a chatbot?", a: "A basic WhatsApp chatbot can be delivered in 7–14 days. Complex AI chatbots with CRM integration typically take 3–6 weeks." },
              { q: "Can I get a chatbot for my hospital or clinic in Trivandrum?", a: "Yes — we specialize in healthcare chatbots for clinics, hospitals and Ayurvedic centers in Trivandrum and across Kerala. These handle appointment booking, patient queries, and doctor availability." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INTERNAL LINKS */}
        <div className="mb-16 bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/whatsapp-automation-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-green-600 font-bold text-lg">💬</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-indigo-600">WhatsApp Automation Kerala</div><div className="text-sm text-gray-500">Full WhatsApp business automation</div></div>
            </Link>
            <Link href="/ai-powered-solutions" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">🤖</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-indigo-600">AI-Powered Solutions</div><div className="text-sm text-gray-500">Full AI solutions for Kerala businesses</div></div>
            </Link>
            <Link href="/business-automation" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-blue-600 font-bold text-lg">⚙️</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-indigo-600">Business Automation</div><div className="text-sm text-gray-500">Automate your business workflows</div></div>
            </Link>
            <Link href="/contact" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-purple-600 font-bold text-lg">📞</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-indigo-600">Get Free Consultation</div><div className="text-sm text-gray-500">Talk directly to Adarsh — reply in 2 hours</div></div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-indigo-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">Starting at ₹12,000</h2>
          <p className="mb-8 text-indigo-100 text-lg">
            Get a custom AI chatbot for your Kerala business. WhatsApp, website or appointment bot — we build it in 7–14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-indigo-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Chatbot Demo
            </Link>
            <Link href="https://wa.me/919400355185?text=I%20want%20a%20chatbot%20for%20my%20business" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-indigo-500 text-white border border-white/30 hover:bg-indigo-400 transition-all duration-300">
              WhatsApp Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
