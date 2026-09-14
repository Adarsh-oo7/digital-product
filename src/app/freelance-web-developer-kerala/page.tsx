import LandingPage from "@/components/seo/LandingPage";
import { freelanceWeb } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: freelanceWeb.metaTitle,
  description: freelanceWeb.metaDescription,
  path: freelanceWeb.path,
});

export default function Page() {
  return <LandingPage content={freelanceWeb} />;
}
