import Link from "next/link";
import { crmIndustries, CRM_HUB_PATH } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaBand from "@/components/seo/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { business } from "@/lib/business";
import { absUrl } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";

export const metadata = pageMetadata({
  title: "CRM Software in Kerala | Industry Lead Management",
  description:
    "Kerala CRM provider, 4+ years. Separate landing pages for real estate, travel, education, car dealers, wedding, gyms and more. WhatsApp-first. Direct developers.",
  path: CRM_HUB_PATH,
  absoluteTitle: true,
});

export default function CrmHubPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industry CRM landing pages — Digital Product Solutions",
    itemListElement: crmIndustries.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.serviceName,
      url: absUrl(c.path),
    })),
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 px-4">
      <JsonLd data={itemList} />
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "CRM software Kerala", href: CRM_HUB_PATH },
          ]}
        />
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-600 mb-4">
          {business.yearsExperience} years building software in Kerala · WhatsApp-first CRM · Direct developers · {business.googleRatingValue} from {business.googleReviewCount} Google reviews
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          CRM software in Kerala — pick the page that matches your search
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          We are not a generic national CRM licence. Each industry has its own landing page: the problem your desk actually has, the lead journey, published prices, WhatsApp to a developer. No guaranteed rankings. No fake dashboards.
        </p>
        <a
          href={whatsappUrl("Hi, I want a Kerala CRM estimate — I will tell you the industry")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mb-12 px-8 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700"
        >
          WhatsApp the developer now
        </a>

        <h2 className="text-2xl font-bold mb-6">Industry landing pages</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {crmIndustries.map((c) => (
            <Link
              key={c.path}
              href={c.path}
              className="block rounded-2xl border border-gray-100 p-5 hover:border-orange-400 hover:shadow-md transition bg-gray-50"
            >
              <p className="text-2xl mb-2">{c.icon}</p>
              <h3 className="font-bold text-gray-900 mb-1">{c.serviceName}</h3>
              <p className="text-sm text-gray-600 mb-3">{c.hubBlurb}</p>
              <p className="text-xs text-orange-800 font-medium">Open landing page →</p>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">If you typed one of these into Google</h2>
        <p className="text-gray-600 text-sm mb-6">Open the matching page. Do not land on a generic “we build software” article.</p>
        <ul className="space-y-3 mb-12">
          {crmIndustries.flatMap((c) =>
            c.searchQueries.map((q) => (
              <li key={`${c.path}-${q}`} className="flex flex-wrap items-baseline gap-2 text-sm">
                <span className="font-medium text-gray-900">“{q}”</span>
                <span className="text-gray-400">→</span>
                <Link href={c.path} className="text-blue-600 hover:underline">
                  {c.serviceName}
                </Link>
              </li>
            ))
          )}
        </ul>

        <CtaBand
          heading="Tell us the industry. We will tell you if a CRM, WhatsApp automation, or a website is the actual job."
          whatsappText="Hi, I want a Kerala CRM estimate"
        />
      </div>
    </main>
  );
}
