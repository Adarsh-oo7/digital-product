import HomeClient from "@/components/HomeClient";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Website, App and Software Development in Kerala",
  description:
    "Trivandrum team in Korani for websites, custom software, mobile apps, SEO and WhatsApp automation. Direct developer access, published prices, and live project stories.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.publicName,
    url: SITE_URL,
  };
  return (
    <>
      <JsonLd data={website} />
      <HomeClient />
    </>
  );
}
