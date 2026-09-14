import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Services",
  description:
    "AI chatbots and automation for Kerala businesses. This page points to the current AI service offering.",
  path: "/ai-services",
  noindex: true,
  canonicalPath: "/ai-powered-solutions",
});

export default function AiServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
