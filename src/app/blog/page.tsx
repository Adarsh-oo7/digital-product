import { Metadata } from "next";
import ClientBlog from "./ClientBlog";
import { keralaDedicatedListings, priorityGuides } from "@/content/priority-articles";
import { rewrittenLegacyPosts } from "@/content/legacy-blog";
import { indexableBlogSlugs } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const blogPosts = [...rewrittenLegacyPosts, ...keralaDedicatedListings, ...priorityGuides];

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Kerala blog on websites, AI, WhatsApp and CRM",
    description:
      "Kerala-focused notes on websites, AI chatbots, WhatsApp automation, CRM and SEO. Published prices only — no fake ranking or revenue claims.",
    path: "/blog",
  }),
};

export default function Blog() {
  const listed = blogPosts.filter((post) => indexableBlogSlugs.has(post.slug));
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Digital Product Solutions Blog",
    description:
      "Kerala notes on websites, AI, WhatsApp, CRM and SEO from Digital Product Solutions in Trivandrum.",
    publisher: {
      "@type": "Organization",
      name: "Digital Product Solutions",
      url: "https://www.digitalproductsolutions.in",
      logo: "https://www.digitalproductsolutions.in/images/logo.jpg",
    },
    blogPost: listed.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: `https://www.digitalproductsolutions.in${post.image}`,
      url: `https://www.digitalproductsolutions.in/blog/${post.slug}`,
      author: {
        "@type": "Organization",
        name: "Digital Product Solutions",
      },
      keywords: post.keywords,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <ClientBlog initialPosts={listed} />
    </>
  );
}
