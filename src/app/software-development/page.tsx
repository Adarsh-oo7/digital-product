import Link from "next/link";

export const metadata = {
  title: "Custom Software & Web App Development in Kerala | Digital Product Solutions",
  description:
    "Custom software development for Kerala businesses — hospitals, schools, hotels, manufacturing & retail. Web apps, dashboards, ERP/Odoo, booking systems. Based in Trivandrum. Starting ₹15,000.",
  keywords: "software development Kerala, web app development Trivandrum, custom software Kerala, ERP development Kerala, Odoo Kerala, hospital management software Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/software-development" },
  openGraph: {
    title: "Custom Software & Web App Development in Kerala | Digital Product Solutions",
    description: "Custom web apps, dashboards, ERP & booking systems for Kerala businesses. Based in Trivandrum. Starting ₹15,000.",
    url: "https://www.digitalproductsolutions.in/software-development",
    type: "website",
  },
};

export default function SoftwareDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What software development services do you offer in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "We develop custom web applications, SaaS platforms, ERP systems (including Odoo customization), admin dashboards, CRM integrations, and specialized booking systems for businesses in Kerala." } },
      { "@type": "Question", "name": "How much does custom software development cost in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Our custom software development starts at ₹15,000 for simple web portals or custom databases. Full-scale SaaS or ERP implementation starts at ₹75,000, depending on scope and complexity." } },
      { "@type": "Question", "name": "Do you provide software maintenance and support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every custom software project includes 3 to 6 months of free maintenance, security updates, and bug fixes, with optional ongoing support plans." } },
      { "@type": "Question", "name": "Can you integrate custom software with my existing tools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We regularly connect custom business databases and portals to third-party tools like WhatsApp API, SMS gateways, payment channels (Razorpay), and Tally." } }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Software Development
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Custom Software Development in <span className="text-blue-600">Kerala</span>
            <br /> For Your Business
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We design and develop powerful web applications, SaaS platforms, hospital management systems, school software, hotel booking systems and ERP solutions for <strong>Kerala businesses</strong> — from Trivandrum to Kochi and beyond.
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

        {/* INDUSTRIES WE BUILD FOR */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Industries We Build Software For in Kerala</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", name: "Hospitals & Clinics", desc: "Hospital management, patient portals, appointment systems", link: "/website-development-for-hospitals-clinics-kerala" },
              { icon: "🏨", name: "Hotels & Resorts", desc: "Booking engines, PMS integrations, guest portals", link: "/website-development-for-hotels-resorts-kerala" },
              { icon: "🏫", name: "Schools & Education", desc: "School management systems, LMS, admission portals", link: "/school-education-management-software-kerala" },
              { icon: "🏭", name: "Manufacturing (ERP/Odoo)", desc: "Odoo ERP, inventory, production & accounting", link: "/odoo-erp-development-kerala" },
              { icon: "🍽️", name: "Restaurants", desc: "Online ordering, QR menus, POS systems", link: "/restaurant-website-online-ordering-kerala" },
              { icon: "🏗️", name: "Real Estate & Builders", desc: "Property listings, CRM, site visit management", link: "/real-estate-builder-website-development-kerala" },
            ].map((ind, i) => (
              <Link key={i} href={ind.link} className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition group">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* RELATED SPECIALISED SERVICES */}
        <div className="mb-20 bg-blue-50 border border-blue-100 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Specialised Development Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/ecommerce-website-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition group">
              <span className="text-blue-600 font-bold text-lg">🛒</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-blue-600">E-commerce Website Development</div>
                <div className="text-sm text-gray-500">Custom stores with payment integrations</div>
              </div>
            </Link>
            <Link href="/odoo-erp-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition group">
              <span className="text-blue-600 font-bold text-lg">💼</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-blue-600">Odoo ERP Development</div>
                <div className="text-sm text-gray-500">Manage business processes & inventories</div>
              </div>
            </Link>
            <Link href="/school-education-management-software-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition group">
              <span className="text-blue-600 font-bold text-lg">🏫</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-blue-600">School Management Software</div>
                <div className="text-sm text-gray-500">Automate admissions, fees, and results</div>
              </div>
            </Link>
            <Link href="/website-development-for-hospitals-clinics-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition group">
              <span className="text-blue-600 font-bold text-lg">🏥</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-blue-600">Hospital & Clinic Development</div>
                <div className="text-sm text-gray-500">Online booking & patient dashboards</div>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What software development services do you offer in Kerala?", a: "We develop custom web applications, SaaS platforms, ERP systems (including Odoo customization), admin dashboards, CRM integrations, and specialized booking systems for businesses in Kerala." },
              { q: "How much does custom software development cost in Kerala?", a: "Our custom software development starts at ₹15,000 for simple web portals or custom databases. Full-scale SaaS or ERP implementation starts at ₹75,000, depending on scope and complexity." },
              { q: "Do you provide software maintenance and support?", a: "Yes. Every custom software project includes 3 to 6 months of free maintenance, security updates, and bug fixes, with optional ongoing support plans." },
              { q: "Can you integrate custom software with my existing tools?", a: "Yes. We regularly connect custom business databases and portals to third-party tools like WhatsApp API, SMS gateways, payment channels (Razorpay), and Tally." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
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
            Let&apos;s build powerful, scalable software that grows your Kerala business.
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
  "
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}