import HomeClient from "@/components/HomeClient";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title:
    "Digital Product Solutions | Custom Software, Web, App & AI Development Company in Kerala",
  description:
    "Digital Product Solutions (DPS) is a premier digital product development company in Trivandrum, Kerala & global delivery partner (AU, UAE, UK, DE). Custom software, Next.js websites, Flutter apps, AI automation & SEO with 157,000+ verified Google Search Console impressions.",
  path: "/",
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  keywords: [
    "digital product solutions",
    "digital product development company",
    "digital solutions",
    "digital product innovation solutions",
    "digital product development services",
    "digital product agency",
    "digital product design services",
    "digital transformation company in kerala",
    "custom software development company in trivandrum",
    "best seo company in kerala",
    "website development kerala",
    "ai automation agency kerala",
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
