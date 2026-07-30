import Link from "next/link";

export const metadata = {
  title: "Mobile App Development Company in Kerala | Starting ₹25,000",
  description:
    "We are the leading mobile app development company in Kerala. We build custom Android & iOS applications starting at ₹25,000. Compare us to Noviindus - we provide flat rates, full code ownership, and direct developer communication.",
  keywords: "mobile app development company in kerala, app development kerala, android app development kerala, ios app development kerala, mobile app developers kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/app-development-kerala" },
  openGraph: {
    title: "Mobile App Development Company in Kerala | Starting ₹25,000",
    description: "Premium Android & iOS mobile applications engineered for Kerala businesses, startups, clinics, and hotels. Get a free wireframe design and custom proposal.",
    url: "https://www.digitalproductsolutions.in/app-development-kerala",
    type: "website",
  },
};

export default function AppDevelopmentKeralaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does custom app development in Kerala cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For small businesses and local startups, custom Android & iOS mobile apps start at a transparent rate of ₹25,000 for a Lite MVP catalog. Standard e-commerce or booking apps with backend admin dashboards cost around ₹50,000+, and complex enterprise solutions with custom database syncs start at ₹1,20,000+."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms and frameworks do you use for app building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in cross-platform framework development using Flutter and React Native. This allows us to write a single, clean codebase that runs natively on both Google Android and Apple iOS, cutting your design and maintenance costs in half."
        }
      },
      {
        "@type": "Question",
        "name": "How do you compare to other app firms in Kerala like Noviindus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike traditional firms like Noviindus, we show our pricing tiers openly on our page. Additionally, we put clients in direct contact with engineers rather than non-technical account managers, deliver standard projects in 7 days, and bundle Google SEO setup as standard."
        }
      },
      {
        "@type": "Question",
        "name": "Do I own the full application source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Once final payments are processed, we transfer 100% intellectual property rights, database structures, and compiler assets directly to you. We do not charge recurring license fees to run your software."
        }
      },
      {
        "@type": "Question",
        "name": "Will you upload my app to the Google Play Store & Apple App Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our engineers handle the entire app deployment process. We compile release builds, prepare store listing graphics, configure developer accounts, and ensure compliance with Google and Apple submission guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide offline functionality in your apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design apps with local caching databases (such as Hive or SQLite) so that critical features (like product listings or user records) function seamlessly even without active internet connections."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digital Product Solutions",
      "url": "https://www.digitalproductsolutions.in",
      "telephone": "+919400355185",
      "priceRange": "₹25000 - ₹120000"
    },
    "areaServed": {
      "@type": "State",
      "name": "Kerala"
    },
    "description": "High-performance Android and iOS mobile app development services for businesses and startups in Kerala.",
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "25000",
        "priceCurrency": "INR",
        "unitText": "ONE_TIME"
      }
    }
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* H1 HERO SECTION */}
        <div className="text-center mb-20">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold uppercase tracking-wider">
            Smarter, Faster, More Transparent Mobile Apps
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium <span className="text-purple-600">Mobile App Development Company in Kerala</span>
            <br /> Native iOS & Android Quality
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Scale your brand with high-performance mobile applications starting at just ₹25,000. We are a trusted 
            <strong> mobile app development company in Kerala</strong> offering flat pricing, direct developer collaboration, 
            and 7-day fast-track MVP deliveries.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
            >
              Start Your App Project
            </Link>
            <Link
              href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20mobile%20app%20development%20in%20Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Talk directly to developers
            </Link>
          </div>
        </div>

        {/* SECTION: THE PROBLEM WITH TYPICAL AGENCIES */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Problem with Typical App Development Agencies in Kerala
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When searching for developers, you will find major agencies like <strong>Noviindus</strong>. Although they have worked with many brands, typical local software firms have significant structural gaps that cause operational friction:
            </p>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Obscure Quotations:</strong> They refuse to state pricing publicly. You are forced to schedule multiple meetings just to obtain an initial quote, which is often inflated based on your company's revenue.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Generic Code & Bloat:</strong> Many agencies rely on pre-existing generic templates that load slowly, causing users to uninstall.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Account Manager Middleware:</strong> Technical details are filtered through non-technical account managers, causing delays, miscommunications, and missed launch targets.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>No Local SEO Integration:</strong> They deliver an app but leave you to figure out how to rank it on Google or attract installs.
                </div>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-center font-medium bg-purple-50 p-6 rounded-2xl border border-purple-100">
              💡 <strong>The Digital Product Solutions Difference:</strong> We provide flat pricing, put you in direct contact with the developers, compile Release builds in 7 days, and bundle Local SEO setups to kickstart your growth.
            </p>
          </div>
        </div>

        {/* SECTION: OUR CORE SERVICES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our App Development Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Everything you need to launch a high-performance app on Google Play Store and Apple App Store.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 text-purple-600 rounded-lg text-sm">📱</span> Cross-Platform (Flutter / React Native)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We build high-performance applications using Flutter and React Native. This enables a single shared codebase to run natively on both Google Android and Apple iOS platforms, cutting your initial investment and maintenance costs by 40%.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Shared React Native / Flutter components</li>
                <li>✔ Pixel-perfect native responsive layouts</li>
                <li>✔ Optimized device memory utilization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-green-100 text-green-600 rounded-lg text-sm">🔒</span> Secure Backend & Payments
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our team integrates secure databases, user authentication modules (OAuth/OTP), and local payment channels (Razorpay, UPI, PayU) compliant with strict Reserve Bank of India standards.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Secure PostgreSQL / Firebase database setups</li>
                <li>✔ Payment gateway integrations with low transaction fees</li>
                <li>✔ Session tokens and data encryption</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg text-sm">🌐</span> Offline Mode Capabilities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Kerala's mobile connectivity can fluctuate. We integrate secure local databases (SQLite/Hive) so your customers can browse catalogs, read booking records, and draft orders without an active internet connection.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ SQLite / Hive local client caching</li>
                <li>✔ Automated sync algorithms when connection returns</li>
                <li>✔ Low network data consumption</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-orange-100 text-orange-600 rounded-lg text-sm">🚀</span> Store Submission & Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We manage the entire submission process, compile release bundles, prepare promotional store graphics, and handle compliance audits until the app is successfully live. Every plan includes 3 months of free post-launch support.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Google Play Console deployment</li>
                <li>✔ Apple App Store Connect configuration</li>
                <li>✔ 3 Months free debugging & crash support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION: TRANSPARENT PRICING TABLE */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Transparent App Packages</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Choose the scope that matches your business model. Flat rates, 100% code ownership.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-gray-900 text-xl mb-2">Lite MVP</h3>
              <p className="text-gray-500 text-xs mb-6">Ideal for product catalogs, basic listings, and startup concepts.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹25,000</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Hybrid Android & iOS Build</li>
                <li>✔ Basic Content Dashboard</li>
                <li>✔ WhatsApp order button</li>
                <li>✔ 7-Day Fast-Track Delivery</li>
                <li>✔ 100% Source Code Ownership</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-purple-500 p-8 rounded-3xl shadow-md relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase">Popular</span>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Custom App</h3>
              <p className="text-gray-500 text-xs mb-6">Ideal for retail shops, delivery apps, and clinic scheduling systems.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹50,000</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Native-feel Android & iOS compilations</li>
                <li>✔ Custom Admin Control Panel</li>
                <li>✔ Razorpay / UPI Integration</li>
                <li>✔ Google Maps integration</li>
                <li>✔ 3 Months Free Maintenance Support</li>
              </ul>
              <Link href="/contact" className="block text-center bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition text-sm">
                Get Started
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-gray-900 text-xl mb-2">Enterprise Platform</h3>
              <p className="text-gray-500 text-xs mb-6">Best for complex multi-vendor markets or offline ERP sync systems.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹1,20,000+</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Custom Multi-Tenant Database</li>
                <li>✔ Advanced offline data caching</li>
                <li>✔ Real-time updates & notifications</li>
                <li>✔ Integration with ERP systems (like Odoo)</li>
                <li>✔ Direct engineer access & priority SLA</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION: AUTOMATION & AI EDGE */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Smarter Apps Powered by AI & WhatsApp
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                A stand-alone mobile application is useless without automated engagement. We build intelligence directly into your app.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Our integrations include **automated WhatsApp invoice delivery, OTP logins, and conversational AI booking assistants** as core features, not expensive add-ons. When a customer orders or schedules via your app, they immediately receive a beautiful receipt and follow-up alerts directly on WhatsApp, keeping retention rates high.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
                <span className="font-bold text-purple-700 block text-sm mb-1">💬 WhatsApp Cloud API Integration</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Send transactional reminders, receipt PDFs, and dispatch alerts directly to your client's WhatsApp account automatically.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <span className="font-bold text-green-700 block text-sm mb-1">🤖 In-App AI Chatbot Assistants</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Reduce support costs with an in-app AI bot that solves customer questions, files tickets, and records booking requests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: WHY TRIVANDRUM & KERALA BUSINESSES CHOOSE US */}
        <div className="mb-20 bg-purple-50 border border-purple-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Kerala Businesses Choose Digital Product Solutions</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm max-w-3xl">
            Based in Trivandrum, we design applications with a deep understanding of local business patterns and demographics:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-2">🏨 Hotels in Kovalam</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Provide custom room-service apps, local itinerary booking catalogs, and digital QR menu systems for guests, bypassing high OTA fees.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-2">🏥 Clinics in Pattom</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Deploy patient record viewers, direct doctor booking schedules, and automated token notifications, optimizing daily clinic footfall.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-2">🛍️ Shops in Attingal</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Connect your retail storefront directly with your buyers' phones. Offer local home deliveries with Google Maps routing coordinates.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION: FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much does custom app development in Kerala cost?", a: "For small businesses, custom Android & iOS mobile apps start at a transparent rate of ₹25,000 for a Lite MVP catalog. Standard e-commerce or booking apps with dashboards cost around ₹50,000+, and complex enterprise solutions start at ₹1,20,000+." },
              { q: "Which platforms and frameworks do you use for app building?", a: "We specialize in cross-platform framework development using Flutter and React Native, compiling a single codebase that runs natively on both Android and iOS." },
              { q: "How do you compare to other app firms in Kerala like Noviindus?", a: "Unlike traditional firms, we show our pricing tiers openly on our page. We put clients in direct contact with engineers, deliver standard packages in 7 days, and bundle Google SEO setup." },
              { q: "Do I own the full application source code?", a: "Yes, absolutely. Once final payments are processed, we transfer 100% intellectual property rights and database structures directly to you." },
              { q: "Will you upload my app to the Google Play Store & Apple App Store?", a: "Yes, our engineers handle the entire app deployment process. We compile release builds, configure developer accounts, and ensure compliance with submission guidelines." },
              { q: "Do you provide offline functionality in your apps?", a: "Yes. We design apps with local caching databases (such as Hive or SQLite) so that critical features function seamlessly even without active internet connections." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: STRONG CALL-TO-ACTION */}
        <div className="relative bg-purple-600 text-white p-12 md:p-16 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Build Your Custom Mobile App</h2>
          <p className="mb-8 text-purple-100 max-w-xl mx-auto text-base">
            Discuss your application idea directly with our engineers. We provide free UI wireframes and a detailed timeline breakdown.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-4 font-semibold rounded-full bg-white text-purple-600 shadow-md hover:bg-gray-100 transition duration-300">
              Request Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20a%20free%20mobile%20app%20wireframe" className="px-8 py-4 font-semibold rounded-full bg-purple-700 text-white border border-white/20 hover:bg-purple-800 transition duration-300">
              💬 WhatsApp Us (Reply in 10 Min)
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
