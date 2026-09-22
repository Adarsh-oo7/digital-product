import CrmLandingPage from "@/components/seo/CrmLandingPage";
import { educationCrm } from "@/content/crm-industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: educationCrm.metaTitle,
    description: educationCrm.metaDescription,
    path: educationCrm.path,
    absoluteTitle: true,
  }),
  keywords: educationCrm.keywords,
};

export default function Page() {
  return <CrmLandingPage content={educationCrm} />;
}
