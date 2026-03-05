import Link from "next/link";

export const metadata = {
  title: "Mobile App Development Services | Android & iOS Apps",
  description:
    "Professional Android and iOS mobile app development services for startups and businesses in kerala, india and worldwide. Scalable, secure and high-performance apps.",
};

export default function AppDevelopmentPage() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            App Development
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Powerful <span className="text-purple-600">Mobile Apps</span>  
            <br /> For Android & iOS
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We design and develop high-performance mobile applications for startups,
            enterprises and growing businesses across kerala, India and globally.
            Launch faster. Scale smarter.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg"
            >
              Start Your App Project
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* WHAT WE BUILD */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              What We Develop
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✔</span>
                Android Applications
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✔</span>
                iOS Applications
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✔</span>
                Cross-Platform Apps (Flutter / React Native)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✔</span>
                E-commerce & Booking Apps
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✔</span>
                Custom Business Apps
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Modern UI/UX Design
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Fast & Optimized Performance
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                App Store & Play Store Deployment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Secure Backend Integration
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Ongoing Maintenance & Support
              </li>
            </ul>
          </div>

        </div>

        {/* DEVELOPMENT PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our App Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Planning", "UI/UX Design", "Development", "Launch & Support"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-purple-600 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="relative bg-purple-600 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹25,000
          </h2>

          <p className="mb-8 text-purple-100 text-lg">
            Turn your app idea into a powerful mobile experience.
          </p>

          <Link
            href="/contact"
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get Free App Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}