import LandingPage from "@/components/seo/LandingPage";
import { websiteMaintenance } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteMaintenance.metaTitle,
  description: websiteMaintenance.metaDescription,
  path: websiteMaintenance.path,
});

export default function Page() {
  return <LandingPage content={websiteMaintenance} />;
}
