import Link from "next/link";
import JsonLd from "./JsonLd";

export type RegionKey = "uae" | "gcc" | "au" | "uk" | "de";

type CompetitorRow = {
  category: string;
  examples: string;
  startingCost: string;
  architectAccess: string;
  deliverySpeed: string;
  codeOwnership: string;
};

const REGION_DATA: Record<
  RegionKey,
  {
    heading: string;
    subheading: string;
    dpsHighlight: {
      cost: string;
      overlap: string;
      cloud: string;
      proof: string;
    };
    rows: CompetitorRow[];
  }
> = {
  uae: {
    heading: "Top Software, Web, CRM & AI Development Companies in Dubai & UAE — 2026 Comparison",
    subheading:
      "When evaluating custom software, Next.js web development, Odoo ERP, or WhatsApp AI automation companies in Dubai, Abu Dhabi, and Sharjah, buyers typically compare local UAE agencies, large offshore IT firms, and direct-architect engineering teams like Digital Product Solutions.",
    dpsHighlight: {
      cost: "AED 1,200 (Web) / AED 4,000+ (CRM & Odoo) / AED 4,500/mo Dedicated Dev",
      overlap: "100% UAE workday overlap (only 1.5h time difference with Dubai GST)",
      cloud: "AWS Middle East (UAE me-central-1) · Bilingual EN + Arabic RTL",
      proof: "189,800+ verified GSC impressions & 20+ shipped platforms (5.0★ Google)",
    },
    rows: [
      {
        category: "Digital Product Solutions (Direct-Architect Agency)",
        examples: "Digital Product Solutions (9-Engineer MSME Team led by Adarsh B S)",
        startingCost: "AED 1,200 – AED 14,000+ (Fixed Milestone)",
        architectAccess: "Direct 1-on-1 WhatsApp/Zoom with Founder & Senior Engineers",
        deliverySpeed: "5–10 days (Web/Bot) · 15–45 days (Custom CRM/ERP/App)",
        codeOwnership: "100% GitHub Source Code, Cloud & IP Ownership",
      },
      {
        category: "Local Dubai & UAE Digital Agencies",
        examples: "Branex Dubai, Royex Technologies, Global Media Insight, Social Signals, FACTS ERP",
        startingCost: "AED 25,000 – AED 120,000+",
        architectAccess: "Routed via Account Managers & Sales Reps",
        deliverySpeed: "6–16 weeks",
        codeOwnership: "Often tied to annual maintenance or hosting retainers",
      },
      {
        category: "Large Enterprise Offshore Agencies (Kerala / India)",
        examples: "Webandcrafts (WAC), Acodez, SpiderWorks, Fingent, Emizen Tech, Sparkout Tech",
        startingCost: "AED 18,000 – AED 75,000+",
        architectAccess: "Project Manager layer between you and developers",
        deliverySpeed: "6–12 weeks",
        codeOwnership: "Milestone-dependent enterprise contracts",
      },
      {
        category: "Solo Freelancers (Upwork / Fiverr / Portals)",
        examples: "Individual freelance web or app developers",
        startingCost: "AED 1,500 – AED 8,000",
        architectAccess: "Direct, but single-person capacity bottleneck",
        deliverySpeed: "Unpredictable if the freelancer takes multiple jobs",
        codeOwnership: "Varies; high risk of abandoned maintenance",
      },
    ],
  },
  gcc: {
    heading: "Top Software, Web, ERP & AI Companies Across the GCC (Saudi Arabia, Qatar, Kuwait, Oman, Bahrain & UAE)",
    subheading:
      "Compare how Digital Product Solutions delivers bilingual English/Arabic Next.js platforms, custom CRMs, ZATCA-compliant Odoo ERP workflows, and official WhatsApp Cloud API automation against regional GCC agencies and large enterprise consultancies.",
    dpsHighlight: {
      cost: "SAR 1,200 / QAR 1,200 / KWD 100 / OMR 125 / BHD 125 (Web) · SAR 4,000+ (CRM/ERP)",
      overlap: "Full GCC business hours overlap (1.5h to 2.5h difference with Riyadh, Doha, Kuwait, Muscat & Manama)",
      cloud: "AWS Bahrain (me-south-1), AWS UAE (me-central-1) & GCP Doha · Mada, KNET, BenefitPay, PayTabs",
      proof: "189,800+ verified GSC impressions & active GCC traffic on Kerala Sellers",
    },
    rows: [
      {
        category: "Digital Product Solutions (Direct-Architect GCC Partner)",
        examples: "Digital Product Solutions (9-Engineer MSME Team led by Adarsh B S)",
        startingCost: "USD $330 – $3,800+ (SAR 1,200 – 14,000+)",
        architectAccess: "Direct WhatsApp/Zoom with Lead Architect Adarsh B S",
        deliverySpeed: "5–10 days (Web/Bot) · 15–45 days (Custom CRM/Odoo/App)",
        codeOwnership: "100% Source Code, Domain & Cloud Ownership",
      },
      {
        category: "In-Country GCC Agencies (Riyadh, Doha, Kuwait, Muscat, Dubai)",
        examples: "Allianze GCC, Branex, FACTS Computer Software House, Regional System Integrators",
        startingCost: "USD $10,000 – $60,000+ (SAR 37,500+)",
        architectAccess: "Account Managers; coding often outsourced offshore",
        deliverySpeed: "8–20 weeks",
        codeOwnership: "Often includes recurring license or AMC lock-in",
      },
      {
        category: "Large India / Kerala Enterprise IT Agencies",
        examples: "Webandcrafts (WAC), Acodez, SpiderWorks, Fingent, NeoITO, Seasia Infotech",
        startingCost: "USD $6,000 – $30,000+",
        architectAccess: "Managed via PMs and multi-layer delivery teams",
        deliverySpeed: "6–14 weeks",
        codeOwnership: "Enterprise SOW handover",
      },
      {
        category: "Solo Freelancers & Marketplace Contractors",
        examples: "Individual freelance developers on Upwork / Mostaql / Fiverr",
        startingCost: "USD $400 – $2,500",
        architectAccess: "1 person — no dedicated QA, UI/UX, or DevOps backup",
        deliverySpeed: "High risk of delays on multi-module ERP/CRM builds",
        codeOwnership: "Often lacks documentation and SLA continuity",
      },
    ],
  },
  au: {
    heading: "Top Custom Software, Web & App Development Companies for Australian SMEs — 2026 Comparison",
    subheading:
      "See how Australian businesses across Perth (WA), Sydney (NSW), Melbourne (VIC), Brisbane (QLD), and Adelaide compare local Australian digital agencies, large offshore aggregators, and our direct-architect engineering team (creators of Perth's Care N Cure platform with 82,824+ verified Google Search Console impressions).",
    dpsHighlight: {
      cost: "AUD $450 – $1,800 (Web) · AUD $1,800 – $5,500+ (Custom CRM/Odoo) · AUD $1,800/mo Dedicated Dev",
      overlap: "5–6 hours daily live overlap with Perth (AWST) & Sydney/Melbourne (AEST/AEDT)",
      cloud: "AWS Sydney (ap-southeast-2) · WCAG & Australian Privacy Principles (APP) ready",
      proof: "Care N Cure Perth (carencure.com.au): 82,824+ Australian GSC impressions & #1.0 rankings",
    },
    rows: [
      {
        category: "Digital Product Solutions (Direct-Architect Partner)",
        examples: "Digital Product Solutions (Creators of Care N Cure Perth — carencure.com.au)",
        startingCost: "AUD $450 – $5,500+ (or AUD $1,800/mo Dedicated Dev)",
        architectAccess: "Direct WhatsApp/Slack with Founder & Lead Architect Adarsh B S",
        deliverySpeed: "5–10 days (Next.js Web) · 15–45 days (Custom Software/Flutter)",
        codeOwnership: "100% GitHub Source Code & AWS Sydney Ownership",
      },
      {
        category: "Local Perth, Sydney & Melbourne Agencies",
        examples: "Lateral (Perth), Horizon Digital (Perth), Appello (Sydney), Launch Lab, Designpluz",
        startingCost: "AUD $15,000 – $80,000+",
        architectAccess: "Account Directors & Producer layers",
        deliverySpeed: "8–20 weeks",
        codeOwnership: "Full IP after high upfront agency retainers",
      },
      {
        category: "Large Offshore Aggregators & Enterprise Shops",
        examples: "PixelCrayons, Radixweb, Origin Softwares, Webandcrafts, Acodez, DianApps",
        startingCost: "AUD $8,000 – $35,000+",
        architectAccess: "Sales team handover to rotating developer pools",
        deliverySpeed: "6–14 weeks",
        codeOwnership: "Contract-dependent",
      },
      {
        category: "Solo Offshore Freelancers",
        examples: "Individual Upwork / Freelancer.com contractors",
        startingCost: "AUD $600 – $3,000",
        architectAccess: "Direct, but zero backup if unavailable",
        deliverySpeed: "Variable; lacks multi-role QA & SEO engineering",
        codeOwnership: "Often unmaintained after final invoice",
      },
    ],
  },
  uk: {
    heading: "Top Offshore & UK Software, Web & AI Development Partners for UK SMEs — 2026 Comparison",
    subheading:
      "Compare how UK founders, SMEs, and digital agencies in London, Manchester, Birmingham, and Edinburgh evaluate domestic UK software agencies, large offshore brokers, and Digital Product Solutions (Outside-IR35 B2B corporate engineering).",
    dpsHighlight: {
      cost: "£300 – £1,200 (Next.js Web) · £1,100 – £3,800+ (CRM/Odoo) · £1,200/mo Dedicated Dev",
      overlap: "5+ hours daily UK overlap (8:30 AM – 2:00 PM GMT/BST)",
      cloud: "AWS London (eu-west-2) · UK GDPR & Outside-IR35 B2B Contract",
      proof: "189,800+ verified GSC impressions & 14.3% CTR on UK business solutions",
    },
    rows: [
      {
        category: "Digital Product Solutions (Outside-IR35 B2B Pod)",
        examples: "Digital Product Solutions (9-Engineer MSME Team led by Adarsh B S)",
        startingCost: "£300 – £3,800+ (or £1,200–£2,000/mo Dedicated Dev)",
        architectAccess: "Direct 1-on-1 Slack/WhatsApp with Lead Architect Adarsh B S",
        deliverySpeed: "5–10 days (Web) · 15–45 days (Custom CRM/Odoo/App)",
        codeOwnership: "100% GitHub IP Transfer & AWS London Deployment",
      },
      {
        category: "Domestic UK Software & Digital Agencies",
        examples: "Digiryte (Manchester/London), Empyreal Infotech (London), Nimble Approach, Kindred",
        startingCost: "£12,000 – £65,000+ (£500–£900/day rates)",
        architectAccess: "Account Managers & Delivery Leads",
        deliverySpeed: "8–16 weeks",
        codeOwnership: "Standard UK agency SOW",
      },
      {
        category: "Large Offshore Agencies (India / Eastern Europe)",
        examples: "Webandcrafts, Acodez, SpiderWorks, PixelCrayons, Radixweb",
        startingCost: "£5,000 – £25,000+",
        architectAccess: "Filtered through project coordinators",
        deliverySpeed: "6–12 weeks",
        codeOwnership: "Milestone handover",
      },
      {
        category: "Domestic UK Contractors / Solo Freelancers",
        examples: "Individual UK or offshore freelance developers",
        startingCost: "£350 – £650/day (UK IR35 risk) or £500+ offshore",
        architectAccess: "Single individual — no full-stack + AI + QA team",
        deliverySpeed: "Single-thread bottleneck",
        codeOwnership: "Requires separate IP assignment deeds",
      },
    ],
  },
  de: {
    heading: "Softwareentwicklung Outsourcing Indien vs. Deutsche Agenturen & Vermittler — Vergleich 2026",
    subheading:
      "Vergleichen Sie Digital Product Solutions (direktes 9-köpfiges Architekten- & Entwicklerteam mit DSGVO-Hosting in Frankfurt) mit lokalen deutschen Digitalagenturen, Vermittlungsagenturen und Einzel-Freelancern.",
    dpsHighlight: {
      cost: "€350 – €1.400 (Web) · €1.300 – €4.500+ (CRM/Odoo) · ab €1.250/Monat Dedizierte Entwickler",
      overlap: "4,5+ Stunden tägliche Überlappung mit MEZ/MESZ (Deutschland, Österreich, Schweiz)",
      cloud: "AWS Frankfurt (eu-central-1) & Hetzner Deutschland · 100% DSGVO-konform",
      proof: "Novora Global Health (Deutschland), Care N Cure (82.824+ GSC Impressionen), 5.0★ Google",
    },
    rows: [
      {
        category: "Digital Product Solutions (Direktes Engineering-Team)",
        examples: "Digital Product Solutions (Leitung: Software Architect Adarsh B S)",
        startingCost: "€350 – €4.500+ (oder €1.250–€1.950/Monat)",
        architectAccess: "Direkter Kontakt (Englisch / Schriftlich Deutsch) ohne Zwischenhändler",
        deliverySpeed: "1–2 Wochen (Web) · 3–6 Wochen (CRM/Odoo/App)",
        codeOwnership: "100% GitHub-Quellcode & Server-Eigentum (Frankfurt)",
      },
      {
        category: "Lokale Software- & Digitalagenturen in DACH",
        examples: "Agenturen in Berlin, München, Frankfurt, Hamburg, Zürich",
        startingCost: "€15.000 – €80.000+ (€100–€160/Stunde)",
        architectAccess: "Projektmanager & Account-Berater",
        deliverySpeed: "8–20 Wochen",
        codeOwnership: "Oft an Wartungsverträge gekoppelt",
      },
      {
        category: "Deutsch-Indische Vermittlungsagenturen",
        examples: "Klassische Outsourcing-Broker & Großagenturen (Acodez, WAC, Radixweb)",
        startingCost: "€2.200 – €3.500+/Monat bzw. €8.000+ Projektpreis",
        architectAccess: "Vermittler-Aufschlag von 40–60% ohne direkten Architekten-Zugang",
        deliverySpeed: "6–12 Wochen",
        codeOwnership: "Vertragsabhängig",
      },
      {
        category: "Einzel-Freelancer",
        examples: "Soloselbstständige Entwickler auf Freelancer-Portalen",
        startingCost: "€600 – €3.000",
        architectAccess: "Einzelperson ohne Backup bei Ausfall (Scheinselbstständigkeits-Risiko in DE)",
        deliverySpeed: "Ungewiss bei komplexen ERP/KI-Systemen",
        codeOwnership: "Oft fehlende Dokumentation",
      },
    ],
  },
};

