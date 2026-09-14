import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About the Kerala Development Team",
  description:
    "Digital Product Solutions is a registered MSME team in Korani, Thiruvananthapuram district. Direct developer access for websites, software, apps and automation.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
