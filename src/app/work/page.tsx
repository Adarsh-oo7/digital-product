import Link from "next/link";
import Image from "next/image";
import { workStories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaBand from "@/components/seo/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { absUrl } from "@/lib/seo";
import { business } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Real Project Stories from Our Kerala Team",
  description:
    "Short stories of live websites we built — BuilDwellz, Crystal Knot Films, Squeeze Berriez, Mangrove Moments and more. Timelines and what shipped, not padded AI copy.",
  path: "/work",
});

export default function WorkIndexPage() {
  const webpage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Project stories — Digital Product Solutions",
    url: absUrl("/work"),
    about: business.legalName,
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 px-4">
      <JsonLd data={webpage} />
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
          ]}
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Real project stories from the Kerala team
        </h1>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl">
          Each page is one job: the situation, what we shipped, how long it took, the live URL, and a quote we already publish. These stories sit next to the service pages — they do not replace “construction website Kerala” or “hotel website Kerala”.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Need a price range first? Use the{" "}
          <Link href="/website-cost-calculator" className="text-blue-600 underline">
            website cost calculator
          </Link>{" "}
          — it maps to packages on /pricing, it is not a quote.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {workStories.map((story) => (
            <Link
              key={story.slug}
              href={`/work/${story.slug}`}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-400 hover:shadow-md transition bg-white"
            >
              <div className="relative aspect-[16/10] bg-gray-100">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1">
                  {story.industry} · {story.timeline}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">{story.client}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{story.problem}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Google reviews for the company:{" "}
          <Link href="/digital-product-solutions-reviews" className="text-blue-600 underline">
            honest reviews of Digital Product Solutions
          </Link>
          .
        </p>

        <CtaBand heading="Want a scoped estimate for your business?" whatsappText="Hi, I saw the project stories and want an estimate" />
      </div>
    </main>
  );
}
