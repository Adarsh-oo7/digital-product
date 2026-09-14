import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automation for Kerala Businesses",
  description: "This URL consolidates into the business automation page.",
  path: "/ai-automation-for-businesses-kerala",
  noindex: true,
  canonicalPath: "/business-automation",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
