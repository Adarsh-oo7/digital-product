import { pageMetadata } from "@/lib/seo";
import AboutClient from "./AboutClient";

export const metadata = pageMetadata({
  title: "About Us | Digital Product Solutions Trivandrum, Kerala",
  description:
    "Meet the developers and digital specialists behind Digital Product Solutions in Korani, Thiruvananthapuram. Direct developer access, transparent pricing, and modern web apps.",
  path: "/about",
  keywords: [
    "About Digital Product Solutions",
    "Web Developers Trivandrum",
    "Software Company Korani",
    "Digital Product Solutions Team",
    "IT Company Kerala",
  ],
});

export default function Page() {
  return <AboutClient />;
}