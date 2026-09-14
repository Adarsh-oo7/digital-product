"use client";

import { useEffect, useMemo, useState } from "react";
import { track } from "@/lib/analytics";
import { inr, verifiedPricing } from "@/lib/pricing";
import CtaBand from "@/components/seo/CtaBand";

type Kind = "brochure" | "business" | "ecommerce" | "custom";

export default function WebsiteCalculator() {
  const [kind, setKind] = useState<Kind>("business");
  const [pages, setPages] = useState(5);
  const [pay, setPay] = useState(false);
  const [booking, setBooking] = useState(false);
  const [blog, setBlog] = useState(false);
  const [whatsapp, setWhatsapp] = useState(true);
  const [seo, setSeo] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    track("calculator_start", { tool: "website_cost" });
  }, []);

  const result = useMemo(() => {
    let min: number = verifiedPricing.websiteStandard.from;
    let max: number = verifiedPricing.websiteStandard.to;
    let label: string = verifiedPricing.websiteStandard.label;
    if (kind === "brochure" && pages <= 3 && !pay && !admin) {
      min = verifiedPricing.websiteBasic.from;
      max = verifiedPricing.websiteBasic.to;
      label = verifiedPricing.websiteBasic.label;
    }
    if (kind === "ecommerce" || pay) {
      min = verifiedPricing.ecommerce.from;
      max = verifiedPricing.ecommerce.to;
      label = verifiedPricing.ecommerce.label;
    }
    if (kind === "custom" || admin || pages > 8) {
      min = Math.max(min, verifiedPricing.websitePremium.from);
      max = Math.max(max, verifiedPricing.websitePremium.to);
      label = verifiedPricing.websitePremium.label;
    }
    const extras: string[] = [];
    if (booking) extras.push("Booking is scoped extra unless included in a premium/custom estimate.");
    if (blog) extras.push("A blog/CMS sits in Premium on the public package list.");
    if (seo) extras.push(`Ongoing SEO is listed from ${inr(verifiedPricing.seoMonthlyFrom)}/month, separate from the build.`);
    if (whatsapp) extras.push("WhatsApp links are listed on website packages.");
    return { min, max, label, extras };
  }, [kind, pages, pay, booking, blog, whatsapp, seo, admin]);

  return (
    <div className="rounded-3xl border border-gray-200 p-6 md:p-8 bg-gray-50">
      <fieldset className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium">
          Business type
          <select className="mt-1 w-full border rounded-lg p-2" value={kind} onChange={(e) => setKind(e.target.value as Kind)}>
            <option value="brochure">Simple brochure</option>
            <option value="business">Local business site</option>
            <option value="ecommerce">Online store</option>
            <option value="custom">Custom / dashboard</option>
          </select>
        </label>
        <label className="text-sm font-medium">
          Number of pages (approx.)
          <input
            type="number"
            min={1}
            max={40}
            className="mt-1 w-full border rounded-lg p-2"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value) || 1)}
          />
        </label>
      </fieldset>
      <div className="mt-4 grid gap-2 text-sm">
        <label><input type="checkbox" checked={pay} onChange={(e) => setPay(e.target.checked)} /> Payment gateway / cart</label>
        <label><input type="checkbox" checked={booking} onChange={(e) => setBooking(e.target.checked)} /> Booking / appointments</label>
        <label><input type="checkbox" checked={blog} onChange={(e) => setBlog(e.target.checked)} /> Blog or CMS</label>
        <label><input type="checkbox" checked={whatsapp} onChange={(e) => setWhatsapp(e.target.checked)} /> WhatsApp button</label>
        <label><input type="checkbox" checked={seo} onChange={(e) => setSeo(e.target.checked)} /> Monthly SEO retainer</label>
        <label><input type="checkbox" checked={admin} onChange={(e) => setAdmin(e.target.checked)} /> Admin dashboard</label>
      </div>
      <div className="mt-6 p-5 bg-white rounded-2xl border">
        <p className="text-sm text-gray-500">Non-binding range based on published packages ({result.label})</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">
          {inr(result.min)} – {inr(result.max)}
          {result.label === verifiedPricing.ecommerce.label ? "+" : ""}
        </p>
        <ul className="mt-3 text-sm text-gray-600 space-y-1">
          {result.extras.map((e) => (
            <li key={e}>• {e}</li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 mt-3">{verifiedPricing.note}</p>
        <button
          type="button"
          className="mt-4 text-sm text-blue-600"
          onClick={() => track("calculator_complete", { tool: "website_cost", band: result.label })}
        >
          Log estimate viewed
        </button>
      </div>
      <CtaBand heading="Get an exact estimate for this scope" whatsappText="Hi, I used the website cost calculator and want an exact estimate" />
    </div>
  );
}
