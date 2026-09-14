"use client";

import { useEffect, useMemo, useState } from "react";
import { track } from "@/lib/analytics";
import { inr, verifiedPricing } from "@/lib/pricing";
import CtaBand from "@/components/seo/CtaBand";

export default function ProjectEstimator() {
  const [need, setNeed] = useState("website");
  useEffect(() => {
    track("calculator_start", { tool: "project_estimator" });
  }, []);

  const result = useMemo(() => {
    switch (need) {
      case "app":
        return `Mobile apps are listed from ${inr(verifiedPricing.appFrom)}. Most production apps cost more after discovery.`;
      case "software":
        return `Custom software is listed from ${inr(verifiedPricing.softwareFrom)}. FAQ text on the software page also mentions larger ERP work from ₹75,000 — confirm in an estimate.`;
      case "automation":
        return `Business automation is listed from ${inr(verifiedPricing.automationFrom)}. WhatsApp automation is part of that family of work.`;
      case "ai":
        return `AI solutions are listed from ${inr(verifiedPricing.aiFrom)}.`;
      case "seo":
        return `SEO retainers are listed from ${inr(verifiedPricing.seoMonthlyFrom)} per month.`;
      default:
        return `Website packages range from ${inr(verifiedPricing.websiteBasic.from)} to ${inr(verifiedPricing.ecommerce.to)}+ depending on type.`;
    }
  }, [need]);

  return (
    <div className="rounded-3xl border p-6 md:p-8 bg-gray-50">
      <label className="text-sm font-medium">
        What do you need?
        <select className="mt-1 w-full border rounded-lg p-2" value={need} onChange={(e) => setNeed(e.target.value)}>
          <option value="website">Website</option>
          <option value="ecommerce">E-commerce</option>
          <option value="app">Mobile app</option>
          <option value="software">Custom software</option>
          <option value="automation">Automation / WhatsApp</option>
          <option value="ai">AI chatbot / AI workflow</option>
          <option value="seo">SEO</option>
        </select>
      </label>
      <p className="mt-6 text-lg font-semibold text-gray-900">{result}</p>
      <p className="text-sm text-gray-500 mt-2">{verifiedPricing.note}</p>
      <button
        type="button"
        className="mt-3 text-sm text-blue-600"
        onClick={() => track("calculator_complete", { tool: "project_estimator", need })}
      >
        Save this as viewed
      </button>
      <CtaBand heading="Get an exact project estimate" whatsappText="Hi, I used the project estimator" />
    </div>
  );
}
