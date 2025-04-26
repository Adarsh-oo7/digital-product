import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Reuse blog posts from blog page
import { blogPosts } from "../page";

// Use Next.js built-in type for dynamic route props
import type { NextPage } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Post Not Found | Digital Product Solutions",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Digital Product Solutions`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.digitalproductsolutions.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [`https://www.digitalproductsolutions.in${post.image}`],
      url: `https://www.digitalproductsolutions.in/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://www.digitalproductsolutions.in${post.image}`],
    },
  };
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
    image: `https://www.digitalproductsolutions.in${post.image}`,
    url: `https://www.digitalproductsolutions.in/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Digital Product Solutions",
      url: "https://www.digitalproductsolutions.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Digital Product Solutions",
      logo: "https://www.digitalproductsolutions.in/images/logo.jpg",
    },
    keywords: post.keywords,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex gap-4 mb-6">
              <span className="text-blue-600">{post.category}</span>
              <time className="text-gray-500">{post.date}</time>
            </div>
          </header>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto mb-8 rounded-lg"
            loading="lazy"
          />
          <div className="prose prose-lg text-gray-700 mb-12">{post.content}</div>

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
              Contact Digital Product Solutions to build tailored AI, e-commerce, and web design solutions that drive growth.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPost;