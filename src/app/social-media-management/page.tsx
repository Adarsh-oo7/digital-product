import Link from "next/link";

export const metadata = {
  title: "Social Media Management Services | Grow Your Brand Online",
  description:
    "Professional social media management services to grow your brand on Instagram, Facebook and WhatsApp. Content creation, ads and audience growth worldwide.",
};

export default function SocialMediaManagementPage() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-16 px-4">
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
            className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get Social Media Plan
          </Link>
        </div>

      </div>
    </section>
  );
}