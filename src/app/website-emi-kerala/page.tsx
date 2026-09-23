import { pageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import EMIPageClient from "./EMIPageClient";

export const metadata = pageMetadata({
  title: "Website EMI offer ended | See current website packages",
  description: "The anniversary website EMI offer ended on 25/06/2026. See current published website packages and request a project estimate.",
  path: "/website-emi-kerala",
  noindex: true,
});

export default function EMIPage() {
  return <EMIPageClient />;
}
