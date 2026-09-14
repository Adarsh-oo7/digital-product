import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Plans and Pricing in Kerala",
  description:
    "Website packages currently published by Digital Product Solutions: Basic ₹5,000–₹8,000, Standard ₹10,000–₹18,000, Premium ₹25,000–₹45,000, E-commerce ₹35,000–₹70,000+. Request an estimate for your scope.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
