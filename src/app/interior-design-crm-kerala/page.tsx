import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { interiorCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: interiorCrm.metaTitle,
    description: interiorCrm.metaDescription,
    path: interiorCrm.path,
    absoluteTitle: true,
  }),
  keywords: interiorCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={interiorCrm} />;
}
