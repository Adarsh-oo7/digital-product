import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Services & Automation in Kerala | Machine Learning & NLP",
  description:
    "Cutting-edge AI services and business automation in Kerala. Machine learning solutions, natural language processing, intelligent bots, and predictive analytics by Digital Product Solutions.",
  path: "/ai-services",
});

export default function AiServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
