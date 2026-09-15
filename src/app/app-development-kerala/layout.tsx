import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mobile App Development in Kerala",
  description:
    "Android and iOS apps from a Kerala development team in Thiruvananthapuram district. App work is listed from ₹25,000. Request a scoped estimate — not a ranking or download guarantee.",
  path: "/app-development-kerala",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
