import Link from "next/link";

export const metadata = {
  title: "Mobile App Development for Kerala Businesses | Android & iOS | Digital Product Solutions",
  description:
    "Android & iOS app development for Kerala businesses — restaurants, clinics, shops, delivery services. Mobile apps built in Trivandrum. Starting ₹25,000.",
  keywords: "app development Kerala, mobile app development Trivandrum, Android app Kerala, iOS app Kerala, restaurant app Kerala, clinic app development",
  alternates: { canonical: "https://www.digitalproductsolutions.in/app-development" },
  openGraph: {
    title: "Mobile App Development for Kerala Businesses | Android & iOS | Digital Product Solutions",
    description: "Android & iOS apps for Kerala restaurants, clinics, shops & delivery services. Built in Trivandrum. Starting ₹25,000.",
    url: "https://www.digitalproductsolutions.in/app-development",
    type: "website",
  },
};

export default function AppDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What mobile app development platforms do you use?", "acceptedAnswer": { "@type": "Answer", "text": "We build native Android apps (using Kotlin/Java), native iOS apps (using Swift), and cross-platform apps (using Flutter or React Native) to optimize your budget and timeline." } },
      { "@type": "Question", "name": "How much does it cost to build a mobile app in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Our mobile app development starting price is ₹25,000 for simple business catalogs or doctor listing apps. Standard custom retail/e-commerce or booking apps with backend dashboards range between ₹50,000 and ₹2,00,050." } },
      { "@type": "Question", "name": "Will you upload my app to Google Play Store and Apple App Store?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle the entire publishing and deployment process, including preparing listing assets, setting up accounts, and ensuring compliance with App Store and Play Store guidelines." } },
      { "@type": "Question", "name": "Do you provide source code ownership?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Upon project completion and final payment, you will have 100% ownership of the application source code and deployment assets." } }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
            enterprises and growing businesses across Kerala, India and globally.
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

        {/* RELATED SPECIALISED SERVICES */}
        <div className="mb-20 bg-purple-50 border border-purple-100 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Related Specialized Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/software-development" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition group">
              <span className="text-purple-600 font-bold text-lg">💻</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-purple-600">Software Development</div>
                <div className="text-sm text-gray-500">Custom web applications & databases</div>
              </div>
            </Link>
            <Link href="/business-automation" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition group">
              <span className="text-purple-600 font-bold text-lg">⚙️</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-purple-600">Business Automation</div>
                <div className="text-sm text-gray-500">Automate customer updates & booking notifications</div>
              </div>
            </Link>
            <Link href="/ai-chatbot-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition group">
              <span className="text-purple-600 font-bold text-lg">🤖</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-purple-600">AI Chatbot Development</div>
                <div className="text-sm text-gray-500">Integrate AI support inside your mobile apps</div>
              </div>
            </Link>
            <Link href="/whatsapp-automation-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition group">
              <span className="text-purple-600 font-bold text-lg">💬</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-purple-600">WhatsApp Automation</div>
                <div className="text-sm text-gray-500">Integrate automated notifications to users</div>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What mobile app development platforms do you use?", a: "We build native Android apps (using Kotlin/Java), native iOS apps (using Swift), and cross-platform apps (using Flutter or React Native) to optimize your budget and timeline." },
              { q: "How much does it cost to build a mobile app in Kerala?", a: "Our mobile app development starting price is ₹25,000 for simple business catalogs or doctor listing apps. Standard custom retail/e-commerce or booking apps with backend dashboards range between ₹50,000 and ₹2,00,000." },
              { q: "Will you upload my app to Google Play Store and Apple App Store?", a: "Yes, we handle the entire publishing and deployment process, including preparing listing assets, setting up accounts, and ensuring compliance with App Store and Play Store guidelines." },
              { q: "Do you provide source code ownership?", a: "Yes. Upon project completion and final payment, you will have 100% ownership of the application source code and deployment assets." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
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
            Get Free App Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}