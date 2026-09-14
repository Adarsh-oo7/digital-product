import LandingPage from "@/components/seo/LandingPage";
import { ecommerceCost } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: ecommerceCost.metaTitle,
  description: ecommerceCost.metaDescription,
  path: ecommerceCost.path,
});

export default function Page() {
  return <LandingPage content={ecommerceCost} />;
}
