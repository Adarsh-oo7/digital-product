import Link from "next/link";

export const metadata = {
  title: "SEO Services | Rank Higher on Google & Grow Organically",
  description:
    "Professional SEO services to help your business rank higher on Google, drive organic traffic and generate consistent leads globally.",
};

export default function SEOServicesPage() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            SEO Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Rank Higher on <span className="text-green-600">Google</span>  
            <br /> Get More Organic Customers
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses increase visibility, attract qualified traffic,
            and generate consistent leads through data-driven SEO strategies.
            Serving clients across India and globally.
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

        {/* CTA */}
        <div className="relative bg-green-600 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹5,000 / Month
          </h2>

          <p className="mb-8 text-green-100 text-lg">
            Let’s increase your visibility and bring customers directly from Google.
          </p>

          <Link
            href="/contact"
            className="bg-white text-green-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get Your SEO Strategy
          </Link>
        </div>

      </div>
    </section>
  );
}