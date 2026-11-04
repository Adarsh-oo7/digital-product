import { pageMetadata } from "@/lib/seo";
import AdarshProfileClient from "@/app/adarsh-b-s/AdarshProfileClient";

export const metadata = pageMetadata({
  title: "Adarsh B S | AI Consultant & Software Architect",
  description:
    "Adarsh B S — Founder, Lead AI Consultant, and Software Solutions Architect at Digital Product Solutions in Kerala. Direct developer consultation.",
  path: "/team/adarsh-b-s",
  canonicalPath: "/adarsh-b-s",
});

export default function Page() {
  return <AdarshProfileClient />;
}
