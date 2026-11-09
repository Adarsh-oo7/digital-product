import LandingPage from "@/components/seo/LandingPage";
import { posBillingSoftwareKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: posBillingSoftwareKerala.metaTitle,
  description: posBillingSoftwareKerala.metaDescription,
  path: posBillingSoftwareKerala.path,
  absoluteTitle: true,
  keywords: [
    "pos software kerala",
    "billing software kerala",
    "billing software in kerala",
    "hotel billing machine in kerala",
    "restaurant billing software kerala",
    "supermarket billing software kerala",
    "gst billing software trivandrum",
    "retail pos software kerala",
    "barcode billing software kerala",
  ],
});

export default function Page() {
  return <LandingPage content={posBillingSoftwareKerala} />;
}

