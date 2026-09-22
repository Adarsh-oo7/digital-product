import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import JsonLd from "./JsonLd";
import type { CrmIndustry } from "@/content/crm-industries";
import { crmIndustries } from "@/content/crm-industries";
import { business, SITE_URL, whatsappUrl } from "@/lib/business";
import { absUrl } from "@/lib/seo";
import { verifiedPricing, inr } from "@/lib/pricing";

export default function CrmLandingPage({ content }: { content: CrmIndustry }) {
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.metaTitle,
    description: content.metaDescription,
    url: absUrl(content.path),
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.serviceName,
    provider: {
      "@type": "Organization",
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
    },
    areaServed: ["Thiruvananthapuram", "Kerala"],
    url: absUrl(content.path),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 px-4">
      <JsonLd data={webpage} />
      <JsonLd data={service} />
      <JsonLd data={faqSchema} />
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Software", href: "/software-development" },
            { name: content.badge, href: content.path },
          ]}
        />

        <header className="text-center mb-16">
          <span className={`inline-block ${content.accent.badge} text-sm px-4 py-1 rounded-full mb-4 font-medium`}>
            {content.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {content.h1}
            <span className={`block mt-3 text-xl md:text-2xl font-semibold ${content.accent.accentText}`}>{content.h1Accent}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{content.lede}</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className={`${content.accent.button} px-8 py-3 rounded-full font-semibold transition shadow-lg`}>
              Get a project estimate
            </Link>
            <a
              href={whatsappUrl(content.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp a developer
            </a>
          </div>
        </header>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">{content.problemTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{content.problem}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{content.workflowTitle}</h2>
          <ol className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-2">
            {content.workflow.map((step, i) => (
              <li key={step.label} className="flex md:flex-col items-center md:max-w-[9.5rem] text-left md:text-center">
                <div className={`${content.accent.stepBg} text-white w-9 h-9 rounded-full flex items-center justify-center font-bold shrink-0`}>
                  {i + 1}
                </div>
                {i < content.workflow.length - 1 && (
                  <span className="hidden md:block w-full h-0.5 bg-gray-200 my-2" aria-hidden />
                )}
                <div className="ml-3 md:ml-0 md:mt-2">
                  <p className="font-semibold text-gray-900 text-sm">{step.label}</p>
                  <p className="text-xs text-gray-500 leading-snug">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">{content.featuresTitle}</h2>
            <ul className="space-y-3 text-gray-600">
              {content.features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={`${content.accent.check} font-bold`}>✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">{content.whyTitle}</h2>
            <ul className="space-y-3 text-gray-600">
              {content.why.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-3">Published starting prices (not a quote)</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">{verifiedPricing.note}</p>
          <ul className="grid sm:grid-cols-3 gap-4 text-sm">
            <li className="border border-gray-100 rounded-2xl p-4">
              <p className="text-gray-500">Simple software portal</p>
              <p className="text-xl font-bold">from {inr(verifiedPricing.softwareFrom)}</p>
            </li>
            <li className="border border-gray-100 rounded-2xl p-4">
              <p className="text-gray-500">WhatsApp automation</p>
              <p className="text-xl font-bold">from {inr(verifiedPricing.automationFrom)}</p>
            </li>
            <li className="border border-gray-100 rounded-2xl p-4">
              <p className="text-gray-500">Larger platform / ERP band</p>
              <p className="text-xl font-bold">from {inr(verifiedPricing.softwarePlatformFrom)}</p>
              <p className="text-xs text-gray-500 mt-1">As listed on /software-development</p>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Custom business platforms typically take 15–45 days. We do not guarantee leads, bookings or rankings.
          </p>
        </section>

        <section className="mb-16 border border-gray-100 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-3">{content.proofTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{content.proof}</p>
          <Link href={content.proofHref} className={`${content.accent.accentText} font-semibold underline`}>
            {content.proofLinkLabel} →
          </Link>
        </section>

        <section className={`mb-16 ${content.accent.related} border rounded-2xl p-8`}>
          <h2 className="text-2xl font-bold mb-6">{content.relatedTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 transition group ${content.accent.relatedHover}`}
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <div className={`font-semibold text-gray-800 ${content.accent.relatedHover}`}>{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {content.faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Other Kerala industry CRMs</h2>
          <ul className="flex flex-wrap gap-3">
            {crmIndustries
              .filter((c) => c.path !== content.path)
              .map((c) => (
                <li key={c.path}>
                  <Link href={c.path} className="text-sm font-medium text-blue-600 hover:underline">
                    {c.serviceName} →
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <CtaBand heading={content.ctaHeading} whatsappText={content.whatsappText} />
      </div>
    </article>
  );
}
