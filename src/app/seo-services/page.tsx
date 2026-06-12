import Link from "next/link";

export const metadata = {
  title: "SEO Services in Kerala | Local SEO & Technical SEO | Digital Product Solutions",
  description:
    "Expert SEO services in Kerala for businesses in Trivandrum, Kochi, Kollam & Kozhikode. Get more Google traffic, local map pack rankings, and consistent leads. Starting ₹5,000/month.",
  keywords: "SEO services Kerala, local SEO Trivandrum, SEO company Kochi, Google ranking Kerala, local SEO Kerala, technical SEO India, SEO agency Trivandrum",
  alternates: { canonical: "https://www.digitalproductsolutions.in/seo-services" },
  openGraph: {
    title: "SEO Services in Kerala | Local SEO & Technical SEO | Digital Product Solutions",
    description: "Expert SEO services in Kerala. Get your business to rank on Google in Trivandrum, Kochi, Kollam, Kozhikode and beyond.",
    url: "https://www.digitalproductsolutions.in/seo-services",
    type: "website",
  },
};

export default function SEOServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does SEO cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our SEO services in Kerala start at ₹5,000 per month. Pricing depends on your industry, location targeting (Trivandrum, Kochi, Kollam, etc.), and the number of target keywords." }
      },
      {
        "@type": "Question",
        "name": "How long does SEO take to show results in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "For local Kerala businesses targeting city-level keywords (Trivandrum, Kollam, Kozhikode), you can expect to see significant improvement in 4–10 weeks due to low competition in most tier-2 cities." }
      },
      {
        "@type": "Question",
        "name": "Do you provide local SEO for businesses outside Trivandrum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we provide local SEO across Kerala including Kochi, Kollam, Kozhikode, Kannur, Kottayam, Palakkad and Thrissur." }
      },
      {
        "@type": "Question",
        "name": "What is included in your SEO service?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our SEO package includes keyword research, on-page optimization, technical SEO, Google Business Profile optimization, local citation building, monthly reporting and internal linking strategy." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services Kerala",
    "provider": { "@type": "LocalBusiness", "name": "Digital Product Solutions", "url": "https://www.digitalproductsolutions.in" },
    "areaServed": ["Thiruvananthapuram", "Kochi", "Kollam", "Kozhikode", "Kannur", "Kerala"],
    "description": "Local SEO, technical SEO and Google Business Profile optimization for Kerala businesses.",
    "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "5000", "priceCurrency": "INR", "unitText": "MONTH" } }
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            SEO Services Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Rank Higher on <span className="text-green-600">Google</span> in Kerala
            <br /> Get More Local Customers
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses in <strong>Trivandrum, Kochi, Kollam, Kozhikode, Kannur</strong> and across Kerala increase visibility, attract qualified local traffic,
            and generate consistent leads through data-driven SEO strategies.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Get Free SEO Audit
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Our SEO Services Include
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                Keyword Research & Strategy
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                On-Page SEO Optimization
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                Technical SEO & Site Speed
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                High-Quality Backlink Building
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                Monthly Reporting & Analytics
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Invest in SEO?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Long-Term Organic Growth
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Higher Trust & Credibility
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Better ROI Than Paid Ads
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Consistent Lead Generation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Scalable Global Visibility
              </li>
            </ul>
          </div>

        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our SEO Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Audit", "Strategy", "Optimization", "Growth Tracking"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-green-600 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PAGES */}
        <div className="mb-16 bg-green-50 border border-green-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Our Specialised SEO Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-green-600 font-bold text-lg">📍</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">Local SEO Kerala</div><div className="text-sm text-gray-500">Google Maps & local pack rankings</div></div>
            </Link>
            <Link href="/digital-marketing-trivandrum" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-green-600 font-bold text-lg">🎯</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">Digital Marketing Trivandrum</div><div className="text-sm text-gray-500">Full-stack digital marketing in Trivandrum</div></div>
            </Link>
            <Link href="/seo-for-doctors-clinics-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-green-600 font-bold text-lg">🏥</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">SEO for Doctors & Clinics Kerala</div><div className="text-sm text-gray-500">Healthcare SEO specialists</div></div>
            </Link>
            <Link href="/google-ads-management-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group">
              <span className="text-green-600 font-bold text-lg">📈</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-green-600">Google Ads Management Kerala</div><div className="text-sm text-gray-500">ROI-tracked paid search campaigns</div></div>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much does SEO cost in Kerala?", a: "Our SEO services in Kerala start at ₹5,000 per month. Pricing depends on your industry, location targeting (Trivandrum, Kochi, Kollam, etc.), and the number of target keywords." },
              { q: "How long does SEO take to show results in Kerala?", a: "For local Kerala businesses targeting city-level keywords (Trivandrum, Kollam, Kozhikode), you can expect significant improvement in 4–10 weeks due to low competition in most tier-2 cities." },
              { q: "Do you provide local SEO for businesses outside Trivandrum?", a: "Yes — we provide local SEO across Kerala including Kochi, Kollam, Kozhikode, Kannur, Kottayam, Palakkad and Thrissur." },
              { q: "What is included in your SEO service?", a: "Our SEO package includes keyword research, on-page optimization, technical SEO, Google Business Profile optimization, local citation building, monthly reporting and internal linking strategy." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-green-600 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹5,000 / Month
          </h2>

          <p className="mb-8 text-green-100 text-lg">
            Let&apos;s increase your visibility and bring customers directly from Google across Kerala.
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
            Get Your SEO Strategy
          </Link>
        </div>

      </div>
    </section>
  );
}