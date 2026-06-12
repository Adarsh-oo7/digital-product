import Link from "next/link";

export const metadata = {
  title: "Odoo ERP Development in Kerala | ERP for Manufacturing & Retail | Digital Product Solutions",
  description: "Odoo ERP implementation partner in Kerala for manufacturing, retail & distribution. Inventory, accounting, HR & CRM modules. Based in Trivandrum. Starting ₹2,00,000.",
  keywords: "Odoo ERP Kerala, ERP development Kerala, Odoo implementation partner Kerala, manufacturing ERP Kerala, ERP for retail Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/odoo-erp-development-kerala" },
  openGraph: {
    title: "Odoo ERP Development in Kerala | ERP for Manufacturing & Retail | Digital Product Solutions",
    description: "Odoo ERP implementation partner in Kerala for manufacturing, retail & distribution. Inventory, accounting, HR & CRM modules. Based in Trivandrum. Starting ₹2,00,000.",
    url: "https://www.digitalproductsolutions.in/odoo-erp-development-kerala",
    type: "website",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does Odoo ERP implementation cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Odoo ERP implementation in Kerala starts at ₹2,00,000 for a basic 2-module setup (e.g., Inventory + Accounting). Full enterprise implementations with customization typically range from ₹5,00,000 to ₹15,00,000." }
      },
      {
        "@type": "Question",
        "name": "Do you provide Odoo support after implementation?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we provide ongoing Odoo support, bug fixes, module upgrades and staff training as part of a post-implementation support package." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Odoo ERP Development in Kerala
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-indigo-600">Odoo ERP Development in Kerala</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We implement Odoo ERP for Kerala manufacturers, retail chains and distribution businesses. Full Odoo customization, module setup, data migration and staff training. Based in Trivandrum.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              WhatsApp Us
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What We Offer</h2>
            <ul className="space-y-4 text-gray-600">
              {[
              "Odoo 17 Implementation & Customization",
              "Inventory & Warehouse Management",
              "Accounting & Financial Reports",
              "HR, Payroll & Leave Management",
              "CRM & Sales Pipeline",
              "Manufacturing Module (MRP)",
              "Purchase & Vendor Management",
              "Data Migration from Legacy Systems"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Digital Product Solutions?</h2>
            <ul className="space-y-4 text-gray-600">
              {["Based in Trivandrum, Kerala", "20+ Kerala Businesses Served", "Fast 7-Day Delivery Average", "Direct Communication — No Middlemen", "Transparent Pricing, No Hidden Fees", "Post-Launch Support Included"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">&#10004;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much does Odoo ERP implementation cost in Kerala?", a: "Odoo ERP implementation in Kerala starts at ₹2,00,000 for a basic 2-module setup (e.g., Inventory + Accounting). Full enterprise implementations with customization typically range from ₹5,00,000 to ₹15,00,000." },
              { q: "Do you provide Odoo support after implementation?", a: "Yes — we provide ongoing Odoo support, bug fixes, module upgrades and staff training as part of a post-implementation support package." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/software-development", icon: "💻", title: "Custom Software Development Kerala", desc: "Beyond Odoo — custom-built business software" },
              { href: "/ai-automation-for-businesses-kerala", icon: "🤖", title: "AI Business Automation", desc: "AI layer on top of your ERP" },
              { href: "/contact", icon: "📞", title: "Free ERP Consultation", desc: "Talk to our Odoo specialists" },
              { href: "/pricing", icon: "💰", title: "Transparent Pricing", desc: "Clear Odoo project pricing" }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
                <span className="text-indigo-600 font-bold text-lg">{item.icon}</span>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-indigo-600">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative bg-indigo-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at &#8377;2,00,000</h2>
          <p className="mb-8 text-indigo-100 text-lg">Based in Trivandrum, Kerala &middot; Serving all of India &middot; Reply within 2 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-indigo-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-indigo-500 text-white border border-white/30 hover:bg-indigo-400 transition-all duration-300">
              WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
