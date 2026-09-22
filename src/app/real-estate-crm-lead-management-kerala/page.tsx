import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { realEstateCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: realEstateCrm.metaTitle,
    description: realEstateCrm.metaDescription,
    path: realEstateCrm.path,
    absoluteTitle: true,
  }),
  keywords: realEstateCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={realEstateCrm} />;
}
