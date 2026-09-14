import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SEO Services in Kerala",
  description: "This URL consolidates into the main SEO services page.",
  path: "/seo-services-kerala",
  noindex: true,
  canonicalPath: "/seo-services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
