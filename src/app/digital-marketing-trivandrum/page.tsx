import Link from "next/link";

export const metadata = {
  title: "Digital Marketing in Trivandrum | ₹3,000/mo | 20+ Clients | Free Audit",
  description:
    "Top digital marketing agency in Trivandrum, Kerala. Beat competitors like Easynet Digital with transparent pricing (from ₹3,000/mo), fast Next.js speed, and direct developer communication. Book your free audit today!",
  keywords: "digital marketing trivandrum, digital marketing agency in trivandrum, online marketing trivandrum, digital marketing company in trivandrum, best digital marketing company trivandrum",
  alternates: { canonical: "https://www.digitalproductsolutions.in/digital-marketing-trivandrum" },
  openGraph: {
    title: "Digital Marketing in Trivandrum | ₹3,000/mo | 20+ Clients | Free Audit",
    description: "Results-focused digital marketing in Trivandrum, Kerala. WhatsApp marketing, SEO, Google Ads, and Meta campaigns starting at ₹3,000/month.",
    url: "https://www.digitalproductsolutions.in/digital-marketing-trivandrum",
    type: "website",
  },
};

export default function DigitalMarketingTrivandrum() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does digital marketing cost in Trivandrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our digital marketing services in Trivandrum start at a flat rate of ₹3,000 per month for organic social media management. Paid Google Ads and Meta Ads campaigns start at ₹10,000/month, and comprehensive packages start at ₹15,000/month. We show our pricing openly on our page."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best digital marketing agency in Trivandrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital Product Solutions is Trivandrum's premium full-service digital agency. We stand out by offering transparent pricing, direct communication with developers, and advanced AI-powered WhatsApp automation. We focus on real leads rather than vanity metrics."
        }
      },
      {
        "@type": "Question",
        "name": "How do you compare to other firms like Easynet Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike agencies like Easynet Digital, we do not hide our prices or force you through long sales funnels. We code ultra-fast Next.js websites, integrate automated lead captures as standard, and connect you directly with engineers instead of non-technical account managers."
        }
      },
      {
        "@type": "Question",
        "name": "What industries in Trivandrum do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve diverse sectors including Kovalam hotels (direct booking conversions), Pattom health clinics (patient acquisition), Attingal retail shops (foot traffic), local educational institutions, and Technopark startups."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get monthly reports of my campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we send detailed monthly reports tracking search console impressions, organic clicks, average keyword positions, and specific conversion points (WhatsApp leads, telephone clicks, and booking forms)."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Search and Meta Ads campaigns generate immediate clicks and sales inquiries within 24 to 48 hours of launch. Search engine optimization (SEO) and organic local ranking strategies typically take 4 to 8 weeks to rank tier-2 keywords."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.digitalproductsolutions.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.digitalproductsolutions.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Digital Marketing Trivandrum", "item": "https://www.digitalproductsolutions.in/digital-marketing-trivandrum" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services Trivandrum",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digital Product Solutions",
      "url": "https://www.digitalproductsolutions.in",
      "telephone": "+919400355185",
      "priceRange": "₹3000 - ₹15000"
    },
    "areaServed": [
      { "@type": "City", "name": "Thiruvananthapuram" },
      { "@type": "State", "name": "Kerala" }
    ],
    "description": "High-impact digital marketing, social media, local SEO, Google Ads, and WhatsApp automation in Trivandrum.",
    "offers": {
      "@type": "Offer",
      "price": "3000",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "3000",
        "priceCurrency": "INR",
        "unitText": "MONTH"
      }
    }
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-6xl mx-auto">

        {/* H1 HERO SECTION */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold uppercase tracking-wider">
            Smarter, Faster, More Transparent Digital Marketing
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium <span className="text-blue-600">Digital Marketing in Trivandrum</span>
            <br /> Scale Your Sales & Leads
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop wasting budgets on vanity impressions. Partner with Trivandrum's premium 
            <strong> digital marketing agency</strong> for high-converting campaigns starting at just ₹3,000/mo. We build fast 
            Next.js web pages, integrate WhatsApp automated triggers, and give you direct developer access.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              Get Free Marketing Audit
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20digital%20marketing%20in%20Trivandrum" target="_blank" rel="noopener noreferrer" className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Consult with our Marketing Lead
            </Link>
          </div>
        </div>

        {/* SECTION: THE PROBLEM WITH TYPICAL AGENCIES */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Problem with Typical Digital Agencies in Trivandrum
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When searching for local marketing partners, you will find traditional firms like <strong>Easynet Digital</strong>. Although they rank well for keywords due to domain age, many of these agencies carry structural issues that hurt local businesses financially:
            </p>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Obscured Pricing:</strong> They hide their monthly rates. You are forced to undergo annoying sales calls just to find basic package costs, which are often inflated based on your company's revenue.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>No Direct Developer Contact:</strong> Technical updates and tracking pixels are routed through non-technical account managers, causing delays, miscommunications, and missed campaign targets.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Slow Bloated Websites:</strong> They drive ad traffic to heavy, slow loading pages that bleed clicks. A mobile visitor will leave if your page takes more than 3 seconds to load.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">❌</span>
                <div>
                  <strong>Add-On Charges for Automation:</strong> They charge extra for basic features like WhatsApp order buttons, lead capture databases, or local JSON-LD schema integrations.
                </div>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-center font-medium bg-blue-50 p-6 rounded-2xl border border-blue-100">
              💡 <strong>The Digital Product Solutions Difference:</strong> We provide flat pricing, put you in direct contact with the developers, build on blazing-fast Next.js architecture, and bundle AI & WhatsApp automation out of the box.
            </p>
          </div>
        </div>

        {/* SECTION: OUR CORE SERVICES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Core Marketing Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Data-driven execution built to optimize search console queries, map packs, and social channels.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg text-sm">🔍</span> Local SEO & Google Ranking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We optimize your Google Business Profile (GBP) and local citations to rank your brand in the local "Map Pack" of Trivandrum, Kochi, and other major cities. This allows Kerala customers to find your address, telephone number, and reviews instantly.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Precise Local Schema Markup (LocalBusiness, GeoCoordinates)</li>
                <li>✔ Google Maps Profile Audit & Optimization</li>
                <li>✔ Local citation building (JustDial, Sulekha, KeralaBiz)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 text-purple-600 rounded-lg text-sm">📈</span> Paid Ads (Google & Meta)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We manage ROI-tracked Search and Display Ads campaigns. We design landing pages focused on conversions, place Google and Meta tracking pixels correctly, and target high-intent local searchers.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Google Search, Display, and YouTube campaigns</li>
                <li>✔ Meta Ads (Facebook & Instagram) demographic setups</li>
                <li>✔ Landing page copy optimized for high quality score</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-green-100 text-green-600 rounded-lg text-sm">💬</span> WhatsApp Cloud API Automation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We integrate WhatsApp marketing triggers to convert site clicks immediately. When a user queries, the system automatically captures their contact and starts a chat thread, delivering catalog files or answers in real time.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ WhatsApp order button captures</li>
                <li>✔ Transactional alerts and receipts setup</li>
                <li>✔ Conversational AI chatbot setups</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="p-2 bg-orange-100 text-orange-600 rounded-lg text-sm">📱</span> Social Media Management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We curate professional reels, posters, and educational posts customized for Trivandrum demographics, managing your Instagram, Facebook, and LinkedIn profiles to increase organic brand credibility.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>✔ Custom content calendars & graphic designs</li>
                <li>✔ Reel copywriting & optimization</li>
                <li>✔ Community management and reviews building</li>
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
              <h3 className="font-bold text-gray-900 text-xl mb-2">Social Booster</h3>
              <p className="text-gray-500 text-xs mb-6">Ideal for local cafes, retail boutiques, or gym clinics.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹3,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ 8 Custom Social Graphics</li>
                <li>✔ Bio & Profile Optimization</li>
                <li>✔ Basic Local SEO setup</li>
                <li>✔ Automated WhatsApp Link</li>
                <li>✔ Monthly transparent progress report</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-blue-500 p-8 rounded-3xl shadow-md relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase">Best Value</span>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Lead Generator</h3>
              <p className="text-gray-500 text-xs mb-6">Ideal for regional clinics, builders, or resorts seeking direct bookings.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹10,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Google Search Ads management</li>
                <li>✔ Meta Instagram Ads setup</li>
                <li>✔ Next-gen fast Landing Page setup</li>
                <li>✔ WhatsApp automated capture setup</li>
                <li>✔ Monthly organic conversions report</li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
                Get Started
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-gray-900 text-xl mb-2">Market Domination</h3>
              <p className="text-gray-500 text-xs mb-6">Best for competitive schools, hospitals, or export manufacturers.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹15,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                <li>✔ Full SEO & Maps Pack optimization</li>
                <li>✔ Google & Meta Ads management</li>
                <li>✔ WhatsApp API chatbot integration</li>
                <li>✔ Content marketing & copywriting</li>
                <li>✔ Direct engineer access & priority support</li>
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
                Integrated Automation & Conversational AI
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Standard agencies just drive clicks and deliver spreadsheet charts. We build conversions.
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
        <div className="mb-20 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12">
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
              { q: "How much does digital marketing cost in Trivandrum?", a: "Our digital marketing services in Trivandrum start at a flat rate of ₹3,000 per month for organic social media management. Paid Google Ads and Meta Ads campaigns start at ₹10,000/month, and comprehensive packages start at ₹15,000/month." },
              { q: "Which is the best digital marketing agency in Trivandrum?", a: "Digital Product Solutions is Trivandrum's premium full-service digital agency. We stand out by offering transparent pricing, direct communication with developers, and advanced AI-powered WhatsApp automation." },
              { q: "How do you compare to other firms like Easynet Digital?", a: "Unlike agencies like Easynet Digital, we do not hide our prices or force you through long sales funnels. We code ultra-fast Next.js websites, integrate automated lead captures as standard, and connect you directly with engineers." },
              { q: "What industries in Trivandrum do you specialize in?", a: "We serve diverse sectors including Kovalam hotels (direct booking conversions), Pattom health clinics (patient acquisition), Attingal retail shops (foot traffic), local educational institutions, and Technopark startups." },
              { q: "Will I get monthly reports of my campaigns?", a: "Yes, we send detailed monthly reports tracking search console impressions, organic clicks, average keyword positions, and specific conversion points (WhatsApp leads, telephone clicks, and booking forms)." },
              { q: "How long does it take to see results from digital marketing?", a: "Google Search and Meta Ads campaigns generate immediate clicks and sales inquiries within 24 to 48 hours of launch. Search engine optimization (SEO) and organic local ranking strategies typically take 4 to 8 weeks to rank." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: STRONG CALL-TO-ACTION */}
        <div className="relative bg-blue-600 text-white p-12 md:p-16 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4">Start Dominating Google Page 1</h2>
          <p className="mb-8 text-blue-100 max-w-xl mx-auto text-base">
            Get a free, detailed technical audit of your current site. We will highlight crawl errors, loading speeds, and list the easiest keywords to target. No commitment required.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-4 font-semibold rounded-full bg-white text-blue-600 shadow-md hover:bg-gray-100 transition duration-300">
              Get Free Marketing Audit
            </Link>
            <Link href="https://wa.me/919400355185?text=Hi%2C%20I%20need%20a%20free%20marketing%20audit" className="px-8 py-4 font-semibold rounded-full bg-blue-500 text-white border border-white/20 hover:bg-blue-400 transition duration-300">
              💬 WhatsApp Us (Reply in 10 Min)
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
