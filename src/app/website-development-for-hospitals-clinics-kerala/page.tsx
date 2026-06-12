import Link from "next/link";

export const metadata = {
  title: "Hospital & Clinic Website Development in Kerala | Digital Product Solutions",
  description:
    "Professional hospital, clinic & Ayurvedic center website development in Kerala. Online appointment booking, patient portals & doctor profiles. Trivandrum-based. Starting ₹25,000.",
  keywords: "hospital website development Kerala, clinic website design Trivandrum, doctor website Kerala, Ayurvedic clinic website Kerala, medical website development Kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/website-development-for-hospitals-clinics-kerala" },
  openGraph: {
    title: "Hospital & Clinic Website Development in Kerala | Digital Product Solutions",
    description: "Website development for hospitals, clinics & Ayurveda centers in Kerala. Online appointment booking, doctor profiles & patient portals. Based in Trivandrum.",
    url: "https://www.digitalproductsolutions.in/website-development-for-hospitals-clinics-kerala",
    type: "website",
  },
};

export default function HospitalClinicWebsiteKerala() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a hospital website cost in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Hospital and clinic website development in Kerala starts at ₹25,000 for a basic site with doctor profiles, services and contact forms. Websites with online appointment booking systems start from ₹45,000." }
      },
      {
        "@type": "Question",
        "name": "Can you build a website with online appointment booking for my clinic in Trivandrum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we build clinic and hospital websites with integrated online appointment booking, doctor availability calendars, SMS/WhatsApp reminders and patient management systems for healthcare providers across Kerala." }
      },
      {
        "@type": "Question",
        "name": "Do you build Ayurvedic clinic websites in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we specialize in Ayurvedic wellness center websites with treatment listings, doctor profiles, online consultation booking and patient testimonials. We understand the Kerala Ayurveda market." }
      }
    ]
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-teal-100 text-teal-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Hospital & Clinic Website Development — Kerala
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hospital & Clinic Website Development in <span className="text-teal-600">Kerala</span>
            <br /> Online Appointments. Patient Trust. Google Rankings.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build professional websites for <strong>hospitals, clinics, multi-specialty centers and Ayurvedic wellness centers</strong> across Kerala. Online appointment booking, doctor profiles, patient portals and SEO for healthcare in <strong>Trivandrum, Kochi, Kollam and beyond</strong>.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
              Get Hospital Website Quote
            </Link>
            <Link href="/software-development" className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              View All Software Solutions
            </Link>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What We Build for Healthcare</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Hospital & Multi-Specialty Clinic Websites",
                "Online Appointment Booking Systems",
                "Doctor Profile & Department Pages",
                "Ayurvedic Center & Wellness Websites",
                "Patient Portal & Medical History Access",
                "WhatsApp Appointment Bot Integration",
                "Health Blog & SEO Content",
                "Google Maps & Local SEO Setup",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Healthcare Needs a Professional Website</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Patients search for doctors on Google before visiting",
                "Online booking reduces phone calls by 60%+",
                "Build trust with professional design & testimonials",
                "Rank for 'doctor near me' searches in your city",
                "HIPAA/data-privacy conscious development",
                "WhatsApp integration for appointment reminders",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TYPES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Types of Healthcare Websites We Build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", name: "Multi-Specialty Hospitals", desc: "Full hospital websites with all departments, doctors and services" },
              { icon: "🩺", name: "Private Clinics", desc: "Clean, professional clinic websites with appointment booking" },
              { icon: "🌿", name: "Ayurvedic Centers", desc: "Treatment listings, Panchakarma packages and wellness blogs" },
              { icon: "👁️", name: "Eye & Dental Clinics", desc: "Specialty clinic websites with patient education content" },
              { icon: "🧘", name: "Yoga & Wellness Centers", desc: "Class schedules, instructor profiles and online booking" },
              { icon: "💊", name: "Pharmacy & Medical Stores", desc: "Product catalogues and online enquiry for pharmacies" },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-teal-400 hover:shadow-md transition">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED */}
        <div className="mb-16 bg-teal-50 border border-teal-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Enhance Your Healthcare Digital Presence</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/seo-for-doctors-clinics-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition group">
              <span className="text-teal-600 font-bold text-lg">📍</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-teal-600">SEO for Doctors & Clinics Kerala</div><div className="text-sm text-gray-500">Rank for 'doctor near me' searches</div></div>
            </Link>
            <Link href="/ai-chatbot-development-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition group">
              <span className="text-indigo-600 font-bold text-lg">🤖</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-teal-600">AI Chatbot for Clinics</div><div className="text-sm text-gray-500">Automate appointment booking 24/7</div></div>
            </Link>
            <Link href="/whatsapp-automation-kerala" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition group">
              <span className="text-green-600 font-bold text-lg">💬</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-teal-600">WhatsApp Automation</div><div className="text-sm text-gray-500">Appointment reminders & patient follow-up</div></div>
            </Link>
            <Link href="/software-development" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition group">
              <span className="text-blue-600 font-bold text-lg">💻</span>
              <div><div className="font-semibold text-gray-800 group-hover:text-teal-600">Hospital Management Software</div><div className="text-sm text-gray-500">Custom HMS & patient management systems</div></div>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much does a hospital website cost in Kerala?", a: "Hospital and clinic website development in Kerala starts at ₹25,000 for a basic site with doctor profiles, services and contact forms. Websites with online appointment booking systems start from ₹45,000." },
              { q: "Can you build a website with online appointment booking for my clinic in Trivandrum?", a: "Yes — we build clinic and hospital websites with integrated online appointment booking, doctor availability calendars, SMS/WhatsApp reminders and patient management systems." },
              { q: "Do you build Ayurvedic clinic websites in Kerala?", a: "Yes — we specialize in Ayurvedic wellness center websites with treatment listings, doctor profiles, online consultation booking and patient testimonials." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-teal-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Starting at ₹25,000</h2>
          <p className="mb-8 text-teal-100 text-lg">
            Get a professional healthcare website with online appointment booking. Built in 7–14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-white text-teal-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Hospital Website Quote
            </Link>
            <Link href="https://wa.me/919400355185?text=I%20need%20a%20hospital%20website" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full bg-teal-500 text-white border border-white/30 hover:bg-teal-400 transition-all duration-300">
              WhatsApp Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
