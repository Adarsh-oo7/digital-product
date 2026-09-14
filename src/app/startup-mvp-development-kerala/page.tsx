import LandingPage from "@/components/seo/LandingPage";
import { startupMvp } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: startupMvp.metaTitle,
  description: startupMvp.metaDescription,
  path: startupMvp.path,
});

export default function Page() {
  return <LandingPage content={startupMvp} />;
}
