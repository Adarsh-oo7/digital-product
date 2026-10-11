import LandingPage from "@/components/seo/LandingPage";
import { aiAutomationKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: aiAutomationKerala.metaTitle,
  description: aiAutomationKerala.metaDescription,
  path: aiAutomationKerala.path,
});

export default function Page() {
  return <LandingPage content={aiAutomationKerala} />;
}
