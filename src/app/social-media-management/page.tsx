import Link from "next/link";

export const metadata = {
  title: "Social Media & Performance Marketing for Kerala Businesses | Digital Product Solutions",
  description:
    "Social media management, Google Ads & Meta Ads for Kerala businesses. Instagram, Facebook & WhatsApp marketing in Trivandrum. Starting ₹3,000/month.",
  keywords: "social media management Kerala, Instagram marketing Trivandrum, Facebook ads Kerala, Google ads management Kerala, performance marketing Kerala, digital marketing agency Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/social-media-management" },
  openGraph: {
    title: "Social Media & Performance Marketing for Kerala Businesses | Digital Product Solutions",
    description: "Social media management, Google Ads & Meta Ads for Kerala businesses. Based in Trivandrum. Starting ₹3,000/month.",
    url: "https://www.digitalproductsolutions.in/social-media-management",
    type: "website",
  },
};

export default function SocialMediaManagementPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What platforms do you manage for social media?", "acceptedAnswer": { "@type": "Answer", "text": "We primarily manage Instagram, Facebook, and WhatsApp marketing campaigns, creating Reels, posts, and automated status content for Kerala brands." } },
      { "@type": "Question", "name": "How much does social media management cost in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Our social media management packages in Kerala start at ₹3,000 per month for basic content scheduling. Full campaign management including custom graphic design, Reels editing, and ad campaign setup starts at ₹10,000 per month." } },
      { "@type": "Question", "name": "Do you run paid advertisement campaigns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in high-ROI performance marketing across Meta Ads (Instagram & Facebook) and Google Ads, helping Kerala businesses get phone calls, WhatsApp inquiries, and orders directly." } },
      { "@type": "Question", "name": "How do you track and report campaign success?", "acceptedAnswer": { "@type": "Answer", "text": "We send monthly analytics reports showing reach, followers, engagement rate, website clicks, and actual conversion leads (form submissions or WhatsApp clicks)." } }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Social Media Management
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Your Brand on <span className="text-pink-600">Social Media</span>
            <br /> Turn Followers Into Customers
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We manage your Instagram, Facebook and WhatsApp marketing with
            strategic content, engaging creatives and performance-driven campaigns.
            Build trust. Increase reach. Generate consistent leads.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition shadow-lg"
            >
              Start Growing Today
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Campaign Work
            </Link>
          </div>
        </div>

        {/* SERVICES INCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              What We Manage
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">✔</span>
                Instagram Content & Reels Strategy
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">✔</span>
                Facebook Page Management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">✔</span>
                WhatsApp Marketing Campaigns
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">✔</span>
                Paid Ads Setup & Optimization
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">✔</span>
                Analytics & Growth Tracking
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Social Media Matters
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                Increase Brand Visibility
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                Build Customer Trust
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                Drive Website Traffic
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                Generate Quality Leads
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                Create Long-Term Brand Loyalty
              </li>
            </ul>
          </div>

        </div>

        {/* CONTENT STRATEGY PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Social Media Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Strategy", "Content Creation", "Posting & Ads", "Growth Optimization"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-pink-600 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED SPECIALISED SERVICES */}
        <div className="mb-20 bg-pink-50 border border-pink-100 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Performance Marketing Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/google-ads-management-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-400 transition group">
              <span className="text-pink-600 font-bold text-lg">📈</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-pink-600">Google Ads Management</div>
                <div className="text-sm text-gray-500">Run search & map listing ad campaigns</div>
              </div>
            </Link>
            <Link href="/seo-services" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-400 transition group">
              <span className="text-pink-600 font-bold text-lg">🔍</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-pink-600">SEO Services Kerala</div>
                <div className="text-sm text-gray-500">Get long-term organic traffic from Google</div>
              </div>
            </Link>
            <Link href="/digital-marketing-trivandrum" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-400 transition group">
              <span className="text-pink-600 font-bold text-lg">🎯</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-pink-600">Digital Marketing Trivandrum</div>
                <div className="text-sm text-gray-500">Full agency scale growth & marketing solutions</div>
              </div>
            </Link>
            <Link href="/local-seo-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-400 transition group">
              <span className="text-pink-600 font-bold text-lg">📍</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-pink-600">Local SEO Kerala</div>
                <div className="text-sm text-gray-500">Rank high on local maps and search queries</div>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What platforms do you manage for social media?", a: "We manage Instagram, Facebook, and WhatsApp marketing campaigns, creating Reels, posts, and automated status content for Kerala brands." },
              { q: "How much does social media management cost in Kerala?", a: "Our social media management packages in Kerala start at ₹3,000 per month for basic content scheduling. Full campaign management including custom graphic design, Reels editing, and ad campaign setup starts at ₹10,000 per month." },
              { q: "Do you run paid advertisement campaigns?", a: "Yes, we specialize in high-ROI performance marketing across Meta Ads (Instagram & Facebook) and Google Ads, helping Kerala businesses get phone calls, WhatsApp inquiries, and orders directly." },
              { q: "How do you track and report campaign success?", a: "We send monthly analytics reports showing reach, followers, engagement rate, website clicks, and actual conversion leads (form submissions or WhatsApp clicks)." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-pink-600 to-orange-500 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full opacity-10"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹3,000 / Month
          </h2>

          <p className="mb-8 text-pink-100 text-lg">
            Let’s turn your social media presence into a powerful marketing machine.
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
            Get Social Media Plan
          </Link>
        </div>

      </div>
    </section>
  );
}