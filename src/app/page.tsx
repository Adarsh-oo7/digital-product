import HomeClient from "@/components/HomeClient";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Digital Product Solutions | Software, Web, App & AI Kerala",
  description:
    "Digital Product Solutions builds custom software, Next.js websites, mobile apps, CRM, ERP & AI automation in Kerala. Direct senior developer access.",
  path: "/",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "digital product solutions",
    "freelance software developer kerala",
    "freelance web developer kerala",
    "custom software development company in trivandrum",
    "crm software kerala",
    "odoo erp development kerala",
    "ai automation agency kerala",
    "ai solutions kerala",
    "website development kerala",
    "app development kerala",
    "best seo company in kerala",
    "digital product development company",
  ],
});

export default function HomePage() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.publicName,
    alternateName: [
      "DPS Kerala",
      "Digital Product Development Company Kerala",
      "Digital Solutions Kerala",
    ],
    url: SITE_URL,
  };
  return (
    <>
      <JsonLd data={website} />
      <HomeClient />
    </>
  );
}
