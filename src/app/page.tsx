import HomeClient from "@/components/HomeClient";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Website & Software Team in Trivandrum, Kerala",
  description:
    "Digital Product Solutions is a small Kerala development team in Korani, Thiruvananthapuram district. Websites, software, apps, SEO and WhatsApp automation with direct developer access.",
  path: "/",
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
