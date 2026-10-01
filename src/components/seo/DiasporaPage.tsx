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
  ["Essential Website", "From ₹35,000", "New or small business that needs a clear site, enquiry form and WhatsApp."],
  ["Growth Website + Lead System", "From ₹1,25,000", "Established service business that needs pages plus a lead follow-up flow."],
  ["Custom Software and Automation", "From ₹2,50,000", "A workflow that a brochure site cannot run."],
];

export default function DiasporaPage({ content, sent }: { content: DiasporaContent; sent?: boolean }) {
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
            <h2 className="text-2xl font-bold text-gray-900">International starting ranges</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              These are starting ranges for a diaspora or international scope. They are not a fixed quote. Smaller Kerala website packages already published on this site start from ₹5,000, standard sites ₹10,000–₹18,000, and premium sites ₹25,000–₹45,000. Software starts from ₹15,000. Apps start from ₹25,000. SEO starts from ₹5,000 a month. WhatsApp automation starts from ₹10,000.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {packages.map(([name, price, who]) => (
                <div key={name} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                  <p className="mt-2 text-blue-700 font-semibold">{price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{who}</p>
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Analytics dashboard setup from ₹35,000, confirmed in the estimate.</li>
              <li>Maintenance from ₹5,000 a month when a support plan is written into the estimate.</li>
              <li>INR is the price. A GBP, AUD or AED figure on a country page is an approximate reference, not a locked rate.</li>
            </ul>
          </section>
        )}
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
        <DiasporaEnquiryForm path={content.path} pageTitle={content.h1} sent={sent} />
        <CtaBand whatsappText={content.whatsappText} />
      </div>
    </article>
  );
}
