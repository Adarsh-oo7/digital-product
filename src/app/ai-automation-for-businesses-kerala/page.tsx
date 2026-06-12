import Link from "next/link";

export const metadata = {
  title: "AI Automation for Kerala Businesses | Workflow Automation | Digital Product Solutions",
  description: "AI-powered business automation for Kerala SMEs — workflow automation, CRM automation, AI data processing and intelligent document handling. Starting ₹15,000.",
  keywords: "AI automation Kerala, business automation Trivandrum, AI workflow Kerala, intelligent automation Kerala, AI business solutions",
  alternates: { canonical: "https://www.digitalproductsolutions.in/ai-automation-for-businesses-kerala" },
  openGraph: {
    title: "AI Automation for Kerala Businesses | Workflow Automation | Digital Product Solutions",
    description: "AI-powered business automation for Kerala SMEs — workflow automation, CRM automation, AI data processing and intelligent document handling. Starting ₹15,000.",
    url: "https://www.digitalproductsolutions.in/ai-automation-for-businesses-kerala",
    type: "website",
  },
};

export default function Page() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            AI Automation for Kerala Businesses
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Automation for Kerala Businesses — <span className="text-purple-600">Intelligent Workflow Automation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We implement AI automation for Kerala businesses — intelligent workflow automation, AI-powered CRM, document processing, lead scoring and business intelligence dashboards. Based in Trivandrum.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg">
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
              {["Custom Strategy for Kerala Market", "Transparent Monthly Reporting", "Direct Communication with Developer", "Fast Delivery — 7 Days Average", "Serving 20+ Kerala Businesses", "No Hidden Fees — Clear Pricing"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-purple-600 font-bold">✔</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Digital Product Solutions</h2>
            <ul className="space-y-4 text-gray-600">
              {["Based in Trivandrum, Kerala", "Understanding of Kerala Business Markets", "Results-Focused Approach", "Integrated Services (SEO + Ads + Web)", "AI & Automation Specialists", "20+ Kerala Businesses Served"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-green-500 font-bold">✔</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16 bg-purple-50 border border-purple-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/seo-services", icon: "🔍", title: "SEO Services Kerala", desc: "Rank on Google organically" },
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "AI Chatbot Development", desc: "Automate customer interactions" },
              { href: "/digital-marketing-trivandrum", icon: "📈", title: "Digital Marketing Trivandrum", desc: "Full-stack digital marketing" },
              { href: "/contact", icon: "📞", title: "Free Consultation", desc: "Talk directly to Adarsh" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition group">
                <span className="text-purple-600 font-bold text-lg">{item.icon}</span>
                <div><div className="font-semibold text-gray-800 group-hover:text-purple-600">{item.title}</div><div className="text-sm text-gray-500">{item.desc}</div></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-purple-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;15,000</h2>
          <p className="mb-8 text-purple-100 text-lg">Based in Trivandrum · Serving all of Kerala · Reply within 2 hours</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-purple-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
