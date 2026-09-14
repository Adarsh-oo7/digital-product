import LandingPage from "@/components/seo/LandingPage";
import { websiteDevelopment } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: websiteDevelopment.metaTitle,
  description: websiteDevelopment.metaDescription,
  path: websiteDevelopment.path,
});

export default function Page() {
  return <LandingPage content={websiteDevelopment} />;
}
