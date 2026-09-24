import { pageMetadata } from "@/lib/seo";
import BookingClient from "./BookingClient";

export const metadata = pageMetadata({
  title: "Book a Strategy Consultation | Digital Product Solutions Kerala",
  description:
    "Schedule a direct consultation with our lead software developers in Kerala. Discuss website development, web applications, SEO, or AI automation for your business.",
  path: "/book",
  keywords: [
    "Book Web Development Consultation Kerala",
    "Hire Developers Trivandrum",
    "Software Strategy Meeting Kerala",
  ],
});

export default function Page() {
  return <BookingClient />;
}