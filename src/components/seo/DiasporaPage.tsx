"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import DiasporaEnquiryForm from "./DiasporaEnquiryForm";
import FaqList from "./FaqList";
import JsonLd from "./JsonLd";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { business, SITE_URL, whatsappUrl } from "@/lib/business";
import { verifiedPricing, inr } from "@/lib/pricing";
import { absUrl } from "@/lib/seo";

export type DiasporaSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type DiasporaContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  absoluteTitle?: boolean;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  event: AnalyticsEvent;
  sections: DiasporaSection[];
  showPackages?: boolean;
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  whatsappText: string;
  serviceName: string;
};

const packages = [
  ["Basic website", `From ${inr(verifiedPricing.websiteBasic.from)}`, "A small site, a form and WhatsApp."],
  ["Standard website", `From ${inr(verifiedPricing.websiteStandard.from)}`, "More pages for a business that already has customers."],
  ["Premium website", `From ${inr(verifiedPricing.websitePremium.from)}`, "A larger site when the scope needs it."],
  ["E-commerce", `From ${inr(verifiedPricing.ecommerce.from)}`, "A catalogue with checkout, if that is in the estimate."],
  ["Software", `From ${inr(verifiedPricing.softwareFrom)}`, "CRM, booking or a workflow the site cannot run."],
  ["Mobile app", `From ${inr(verifiedPricing.appFrom)}`, "Android or iOS, scoped in the estimate."],
  ["SEO", `From ${inr(verifiedPricing.seoMonthlyFrom)}/month`, "Technical SEO and local pages. No ranking promise."],
  ["WhatsApp automation", `From ${inr(verifiedPricing.automationFrom)}`, "Replies and follow-up you agree in writing."],
  ["AI tools", `From ${inr(verifiedPricing.aiFrom)}`, "A chatbot or automation only if the estimate includes it."],
];

export default function DiasporaPage({ content }: { content: DiasporaContent }) {
  useEffect(() => {
    track(content.event, { page: content.path });
  }, [content.event, content.path]);

  const crumbs =
    content.path === "/malayali-business-solutions-worldwide"
      ? [
          { name: "Home", href: "/" },
          { name: content.h1, href: content.path },
        ]
      : [
          { name: "Home", href: "/" },
          { name: "Malayali businesses worldwide", href: "/malayali-business-solutions-worldwide" },
          { name: content.h1, href: content.path },
        ];

  return (
    <article className="min-h-screen bg-white pb-16">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: content.h1,
            description: content.lede,
            url: absUrl(content.path),
            isPartOf: { "@type": "WebSite", name: business.publicName, url: SITE_URL },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: content.serviceName,
            provider: { "@type": "Organization", name: business.legalName, url: SITE_URL },
            areaServed: "Worldwide, delivered from Kerala",
            url: absUrl(content.path),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <header className="bg-gradient-to-b from-white to-gray-50 px-4 pb-8 pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Built in Kerala. Designed for businesses anywhere.
            </p>
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{content.h1}</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{content.lede}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(content.whatsappText)}
                className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white"
                onClick={() => track("click_whatsapp", { page: content.path })}
              >
                WhatsApp the team
              </a>
              <a href="#consultation" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-900">
                Request an estimate
              </a>
              <a href="mailto:hello@digitalproductsolutions.in" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-900">
                hello@digitalproductsolutions.in
              </a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-gray-100 shadow-lg md:h-[420px]">
            <Image src={content.image} alt={content.imageAlt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
        {content.sections.map((section) => (
          <section key={section.h2} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900">{section.h2}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-gray-600">{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="mt-4 space-y-2 text-gray-600">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-blue-600">✔</span><span>{item}</span></li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {content.showPackages && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Starting prices</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              These are starting prices only, the same figures published on the pricing page. An overseas enquiry does not raise them. The written estimate is the price for your scope. GST, hosting, domain and payment-gateway fees are extra unless that estimate includes them.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {packages.map(([name, price, who]) => (
                <div key={name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                  <p className="mt-3 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-xl font-bold text-transparent">{price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{who}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              INR is the price. A GBP, AUD or AED note on a country page is only a rough guide, not a locked rate.{" "}
              <Link href="/pricing" className="text-blue-600 hover:underline">Open the full price list</Link>.
            </p>
          </section>
        )}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Check this yourself</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Trust here is something you can open. We do not add a score, a client count, or an overseas office on this page.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li><Link href="/work" className="text-blue-600 hover:underline">Project stories you can read</Link></li>
            <li><Link href="/portfolio" className="text-blue-600 hover:underline">Live project links</Link></li>
            <li><Link href="/digital-product-solutions-reviews" className="text-blue-600 hover:underline">Reviews page</Link></li>
            <li><Link href="/certificate-verified" className="text-blue-600 hover:underline">MSME registration page</Link></li>
            <li><a href={business.mapsUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google listing in Korani</a></li>
            <li><Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy policy</Link></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Related pages</h2>
          <ul className="mt-3 space-y-2">
            {content.related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blue-600 hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <FaqList items={content.faqs} />
        <DiasporaEnquiryForm path={content.path} pageTitle={content.h1} />
        <CtaBand whatsappText={content.whatsappText} />
      </div>
    </article>
  );
}
