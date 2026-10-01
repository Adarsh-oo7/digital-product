import DiasporaPage from "@/components/seo/DiasporaPage";
import { diaspora } from "@/content/diaspora";
import { pageMetadata } from "@/lib/seo";

const content = diaspora("/kerala-digital-lead-generation-agency");

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  absoluteTitle: content.absoluteTitle,
});

export default function Page() {
  return <DiasporaPage content={content} />;
}
