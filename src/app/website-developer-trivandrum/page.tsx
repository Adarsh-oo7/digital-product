import LandingPage from "@/components/seo/LandingPage";
import { websiteDeveloperTvm } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteDeveloperTvm.metaTitle,
  description: websiteDeveloperTvm.metaDescription,
  path: websiteDeveloperTvm.path,
});

export default function Page() {
  return <LandingPage content={websiteDeveloperTvm} />;
}
