import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Reuse blog posts from blog page
import { blogPosts } from "../page";
import { dedicatedBlogSlugs, indexableBlogSlugs } from "@/lib/blog";
import CtaBand from "@/components/seo/CtaBand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { pageMetadata, absUrl } from "@/lib/seo";
import type { ReactNode } from "react";

// Use Next.js built-in type for dynamic route props
import type { NextPage } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts
    .filter((post) => !dedicatedBlogSlugs.includes(post.slug as (typeof dedicatedBlogSlugs)[number]))
    .map((post) => ({
      slug: post.slug,
    }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const indexable = indexableBlogSlugs.has(post.slug);
  const base = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    noindex: !indexable,
    ogImage: post.image,
  });
  return {
    ...base,
    keywords: post.keywords,
    openGraph: {
      ...base.openGraph,
      type: "article",
    },
  };
}

const SITE = "https://www.digitalproductsolutions.in";

function linkify(text: string): ReactNode[] {
  const parts = text.split(/(https:\/\/www\.digitalproductsolutions\.in\/[a-z0-9\-_/]*)/g);
  return parts.map((part, i) => {
    if (part.startsWith(SITE)) {
      const href = part.slice(SITE.length) || "/";
      return (
        <Link key={i} href={href} className="text-blue-800 underline underline-offset-2">
          {part.replace(/^https:\/\//, "")}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Use NextPage type for the component
const BlogPost: NextPage<Props> = async ({ params }) => {
  const { slug } = await params; // Await the params Promise
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => post.relatedPosts.includes(p.id));

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image.startsWith("http") ? post.image : absUrl(post.image),
    url: absUrl(`/blog/${post.slug}`),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl(`/blog/${post.slug}`),
    },
    author: {
      "@type": "Organization",
      name: "Digital Product Solutions",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Digital Product Solutions",
      logo: {
        "@type": "ImageObject",
        url: absUrl("/img/logo.png"),
      },
    },
    keywords: post.keywords,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <div className="min-h-screen bg-gray-50 py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <header className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full mb-4 font-medium">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <time className="text-gray-500">{post.date}</time>
          </header>
          {post.image && !post.image.includes("logo") && (
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="mb-8 h-64 w-full rounded-xl object-cover md:h-80"
              priority
            />
          )}
          <div className="prose prose-lg text-gray-700 mb-12 space-y-4">
            {post.content.split("\n\n").map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-2">
                  {block.slice(3)}
                </h2>
              ) : (
                <p key={i}>{linkify(block)}</p>
              ),
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="hover:text-blue-600"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              WhatsApp the Kerala team for a scoped estimate. Published prices only — we do not promise rankings or revenue.
            </p>
            <CtaBand heading="Discuss this with the Kerala team" />
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPost;