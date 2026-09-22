import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { furnitureCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: furnitureCrm.metaTitle,
    description: furnitureCrm.metaDescription,
    path: furnitureCrm.path,
    absoluteTitle: true,
  }),
  keywords: furnitureCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={furnitureCrm} />;
}
