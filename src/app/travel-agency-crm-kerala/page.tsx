import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { travelCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: travelCrm.metaTitle,
    description: travelCrm.metaDescription,
    path: travelCrm.path,
    absoluteTitle: true,
  }),
  keywords: travelCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={travelCrm} />;
}
