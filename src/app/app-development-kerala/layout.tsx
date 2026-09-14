import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "App Development in Kerala",
  description: "This URL consolidates into the main app development page.",
  path: "/app-development-kerala",
  noindex: true,
  canonicalPath: "/app-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
