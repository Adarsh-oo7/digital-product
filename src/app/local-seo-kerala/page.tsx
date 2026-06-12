import Link from "next/link";

export const metadata = {
  title: "Local SEO Services in Kerala | Google Maps Ranking | Digital Product Solutions",
  description:
    "Local SEO services for Kerala businesses — rank on Google Maps, local pack & 'near me' searches in Trivandrum, Kochi, Kollam, Kozhikode, Kannur. Starting ₹5,000/month.",
  keywords: "local SEO Kerala, Google My Business Kerala, local SEO Trivandrum, map pack ranking Kerala, near me SEO Kerala, local business SEO Kochi",
  alternates: { canonical: "https://www.digitalproductsolutions.in/local-seo-kerala" },
  openGraph: {
    title: "Local SEO Services in Kerala | Google Maps Ranking | Digital Product Solutions",
    description: "Rank on Google Maps and local pack in Kerala. Local SEO for Trivandrum, Kochi, Kollam, Kozhikode, Kannur. Starting ₹5,000/month.",
    url: "https://www.digitalproductsolutions.in/local-seo-kerala",
    type: "website",
  },
};

export default function LocalSEOKerala() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is local SEO and why does my Kerala business need it?",
        "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps your business appear in Google Map Pack and 'near me' searches for your city (e.g., 'dentist near me Trivandrum' or 'best restaurant Kollam'). 80% of local searches lead to store visits — local SEO puts your business in front of these customers." }
      },
      {
        "@type": "Question",
        "name": "How much does local SEO cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Local SEO services in Kerala start at ₹5,000/month. This includes Google Business Profile optimization, local citation building and review management." }
      },
      {
        "@type": "Question",
        "name": "How quickly can my business rank on Google Maps in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "For cities like Kollam, Kannur, Kottayam and Palakkad where competition is very low, most businesses see significant ranking improvement in 4–8 weeks. Trivandrum and Kochi take 8–14 weeks due to higher competition." }
      },
      {
        "@type": "Question",
        "name": "Do you optimize Google Business Profile (GBP) for Kerala businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — Google Business Profile optimization is a core part of our local SEO service. This includes setting up and verifying the GBP, optimizing categories, services, photos, Q&A and managing weekly posts." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-emerald-100 text-emerald-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Local SEO — Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Local SEO Services in <span className="text-emerald-600">Kerala</span>
            <br /> Rank on Google Maps & &quot;Near Me&quot; Searches
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help <strong>Kerala businesses rank in the Google Map Pack</strong> and &quot;near me&quot; searches across <strong>Trivandrum, Kochi, Kollam, Kozhikode, Kannur, Kottayam and Palakkad</strong>. Most tier-2 Kerala cities have near-zero competition — you can rank within 4–8 weeks.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg">
              Get Free Local SEO Audit
            </Link>
            <Link href="/seo-services" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              View All SEO Services
            </Link>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What&apos;s Included in Local SEO</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Google Business Profile (GBP) Setup & Optimization",
                "NAP Consistency Across All Directories",
                "Local Citation Building (JustDial, Sulekha, etc.)",
                "Review Management & Response Strategy",
                "Local Keyword Research & On-Page Optimization",
                "Location Page Creation & Optimization",
                "Weekly GBP Posts & Photo Updates",
                "Monthly Local Ranking Reports",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Kerala Cities We Serve</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { city: "Trivandrum", link: "/digital-marketing-trivandrum" },
                { city: "Kochi / Ernakulam", link: "/seo-services" },
                { city: "Kollam", link: "/digital-marketing-kollam" },
                { city: "Kozhikode", link: "/digital-marketing-kozhikode" },
                { city: "Kannur", link: "/seo-services-kannur" },
                { city: "Kottayam", link: "/web-development-kottayam" },
                { city: "Palakkad", link: "/web-development-palakkad" },
                { city: "Thrissur", link: "/contact" },
              ].map((c, i) => (
                <Link key={i} href={c.link} className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-100 hover:border-emerald-400 transition text-sm font-medium text-gray-700 hover:text-emerald-700">
                  <span>📍</span> {c.city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* WHY LOCAL SEO */}
        <div className="mb-20 bg-emerald-50 border border-emerald-100 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Why Kerala Businesses Need Local SEO Now</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "311", label: "Businesses in Trivandrum seeking SEO", desc: "Yet only ~31 verified SEO companies cover all of Kerala" },
              { stat: "80%", label: "Kerala SMEs with no digital presence", desc: "Your competitors aren't online — this is your window" },
              { stat: "4–8 wk", label: "Time to rank in tier-2 Kerala cities", desc: "Kollam, Kannur, Kottayam, Palakkad — near-zero competition" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{s.stat}</div>
                <div className="font-semibold text-gray-800 mb-2">{s.label}</div>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What is local SEO and why does my Kerala business need it?", a: "Local SEO helps your business appear in Google Map Pack and 'near me' searches for your city. 80% of local searches lead to store visits — local SEO puts your business in front of these customers." },
              { q: "How much does local SEO cost in Kerala?", a: "Local SEO services in Kerala start at ₹5,000/month. This includes Google Business Profile optimization, local citation building and review management." },
              { q: "How quickly can my business rank on Google Maps in Kerala?", a: "For cities like Kollam, Kannur, Kottayam and Palakkad where competition is very low, most businesses see significant ranking improvement in 4–8 weeks." },
              { q: "Do you optimize Google Business Profile for Kerala businesses?", a: "Yes — GBP optimization is a core part of our local SEO service. This includes setup, verification, categories, services, photos, Q&A and weekly posts." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-emerald-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at ₹5,000 / Month</h2>
          <p className="mb-8 text-emerald-100 text-lg">
            Rank your Kerala business on Google Maps in the next 4–8 weeks. Free audit available.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-emerald-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get Free Local SEO Audit
          </Link>
        </div>

      </div>
    </section>
  );
}
