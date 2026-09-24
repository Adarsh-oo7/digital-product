import { pageMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const metadata = pageMetadata({
  title: "Contact Us | Digital Product Solutions Trivandrum, Kerala",
  description:
    "Get in touch with Digital Product Solutions in Korani, Thiruvananthapuram. Speak directly with developers for websites, custom software, mobile apps, and SEO quotes.",
  path: "/contact",
  keywords: [
    "Contact Digital Product Solutions",
    "Web Developer Contact Trivandrum",
    "Software Agency Phone Kerala",
    "Digital Product Solutions Korani",
  ],
});

export default function Page() {
  return <ContactClient />;
}