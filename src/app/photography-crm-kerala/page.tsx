import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { photographyCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: photographyCrm.metaTitle,
    description: photographyCrm.metaDescription,
    path: photographyCrm.path,
    absoluteTitle: true,
  }),
  keywords: photographyCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={photographyCrm} />;
}
