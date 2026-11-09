import LandingPage from "@/components/seo/LandingPage";
import { lmsDevelopmentKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: lmsDevelopmentKerala.metaTitle,
  description: lmsDevelopmentKerala.metaDescription,
  path: lmsDevelopmentKerala.path,
  absoluteTitle: true,
  keywords: [
    "lms development companies in trivandrum",
    "lms development company kerala",
    "e-learning software development kerala",
    "online exam software kerala",
    "mock test app development kerala",
    "coaching centre app development kerala",
    "edtech software development trivandrum",
    "student management system in trivandrum",
  ],
});

export default function Page() {
  return <LandingPage content={lmsDevelopmentKerala} />;
}

