import LandingPage from "@/components/seo/LandingPage";
import { saasDevelopmentKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: saasDevelopmentKerala.metaTitle,
  description: saasDevelopmentKerala.metaDescription,
  path: saasDevelopmentKerala.path,
  absoluteTitle: true,
  keywords: [
    "saas development company in thiruvananthapuram, india",
    "saas development company in trivandrum",
    "saas development company kerala",
    "digital product development company",
    "digital product development agency",
    "digital product development services",
    "digital product agency",
    "cloud based digital solutions",
    "best digital product development agencies for enterprises",
  ],
});

export default function Page() {
  return <LandingPage content={saasDevelopmentKerala} />;
}

