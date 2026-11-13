import { pageMetadata } from "@/lib/seo";
import AIServicesClient from "./AIServicesClient";

export const metadata = pageMetadata({
  title: "AI Services & Automation in Kerala | Machine Learning & NLP",
  description:
    "AI services and automation consultant in Kerala. Custom LLM systems, WhatsApp AI bots, machine learning & predictive analytics starting from ₹12,000.",
  path: "/ai-services",
  noindex: true,
  canonicalPath: "/ai-powered-solutions",
  keywords: [
    "AI Services Kerala",
    "freelance AI developer",
    "AI consultant Kerala",
    "Machine Learning Solutions Trivandrum",
    "AI Automation Kerala",
    "NLP Chatbots Kerala",
    "Artificial Intelligence Development India",
  ],
});

export default function Page() {
  return <AIServicesClient />;
}