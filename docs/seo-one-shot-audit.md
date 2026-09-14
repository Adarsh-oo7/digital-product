# One-shot SEO audit (14 Sep 2026)

This run continues the Phase 1 docs already in `docs/`. Address **was confirmed** by the owner via Google Business Profile: Korani / Chempakamangalam, **695104**, phone **+91 9400355185**, 5.0 from 25 reviews. Hours (GBP 24h vs site Mo–Sat 09:00–19:00) remain `NEEDS_CONFIRMATION`.

## Already fixed before this execution

- WhatsApp `wa.me/9400355185` → `919400355185`
- `/book` canonical `/booking` → `/book`
- NAP centralised in `src/lib/business.ts`

## Route actions for this execution

| Route | Action |
| --- | --- |
| `/` | OPTIMIZE — server metadata, no layout canonical inheritance |
| `/about` `/pricing` `/services` `/portfolio` `/contact` `/book` | OPTIMIZE — server metadata wrappers |
| `/software-development` `/app-development` `/seo-services` `/business-automation` `/ai-powered-solutions` `/social-media-management` `/whatsapp-automation-kerala` `/ecommerce-website-development-kerala` | KEEP + internal links/CTAs |
| `/seo-services-kerala` | Canonical + noindex → `/seo-services` |
| `/app-development-kerala` | Canonical + noindex → `/app-development` |
| `/ai-services` | Canonical + noindex → `/ai-powered-solutions` |
| `/ai-automation-for-businesses-kerala` | Canonical → `/business-automation` (differentiate in copy, noindex if near-duplicate) |
| Thin city clones | KEEP indexable but add unique local sections + canonical self; do not add more cities |
| `/website-emi-kerala` | NOINDEX — offer ended 25/06/2026; point to pricing |
| `/certificate-verified` | NOINDEX |
| `/woocommerce-development-kerala` | **NOT CREATED** — WooCommerce not verified in repo |
| New website-intent, freelancer, tools, some industry URLs | CREATE with unique copy |

## Price conflicts (do not silently pick)

Launch cards vs `/pricing` vs `/book` e-commerce ₹6,000 vs ₹35,000+. Commercial pages will show **ranges as published on `/pricing` for websites** and **starting prices as published on service pages**, with a note to request an estimate.

## Technologies not verified for dedicated URLs

WooCommerce, Shopify, WordPress-as-a-service: not created.

## Implementation complete (same execution)

All batches in the one-shot prompt were executed without stopping at the audit. See `docs/seo-validation-report.md`, `docs/seo-change-log.md`, `docs/seo-measurement-plan.md`.

Static export cannot issue HTTP 301s; duplicates use noindex + canonical. Thin city pages were not uniquely rewritten. Fastbots + JotForm both remain. Hours and schema-vs-Gmail email remain `NEEDS_CONFIRMATION`.

