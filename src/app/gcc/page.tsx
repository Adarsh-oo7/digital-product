import LandingPage from "@/components/seo/LandingPage";
import InternationalCompetitorMatrix from "@/components/seo/InternationalCompetitorMatrix";
import { gccLanding } from "@/content/landings";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";

export const metadata = pageMetadata({
  title: gccLanding.metaTitle,
  description: gccLanding.metaDescription,
  path: gccLanding.path,
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  locale: "en_SA",
  keywords: [
    "software development company Saudi Arabia",
    "custom software development Riyadh",
    "web development company Qatar Doha",
    "software company Kuwait City",
    "web development company Oman Muscat",
    "software development Bahrain Manama",
    "Odoo ERP Saudi Arabia ZATCA",
    "CRM software GCC",
    "WhatsApp Cloud API chatbot Saudi Arabia UAE Qatar",
    "AI development company GCC",
    "outsource software development GCC to India",
    "شركة تطوير برمجيات السعودية",
    "شركة برمجة قطر الكويت عمان البحرين",
  ],
});

export default function Page() {
  return (
    <LandingPage content={gccLanding}>
      <InternationalCompetitorMatrix region="gcc" />
    </LandingPage>
  );
}

