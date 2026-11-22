import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/business";

const FEATURED_CASE_STUDIES = [
  {
    name: "Care N Cure Group (Perth, Australia)",
    badge: "International Healthcare · #1.0 Google Ranking",
    metric: "82,824+ GSC Impressions · #1.0 in WA",
    summary:
      "Full Next.js clinical platform & 30+ suburb local SEO architecture for an Australian aged-care and private-nursing provider (carencure.com.au). Ranks #1.0 for 'aged care agencies in wa' and #1.3 for 'home care services WA'.",
    stack: ["Next.js", "Technical SEO", "30+ Suburb Hubs", "MedicalOrganization Schema"],
    caseStudyHref: "/work/care-n-cure-australia",
    liveUrl: "https://carencure.com.au/",
  },
  {
    name: "KPSC Master (EdTech SaaS & Institute Portal)",
    badge: "Full-Stack SaaS · 7.5% Organic CTR",
    metric: "58,525+ GSC Impressions · 4,362+ Clicks",
    summary:
      "Multi-institute LMS, mock-test engine, rank leaderboards, and programmatic exam SEO platform built with Next.js + Django REST API. Scales thousands of active student sessions.",
    stack: ["Next.js", "Django REST", "Multi-Tenant LMS", "Programmatic SEO"],
    caseStudyHref: "/work/kpsc-master",
    liveUrl: "https://www.kpscmaster.in/",
  },
  {
    name: "Kerala Sellers (Multi-Vendor E-Commerce & POS)",
    badge: "E-Commerce Marketplace · Pos #4.4",
    metric: "19,081+ GSC Impressions · 1,239+ Clicks",
    summary:
      "Full marketplace platform enabling local merchants to launch online storefronts with WhatsApp checkout, Razorpay/UPI, and Product/Offer JSON-LD schema.",
    stack: ["Next.js", "Multi-Vendor Cart", "WhatsApp Commerce", "Product Schema"],
    caseStudyHref: "/work/kerala-sellers",
    liveUrl: "https://www.keralasellers.in/",
  },
  {
    name: "BuilDwellz (Construction & Real Estate)",
    badge: "Real Estate & Builders",
    metric: "High-Converting Project Showcase",
    summary:
      "Modern architecture & construction brand website with project galleries, service funnels, and direct WhatsApp consultation routing.",
    stack: ["Next.js", "Responsive UI", "Lead Funnel", "Local SEO"],
    caseStudyHref: "/work/buildwellz",
  },
  {
    name: "Squeeze Berriez (D2C Beverage Brand)",
    badge: "FMCG & D2C Brand",
    metric: "Sub-Second Mobile Storefront",
    summary:
      "Brand-first product showcase and distributor enquiry platform engineered for fast mobile load speeds and retail conversion.",
    stack: ["Next.js", "Brand UI/UX", "Distributor Funnel", "Core Web Vitals"],
    caseStudyHref: "/work/squeeze-berriez",
  },
  {
    name: "CrystalKnot Films & Mangrove Moments",
    badge: "Media & Hospitality",
    metric: "Direct Booking & Portfolio Systems",
    summary:
      "Commission-free booking and visual storytelling websites for hospitality and production studios — replacing third-party aggregator fees with direct WhatsApp leads.",
    stack: ["Next.js", "Media Galleries", "Direct Booking", "WhatsApp CRM"],
    caseStudyHref: "/work/crystal-knot-films",
  },
];

export default function OverseasCaseStudiesShowcase({
  regionLabel = "GCC & International Clients",
}: {
  regionLabel?: string;
}) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Verified Kerala Agency Case Studies for ${regionLabel}`,
    itemListElement: FEATURED_CASE_STUDIES.map((cs, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: cs.name,
      url: `${SITE_URL}${cs.caseStudyHref}`,
    })),
  };

  return (
    <section className="max-w-5xl mx-auto mt-14 mb-10">
      <JsonLd data={itemListSchema} />
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full mb-3">
              Verified Production Proof · 189,800+ GSC Impressions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Real Projects &amp; Case Studies Delivered by Our Kerala Engineering Team
            </h2>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl">
              From <strong>Care N Cure Group in Perth, Australia</strong> (#1.0 Google ranking) to
              high-traffic SaaS, e-commerce, real estate, and hospitality platforms — see what{" "}
              {regionLabel} receive when hiring Digital Product Solutions.
            </p>
          </div>
          <Link
            href="/work"
            className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-bold hover:bg-blue-50 transition"
          >
            View All Case Studies →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_CASE_STUDIES.map((cs) => (
            <div
              key={cs.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-400/40 transition"
            >
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-blue-300 mb-1">
                  {cs.badge}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cs.name}</h3>
                <div className="text-xs font-bold text-emerald-300 mb-3">{cs.metric}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{cs.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10 text-xs font-semibold">
                <Link href={cs.caseStudyHref} className="text-blue-300 hover:text-white">
                  Read Case Study →
                </Link>
                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white ml-auto"
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
