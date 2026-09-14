"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { telUrl, whatsappUrl } from "@/lib/business";

export default function CtaBand({
  whatsappText = "Hi, I want a project estimate",
  heading = "Ready to talk about your project?",
}: {
  whatsappText?: string;
  heading?: string;
}) {
  return (
    <section className="mt-16 rounded-3xl bg-gray-900 text-white p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
        Get a project estimate from the Kerala team. No ranking or lead guarantees — a clear scope, timeline and price range for your work.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/contact"
          onClick={() => track("estimate_start", { location: "cta_band" })}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 font-semibold hover:bg-blue-500"
        >
          Get a Project Estimate
        </Link>
        <a
          href={whatsappUrl(whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "cta_band" })}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-600 font-semibold hover:bg-green-500"
        >
          WhatsApp a Developer
        </a>
        <a
          href={telUrl}
          onClick={() => track("phone_click", { location: "cta_band" })}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 font-semibold hover:bg-white/20"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
