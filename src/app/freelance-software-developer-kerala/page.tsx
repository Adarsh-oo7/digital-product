import LandingPage from "@/components/seo/LandingPage";
import OverseasCaseStudiesShowcase from "@/components/seo/OverseasCaseStudiesShowcase";
import { freelanceSoftwareDev } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: freelanceSoftwareDev.metaTitle,
  description: freelanceSoftwareDev.metaDescription,
  path: freelanceSoftwareDev.path,
  absoluteTitle: true,
});

export default function Page() {
  return (
    <LandingPage content={freelanceSoftwareDev}>
      <OverseasCaseStudiesShowcase regionLabel="Freelance-Direct, Agency & Company Projects" />
    </LandingPage>
  );
}
