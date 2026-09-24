import Link from "next/link";
import Image from "next/image";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import FaqList, { type FaqItem } from "./FaqList";
import JsonLd from "./JsonLd";
import { business, SITE_URL } from "@/lib/business";
import { absUrl } from "@/lib/seo";

export type RelatedLink = { href: string; label: string };

export type LandingContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  audience?: string;
  problem?: string;
  deliverables?: string[];
  process?: { title: string; text: string }[];
  costs?: { title: string; text: string }[];
  ownership?: string;
  proof?: string;
  related: RelatedLink[];
  faqs: FaqItem[];
  whatsappText?: string;
  serviceName?: string;
  heroImage?: string;
};

export default function LandingPage({ content, children }: { content: LandingContent; children?: React.ReactNode }) {
  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: content.h1, href: content.path },
  ];

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.h1,
    description: content.lede,
    url: absUrl(content.path),
    isPartOf: { "@type": "WebSite", name: business.publicName, url: SITE_URL },
  };

  const service = content.serviceName
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: content.serviceName,
        provider: {
          "@type": "Organization",
          name: business.legalName,
          url: SITE_URL,
          telephone: business.telephone,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.streetAddress,
            addressLocality: business.addressLocality,
            addressRegion: business.addressRegion,
            postalCode: business.postalCode,
            addressCountry: business.addressCountry,
          },
        },
        areaServed: ["Thiruvananthapuram", "Kerala"],
        url: absUrl(content.path),
      }
    : null;

  const faqSchema =
    content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <article className={content.heroImage ? "min-h-screen bg-white pb-16" : "min-h-screen bg-white pt-28 pb-16 px-4"}>
      <JsonLd data={webpage} />
      {service && <JsonLd data={service} />}
      {faqSchema && <JsonLd data={faqSchema} />}
      {content.heroImage && (
        <header className="relative flex min-h-[78vh] items-end overflow-hidden">
          <Image
            src={content.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35" />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-16 pt-36 text-white">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-200">Digital Product Solutions · Kerala</p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{content.h1}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-100">{content.lede}</p>
          </div>
        </header>
      )}
      <div className={content.heroImage ? "mx-auto max-w-4xl px-4 pt-10" : "mx-auto max-w-4xl"}>
        <Breadcrumbs items={crumbs} />
        {!content.heroImage && (
          <>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">{content.h1}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">{content.lede}</p>
          </>
        )}

        {content.audience && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Who this is for</h2>
            <p className="text-gray-600 leading-relaxed">{content.audience}</p>
          </section>
        )}
        {content.problem && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">The problem we solve</h2>
            <p className="text-gray-600 leading-relaxed">{content.problem}</p>
          </section>
        )}
        {content.deliverables && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">What you get</h2>
            <ul className="space-y-2 text-gray-600">
              {content.deliverables.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-blue-600">✔</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        {children}
        {content.costs && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Cost context</h2>
            <div className="space-y-4">
              {content.costs.map((c) => (
                <div key={c.title}>
                  <h3 className="font-semibold text-gray-800">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {content.process && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">How the work runs</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-600">
              {content.process.map((p) => (
                <li key={p.title}>
                  <span className="font-semibold text-gray-800">{p.title}.</span> {p.text}
                </li>
              ))}
            </ol>
          </section>
        )}
        {content.ownership && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Ownership, hosting and support</h2>
            <p className="text-gray-600 leading-relaxed">{content.ownership}</p>
          </section>
        )}
        {content.proof && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Proof from real work</h2>
            <p className="text-gray-600 leading-relaxed">{content.proof}</p>
            <p className="mt-3">
              <Link href="/portfolio" className="text-blue-600 font-medium hover:underline">
                View the portfolio
              </Link>
            </p>
          </section>
        )}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Continue reading</h2>
          <ul className="space-y-2">
            {content.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-blue-600 hover:underline">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <FaqList items={content.faqs} />
        <CtaBand whatsappText={content.whatsappText} />
      </div>
    </article>
  );
}
