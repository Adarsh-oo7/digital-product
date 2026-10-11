import { pageMetadata } from "@/lib/seo";
import AdarshProfileClient from "./AdarshProfileClient";

export const metadata = pageMetadata({
  title: "Adarsh B S | Founder, AI Consultant & Software Solutions Architect Kerala",
  description:
    "Meet Adarsh B S — Founder, Lead AI Consultant, and Software Solutions Architect at Digital Product Solutions in Kerala. Specializing in enterprise AI systems, Next.js architecture, and CRM solutions.",
  path: "/adarsh-b-s",
  keywords: [
    "Adarsh B S",
    "Best AI Consultant in Kerala",
    "Software Solutions Architect Kerala",
    "AI Consultant Trivandrum",
    "Software Architect Trivandrum",
    "AI Automation Consultant Kerala",
    "Digital Product Solutions Founder",
    "Next.js Architect Kerala",
  ],
  absoluteTitle: true,
});

export default function Page() {
  return <AdarshProfileClient />;
}
