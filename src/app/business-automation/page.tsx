import Link from "next/link";

export const metadata = {
  title: "Business Automation & WhatsApp Bots for Kerala SMEs | Digital Product Solutions",
  description:
    "Automate WhatsApp replies, order tracking, invoicing and CRM for Kerala businesses. Business automation services in Trivandrum starting ₹10,000. Save time, scale faster.",
  keywords: "business automation Kerala, WhatsApp automation Kerala, WhatsApp bot Trivandrum, workflow automation Kerala, CRM automation Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/business-automation" },
  openGraph: {
    title: "Business Automation & WhatsApp Bots for Kerala SMEs | Digital Product Solutions",
    description: "Automate WhatsApp, orders, invoices and CRM for Kerala businesses. Starting ₹10,000.",
    url: "https://www.digitalproductsolutions.in/business-automation",
    type: "website",
  },
};

export default function BusinessAutomationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is business automation?", "acceptedAnswer": { "@type": "Answer", "text": "Business automation uses software to perform repetitive tasks automatically — like sending WhatsApp confirmations, generating invoices, tracking orders and syncing CRM data — without manual effort." } },
      { "@type": "Question", "name": "How much does business automation cost in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Business automation in Kerala starts at ₹10,000 for basic WhatsApp auto-reply setups. Full workflow automation ranges from ₹25,000 to ₹1,50,000." } },
      { "@type": "Question", "name": "Can you automate WhatsApp for my Kerala business?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up WhatsApp Business API automation for Kerala businesses — auto-replies, order confirmations, appointment reminders, delivery updates and customer follow-ups." } },
      { "@type": "Question", "name": "How long does automation setup take?", "acceptedAnswer": { "@type": "Answer", "text": "Simple WhatsApp automation is ready in 3–5 days. Complex multi-workflow automation with CRM integration typically takes 2–4 weeks." } },
      { "@type": "Question", "name": "Do I need technical knowledge to use the automation?", "acceptedAnswer": { "@type": "Answer", "text": "No. We build automation systems that run completely in the background. You receive a simple dashboard to monitor everything." } }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Business Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automate Your <span className="text-indigo-600">Business Operations</span>
            <br /> Save Time. Increase Efficiency.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses eliminate manual work by automating workflows,
            customer communication, billing systems and internal processes.
            Work smarter, not harder.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Automate My Business
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Automation Projects
            </Link>
          </div>
        </div>

        {/* SERVICES INCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              What We Automate
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                WhatsApp & Email Auto-Replies
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                Order & Booking Workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                Invoice & Payment Automation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                CRM Integration & Lead Tracking
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                API & Third-Party Integrations
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Automate?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Reduce Human Errors
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Save Operational Time
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Improve Customer Experience
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Increase Productivity
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Scale Without Hiring More Staff
              </li>
            </ul>
          </div>

        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Automation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Analysis", "Workflow Design", "Integration", "Testing & Deployment"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-indigo-600 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED SERVICES */}
        <div className="mb-20 bg-indigo-50 border border-indigo-100 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Specialised Automation Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/whatsapp-automation-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">💬</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-indigo-600">WhatsApp Automation Kerala</div>
                <div className="text-sm text-gray-500">Automate customer replies & confirmations</div>
              </div>
            </Link>
            <Link href="/ai-chatbot-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">🤖</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-indigo-600">AI Chatbot Development Kerala</div>
                <div className="text-sm text-gray-500">24/7 hospital, hotel & clinic bots</div>
              </div>
            </Link>
            <Link href="/ai-automation-for-businesses-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">⚙️</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-indigo-600">AI Business Automation</div>
                <div className="text-sm text-gray-500">Intelligent document & process automation</div>
              </div>
            </Link>
            <Link href="/odoo-erp-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">💼</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-indigo-600">Odoo ERP Development Kerala</div>
                <div className="text-sm text-gray-500">Manage sales, stock & manufacturing</div>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "What is business automation?", a: "Business automation uses software to perform repetitive tasks automatically — like sending WhatsApp confirmations, generating invoices, tracking orders and syncing CRM data — without manual effort." },
              { q: "How much does business automation cost in Kerala?", a: "Business automation in Kerala starts at ₹10,000 for basic WhatsApp auto-reply setups. Full workflow automation ranges from ₹25,000 to ₹1,50,000." },
              { q: "Can you automate WhatsApp for my Kerala business?", a: "Yes. We set up WhatsApp Business API automation for Kerala businesses — auto-replies, order confirmations, appointment reminders, delivery updates and customer follow-ups." },
              { q: "How long does automation setup take?", a: "Simple WhatsApp automation is ready in 3–5 days. Complex multi-workflow automation with CRM integration typically takes 2–4 weeks." },
              { q: "Do I need technical knowledge to use the automation?", a: "No. We build automation systems that run completely in the background. You receive a simple dashboard to monitor everything." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-indigo-600 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹10,000
          </h2>

          <p className="mb-8 text-indigo-100 text-lg">
            Let automation handle repetitive tasks while you focus on growth.
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
            Get Automation Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
