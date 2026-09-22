import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { gymCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: gymCrm.metaTitle,
    description: gymCrm.metaDescription,
    path: gymCrm.path,
    absoluteTitle: true,
  }),
  keywords: gymCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={gymCrm} />;
}
