import LandingPage from "@/components/seo/LandingPage";
import { schoolWebsite } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: schoolWebsite.metaTitle,
  description: schoolWebsite.metaDescription,
  path: schoolWebsite.path,
});

export default function Page() {
  return <LandingPage content={schoolWebsite} />;
}