const GCC_COUNTRIES = [
  {
    country: "United Arab Emirates (UAE)",
    cities: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah",
    currency: "AED 1,200+ (Web) · AED 4,000+ (CRM/Odoo)",
    gateways: "Stripe UAE, Telr, PayTabs, Network, Tabby, Tamara",
    compliance: "UAE PDPL · AWS UAE (me-central-1) · Bilingual EN/AR",
    href: "/uae",
  },
  {
    country: "Saudi Arabia (KSA — Vision 2030)",
    cities: "Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah",
    currency: "SAR 1,200+ (Web) · SAR 4,000+ (CRM/Odoo/ZATCA)",
    gateways: "Mada, STC Pay, HyperPay, Moyasar, PayTabs KSA, Tamara",
    compliance: "ZATCA Phase 1 & 2 E-Invoicing · KSA PDPL · Arabic RTL",
    href: "/gcc",
  },
  {
    country: "Qatar",
    cities: "Doha, Lusail, Al Wakrah, Al Rayyan",
    currency: "QAR 1,200+ (Web) · QAR 4,000+ (Custom CRM/ERP)",
    gateways: "QPay, SkipCash, Sadad Qatar, Tess Payments, PayTabs",
    compliance: "Google Cloud Doha (me-central1) · EN/AR Next.js",
    href: "/gcc",
  },
  {
    country: "Kuwait",
    cities: "Kuwait City, Hawalli, Salmiya, Farwaniya, Ahmadi",
    currency: "KWD 100+ (Web) · KWD 330+ (Custom CRM/ERP)",
    gateways: "KNET, MyFatoorah, Tap Payments, UPayments",
    compliance: "AWS Middle East · WhatsApp Cloud API Automation",
    href: "/gcc",
  },
  {
    country: "Oman",
    cities: "Muscat, Salalah, Sohar, Nizwa, Barka",
    currency: "OMR 125+ (Web) · OMR 420+ (Custom CRM/ERP)",
    gateways: "OmanNet, Thawani Pay, PayTabs Oman, Bank Muscat PG",
    compliance: "Oman Data Protection · Bilingual EN/AR Portals",
    href: "/gcc",
  },
  {
    country: "Bahrain",
    cities: "Manama, Muharraq, Riffa, Isa Town",
    currency: "BHD 125+ (Web) · BHD 420+ (Custom CRM/ERP)",
    gateways: "BenefitPay, Tap Payments, CrediMax, PayTabs",
    compliance: "AWS Bahrain (me-south-1) Native Cloud Hosting",
    href: "/gcc",
  },
];

