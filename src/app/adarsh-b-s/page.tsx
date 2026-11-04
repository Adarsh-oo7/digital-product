import { pageMetadata } from "@/lib/seo";
import AdarshProfileClient from "./AdarshProfileClient";

export const metadata = pageMetadata({
  title: "Adarsh B S | AI Consultant & Software Architect Kerala",
  description:
    "Adarsh B S is the Founder, Lead AI Consultant & Software Architect at Digital Product Solutions in Kerala. Specializing in AI, Next.js, CRM & ERP systems.",
  path: "/adarsh-b-s",
  keywords: [
    "Adarsh B S",
    "Best AI Consultant in Kerala",
    "Software Solutions Architect Kerala",
    "Freelance Software Developer Kerala",
    "Freelance Web Developer Kerala",
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
