import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Digital Product Solutions in Trivandrum",
  description:
    "Request a project estimate from the Kerala team. Office: Korani, Thiruvananthapuram, Kerala 695104. Phone +91 94003 55185.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
