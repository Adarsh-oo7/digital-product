import Link from "next/link";

export const metadata = {
  title: "Google Ads Management in Kerala | PPC Agency Trivandrum | Digital Product Solutions",
  description: "Google Ads management for Kerala businesses. ROI-tracked Search, Display & YouTube campaigns for hospitals, real estate, education & retail. Based in Trivandrum.",
  keywords: "Google Ads management Kerala, PPC agency Trivandrum, Google Ads Kochi, paid search Kerala, Google advertising Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/google-ads-management-kerala" },
  openGraph: {
    title: "Google Ads Management in Kerala | PPC Agency Trivandrum | Digital Product Solutions",
    description: "Google Ads management for Kerala businesses. ROI-tracked Search, Display & YouTube campaigns for hospitals, real estate, education & retail. Based in Trivandrum.",
    url: "https://www.digitalproductsolutions.in/google-ads-management-kerala",
    type: "website",
  },
};

export default function Page() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Google Ads Management in Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Google Ads Management in Kerala — <span className="text-blue-600">ROI-Tracked PPC Campaigns for Kerala Businesses</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We manage Google Ads campaigns for businesses across Kerala — hospitals, real estate developers, schools, hotels and retail. ROI-tracked campaigns in Trivandrum, Kochi, Kollam and beyond.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
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
                <li key={i} className="flex items-start gap-3"><span className="text-blue-600 font-bold">✔</span>{item}</li>
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

        <div className="mb-16 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/seo-services", icon: "🔍", title: "SEO Services Kerala", desc: "Rank on Google organically" },
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "AI Chatbot Development", desc: "Automate customer interactions" },
              { href: "/digital-marketing-trivandrum", icon: "📈", title: "Digital Marketing Trivandrum", desc: "Full-stack digital marketing" },
              { href: "/contact", icon: "📞", title: "Free Consultation", desc: "Talk directly to Adarsh" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition group">
                <span className="text-blue-600 font-bold text-lg">{item.icon}</span>
                <div><div className="font-semibold text-gray-800 group-hover:text-blue-600">{item.title}</div><div className="text-sm text-gray-500">{item.desc}</div></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-blue-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;10,000/month</h2>
          <p className="mb-8 text-blue-100 text-lg">Based in Trivandrum · Serving all of Kerala · Reply within 2 hours</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-blue-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
