import LandingPage from "@/components/seo/LandingPage";
import { websiteCostKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteCostKerala.metaTitle,
  description: websiteCostKerala.metaDescription,
  path: websiteCostKerala.path,
});

export default function Page() {
  return <LandingPage content={websiteCostKerala} />;
}
