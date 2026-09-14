import LandingPage from "@/components/seo/LandingPage";
import { affordableEcommerce } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: affordableEcommerce.metaTitle,
  description: affordableEcommerce.metaDescription,
  path: affordableEcommerce.path,
});

export default function Page() {
  return <LandingPage content={affordableEcommerce} />;
}
