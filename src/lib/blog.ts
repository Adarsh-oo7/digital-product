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

/** Indexable blog URLs (dedicated Kerala posts + 2026 guides). All other [slug] posts are noindex. */
export const indexableBlogSlugs = new Set<string>([
  ...dedicatedBlogSlugs,
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
