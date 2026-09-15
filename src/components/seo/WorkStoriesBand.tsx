import Image from "next/image";
import Link from "next/link";
import { workStories } from "@/content/stories";

export default function WorkStoriesBand({
  slugs,
  heading = "Real Kerala projects — not generic case-study filler",
}: {
  slugs?: string[];
  heading?: string;
}) {
  const items = slugs
    ? slugs.map((s) => workStories.find((w) => w.slug === s)).filter(Boolean)
    : workStories.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3 font-semibold uppercase tracking-wider">
            Honest work stories
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{heading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Live URLs, what shipped, and the client’s words. No invented “300% sales” or guaranteed rankings.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(
            (story) =>
              story && (
                <Link
                  key={story.slug}
                  href={`/work/${story.slug}`}
                  className="group rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="relative aspect-[16/10] bg-gray-200">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                      {story.industry} · {story.timeline}
                    </p>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">{story.client}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{story.problem}</p>
                  </div>
                </Link>
              )
          )}
        </div>
        <p className="text-center mt-8">
          <Link href="/work" className="text-blue-600 font-medium hover:underline">
            All project stories →
          </Link>
        </p>
      </div>
    </section>
  );
}
