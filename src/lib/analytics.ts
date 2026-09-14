"use client";

type EventName =
  | "whatsapp_click"
  | "phone_click"
  | "form_start"
  | "form_submit"
  | "book_start"
  | "booking_submit"
  | "estimate_start"
  | "estimate_submit"
  | "calculator_start"
  | "calculator_complete";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire GA4 events with no names, emails, phones, or message text. */
export function track(event: EventName, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const safe: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      const lower = key.toLowerCase();
      if (
        lower.includes("name") ||
        lower.includes("email") ||
        lower.includes("phone") ||
        lower.includes("whatsapp") ||
        lower.includes("message") ||
        lower.includes("comment")
      ) {
        continue;
      }
      safe[key] = value;
    }
  }
  window.gtag("event", event, safe);
}
