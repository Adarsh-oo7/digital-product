import LandingPage from "@/components/seo/LandingPage";
import { outsourceWeb } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: outsourceWeb.metaTitle,
  description: outsourceWeb.metaDescription,
  path: outsourceWeb.path,
});

export default function Page() {
  return <LandingPage content={outsourceWeb} />;
}
