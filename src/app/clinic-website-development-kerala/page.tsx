import LandingPage from "@/components/seo/LandingPage";
import { clinicWebsite } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: clinicWebsite.metaTitle,
  description: clinicWebsite.metaDescription,
  path: clinicWebsite.path,
});

export default function Page() {
  return <LandingPage content={clinicWebsite} />;
}
