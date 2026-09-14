import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio of Kerala Websites and Digital Projects",
  description:
    "Selected websites and products delivered by Digital Product Solutions, including construction, hospitality, F&B and marketplace work in Kerala.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
