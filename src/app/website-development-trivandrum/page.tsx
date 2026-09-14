import LandingPage from "@/components/seo/LandingPage";
import { websiteDevelopmentTvm } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteDevelopmentTvm.metaTitle,
  description: websiteDevelopmentTvm.metaDescription,
  path: websiteDevelopmentTvm.path,
});

export default function Page() {
  return <LandingPage content={websiteDevelopmentTvm} />;
}
