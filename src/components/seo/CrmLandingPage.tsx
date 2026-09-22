import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import JsonLd from "./JsonLd";
import type { CrmIndustry } from "@/content/crm-industries";
import { crmIndustries } from "@/content/crm-industries";
import { business, SITE_URL, whatsappUrl } from "@/lib/business";
import { absUrl } from "@/lib/seo";
import { verifiedPricing, inr } from "@/lib/pricing";

const CITIES = [
  "Trivandrum (Thiruvananthapuram)",
  "Kochi",
  "Kollam",
  "Kozhikode",
  "Thrissur",
  "Kannur",
  "Kottayam",
  "Palakkad",
];

export default function CrmLandingPage({ content }: { content: CrmIndustry }) {
  const primaryKw = content.searchQueries[0] ?? content.serviceName;
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.metaTitle,
    description: content.metaDescription,
    url: absUrl(content.path),
    about: primaryKw,
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.serviceName,
    description: content.metaDescription,
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
    areaServed: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kerala"],
    url: absUrl(content.path),
  };
  const extraFaqs = [
    {
      q: `Do you offer ${primaryKw} in Trivandrum?`,
      a: `Yes. Digital Product Solutions is based in Korani, Thiruvananthapuram district. ${content.serviceName} is built for Trivandrum owners and for the rest of Kerala. Most work is remote with WhatsApp access to the developer.`,
    },
  ];
  const allFaqs = [...content.faqs, ...extraFaqs];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="min-h-screen bg-white pt-24 pb-16 px-4 text-gray-900">
      <JsonLd data={webpage} />
      <JsonLd data={service} />
      <JsonLd data={faqSchema} />

      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "CRM software Kerala", href: "/crm-software-kerala" },
            { name: content.serviceName, href: content.path },
          ]}
        />

        <header className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-gray-500 mb-3">
            {content.icon} {content.serviceName} · {business.yearsExperience} years · Korani, Trivandrum
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {content.h1}
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-4 max-w-3xl">{content.h1Accent}</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">{content.lede}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl(content.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-green-600 !text-white font-semibold shadow-md hover:bg-green-700 hover:!text-white"
            >
              WhatsApp a developer
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gray-900 !text-white font-semibold hover:bg-gray-800 hover:!text-white"
            >
              Get a written estimate
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <li className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">
              <span className="block font-bold text-gray-900">{business.yearsExperience} years</span>
              Kerala software
            </li>
            <li className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">
              <span className="block font-bold text-gray-900">{business.googleRatingValue}★</span>
              {business.googleReviewCount} Google reviews
            </li>
            <li className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">
              <span className="block font-bold text-gray-900">WhatsApp-first</span>
              Direct developer
            </li>
            <li className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">
              <span className="block font-bold text-gray-900">From {inr(verifiedPricing.softwareFrom)}</span>
              Custom portal start
            </li>
          </ul>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{content.problemTitle}</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">{content.problem}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{content.workflowTitle}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.workflow.map((step, i) => (
              <li key={step.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-bold mb-2">
                  {i + 1}
                </span>
                <p className="font-semibold text-gray-900">{step.label}</p>
                <p className="text-sm text-gray-600 mt-1">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14 rounded-2xl border border-gray-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{primaryKw} in Kerala and Trivandrum</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digital Product Solutions is a Kerala CRM software team in Korani, Thiruvananthapuram district, with {business.yearsExperience} years shipping websites, WhatsApp automation and custom software. If you searched <strong>{primaryKw}</strong>
            {content.searchQueries[1] ? (
              <>
                {" "}
                or <strong>{content.searchQueries[1]}</strong>
              </>
            ) : null}
            , this page is the product: industry lead management built around how your desk already sells — not a national CRM licence and not a directory-style SEO farm.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {content.serviceName} here means one inbox for WhatsApp, website, ads and walk-ins; an owner for every lead; follow-up reminders; and a pipeline you can see. Pair it with{" "}
            <Link href="/whatsapp-automation-kerala" className="font-semibold underline">
              WhatsApp automation in Kerala
            </Link>{" "}
            when the first reply should not wait for office hours.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">Related searches this page covers</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {content.searchQueries.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <section className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">{content.featuresTitle}</h2>
            <ul className="space-y-3 text-gray-700">
              {content.features.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">{content.whyTitle}</h2>
            <ul className="space-y-3 text-gray-700">
              {content.why.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {content.serviceName} for businesses across Kerala
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            We build {content.serviceName.toLowerCase()} for owners in Trivandrum and the rest of Kerala. Work is scoped from Korani; most delivery is remote with WhatsApp access to the developer. No ranking or lead guarantees.
          </p>
          <ul className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <li key={city} className="text-sm rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                {city}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2">{content.serviceName} cost in Kerala</h2>
          <p className="text-gray-600 text-sm mb-6">{verifiedPricing.note}</p>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-sm text-gray-500">Simple CRM / portal</p>
              <p className="text-2xl font-bold">from {inr(verifiedPricing.softwareFrom)}</p>
            </li>
            <li className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-sm text-gray-500">WhatsApp automation</p>
              <p className="text-2xl font-bold">from {inr(verifiedPricing.automationFrom)}</p>
            </li>
            <li className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-sm text-gray-500">Larger platform</p>
              <p className="text-2xl font-bold">from {inr(verifiedPricing.softwarePlatformFrom)}</p>
              <p className="text-xs text-gray-500 mt-1">As on /software-development</p>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">Custom platforms typically take 15–45 days after we agree sources, users and stages.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-3">{content.proofTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-3 max-w-3xl">{content.proof}</p>
          <Link href={content.proofHref} className="font-semibold text-blue-700 underline">
            {content.proofLinkLabel} →
          </Link>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{content.relatedTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 hover:border-gray-400 bg-white"
              >
                <span className="text-lg" aria-hidden>
                  {item.icon}
                </span>
                <span>
                  <span className="block font-semibold text-gray-900">{item.title}</span>
                  <span className="block text-sm text-gray-600">{item.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQs — {primaryKw}</h2>
          <div className="space-y-4 max-w-3xl">
            {allFaqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Other industry CRM pages</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {crmIndustries
              .filter((c) => c.path !== content.path)
              .map((c) => (
                <li key={c.path}>
                  <Link href={c.path} className="text-sm font-medium text-blue-700 underline">
                    {c.serviceName}
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <div className="rounded-3xl bg-gray-900 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold !text-white mb-3">{content.ctaHeading}</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
            {business.yearsExperience} years, Kerala team, published prices. No ranking promises. WhatsApp the developer for a scoped estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappUrl(content.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-6 py-3 rounded-xl bg-green-600 !text-white font-semibold hover:bg-green-500 hover:!text-white"
            >
              WhatsApp a developer
            </a>
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 rounded-xl bg-white !text-gray-900 font-semibold hover:bg-gray-100 hover:!text-gray-900"
            >
              Estimate form
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
