import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { weddingCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: weddingCrm.metaTitle,
    description: weddingCrm.metaDescription,
    path: weddingCrm.path,
    absoluteTitle: true,
  }),
  keywords: weddingCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={weddingCrm} />;
}
