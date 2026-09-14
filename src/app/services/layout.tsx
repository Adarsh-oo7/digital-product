import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digital Services for Kerala Businesses",
  description:
    "Web development, e-commerce, SEO, apps, automation and related services from Digital Product Solutions in Thiruvananthapuram district.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
