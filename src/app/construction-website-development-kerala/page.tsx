import LandingPage from "@/components/seo/LandingPage";
import { constructionWebsite } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: constructionWebsite.metaTitle,
  description: constructionWebsite.metaDescription,
  path: constructionWebsite.path,
});

export default function Page() {
  return <LandingPage content={constructionWebsite} />;
}
