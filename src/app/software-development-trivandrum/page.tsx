import Link from "next/link";

export const metadata = {
  title: "Digital Product Development Company in Trivandrum | Custom Software",
  description:
    "Top digital product development company in Trivandrum, Kerala. We provide custom software development, SaaS products, Odoo ERP, and web application services starting at ₹15,000. Free quote!",
  keywords: "digital product development company, digital product development services, software development trivandrum, software agency trivandrum, custom software kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/software-development-trivandrum" },
  openGraph: {
    title: "Digital Product Development Company in Trivandrum | Custom Software",
    description: "Expert software development and digital product development services in Trivandrum, Kerala. We build custom web apps, Odoo ERP, and SaaS products.",
    url: "https://www.digitalproductsolutions.in/software-development-trivandrum",
    type: "website",
  },
};

export default function SoftwareDevelopmentTrivandrumPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is digital product development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital product development involves the end-to-end process of defining, designing, building, and launching a software application or SaaS product. This includes UI/UX design, custom software architecture, database setups, system scaling, and ongoing support."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer software development services in Trivandrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a registered MSME IT company based in Trivandrum, Kerala. We build custom web applications, SaaS dashboards, and specialized databases for local clinics, schools, resorts, and corporate businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom software cost in Trivandrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our basic custom web portals and databases start at ₹15,000. Full-scale SaaS products, hospital management systems, or custom Odoo ERP installations typically start at ₹75,000, depending on requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can we communicate directly with the developers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, one of our key advantages is a direct client-to-developer model. You will collaborate directly with our engineers, eliminating the overhead and miscommunication of middle account managers."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Product Development Services Trivandrum",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digital Product Solutions",
      "url": "https://www.digitalproductsolutions.in",
      "telephone": "+919400355185",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thiruvananthapuram",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "postalCode": "695001",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Thiruvananthapuram" },
      { "@type": "State", "name": "Kerala" }
    ],
    "description": "Premium custom software, web app, and digital product development company based in Trivandrum, Kerala.",
    "offers": {
      "@type": "Offer",
      "price": "15000",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "15000",
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

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold uppercase tracking-wider">
            Custom Software & Product Engineering
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Product Development Company in <span className="text-blue-600">Trivandrum</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build secure, high-performance web applications, ERP dashboards, and SaaS products. Partner with 
            Trivandrum's top developers to scale your operations and automate workflows.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20software%20development%20in%20Trivandrum"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Premium Custom Software Engineered for Local & Global Brands
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                At Digital Product Solutions, we build digital products that combine beautiful designs with robust, clean architecture. We specialize in developing software that helps you automate mundane tasks, manage inventories, collect digital payments, and serve your customers on autopilot.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                As a leading <strong>digital product development company in Trivandrum</strong>, we work directly with business owners, founders, and clinical managers. There are no middlemen account executives — you get direct access to our core engineers.
              </p>
            </div>
            
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100/50">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Our Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-600">
                <div className="bg-white p-3 rounded-xl border border-gray-100">💻 Next.js & React</div>
                <div className="bg-white p-3 rounded-xl border border-gray-100">🐍 Node.js / Python</div>
                <div className="bg-white p-3 rounded-xl border border-gray-100">📱 Flutter Mobile</div>
                <div className="bg-white p-3 rounded-xl border border-gray-100">💼 Odoo / ERP CRM</div>
                <div className="bg-white p-3 rounded-xl border border-gray-100">🛡️ PostgreSQL & SQL</div>
                <div className="bg-white p-3 rounded-xl border border-gray-100">☁️ Vercel / AWS</div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES DETAILS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Software Engineering Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            From design sprint workshops to final deployment, we provide end-to-end digital product development services.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-3xl mb-4 block">🌐</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Web App Development</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Build fast, highly-secure React and Next.js web applications, client portals, administration dashboards, and payment gateway syncs.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✔ Single Page Applications (SPA)</li>
                <li>✔ Next.js Static & Server Render</li>
                <li>✔ Tailwind CSS layouts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-3xl mb-4 block">💼</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">ERP & Odoo Consulting</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Streamline inventories, invoicing, HR systems, and warehouse logs with customized ERP installations built specifically for Kerala manufacturing hubs.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✔ Odoo Custom Module setup</li>
                <li>✔ POS & Accounting modules</li>
                <li>✔ WhatsApp Notification integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-3xl mb-4 block">⚙️</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Business Automation</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Stop doing manual copy-paste work. We write background scripts to automate lead captures, sync sheets, and shoot WhatsApp confirmations.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✔ WhatsApp Cloud API Setup</li>
                <li>✔ Automated SMS & Email triggers</li>
                <li>✔ Custom Database pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* INDUSTRIES SERVED */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Local Sectors We Optimize in Trivandrum</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", name: "Hospitals & Diagnostics", desc: "Online booking systems, doctor schedule panels, patient health dashboard.", link: "/website-development-for-hospitals-clinics-kerala" },
              { icon: "🏫", name: "Schools & Academies", desc: "Interactive student portals, fees collection, grades publishing boards.", link: "/school-education-management-software-kerala" },
              { icon: "🏨", name: "Resorts & Premium Hotels", desc: "Commission-free booking software, local tourism packages catalogs.", link: "/website-development-for-hotels-resorts-kerala" },
              { icon: "🛍️", name: "Retail & Wholesalers", desc: "Billing terminals integrations, local delivery maps, customer rewards.", link: "/ecommerce-website-development-kerala" },
              { icon: "🍽️", name: "Cafes & Dining Outlets", desc: "Table QR scanning menu, online billing, kitchen order tickets systems.", link: "/restaurant-website-online-ordering-kerala" },
              { icon: "🏗️", name: "Builders & Construction", desc: "Apartment catalogs, site-visit scheduler, direct WhatsApp inquiry modules.", link: "/real-estate-builder-website-development-kerala" }
            ].map((ind, idx) => (
              <Link key={idx} href={ind.link} className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition group">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600">{ind.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What is your custom software process?", a: "We begin with a requirements analysis, create wireframes/designs, implement the code, run quality checks, and then launch the final build. We provide 3 to 6 months of free maintenance support." },
              { q: "Do you integrate with third-party software like Tally?", a: "Yes. We connect custom software databases with external platforms like Tally, SMS gateways, payment APIs (Razorpay), and WhatsApp Cloud API." },
              { q: "Do you handle web hosting?", a: "Yes. We set up, manage, and configure highly scalable cloud hosting options on platforms like Vercel, AWS, and DigitalOcean, matching your expected user volume." },
              { q: "Are there monthly recurring costs?", a: "Unless you require ongoing database support or cloud infrastructure (server charges), there are no mandatory monthly software fee retainers." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-blue-600 text-white p-12 md:p-16 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Custom Software?</h2>
          <p className="mb-8 text-blue-100 max-w-xl mx-auto text-base">
            Book a meeting directly with our tech lead in Trivandrum. We will provide a complete project roadmap and quote.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-4 font-semibold rounded-full bg-white text-blue-600 shadow-md hover:bg-gray-100 transition duration-300">
              Request Free Consultation
            </Link>
            <Link href="tel:+919400355185" className="px-8 py-4 font-semibold rounded-full bg-blue-500 text-white border border-white/20 hover:bg-blue-400 transition duration-300">
              📞 Call +919400355185
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
