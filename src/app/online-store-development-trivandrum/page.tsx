import LandingPage from "@/components/seo/LandingPage";
import { onlineStoreTvm } from "@/content/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: onlineStoreTvm.metaTitle,
  description: onlineStoreTvm.metaDescription,
  path: onlineStoreTvm.path,
});

export default function Page() {
  return <LandingPage content={onlineStoreTvm} />;
}
