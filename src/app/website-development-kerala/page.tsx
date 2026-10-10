import LandingPage from "@/components/seo/LandingPage";
import { websiteDevelopmentKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteDevelopmentKerala.metaTitle,
  description: websiteDevelopmentKerala.metaDescription,
  path: websiteDevelopmentKerala.path,
  absoluteTitle: true,
});

export default function Page() {
  return <LandingPage content={websiteDevelopmentKerala} />;
}
