import Link from "next/link";

export const metadata = {
  title: "SEO for Doctors & Clinics in Kerala | Google Ranking for Healthcare | Digital Product Solutions",
  description: "SEO services for doctors, clinics, hospitals & Ayurvedic centers in Kerala. Rank for 'doctor near me' searches in Trivandrum, Kochi, Kollam. Starting ₹5,000/month.",
  keywords: "SEO for doctors Kerala, clinic SEO Trivandrum, doctor website SEO Kerala, medical SEO Kerala, hospital SEO Kochi",
  alternates: { canonical: "https://www.digitalproductsolutions.in/seo-for-doctors-clinics-kerala" },
  openGraph: {
    title: "SEO for Doctors & Clinics in Kerala | Google Ranking for Healthcare | Digital Product Solutions",
    description: "SEO services for doctors, clinics, hospitals & Ayurvedic centers in Kerala. Rank for 'doctor near me' searches in Trivandrum, Kochi, Kollam. Starting ₹5,000/month.",
    url: "https://www.digitalproductsolutions.in/seo-for-doctors-clinics-kerala",
    type: "website",
  },
};

export default function Page() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-teal-100 text-teal-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            SEO for Doctors & Clinics in Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SEO for Doctors & Clinics in Kerala — <span className="text-teal-600">Rank When Patients Search for You on Google</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We help doctors, clinics, hospitals and Ayurvedic centers across Kerala rank on Google for patient searches like 'dentist near me Trivandrum' or 'best cardiologist Kochi'. Starting &#8377;5,000/month.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
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
                <li key={i} className="flex items-start gap-3"><span className="text-teal-600 font-bold">✔</span>{item}</li>
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

        <div className="mb-16 bg-teal-50 border border-teal-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/seo-services", icon: "🔍", title: "SEO Services Kerala", desc: "Rank on Google organically" },
              { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "AI Chatbot Development", desc: "Automate customer interactions" },
              { href: "/digital-marketing-trivandrum", icon: "📈", title: "Digital Marketing Trivandrum", desc: "Full-stack digital marketing" },
              { href: "/contact", icon: "📞", title: "Free Consultation", desc: "Talk directly to Adarsh" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition group">
                <span className="text-teal-600 font-bold text-lg">{item.icon}</span>
                <div><div className="font-semibold text-gray-800 group-hover:text-teal-600">{item.title}</div><div className="text-sm text-gray-500">{item.desc}</div></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-teal-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;5,000/month</h2>
          <p className="mb-8 text-teal-100 text-lg">Based in Trivandrum · Serving all of Kerala · Reply within 2 hours</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-teal-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
