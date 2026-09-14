import LandingPage from "@/components/seo/LandingPage";
import { dedicatedTeam } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: dedicatedTeam.metaTitle,
  description: dedicatedTeam.metaDescription,
  path: dedicatedTeam.path,
});

export default function Page() {
  return <LandingPage content={dedicatedTeam} />;
}
