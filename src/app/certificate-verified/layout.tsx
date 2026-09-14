import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Certificate verification",
  description: "Internal certificate lookup. Not a marketing page.",
  path: "/certificate-verified",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
