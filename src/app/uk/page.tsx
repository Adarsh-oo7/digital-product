import LandingPage from "@/components/seo/LandingPage";
import { ukLanding } from "@/content/landings";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";

export const metadata = pageMetadata({
  title: ukLanding.metaTitle,
  description: ukLanding.metaDescription,
  path: ukLanding.path,
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  locale: "en_GB",
  keywords: [
    "outsource software development to India UK",
    "offshore software development UK",
    "Odoo implementation partner UK",
    "Flutter developer UK hire",
    "Next.js developer UK",
    "hire dedicated software developers India",
    "WhatsApp business API integration UK",
    "LLM integration services UK",
    "best software development companies India for UK",
  ],
});

export default function Page() {
  return <LandingPage content={ukLanding} />;
}

