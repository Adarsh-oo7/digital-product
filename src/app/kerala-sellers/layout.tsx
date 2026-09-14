import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kerala Sellers Marketplace",
  description:
    "Kerala Sellers is an online marketplace built by Digital Product Solutions for local Kerala businesses.",
  path: "/kerala-sellers",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
