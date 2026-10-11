import { pageMetadata } from "@/lib/seo";
import AdarshProfileClient from "@/app/adarsh-b-s/AdarshProfileClient";

export const metadata = pageMetadata({
  title: "Adarsh B S | Founder, AI Consultant & Software Solutions Architect",
  description:
    "Meet Adarsh B S — Founder, Lead AI Consultant, and Software Solutions Architect at Digital Product Solutions in Kerala.",
  path: "/team/adarsh-b-s",
  canonicalPath: "/adarsh-b-s",
});

export default function Page() {
  return <AdarshProfileClient />;
}
