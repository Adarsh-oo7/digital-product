import { pageMetadata } from "@/lib/seo";
import PortfolioClient from "./PortfolioClient";

export const metadata = pageMetadata({
  title: "Portfolio | Web Development & Software Projects in Kerala",
  description:
    "Explore our portfolio of 50+ successful projects in Kerala. Live websites, e-commerce stores, custom software, and CRMs built by Digital Product Solutions in Trivandrum.",
  path: "/portfolio",
  keywords: [
    "Web Development Portfolio Kerala",
    "Website Design Trivandrum",
    "Digital Product Solutions Portfolio",
    "E-commerce Projects Kerala",
  ],
});

export default function Page() {
  return <PortfolioClient />;
}