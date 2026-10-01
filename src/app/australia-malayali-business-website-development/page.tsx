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

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const query = await searchParams;
  return <DiasporaPage content={content} sent={query.sent === "1"} />;
}
