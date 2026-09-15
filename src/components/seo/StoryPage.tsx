import Image from "next/image";
import Link from "next/link";
import type { WorkStory } from "@/content/stories";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import JsonLd from "./JsonLd";
import { absUrl } from "@/lib/seo";
import { business } from "@/lib/business";

export default function StoryPage({ story }: { story: WorkStory }) {
  const url = absUrl(`/work/${story.slug}`);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.h1,
    description: story.metaDescription,
    image: absUrl(story.image),
    url,
    author: { "@type": "Organization", name: business.legalName, url: absUrl("/") },
    about: story.client,
  };

  return (
    <article className="min-h-screen bg-white pt-28 pb-16 px-4">
      <JsonLd data={article} />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: story.client, href: `/work/${story.slug}` },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
          Real project · {story.industry} · {story.timeline}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{story.h1}</h1>
        <p className="text-gray-600 mb-8">
          {story.where}
          {story.liveUrl && (
            <>
              {" · "}
              <a href={story.liveUrl} className="text-blue-600 font-medium underline" target="_blank" rel="noopener noreferrer">
                Open the live site
              </a>
            </>
          )}
        </p>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-10 bg-gray-100">
          <Image src={story.image} alt={story.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">The situation</h2>
          <p className="text-gray-600 leading-relaxed">{story.problem}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">What we actually shipped</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{story.whatWeDid}</p>
          <ul className="space-y-2 text-gray-600">
            {story.shipped.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-600">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {story.quote && (
          <blockquote className="mb-10 border-l-4 border-blue-600 pl-4 py-1">
            <p className="text-gray-800 italic leading-relaxed">“{story.quote.text}”</p>
            <footer className="text-sm text-gray-500 mt-2">— {story.quote.name}</footer>
          </blockquote>
        )}

        <p className="text-sm text-gray-500 mb-8">
          This is a project story, not a replacement for the service page. If you need the same kind of work, start from the matching service URL below, then WhatsApp for a scoped estimate.
        </p>
        <ul className="flex flex-wrap gap-3 mb-4">
          {story.supplements.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-blue-600 text-sm font-medium hover:underline">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>

        <CtaBand
          heading={`Want a similar ${story.industry.toLowerCase()} site?`}
          whatsappText={`Hi, I saw the ${story.client} story and want an estimate`}
        />
      </div>
    </article>
  );
}
