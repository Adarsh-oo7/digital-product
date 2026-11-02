import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Best SEO Company in Kerala | AI SEO Specialist & Agency in Trivandrum",
  description:
    "Partner with the best SEO company in Kerala (157,000+ verified Google Search Console impressions across client properties). Technical SEO, AI SEO / GEO, E-Commerce SEO & Local Maps optimization from ₹5,000/mo.",
  path: "/seo-services",
  absoluteTitle: true,
  keywords: [
    "best seo company in kerala",
    "best seo agency in kerala",
    "best seo company kerala",
    "best seo expert in kerala",
    "best seo expert kerala",
    "ai seo company kerala",
    "ai seo specialist kerala",
    "ecommerce seo expert kerala",
    "best seo companies in kerala",
    "best seo services in kerala",
    "affordable seo company kerala",
    "affordable seo packages kerala",
    "seo company in trivandrum",
    "local seo kerala",
  ],
});

export default function SEOServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best SEO company in Kerala with verified Google Search Console proof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital Product Solutions (headquartered in Korani, Trivandrum and led by AI & SEO Architect Adarsh B S) manages over 157,000+ verified Google Search Console impressions and 5,100+ organic clicks across live properties including Care N Cure Group Perth (73,746+ impressions, #1.1 for aged care agencies in WA), KPSC Master (56,155+ impressions & 4,223 clicks), and Kerala Sellers (7,620+ impressions).",
        },
      },
      {
        "@type": "Question",
        name: "What are your affordable SEO packages in Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our affordable SEO packages in Kerala start at ₹5,000/month for Local SEO & Google Business Profile optimization, ₹10,000/month for Growth Technical & Content SEO (up to 25 target keywords), and ₹18,000/month for E-Commerce SEO & AI Generative Engine Optimization (GEO).",
        },
      },
      {
        "@type": "Question",
        name: "What makes you an AI SEO company and AI SEO specialist in Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike traditional backlink agencies, we combine programmatic Next.js technical SEO, automated Google Indexing API & Bing IndexNow pipelines, structured JSON-LD entity graphs, and Generative Engine Optimization (llms.txt, ChatGPT, Perplexity & Google AI Overviews citation engineering).",
        },
      },
      {
        "@type": "Question",
        name: "Do you have an e-commerce SEO expert in Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we built and rank Kerala Sellers (keralasellers.in), achieving Position #4.4 for sell-online-kerala and 12.0% CTR for Instagram seller pages using Product/Offer schema, category cluster architecture, and sub-second Core Web Vitals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide local SEO for businesses outside Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we provide local SEO across Kerala including Kochi (Ernakulam), Kollam, Kozhikode (Calicut), Kannur, Kottayam, Palakkad, Thrissur, and international markets (Australia, UAE, UK, Germany).",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Best SEO Company in Kerala & AI SEO Specialist Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Digital Product Solutions",
      url: "https://www.digitalproductsolutions.in",
    },
    areaServed: [
      "Thiruvananthapuram",
      "Kochi",
      "Kollam",
      "Kozhikode",
      "Kannur",
      "Kottayam",
      "Kerala",
      "Australia",
      "United Arab Emirates",
      "United Kingdom",
    ],
    description:
      "Technical SEO, AI SEO (GEO), E-Commerce SEO, and Google Business Profile optimization by Kerala's engineering-led SEO agency.",
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "5000",
        priceCurrency: "INR",
        unitText: "MONTH",
      },
    },
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-32 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.digitalproductsolutions.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "SEO Services Kerala",
                item: "https://www.digitalproductsolutions.in/seo-services",
              },
            ],
          }),
        }}
      />
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full mb-4 font-semibold">
            Best SEO Company in Kerala · AI SEO &amp; Technical Search Specialists
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best SEO Company in <span className="text-green-600">Kerala</span>
            <br /> AI SEO, E-Commerce &amp; Local Search Growth
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Work directly with an engineering-led{" "}
            <strong>SEO agency in Kerala</strong> and{" "}
            <strong>
              AI SEO specialist (
              <Link href="/adarsh-b-s" className="text-green-700 underline">
                Adarsh B S
              </Link>
              )
            </strong>
            . We have delivered{" "}
            <strong>157,000+ verified Google Search Console impressions</strong>{" "}
            and <strong>5,100+ organic clicks</strong> across Kerala and
            international client properties — starting from{" "}
            <strong>₹5,000/month</strong>.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Get Free GSC &amp; SEO Audit
            </Link>

            <Link
              href="/work"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Live Case Studies
            </Link>
          </div>
        </div>

        {/* VERIFIED GOOGLE SEARCH CONSOLE PROOF */}
        <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-green-100">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              First-Party Google Search Console Data (Verified)
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Real Search Console Growth We Have Engineered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm">
              Every metric below is pulled directly from live Google Search
              Console properties engineered and managed by Digital Product
              Solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-xs font-semibold text-green-700 uppercase mb-1">
                Australia Healthcare (Perth, WA)
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                73,746+
              </div>
              <div className="text-sm font-medium text-gray-800 mb-2">
                GSC Impressions · 303 Clicks
              </div>
              <p className="text-xs text-gray-600">
                <strong>Care N Cure Group (carencure.com.au):</strong> Ranked{" "}
                <strong>#1.1</strong> for &ldquo;aged care agencies&rdquo;,{" "}
                <strong>#1.3</strong> for &ldquo;home care services WA&rdquo;,
                and <strong>#1.5</strong> for &ldquo;home care services&rdquo;
                in Australia.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-xs font-semibold text-green-700 uppercase mb-1">
                Kerala EdTech SaaS Platform
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                56,155+
              </div>
              <div className="text-sm font-medium text-gray-800 mb-2">
                GSC Impressions · 4,223 Clicks
              </div>
              <p className="text-xs text-gray-600">
                <strong>KPSC Master (kpscmaster.in):</strong> 7.5% sitewide CTR,
                ranked <strong>#1.8</strong> (56% CTR) for &ldquo;vfa mock test
                2026&rdquo; and <strong>#2.2</strong> for Malayalam exam
                queries.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-xs font-semibold text-green-700 uppercase mb-1">
                E-Commerce Marketplace SEO
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                7,620+
              </div>
              <div className="text-sm font-medium text-gray-800 mb-2">
                GSC Impressions · 402 Clicks
              </div>
              <p className="text-xs text-gray-600">
                <strong>Kerala Sellers (keralasellers.in):</strong> Ranked{" "}
                <strong>#4.4</strong> for online selling in Kerala and{" "}
                <strong>#6.9</strong> (12.0% CTR) for Instagram seller
                onboarding across India &amp; GCC.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-xs font-semibold text-green-700 uppercase mb-1">
                Local Trivandrum Rental Hub
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                1,668+
              </div>
              <div className="text-sm font-medium text-gray-800 mb-2">
                GSC Impressions · 117 Clicks
              </div>
              <p className="text-xs text-gray-600">
                <strong>DPS Gaming (gaming.digitalproductsolutions.in):</strong>{" "}
                Ranked <strong>#3.7 to #5.4</strong> for &ldquo;PS5 rental near
                me&rdquo; and &ldquo;TV rental Trivandrum&rdquo; with 7.0% CTR.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              AI SEO, Technical &amp; E-Commerce SEO Services
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <div>
                  <strong>
                    AI SEO Specialist &amp; GEO (Generative Engine Optimization):
                  </strong>{" "}
                  Structured <code>llms.txt</code>, entity JSON-LD graphs, and
                  FAQ schemas engineered to get your brand cited in ChatGPT,
                  Perplexity, Claude, and Google AI Overviews.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <div>
                  <strong>E-Commerce SEO Expert in Kerala:</strong> Category
                  cluster architecture, <code>Product</code> &amp;{" "}
                  <code>Offer</code> schema markup, faceted navigation
                  canonicals, and Core Web Vitals optimization for Shopify,
                  WooCommerce, and custom Next.js stores.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <div>
                  <strong>Programmatic &amp; Technical SEO:</strong> Automated
                  Google Indexing API, Bing Webmaster API &amp; IndexNow
                  pipelines, crawl-budget cleanup, and Soft-404 elimination.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <div>
                  <strong>Local SEO &amp; Google Maps 3-Pack:</strong> Google
                  Business Profile (GBP) optimization, hyper-local district
                  landing pages (Trivandrum, Kochi, Kollam, Kozhikode, Kannur,
                  Kottayam), and NAP citation authority.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <div>
                  <strong>Transparent Search Console Reporting:</strong> Direct
                  monthly exports of verified impressions, clicks, query
                  positions, and WhatsApp/call conversions.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Affordable SEO Packages in Kerala
            </h2>

            <div className="space-y-5 text-gray-600">
              <div className="p-4 rounded-2xl bg-green-50/70 border border-green-100">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    1. Local SEO Starter Package
                  </h3>
                  <span className="text-green-700 font-extrabold text-lg">
                    ₹5,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Google Business Profile setup &amp; weekly posts, 10 local
                  target keywords, on-page title/schema fixes, and monthly GSC
                  report.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-green-50 border border-green-200">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    2. Growth Technical &amp; AI SEO Package
                  </h3>
                  <span className="text-green-700 font-extrabold text-lg">
                    ₹10,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Up to 25 commercial keywords, high-intent landing pages,
                  Google Indexing API + Bing IndexNow integration, AI SEO (
                  <code>llms.txt</code> + FAQ schema), and competitor gap
                  execution.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">
                    3. E-Commerce &amp; International SEO
                  </h3>
                  <span className="text-green-700 font-extrabold text-lg">
                    ₹18,000 / mo
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  50+ keywords, multi-country <code>hreflang</code> hubs (
                  <code>/au</code>, <code>/uae</code>, <code>/uk</code>,{" "}
                  <code>/de</code>), full e-commerce product schema, Core Web
                  Vitals engineering, and dedicated architect support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Engineering-Led SEO Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "GSC & Crawl Audit",
              "Entity & Keyword Architecture",
              "On-Page, Schema & Speed",
              "API Indexing & Growth Tracking",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="text-green-600 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PAGES */}
        <div className="mb-16 bg-green-50 border border-green-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Explore Our Specialised SEO &amp; Regional Hubs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/local-seo-kerala"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group"
            >
              <span className="text-green-600 font-bold text-lg">📍</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-green-600">
                  Local SEO Kerala &amp; Kochi
                </div>
                <div className="text-sm text-gray-500">
                  Google Maps &amp; Google ranking services
                </div>
              </div>
            </Link>
            <Link
              href="/digital-marketing-trivandrum"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group"
            >
              <span className="text-green-600 font-bold text-lg">🎯</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-green-600">
                  Digital Marketing Trivandrum
                </div>
                <div className="text-sm text-gray-500">
                  Trivandrum, Technopark &amp; Attingal
                </div>
              </div>
            </Link>
            <Link
              href="/digital-marketing-kollam"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group"
            >
              <span className="text-green-600 font-bold text-lg">🚀</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-green-600">
                  Digital Marketing &amp; AI SEO Kollam
                </div>
                <div className="text-sm text-gray-500">
                  SEO &amp; lead growth for Kollam businesses
                </div>
              </div>
            </Link>
            <Link
              href="/seo-services-kannur"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group"
            >
              <span className="text-green-600 font-bold text-lg">📈</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-green-600">
                  SEO Services Kannur
                </div>
                <div className="text-sm text-gray-500">
                  Best SEO expert &amp; agency in Kannur
                </div>
              </div>
            </Link>
            <Link
              href="/seo-for-doctors-clinics-kerala"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group"
            >
              <span className="text-green-600 font-bold text-lg">🏥</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-green-600">
                  SEO for Doctors &amp; Clinics Kerala
                </div>
                <div className="text-sm text-gray-500">
                  Healthcare &amp; hospital SEO specialists
                </div>
              </div>
            </Link>
            <Link
              href="/google-ads-management-kerala"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 transition group"
            >
              <span className="text-green-600 font-bold text-lg">💡</span>
              <div>
                <div className="font-semibold text-gray-800 group-hover:text-green-600">
                  Google Ads Management Kerala
                </div>
                <div className="text-sm text-gray-500">
                  ROI-tracked Search &amp; PPC campaigns
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Which is the best SEO company in Kerala with verified Google Search Console proof?",
                a: "Digital Product Solutions (headquartered in Korani, Trivandrum and led by AI & SEO Architect Adarsh B S) manages over 157,000+ verified Google Search Console impressions and 5,100+ organic clicks across live properties including Care N Cure Group Perth (73,746+ impressions, #1.1 for aged care agencies in WA), KPSC Master (56,155+ impressions & 4,223 clicks), and Kerala Sellers (7,620+ impressions).",
              },
              {
                q: "What are your affordable SEO packages in Kerala?",
                a: "Our affordable SEO packages in Kerala start at ₹5,000/month for Local SEO & Google Business Profile optimization, ₹10,000/month for Growth Technical & Content SEO (up to 25 target keywords), and ₹18,000/month for E-Commerce SEO & AI Generative Engine Optimization (GEO).",
              },
              {
                q: "What makes you an AI SEO company and AI SEO specialist in Kerala?",
                a: "Unlike traditional backlink agencies, we combine programmatic Next.js technical SEO, automated Google Indexing API & Bing IndexNow pipelines, structured JSON-LD entity graphs, and Generative Engine Optimization (llms.txt, ChatGPT, Perplexity & Google AI Overviews citation engineering).",
              },
              {
                q: "Do you have an e-commerce SEO expert in Kerala?",
                a: "Yes — we built and rank Kerala Sellers (keralasellers.in), achieving Position #4.4 for sell-online-kerala and 12.0% CTR for Instagram seller pages using Product/Offer schema, category cluster architecture, and sub-second Core Web Vitals.",
              },
              {
                q: "Do you provide local SEO for businesses outside Trivandrum?",
                a: "Yes — we provide local SEO across Kerala including Kochi (Ernakulam), Kollam, Kozhikode (Calicut), Kannur, Kottayam, Palakkad, Thrissur, and international markets (Australia, UAE, UK, Germany).",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-green-600 text-white p-14 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹5,000 / Month
          </h2>

          <p className="mb-8 text-green-100 text-lg">
            Technical SEO, AI Search Optimization (GEO), E-Commerce SEO, and
            Google Business Profile growth backed by real Search Console data.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-center w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full bg-white text-blue-600 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Get Your Free SEO Strategy
          </Link>
        </div>
      </div>
    </section>
  );
}
