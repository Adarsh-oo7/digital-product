import DiasporaPage from "@/components/seo/DiasporaPage";
import { diaspora } from "@/content/diaspora";
import { pageMetadata } from "@/lib/seo";

const content = diaspora("/australia-malayali-business-website-development");

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  absoluteTitle: content.absoluteTitle,
});

export default function Page() {
  return <DiasporaPage content={content} />;
}
