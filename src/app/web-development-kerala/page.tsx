import LandingPage from "@/components/seo/LandingPage";
import { webDevelopmentKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: webDevelopmentKerala.metaTitle,
  description: webDevelopmentKerala.metaDescription,
  path: webDevelopmentKerala.path,
  absoluteTitle: true,
});

export default function Page() {
  return <LandingPage content={webDevelopmentKerala} />;
}
