import LandingPage from "@/components/seo/LandingPage";
import { websiteRedesign } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteRedesign.metaTitle,
  description: websiteRedesign.metaDescription,
  path: websiteRedesign.path,
});

export default function Page() {
  return <LandingPage content={websiteRedesign} />;
}
