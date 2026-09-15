import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaBand from "@/components/seo/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { business, SITE_URL } from "@/lib/business";
import { workStories } from "@/content/stories";
import { absUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Honest Reviews of Digital Product Solutions, Kerala",
  description:
    "Honest reviews of Digital Product Solutions in Korani, Trivandrum: 5.0 from 25 Google reviews, plus named quotes from live client sites. No fake testimonials.",
  path: "/digital-product-solutions-reviews",
  absoluteTitle: true,
});

const quotes = [
  {
    name: "Saif",
    org: "Crystal Knot Films",
    text: "The team transformed our online presence into something that matches the quality of our films. The improved visibility and structure brought us steady, serious client leads.",
    href: "/work/crystal-knot-films",
  },
  {
    name: "Vipin Mohan",
    org: "BuilDwellz",
    text: "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
    href: "/work/buildwellz",
  },
  {
    name: "Abhishek",
    org: "Squeeze Berriez",
    text: "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
    href: "/work/squeeze-berriez",
  },
  {
    name: "Anvar Riyas",
    org: "Lemon Caters and Events",
    text: "Digital Product rebuilt our catering website and optimized our Google presence.",
    href: "/work/lemon-caters",
  },
];

export default function ReviewsPage() {
  const pageUrl = absUrl("/digital-product-solutions-reviews");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Honest reviews of Digital Product Solutions",
    url: pageUrl,
    about: {
      "@type": "LocalBusiness",
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.googleRatingValue,
        reviewCount: business.googleReviewCount,
        bestRating: "5",
      },
    },
  };

  const mapsSearch =
    "https://www.google.com/maps/search/?api=1&query=Digital%20Product%20Solutions%20Korani%20Kerala";

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 px-4">
      <JsonLd data={schema} />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Honest reviews", href: "/digital-product-solutions-reviews" },
          ]}
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Honest reviews of Digital Product Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          If you searched “Digital Product Solutions reviews”, this is the first-party page. Google Business Profile currently shows a{" "}
          <strong>{business.googleRatingValue} rating from {business.googleReviewCount} reviews</strong>. We do not buy reviews, and we do not invent conversion percentages for marketing.
        </p>
        <p className="mb-10">
          <a href={mapsSearch} className="text-blue-600 font-semibold underline" target="_blank" rel="noopener noreferrer">
            Read Google reviews for Digital Product Solutions
          </a>
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Named quotes from work we actually shipped</h2>
          <ul className="space-y-6">
            {quotes.map((q) => (
              <li key={q.org} className="border border-gray-100 rounded-2xl p-5">
                <p className="text-gray-800 leading-relaxed">“{q.text}”</p>
                <p className="text-sm text-gray-500 mt-3">
                  {q.name}, {q.org} ·{" "}
                  <Link href={q.href} className="text-blue-600 hover:underline">
                    Project story
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-3">Who writes this, and who answers questions</h2>
          <div className="flex gap-4 mb-4">
            {[
              { src: "/img/adarshnew.png", alt: "Adarsh B S, Digital Product Solutions" },
              { src: "/img/midhin.jpg", alt: "Midhin S, Digital Product Solutions" },
              { src: "/img/aromalnew.png", alt: "Aromal V G, Digital Product Solutions" },
            ].map((p) => (
              <div key={p.src} className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="80px" />
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">
            Digital Product Solutions is a small MSME team in Korani, Thiruvananthapuram district — not a solo freelancer and not a call-centre agency. Photos on this site are the people who work here.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We do not run fake Reddit or forum accounts. If a thread about the brand ranks, we would rather you read this page and the{" "}
            <Link href="/work" className="text-blue-600 underline">
              live project stories
            </Link>
            , then WhatsApp the office. Ask anything — we answer as the company.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-3">Live sites you can check yourself</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            {workStories
              .filter((s) => s.liveUrl)
              .map((s) => (
                <li key={s.slug}>
                  <a href={s.liveUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {s.client}
                  </a>
                </li>
              ))}
          </ul>
        </section>

        <CtaBand heading="Still deciding? Ask for an honest estimate." whatsappText="Hi, I read the reviews page and want an estimate" />
      </div>
    </main>
  );
}
