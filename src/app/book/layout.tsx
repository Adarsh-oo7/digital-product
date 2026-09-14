import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Consultation with the Kerala Team",
  description:
    "Schedule a discussion about your website, software, SEO or automation project. Digital Product Solutions, Korani, Thiruvananthapuram district.",
  path: "/book",
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
