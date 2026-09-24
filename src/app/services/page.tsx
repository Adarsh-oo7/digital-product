import { pageMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export const metadata = pageMetadata({
  title: "Services | Web, Mobile Apps, SEO & Software Development Kerala",
  description:
    "End-to-end digital services in Kerala: Custom web development, Next.js web apps, mobile apps, e-commerce stores, SEO, and WhatsApp automation by Digital Product Solutions.",
  path: "/services",
  keywords: [
    "Web Development Services Kerala",
    "Software Development Trivandrum",
    "Mobile App Development Kerala",
    "E-commerce Website Development",
    "SEO Services Kerala",
  ],
});

export default function Page() {
  return <ServicesClient />;
}
