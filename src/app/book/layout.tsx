import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Website or Software Consultation in Kerala",
  description:
    "Book a consultation with Digital Product Solutions in Korani, Thiruvananthapuram. The first call covers scope, timeline and the published starting range.",
  path: "/book",
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
