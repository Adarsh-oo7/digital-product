import HomeClient from "@/components/HomeClient";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Digital Product Solutions | Software, Web & AI Agency Kerala",
  description:
    "Digital Product Solutions is a software, web & AI development agency in Kerala. Custom apps, Next.js, CRM, ERP & automation with direct developer access.",
  path: "/",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "digital product solutions",
    "software development agency kerala",
    "web development agency kerala",
    "custom software development company in trivandrum",
    "ai automation agency kerala",
    "crm software kerala",
    "odoo erp development kerala",
    "app development kerala",
    "freelance software developer kerala",
    "freelance web developer kerala",
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