export default function InternationalCompetitorMatrix({ region }: { region: RegionKey }) {
  const data = REGION_DATA[region];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.heading,
    description: data.subheading,
    itemListElement: data.rows.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.category}: ${r.examples}`,
      description: `Starting cost: ${r.startingCost}. Architect access: ${r.architectAccess}. Delivery speed: ${r.deliverySpeed}.`,
    })),
  };

  return (
    <div className="my-12 space-y-12">
      <JsonLd data={itemListSchema} />

      {/* Competitor Comparison Matrix */}
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white p-6 md:p-8 shadow-sm">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800 mb-3">
          2026 Market &amp; Competitor Comparison
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {data.heading}
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          {data.subheading}
        </p>

        {/* DPS Key Regional Advantage Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-xs">
            <div className="text-xs font-bold uppercase text-blue-700 mb-1">Published Pricing</div>
            <div className="text-xs text-gray-700 font-medium">{data.dpsHighlight.cost}</div>
          </div>
          <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-xs">
            <div className="text-xs font-bold uppercase text-blue-700 mb-1">Time-Zone Overlap</div>
            <div className="text-xs text-gray-700 font-medium">{data.dpsHighlight.overlap}</div>
          </div>
          <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-xs">
            <div className="text-xs font-bold uppercase text-blue-700 mb-1">Local Cloud &amp; Stack</div>
            <div className="text-xs text-gray-700 font-medium">{data.dpsHighlight.cloud}</div>
          </div>
          <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-xs">
            <div className="text-xs font-bold uppercase text-blue-700 mb-1">Verified GSC Proof</div>
            <div className="text-xs text-gray-700 font-medium">{data.dpsHighlight.proof}</div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3.5 font-semibold">Provider Category &amp; Market Examples</th>
                <th className="p-3.5 font-semibold">Typical Project / Retainer Cost</th>
                <th className="p-3.5 font-semibold">Engineering Access</th>
                <th className="p-3.5 font-semibold">Delivery Timeline</th>
                <th className="p-3.5 font-semibold">Code &amp; IP Ownership</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.rows.map((row, idx) => (
                <tr
                  key={row.category}
                  className={idx === 0 ? "bg-blue-50/70 font-medium text-gray-900" : "text-gray-700"}
                >
                  <td className="p-3.5">
                    <div className="font-bold text-gray-900">{row.category}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{row.examples}</div>
                  </td>
                  <td className="p-3.5">{row.startingCost}</td>
                  <td className="p-3.5">{row.architectAccess}</td>
                  <td className="p-3.5">{row.deliverySpeed}</td>
                  <td className="p-3.5">{row.codeOwnership}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GCC 6-Country Breakdown on UAE and GCC pages */}
      {(region === "uae" || region === "gcc") && (
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 md:p-8">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
            All 6 GCC Countries Covered
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Localized Software, CRM, ERP &amp; Payment Gateway Engineering Across Every GCC Country
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Whether your business operates in Dubai, Riyadh, Doha, Kuwait City, Muscat, or Manama, we engineer localized Arabic RTL + English platforms with regional payment gateways and cloud data residency.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GCC_COUNTRIES.map((item) => (
              <div
                key={item.country}
                className="rounded-2xl bg-white p-5 border border-emerald-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{item.country}</h3>
                  <p className="text-xs text-gray-500 mb-3">📍 {item.cities}</p>
                  <ul className="space-y-1.5 text-xs text-gray-700 mb-4">
                    <li>
                      <strong>Pricing:</strong> {item.currency}
                    </li>
                    <li>
                      <strong>Gateways:</strong> {item.gateways}
                    </li>
                    <li>
                      <strong>Compliance:</strong> {item.compliance}
                    </li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1"
                >
                  Request {item.country.split(" ")[0]} Estimate →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Global Country Delivery Hubs Navigation */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          International &amp; GCC Engineering Hubs (Local Currency Pricing)
        </h2>
        <div className="flex flex-wrap gap-2.5 text-xs font-semibold">
          <Link
            href="/uae"
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 transition"
          >
            🇦🇪 UAE (Dubai &amp; Abu Dhabi — AED)
          </Link>
          <Link
            href="/gcc"
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 transition"
          >
            🇸🇦🇶🇦🇰🇼🇴🇲🇧🇭 GCC Hub (Saudi, Qatar, Kuwait, Oman, Bahrain)
          </Link>
          <Link
            href="/au"
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 transition"
          >
            🇦🇺 Australia (Perth, Sydney, Melbourne — AUD)
          </Link>
          <Link
            href="/uk"
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 transition"
          >
            🇬🇧 United Kingdom (London &amp; Manchester — GBP £)
          </Link>
          <Link
            href="/de"
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 transition"
          >
            🇩🇪 Germany / DACH (Berlin, Munich, Frankfurt — EUR €)
          </Link>
          <Link
            href="/gcc-malayali-business-digital-solutions"
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 transition"
          >
            🌍 GCC Malayali Business Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}

