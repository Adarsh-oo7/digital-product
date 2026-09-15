import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import StoryPage from "@/components/seo/StoryPage";
import { storyBySlug, workStories } from "@/content/stories";

export function generateStaticParams() {
  return workStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) return { title: "Project not found" };
  return pageMetadata({
    title: story.metaTitle,
    description: story.metaDescription,
    path: `/work/${story.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) notFound();
  return <StoryPage story={story} />;
}
