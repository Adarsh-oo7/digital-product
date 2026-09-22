import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { carDealerCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: carDealerCrm.metaTitle,
    description: carDealerCrm.metaDescription,
    path: carDealerCrm.path,
    absoluteTitle: true,
  }),
  keywords: carDealerCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={carDealerCrm} />;
}
