import Link from "next/link";

export const metadata = {
  title: "Custom Software Development Services | Digital Product Solutions",
  description:
    "Professional custom software development services for businesses in kerala, India and globally. Web apps, dashboards and scalable systems.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Software Development
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Scalable <span className="text-blue-600">Custom Software</span>  
            <br /> For Your Business
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We design and develop powerful web applications, SaaS platforms,
            dashboards and business systems tailored for startups and enterprises
            across India and globally.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Start Your Project
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              What We Build
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                SaaS Platforms & Web Applications
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Admin Dashboards & Analytics Systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Booking & Appointment Systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                ERP & CRM Solutions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Secure Payment Integrations
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Choose Digital Product Solutions?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Clean, Scalable Architecture
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                SEO & Performance Optimized
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Fully Responsive & Mobile Friendly
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Secure & Cloud Ready
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Dedicated Global Client Support
              </li>
            </ul>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="relative bg-blue-600 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹15,000
          </h2>

          <p className="mb-8 text-blue-100 text-lg">
            Let’s build powerful, scalable software that grows your business.
          </p>

          <Link
            href="/contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}