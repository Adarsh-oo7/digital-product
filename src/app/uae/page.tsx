import LandingPage from "@/components/seo/LandingPage";
import InternationalCompetitorMatrix from "@/components/seo/InternationalCompetitorMatrix";
import { uaeLanding } from "@/content/landings";
import { pageMetadata, INTERNATIONAL_HREFLANGS } from "@/lib/seo";

export const metadata = pageMetadata({
  title: uaeLanding.metaTitle,
  description: uaeLanding.metaDescription,
  path: uaeLanding.path,
  absoluteTitle: true,
  languages: INTERNATIONAL_HREFLANGS,
  locale: "en_AE",
  keywords: [
    "custom software development company Dubai",
    "web development company Dubai UAE",
    "AI development company UAE",
    "machine learning services Dubai",
    "business automation company UAE",
    "CRM development Dubai",
    "Odoo ERP UAE",
    "Flutter developer UAE",
    "outsource software development UAE",
    "WhatsApp chatbot development UAE",
    "Next.js developer UAE",
    "شركة تطوير برمجيات دبي",
    "تطبيقات الذكاء الاصطناعي",
    "برمجة تطبيقات الجوال دبي",
  ],
});

export default function Page() {
  return (
    <LandingPage content={uaeLanding}>
      <InternationalCompetitorMatrix region="uae" />
    </LandingPage>
  );
}

