import LandingPage from "@/components/seo/LandingPage";
import { wordpressWoocommerceKerala } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: wordpressWoocommerceKerala.metaTitle,
  description: wordpressWoocommerceKerala.metaDescription,
  path: wordpressWoocommerceKerala.path,
  absoluteTitle: true,
  keywords: [
    "wordpress website development agency in thiruvananthapuram, india",
    "woocommerce development agency in thiruvananthapuram, india",
    "wordpress maintenance company in thiruvananthapuram, india",
    "online store development company in thiruvananthapuram, india",
    "ecommerce development agency in thiruvananthapuram, india",
    "wordpress developer trivandrum",
    "wordpress development company kerala",
    "woocommerce developer kerala",
    "travel agency website maintenance services",
  ],
});

export default function Page() {
  return <LandingPage content={wordpressWoocommerceKerala} />;
}

