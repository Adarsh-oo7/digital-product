import LandingPage from "@/components/seo/LandingPage";
import { smallBusinessWebsite } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: smallBusinessWebsite.metaTitle,
  description: smallBusinessWebsite.metaDescription,
  path: smallBusinessWebsite.path,
});

export default function Page() {
  return <LandingPage content={smallBusinessWebsite} />;
}
