import LandingPage from "@/components/seo/LandingPage";
import { hospitalWebsite } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: hospitalWebsite.metaTitle,
  description: hospitalWebsite.metaDescription,
  path: hospitalWebsite.path,
});

export default function Page() {
  return <LandingPage content={hospitalWebsite} />;
}
