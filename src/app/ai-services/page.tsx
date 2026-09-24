import { pageMetadata } from "@/lib/seo";
import AIServicesClient from "./AIServicesClient";

export const metadata = pageMetadata({
  title: "AI Services & Automation in Kerala | Machine Learning & NLP",
  description:
    "Cutting-edge AI services and business automation in Kerala. Machine learning solutions, natural language processing, intelligent bots, and predictive analytics by Digital Product Solutions.",
  path: "/ai-services",
  keywords: [
    "AI Services Kerala",
    "Machine Learning Solutions Trivandrum",
    "AI Automation Kerala",
    "NLP Chatbots Kerala",
    "Artificial Intelligence Development India",
  ],
});

export default function Page() {
  return <AIServicesClient />;
}