import LandingPage from "@/components/seo/LandingPage";
import { landing } from "@/content/intent-landings";
import { pageMetadata } from "@/lib/seo";

const content = landing("/vehicle-service-website-kerala");

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
});

export default function Page() {
  return <LandingPage content={content} />;
}
