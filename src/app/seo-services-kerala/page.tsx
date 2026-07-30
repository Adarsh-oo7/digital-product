import Link from "next/link";

export const metadata = {
  title: "SEO Services in Kerala | Starting ₹5,000/mo | Top SEO Company in Kerala",
  description:
    "Rank on Google Page 1 with elite SEO services in Kerala. Transparent pricing starting at ₹5,000/mo. Beat competitors like Techpullers with technical Next.js speed, local schemas, and direct-to-developer support.",
  keywords: "seo services kerala, seo company kerala, seo service in kerala, local seo trivandrum, best seo agency kochi, search engine optimization kerala",
  alternates: { canonical: "https://www.digitalproductsolutions.in/seo-services-kerala" },
  openGraph: {
    title: "SEO Services in Kerala | Starting ₹5,000/mo | Top SEO Company in Kerala",
    description: "Rank your business on Page 1 of Google in Kochi, Trivandrum, Kozhikode, and across Kerala starting at ₹5,000/month. Free technical SEO audits!",
    url: "https://www.digitalproductsolutions.in/seo-services-kerala",
    type: "website",
  },
};

export default function SEOServicesKeralaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do SEO services in Kerala cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our SEO services in Kerala start at a transparent rate of ₹5,000 per month for the Starter Local plan, scaling up to ₹10,000/month for regional coverage, and ₹18,000+/month for enterprise or e-commerce campaigns. Unlike traditional agencies that hide their pricing behind contact forms, we list our rates openly on the site."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best SEO company in Kerala for local businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital Product Solutions is the premier choice for local business SEO in Kerala. We specialize in Next.js technical SEO, Google Maps pack domination, and local schema structures. We connect you directly with engineers rather than sales reps, ensuring faster, more accurate optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see organic rankings improve on Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local Kerala keywords targeting tier-2 hubs like Trivandrum, Kollam, or Kozhikode, initial search visibility improvements are visible in 4 to 8 weeks. Comprehensive state-wide keyword rankings for high-difficulty business sectors typically require 3 to 6 months of systematic optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How do you beat established agencies like Techpullers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We beat traditional competitors through technical superiority. We code ultra-fast websites in Next.js, implement precise schema automation, integrate WhatsApp lead captures as standard, and offer direct access to our developers rather than using middle account executives."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get regular reports on my SEO progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we send transparent monthly reports detailing organic search impressions, Google clicks, average ranking positions, and specific conversion points (calls, form submissions, and WhatsApp leads) so you see your exact ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Do you perform white-hat SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we only employ 100% white-hat SEO techniques. This includes optimization of Core Web Vitals, keyword structure alignment, mobile responsiveness, and manual link outreach, keeping your site safe from Google penalty updates."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digital Product Solutions",
      "url": "https://www.digitalproductsolutions.in",
      "telephone": "+919400355185",
      "priceRange": "₹5000 - ₹18000"
    },
    "areaServed": [
      { "@type": "State", "name": "Kerala" },
      { "@type": "City", "name": "Thiruvananthapuram" },
      { "@type": "City", "name": "Kochi" },
      { "@type": "City", "name": "Kozhikode" },
      { "@type": "City", "name": "Kollam" }
    ],
    "description": "High-impact local SEO, technical SEO, and white-hat link acquisition services in Kerala to rank businesses on Page 1.",
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "5000",
        "priceCurrency": "INR",
        "unitText": "MONTH"
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
          <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold uppercase tracking-wider">
            Smarter, Faster, More Transparent SEO
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional <span className="text-green-600">SEO Services in Kerala</span>
            <br /> Rank Page 1 & Double Your Leads
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop losing customers to your competitors. Get transparent, results-driven 
            <strong> search engine optimization in Kerala</strong> starting at just ₹5,000/mo. We build fast, 
            Next.js optimized websites, implement automated schemas, and provide direct-to-developer access to scale your business.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20SEO%20services%20in%20Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Consult with our SEO Lead
            </Link>
          </div>
        </div>

        {/* SECTION: THE PROBLEM WITH TYPICAL AGENCIES */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Problem with Typical SEO Agencies in Kerala
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When searching for a partner to improve your Google visibility, you'll encounter many established agencies like <strong>Techpullers</strong>. While they have domain history and large teams, traditional digital agencies often suffer from structural inefficiencies that hurt your business:
            </p>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Hidden Pricing & Sales Pitches:</strong> They hide their rates behind "contact for quote" pages, subjecting you to aggressive sales follow-ups and inflated pricing based on your company size.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Slow Communication Layers:</strong> Your requirements must pass through non-technical account managers, leading to delayed implementations, miscommunication, and slow execution.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Outdated Tech & Slow Sites:</strong> They build on generic, bloated WordPress templates that load slowly on mobile devices, dragging down your rankings despite ongoing optimization efforts.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>No Integrated Value:</strong> They charge extra for essential features like local schema integrations, WhatsApp messaging captures, and AI chat assistants.
                </div>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-center font-medium bg-green-50 p-6 rounded-2xl border border-green-100">
              💡 <strong>The Digital Product Solutions Difference:</strong> We provide flat, transparent rates, put you in direct contact with the developers, build on blazing-fast Next.js architecture, and bundle AI & WhatsApp automation out of the box.
            </p>
          </div>
        </div>

        {/* SECTION: OUR CORE SERVICES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Core SEO Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Comprehensive optimization designed to drive real calls, store visits, and sales inquiries.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-green-100 text-green-600 rounded-lg text-sm">📍</span> Local SEO & Google Maps Pack
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We optimize your Google Business Profile (GBP) and build local citations to rank your business in the "Map Pack" when local customers search for your products or services. This is critical for driving quick local phone calls and physical office traffic.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Precise Local Schema Markup (LocalBusiness, GeoCoordinates)</li>
                <li>✔ Google Maps Profile Audit & Optimization</li>
                <li>✔ Local citation building (JustDial, Sulekha, KeralaBiz)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg text-sm">⚙️</span> Technical Next.js SEO
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We analyze and fix code flaws that block search crawler indexing. By building with Next.js, we deliver fast loading times, optimized mobile responsiveness, clean canonical structures, and automated sitemap generation.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Blazing-fast Next.js Static Export implementation</li>
                <li>✔ Core Web Vitals audit & optimizations</li>
                <li>✔ Automated XML Sitemap and Robots.txt management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 text-purple-600 rounded-lg text-sm">📝</span> Content SEO & Keywords
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We identify high-intent terms like <strong>seo company kerala</strong> or <strong>seo service in kerala</strong> and write targeted, engaging service landing pages. We set optimized meta title structures designed for high CTR and build internal links.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Commercial keyword opportunity research</li>
                <li>✔ On-page heading hierarchy & image alt tags optimization</li>
                <li>✔ High-quality, non-plagiarized SEO content writing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-orange-100 text-orange-600 rounded-lg text-sm">🔗</span> Authority & Safe Link Building
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We help you build search engines' trust by securing high-authority links from regional business blogs, Technopark news channels, and local Kerala directory portals, safely increasing your site's domain authority.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Manual guest post pitches to regional startup platforms</li>
                <li>✔ Natural anchor text optimization</li>
                <li>✔ Competitor link analysis to capture their best sources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION: TRANSPARENT PRICING TABLE */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Flat, Transparent Pricing</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Choose the package that matches your business reach. No hidden setup charges, no long contract binds.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-gray-900 text-xl mb-2">Starter Local</h3>
              <p className="text-gray-500 text-xs mb-6">Ideal for single-location clinics, shops, or local services.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹5,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Target Local Keywords (up to 10)</li>
                <li>✔ Google Maps optimization</li>
                <li>✔ Basic Technical On-Page SEO</li>
                <li>✔ Schema Markup implementation</li>
                <li>✔ Monthly transparent progress report</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-green-500 p-8 rounded-3xl shadow-md relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase">Best Value</span>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Regional Domination</h3>
              <p className="text-gray-500 text-xs mb-6">Ideal for regional companies targeting the entire state of Kerala.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹10,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Regional Keywords (up to 25)</li>
                <li>✔ Google Maps Pack optimization</li>
                <li>✔ Comprehensive Next.js technical audit</li>
                <li>✔ Basic link acquisition campaign</li>
                <li>✔ Monthly organic conversions report</li>
              </ul>
              <Link href="/contact" className="block text-center bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm">
                Get Started
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-gray-900 text-xl mb-2">Enterprise & E-com</h3>
              <p className="text-gray-500 text-xs mb-6">Best for e-commerce stores, resort networks, or global exports.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹18,000+<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Unlimited Target Keywords</li>
                <li>✔ Full Technical SEO Audit & monitoring</li>
                <li>✔ High domain authority guest backlinks</li>
                <li>✔ Content creation & optimization</li>
                <li>✔ Dedicated engineer communication</li>
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
                Our Automation & AI Advantage
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Most SEO companies stop once your site ranks. We believe ranking is only half the battle. If visitors land on your site but leave without booking, your SEO efforts are wasted.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                We integrate **WhatsApp API captures and conversational AI chatbots** as standard offerings. This means when a local searcher visits your site, they can instantly message your team, receive automated service answers, or book an appointment on WhatsApp in seconds, converting cold traffic into paying customers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <span className="font-bold text-green-700 block text-sm mb-1">💬 Automated WhatsApp Capture</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Connect visitors to your WhatsApp Business app instantly. Capture their mobile number and send automated service pricing cards.
                </p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
                <span className="font-bold text-purple-700 block text-sm mb-1">🤖 AI Assistant Integration</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  An embedded AI chatbot answers common FAQs, records client requirements, and collects contact details 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: WHY TRIVANDRUM & KERALA BUSINESSES CHOOSE US */}
        <div className="mb-20 bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Kerala Businesses Choose Digital Product Solutions</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm max-w-3xl">
            Because we are based directly in Trivandrum, we understand the local business landscape better than distant agencies. We don't write generic international copies — our content targets local intents and business needs:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-2">🏨 Hotels in Kovalam</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Rank your resort for searches like 'boutique resort Kovalam' or 'backwater resort Alleppey' to get direct, commission-free bookings rather than paying heavy commissions to OTAs.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-2">🏥 Clinics in Pattom</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dominate the local map pack in Thiruvananthapuram for health searches, allowing patients to easily find your clinic location, hours, and direct booking WhatsApp line.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-2">🛍️ Shops in Attingal</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Drive regional retail foot traffic to your physical store location by listing and ranking high-intent queries matching your product catalogue.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION: FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How much do SEO services in Kerala cost?", a: "Our SEO services in Kerala start at a transparent rate of ₹5,000 per month for the Starter Local plan, scaling up to ₹10,000/month for regional coverage, and ₹18,000+/month for enterprise or e-commerce campaigns. Unlike traditional agencies that hide their pricing, we list our rates openly." },
              { q: "Which is the best SEO company in Kerala for local businesses?", a: "Digital Product Solutions is the premier choice for local business SEO in Kerala. We specialize in Next.js technical SEO, Google Maps pack domination, and local schema structures. We connect you directly with engineers rather than sales reps." },
              { q: "How long does it take to see organic rankings improve on Google?", a: "For local Kerala keywords targeting tier-2 hubs like Trivandrum, Kollam, or Kozhikode, initial search visibility improvements are visible in 4 to 8 weeks. Comprehensive state-wide keyword campaigns typically require 3 to 6 months." },
              { q: "How do you beat established agencies like Techpullers?", a: "We beat traditional competitors through technical superiority. We code ultra-fast websites in Next.js, implement precise schema automation, integrate WhatsApp lead captures as standard, and offer direct access to our developers." },
              { q: "Will I get regular reports on my SEO progress?", a: "Yes, we send transparent monthly reports detailing organic search impressions, Google clicks, average ranking positions, and specific conversion points (calls, form submissions, and WhatsApp leads) so you see your exact ROI." },
              { q: "Do you perform white-hat SEO?", a: "Yes, we only employ 100% white-hat SEO techniques. This includes optimization of Core Web Vitals, keyword structure alignment, mobile responsiveness, and manual link outreach, keeping your site safe from Google penalty updates." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: STRONG CALL-TO-ACTION */}
        <div className="relative bg-green-600 text-white p-12 md:p-16 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Start Dominating Google Page 1</h2>
          <p className="mb-8 text-green-100 max-w-xl mx-auto text-base">
            Get a free, detailed technical audit of your current site. We will highlight crawl errors, loading speeds, and list the easiest keywords to target. No commitment required.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-4 font-semibold rounded-full bg-white text-green-600 shadow-md hover:bg-gray-100 transition duration-300">
              Get Free SEO Audit
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20a%20free%20SEO%20audit" className="px-8 py-4 font-semibold rounded-full bg-green-700 text-white border border-white/20 hover:bg-green-800 transition duration-300">
              💬 WhatsApp Us (Reply in 10 Min)
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
