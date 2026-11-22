import LandingPage from "@/components/seo/LandingPage";
import OverseasCaseStudiesShowcase from "@/components/seo/OverseasCaseStudiesShowcase";
import { freelanceWeb } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: freelanceWeb.metaTitle,
  description: freelanceWeb.metaDescription,
  path: freelanceWeb.path,
});

export default function Page() {
  return (
    <LandingPage content={freelanceWeb}>
      <OverseasCaseStudiesShowcase regionLabel="Freelance-Direct, Agency & Company Projects" />
    </LandingPage>
  );
}
