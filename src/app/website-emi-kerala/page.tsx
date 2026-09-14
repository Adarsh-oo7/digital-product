import { Metadata } from "next";
import EMIPageClient from "./EMIPageClient";

export const metadata: Metadata = {
  title: "Website EMI offer ended | See current website packages",
  description:
    "The anniversary website EMI offer ended on 25/06/2026. See current published website packages and request a project estimate.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://www.digitalproductsolutions.in/website-emi-kerala",
  },
};

export default function EMIPage() {
  return <EMIPageClient />;
}
