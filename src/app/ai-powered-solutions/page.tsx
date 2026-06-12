import Link from "next/link";

export const metadata = {
  title: "AI Chatbots & Automation for Kerala Businesses | Digital Product Solutions",
  description:
    "AI chatbots, WhatsApp automation & intelligent systems for Kerala businesses — hospitals, hotels, restaurants, retail. Based in Trivandrum. Starting ₹12,000.",
  keywords: "AI chatbot development Kerala, WhatsApp chatbot Kerala, AI automation Trivandrum, chatbot for hospital Kerala, AI solutions for small business Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/ai-powered-solutions" },
  openGraph: {
    title: "AI Chatbots & Automation for Kerala Businesses | Digital Product Solutions",
    description: "AI chatbots, WhatsApp bots & automation for hospitals, hotels, restaurants and retail across Kerala. Based in Trivandrum.",
    url: "https://www.digitalproductsolutions.in/ai-powered-solutions",
    type: "website",
  },
};

export default function AIPoweredSolutionsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What AI solutions do you build for businesses in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "We build custom AI chatbots (for WhatsApp and websites), intelligent lead qualification systems, predictive analysis tools, and AI agents/RAG solutions configured for your business data." } },
      { "@type": "Question", "name": "How much does AI chatbot development cost in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "AI chatbot development starts at ₹12,000 for standard customer support and FAQs. More advanced integrations with databases or custom booking engines typically range from ₹30,000 to ₹1,00,000." } },
      { "@type": "Question", "name": "Can an AI chatbot integrate with my WhatsApp Business account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in connecting AI chatbots (built with OpenAI, Claude, or custom LLMs) to your WhatsApp Business API, enabling 24/7 automated customer service and booking." } },
      { "@type": "Question", "name": "How long does it take to deploy an AI system?", "acceptedAnswer": { "@type": "Answer", "text": "A custom chatbot can be built and deployed in 1 to 2 weeks. More complex AI enterprise agent integrations might take 3 to 6 weeks." } }
    ]
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-600/20 text-indigo-400 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            AI-Powered Solutions for Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Kerala Business with
            <span className="text-indigo-500"> Artificial Intelligence</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We build AI chatbots, WhatsApp automation and intelligent systems for Kerala businesses — hospitals, hotels, restaurants, retail shops and more. Based in <strong>Trivandrum</strong>, serving all of Kerala.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/ai-chatbot-development-kerala"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              AI Chatbot Development
            </Link>

            <Link
              href="/whatsapp-automation-kerala"
              className="border border-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              WhatsApp Automation Kerala
            </Link>
          </div>
        </div>

        {/* AI SERVICES */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-lg hover:shadow-indigo-900/40 transition duration-500">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">
              AI Solutions We Build
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                AI Chatbots (WhatsApp & Website)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                Smart Lead Qualification Systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                Predictive Analytics Tools
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                AI Content & Marketing Assistants
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                Custom AI Integrations & APIs
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-lg hover:shadow-indigo-900/40 transition duration-500">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">
              Why AI Matters
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                24/7 Intelligent Customer Support
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Faster Decision Making
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Higher Conversion Rates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Reduced Operational Costs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Competitive Market Advantage
              </li>
            </ul>
          </div>

        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Our AI Implementation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Strategy", "Model Design", "Integration", "Launch & Optimization"].map((step, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <div className="text-indigo-500 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-200">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES WE SERVE */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-150">Industries We Build AI For in Kerala</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", name: "Hospitals & Clinics", desc: "Appointment booking bots, patient query automation", link: "/website-development-for-hospitals-clinics-kerala" },
              { icon: "🏨", name: "Hotels & Resorts", desc: "Room booking automation, guest services AI", link: "/website-development-for-hotels-resorts-kerala" },
              { icon: "🍽️", name: "Restaurants", desc: "Order taking, table booking, WhatsApp menus", link: "/restaurant-website-online-ordering-kerala" },
              { icon: "🛒", name: "Retail & E-commerce", desc: "Product queries, order tracking, customer support", link: "/ecommerce-website-development-kerala" },
              { icon: "🏗️", name: "Builders & Real Estate", desc: "Lead qualification, site visit scheduling", link: "/real-estate-builder-website-development-kerala" },
              { icon: "🏫", name: "Schools & Education", desc: "Admission queries, fee reminders, parent updates", link: "/school-education-management-software-kerala" },
            ].map((ind, i) => (
              <Link key={i} href={ind.link} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-indigo-500 transition group">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-indigo-400">{ind.name}</h3>
                <p className="text-gray-400 text-sm">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* DEEP DIVE LINKS */}
        <div className="mb-20 grid md:grid-cols-2 gap-6">
          <Link href="/ai-chatbot-development-kerala" className="bg-indigo-600/20 border border-indigo-500/40 p-8 rounded-2xl hover:bg-indigo-600/30 transition group">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2 group-hover:text-indigo-200">AI Chatbot Development Kerala</h3>
            <p className="text-gray-400 text-sm">Dedicated AI chatbot solutions for Kerala businesses — hospital appointment bots, retail support bots, WhatsApp chatbots.</p>
            <span className="inline-block mt-4 text-indigo-400 text-sm font-medium">Learn more →</span>
          </Link>
          <Link href="/whatsapp-automation-kerala" className="bg-green-600/20 border border-green-500/40 p-8 rounded-2xl hover:bg-green-600/30 transition group">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-green-300 mb-2 group-hover:text-green-200">WhatsApp Automation Kerala</h3>
            <p className="text-gray-400 text-sm">Automate your WhatsApp business replies, order confirmations, appointment reminders and lead follow-ups.</p>
            <span className="inline-block mt-4 text-green-400 text-sm font-medium">Learn more →</span>
          </Link>
        </div>

        {/* RELATED SPECIALISED SERVICES */}
        <div className="mb-20 bg-gray-900/50 border border-gray-800 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Explore Specialised AI & Automation Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/ai-automation-for-businesses-kerala" className="flex items-center gap-3 p-4 bg-black rounded-xl border border-gray-800 hover:border-indigo-500 transition group">
              <span className="text-indigo-500 font-bold text-lg">⚡</span>
              <div>
                <div className="font-semibold text-white group-hover:text-indigo-400">AI Business Automation</div>
                <div className="text-sm text-gray-400">AI document parsing & smart workflows</div>
              </div>
            </Link>
            <Link href="/ai-agent-rag-development-india" className="flex items-center gap-3 p-4 bg-black rounded-xl border border-gray-800 hover:border-indigo-500 transition group">
              <span className="text-indigo-500 font-bold text-lg">🧠</span>
              <div>
                <div className="font-semibold text-white group-hover:text-indigo-400">AI Agent & RAG India</div>
                <div className="text-sm text-gray-400">Custom LLM database agents</div>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What AI solutions do you build for businesses in Kerala?", a: "We build custom AI chatbots (for WhatsApp and websites), intelligent lead qualification systems, predictive analysis tools, and AI agents/RAG solutions configured for your business data." },
              { q: "How much does AI chatbot development cost in Kerala?", a: "AI chatbot development starts at ₹12,000 for standard customer support and FAQs. More advanced integrations with databases or custom booking engines typically range from ₹30,000 to ₹1,00,000." },
              { q: "Can an AI chatbot integrate with my WhatsApp Business account?", a: "Yes. We specialize in connecting AI chatbots (built with OpenAI, Claude, or custom LLMs) to your WhatsApp Business API, enabling 24/7 automated customer service and booking." },
              { q: "How long does it take to deploy an AI system?", a: "A custom chatbot can be built and deployed in 1 to 2 weeks. More complex AI enterprise agent integrations might take 3 to 6 weeks." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹12,000
          </h2>

          <p className="mb-8 text-indigo-100 text-lg">
            Integrate AI into your Kerala business and unlock exponential growth.
          </p>

          <Link
            href="/contact"
            className="
    inline-flex items-center justify-center text-center
    
    w-full sm:w-auto
    
    px-6 sm:px-8 lg:px-10
    py-3 sm:py-3.5 lg:py-4
    
    text-sm sm:text-base lg:text-lg
    
    font-semibold rounded-full
    
    bg-white text-blue-600
    
    shadow-md hover:shadow-lg
    hover:bg-gray-100
    
    transition-all duration-300
  "          >
            Get AI Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}