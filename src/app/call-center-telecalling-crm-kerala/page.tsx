import LandingPage from "@/components/seo/LandingPage";
import { callCenterTelecallingCrmKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: callCenterTelecallingCrmKerala.metaTitle,
  description: callCenterTelecallingCrmKerala.metaDescription,
  path: callCenterTelecallingCrmKerala.path,
  absoluteTitle: true,
  keywords: [
    "call center solution dealer in thiruvananthapuram",
    "call center solution dealer in trivandrum",
    "telecalling crm software kerala",
    "call center software trivandrum",
    "ivr solution provider kerala",
    "auto dialer crm kerala",
    "whatsapp telecalling crm kerala",
    "lead management software kerala",
  ],
});

export default function Page() {
  return <LandingPage content={callCenterTelecallingCrmKerala} />;
}

