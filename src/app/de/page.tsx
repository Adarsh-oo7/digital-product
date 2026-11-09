import LandingPage from "@/components/seo/LandingPage";
import InternationalCompetitorMatrix from "@/components/seo/InternationalCompetitorMatrix";
import { germanyLanding } from "@/content/landings";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";

export const metadata = pageMetadata({
  title: germanyLanding.metaTitle,
  description: germanyLanding.metaDescription,
  path: germanyLanding.path,
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  locale: "de_DE",
  keywords: [
    "Softwareentwicklung Outsourcing Indien",
    "Software Outsourcing Unternehmen Indien",
    "KI Integration Dienstleistungen",
    "Odoo Implementierung Deutschland",
    "ERP Entwicklung Indien",
    "Python Entwickler beauftragen",
    "Flutter App Entwickler Deutschland",
    "Webentwicklung Unternehmen Indien",
    "IT Outsourcing Indien Deutschland",
    "Softwareentwicklung Kosten Indien",
    "Softwareentwickler aus Indien beauftragen",
    "Next.js developer Germany",
    "LLM integration services Germany",
  ],
});

export default function Page() {
  return (
    <LandingPage content={germanyLanding}>
      <InternationalCompetitorMatrix region="de" />
    </LandingPage>
  );
}

