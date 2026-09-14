import LandingPage from "@/components/seo/LandingPage";
import { affordableWebsite } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: affordableWebsite.metaTitle,
  description: affordableWebsite.metaDescription,
  path: affordableWebsite.path,
});

export default function Page() {
  return <LandingPage content={affordableWebsite} />;
}
