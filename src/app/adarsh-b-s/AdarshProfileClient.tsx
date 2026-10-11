import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Code2,
  Sparkles,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function AdarshProfileClient() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adarsh B S",
    "jobTitle": "Founder, Lead AI Consultant & Software Solutions Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Digital Product Solutions",
      "url": "https://www.digitalproductsolutions.in",
      "logo": "https://www.digitalproductsolutions.in/img/logo.png"
    },
    "url": "https://www.digitalproductsolutions.in/adarsh-b-s",
    "sameAs": [
      "https://adarsh.digitalproductsolutions.in/"
    ],
    "description": "Founder, Lead AI Consultant, and Software Solutions Architect at Digital Product Solutions in Kerala. Specializing in enterprise AI automation, scalable Next.js architectures, and tailored CRM systems.",
    "knowsAbout": [
      "Artificial Intelligence",
      "AI Automation",
      "Software Architecture",
      "Full-Stack Development",
      "Next.js & React",
      "WhatsApp Business API Automation",
      "Enterprise CRM & ERP Systems",
      "Technical SEO & Core Web Vitals"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thiruvananthapuram",
      "addressRegion": "Kerala",
      "postalCode": "695104",
      "addressCountry": "IN"
    }
  };

  const specializations = [
    {
      icon: Brain,
      title: "Enterprise AI & LLM Systems",
      description:
        "Architecting production-ready AI workflows, RAG knowledge retrieval engines, intelligent customer triage bots, and Meta WhatsApp Cloud API conversational agents that automate high-volume inquiries with zero latency.",
      color: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      icon: Code2,
      title: "Scalable Software Architecture",
      description:
        "Engineering high-concurrency web portals, multi-tenant SaaS backends, and headless web platforms using Next.js, Node.js, Python, and PostgreSQL. Focused on sub-second loads and 100/100 Core Web Vitals.",
      color: "from-blue-500 to-cyan-600",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Database,
      title: "Tailored CRM & Business Systems",
      description:
        "Designing custom operational engines tailored to real-world workflows in Real Estate, Clinical Healthcare, Tourism, and FMCG manufacturing. Eliminating vendor lock-in and monthly license fees.",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      icon: Globe,
      title: "Technical SEO & Growth Strategy",
      description:
        "Deep semantic markup, programmatic schema architecture, Google Search Console indexing automation, and high-intent keyword clustering designed to dominate Google Maps and organic Page 1 rankings.",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  const clientHighlights = [
    {
      title: "BuilDwellz",
      category: "Construction & Engineering Portal",
      result: "Custom multi-page architecture with direct lead-capture funnel.",
      link: "/work/buildwellz",
    },
    {
      title: "Crystal Knot Films",
      category: "Luxury Wedding Media Platform",
      result: "Ultra-fast media streaming with zero-lag portfolio galleries.",
      link: "/work/crystal-knot-films",
    },
    {
      title: "Squeeze Berriez",
      category: "FMCG Brand & Distribution System",
      result: "D2C ordering portal and automated WhatsApp distributor dispatch.",
      link: "/work/squeeze-berriez",
    },
    {
      title: "Kerala Sellers",
      category: "Multi-Vendor Marketplace",
      result: "Scalable e-commerce infrastructure with UPI & Razorpay integration.",
      link: "/kerala-sellers",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Adarsh B S</span>
          </nav>

          {/* HERO PROFILE SECTION */}
          <section className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8 md:p-14 mb-16 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-10 items-center">
              {/* Photo Column */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/img/adarshnew.png"
                    alt="Adarsh B S — Founder, AI Consultant & Software Solutions Architect in Kerala"
                    fill
                    priority
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  <Image
                    src="/img/adarshcrazy.jpg"
                    alt="Adarsh B S in office"
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                    <span className="text-xs font-semibold text-gray-800">Founder & Architect</span>
                    <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* External Portfolio CTA */}
                <div className="mt-6 w-full max-w-xs">
                  <a
                    href="https://adarsh.digitalproductsolutions.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-black transition shadow-md group"
                  >
                    <span>View Personal Portfolio</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                  </a>
                </div>
              </div>

              {/* Bio & Credentials Column */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Founder • AI Consultant • Software Architect</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                  Adarsh B S
                </h1>

                <p className="text-lg md:text-xl font-medium text-blue-600 mb-6">
                  Leading AI Consultant & Software Solutions Architect in Kerala
                </p>

                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  Adarsh B S is the Founder and Lead Technology Architect of{" "}
                  <strong>Digital Product Solutions</strong>, a registered MSME IT company headquartered in Korani, Thiruvananthapuram. With deep engineering expertise spanning Next.js ecosystems, Python AI frameworks, and cloud architectures, Adarsh advises business leaders on adopting high-ROI automation systems and custom software.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  Recognized across Kerala as a leading technology consultant, he eliminates traditional agency inefficiencies by offering direct senior architect access — ensuring projects are delivered on time, with transparent published budgets, and with 100% custom code ownership.
                </p>

                {/* Badges / Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 mb-8">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-gray-100">
                    <div className="text-2xl font-bold text-gray-900">20+</div>
                    <div className="text-xs text-gray-500 font-medium">Production Systems</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600">5.0 ★</div>
                    <div className="text-xs text-gray-500 font-medium">Client Rating (25 Reviews)</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-gray-100 col-span-2 sm:col-span-1">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-500 font-medium">Direct Senior Access</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20would%20like%20to%20consult%20with%20you%20on%20AI%20and%20software%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl text-sm"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>WhatsApp Adarsh Directly</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-6 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition text-sm shadow-sm"
                  >
                    <span>Request Architectural Audit</span>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CONSULTING SPECIALIZATIONS */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Core Advisory Pillars
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Strategic Consulting & Technical Architecture
              </h2>
              <p className="text-gray-600 text-base">
                Whether scaling a Kerala enterprise or modernizing operations for overseas Malayali businesses in the GCC, UK, or USA, Adarsh provides hands-on technical direction across four key disciplines:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specializations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition relative group"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`p-3.5 rounded-2xl border ${item.bgLight}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* WHY WORK WITH ADARSH */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-14 mb-20 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                The Architect Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight">
                Why Kerala Founders & Business Leaders Choose Adarsh B S
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                In most IT agencies, your vision is filtered through sales representatives and account managers who lack software engineering knowledge. Working with Adarsh gives you direct access to the mind architecting your systems:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Zero Middleman Translation Loss",
                    desc: "You explain your business logic directly to the software architect who builds it.",
                  },
                  {
                    title: "Realistic Scopes & Published Transparent Budgets",
                    desc: "Accurate delivery schedules without inflated agency overhead or hostage monthly fees.",
                  },
                  {
                    title: "Engineered for 100/100 Core Web Vitals & Google SEO",
                    desc: "Deep search engine optimization, semantic schema markup, and speed audits baked into every platform from Day 1.",
                  },
                  {
                    title: "Long-Term Scalability & Code Ownership",
                    desc: "You own 100% of your source code, repositories, and cloud deployments with complete documentation.",
                  },
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block text-sm">{point.title}</span>
                      <span className="text-xs text-gray-400">{point.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PORTFOLIO & CASE STUDIES SPOTLIGHT */}
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Shipped Systems
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-3">
                  Featured Architecture & Client Platforms
                </h2>
              </div>
              <a
                href="https://adarsh.digitalproductsolutions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:text-blue-800 transition text-sm"
              >
                <span>View Full Showcase at adarsh.digitalproductsolutions.in</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientHighlights.map((client, idx) => (
                <Link
                  key={idx}
                  href={client.link}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wide block mb-2">
                      {client.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {client.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {client.result}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* BOTTOM CONSULTATION CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discuss Your Project Directly with Adarsh B S
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-base mb-8">
              Whether you need a high-converting web platform, a custom CRM, or an AI WhatsApp automation system, book a direct consultation with Kerala's top solutions architect today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20would%20like%20to%20consult%20with%20you%20on%20AI%20and%20software%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-sm shadow-lg transition flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Chat on WhatsApp (+91 94003 55185)</span>
              </a>
              <a
                href="https://adarsh.digitalproductsolutions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-sm shadow-md transition flex items-center gap-2"
              >
                <span>Explore adarsh.digitalproductsolutions.in</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
