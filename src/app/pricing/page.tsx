import { pageMetadata } from "@/lib/seo";
import PricingClient from "./PricingClient";

export const metadata = pageMetadata({
  title: "Website & Software Development Pricing Kerala | Transparent Packages",
  description:
    "Transparent pricing for websites, web applications, and SEO in Kerala. Basic websites from ₹5,000, business websites from ₹10,000, custom software from ₹25,000. No hidden fees.",
  path: "/pricing",
  keywords: [
    "Website Development Cost Kerala",
    "Web Design Pricing Trivandrum",
    "App Development Cost Kerala",
    "Software Pricing Kerala",
    "Web Development Packages Kerala",
  ],
});

export default function Page() {
  return <PricingClient />;
}
