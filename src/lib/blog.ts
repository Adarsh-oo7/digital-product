import { rewrittenLegacySlugs } from "@/content/legacy-blog";

/** Dedicated folder posts — must not be emitted by blog/[slug] generateStaticParams. */
export const dedicatedBlogSlugs = [
  "website-cost-kerala-2026",
  "whatsapp-automation-restaurants-kerala",
  "ai-chatbots-clinics-kerala",
  "local-seo-checklist-kerala",
  "odoo-erp-kerala-manufacturers",
  "ayurvedic-clinic-website-kerala",
  "digital-marketing-hotels-kerala",
] as const;

/**
 * Indexable blog URLs. Dedicated Kerala posts, 2026 guides, and rewritten
 * legacy articles Google already discovered. Duplicate service URLs stay noindex
 * in their own layouts — not here.
 */
export const indexableBlogSlugs = new Set<string>([
  ...dedicatedBlogSlugs,
  ...rewrittenLegacySlugs,
  "freelancer-vs-development-team-kerala",
  "wordpress-vs-custom-website-kerala",
  "website-vs-landing-page-kerala",
  "seo-vs-google-ads-kerala",
  "whatsapp-automation-vs-manual-kerala",
  "how-to-create-website-small-business-kerala",
  "how-to-sell-online-kerala",
  "how-to-choose-a-website-developer-kerala",
  "app-development-cost-kerala",
  "software-development-cost-kerala",
  "seo-cost-kerala",
]);
