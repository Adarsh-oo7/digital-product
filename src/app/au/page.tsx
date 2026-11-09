import LandingPage from "@/components/seo/LandingPage";
import InternationalCompetitorMatrix from "@/components/seo/InternationalCompetitorMatrix";
import { australiaLanding } from "@/content/landings";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";

export const metadata = pageMetadata({
  title: australiaLanding.metaTitle,
  description: australiaLanding.metaDescription,
  path: australiaLanding.path,
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  locale: "en_AU",
  keywords: [
    "outsource software development Australia",
    "custom software development Perth Sydney Melbourne",
    "hire software developers India Australia",
    "Odoo implementation partner Australia",
    "Flutter app development Australia",
    "Next.js development company Australia",
    "IT outsourcing company India for Australian business",
    "AI chatbot development company Australia",
    "offshore software development Australia",
  ],
});

export default function Page() {
  return (
    <LandingPage content={australiaLanding}>
      <InternationalCompetitorMatrix region="au" />
    </LandingPage>
  );
}

