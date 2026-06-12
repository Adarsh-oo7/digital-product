import Link from "next/link";

export const metadata = {
  title: "AI Agent & RAG/LLM Integration Services India | Digital Product Solutions",
  description: "Custom AI agent development, RAG (Retrieval Augmented Generation) chatbots & LLM integration for businesses in India. GPT-4, Claude, Gemini integrations. Starting ₹1,00,000.",
  keywords: "AI agent development India, RAG chatbot development, LLM integration India, GPT-4 integration, custom AI agent Kerala, retrieval augmented generation India",
  alternates: { canonical: "https://www.digitalproductsolutions.in/ai-agent-rag-development-india" },
  openGraph: {
    title: "AI Agent & RAG/LLM Integration Services India | Digital Product Solutions",
    description: "Custom AI agent development, RAG (Retrieval Augmented Generation) chatbots & LLM integration for businesses in India. GPT-4, Claude, Gemini integrations. Starting ₹1,00,000.",
    url: "https://www.digitalproductsolutions.in/ai-agent-rag-development-india",
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
        "name": "What is RAG (Retrieval Augmented Generation) and why do businesses need it?",
        "acceptedAnswer": { "@type": "Answer", "text": "RAG is a technique that connects large language models (like GPT-4) to your private business data — documents, knowledge bases, product catalogs. This lets your AI chatbot answer questions accurately using your own data instead of relying on general training." }
      },
      {
        "@type": "Question",
        "name": "How much does custom AI agent development cost in India?",
        "acceptedAnswer": { "@type": "Answer", "text": "Custom AI agent development starts at ₹1,00,000 for a basic single-agent system. Multi-agent orchestration systems with complex integrations range from ₹5,00,000 to ₹20,00,000." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-violet-100 text-violet-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            AI Agent & RAG/LLM Integration Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-violet-600">AI Agent & RAG/LLM Integration Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We build custom AI agents, RAG-powered chatbots and LLM integrations for businesses in India. GPT-4, Claude, Gemini and open-source LLM implementations for enterprise and startup use cases. Based in Trivandrum, Kerala.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition shadow-lg">
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
              "Custom AI Agent Development (LangChain, LlamaIndex)",
              "RAG (Retrieval Augmented Generation) Chatbots",
              "LLM Integration (GPT-4, Claude, Gemini, Llama)",
              "Knowledge Base & Vector Database Setup",
              "Multi-Agent Orchestration Systems",
              "AI API Development & Integration",
              "Fine-tuning & Custom Model Training",
              "MCP (Model Context Protocol) Implementation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-violet-600 font-bold">&#10004;</span>
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
              { q: "What is RAG (Retrieval Augmented Generation) and why do businesses need it?", a: "RAG is a technique that connects large language models (like GPT-4) to your private business data — documents, knowledge bases, product catalogs. This lets your AI chatbot answer questions accurately using your own data instead of relying on general training." },
              { q: "How much does custom AI agent development cost in India?", a: "Custom AI agent development starts at ₹1,00,000 for a basic single-agent system. Multi-agent orchestration systems with complex integrations range from ₹5,00,000 to ₹20,00,000." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-violet-50 border border-violet-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "AI Chatbot Development Kerala", desc: "Simpler chatbots for Kerala SMEs" },
              { href: "/ai-powered-solutions", icon: "🧠", title: "AI-Powered Solutions", desc: "Full AI solutions stack" },
              { href: "/ai-automation-for-businesses-kerala", icon: "⚙️", title: "AI Business Automation", desc: "Intelligent workflow automation" },
              { href: "/contact", icon: "📞", title: "AI Consultation", desc: "Discuss your AI project" }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-violet-400 transition group">
                <span className="text-violet-600 font-bold text-lg">{item.icon}</span>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-violet-600">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-violet-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;1,00,000</h2>
          <p className="mb-8 text-violet-100 text-lg">Based in Trivandrum, Kerala &middot; Serving all of India &middot; Reply within 2 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-violet-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-violet-500 text-white border border-white/30 hover:bg-violet-400 transition-all duration-300">
              WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
