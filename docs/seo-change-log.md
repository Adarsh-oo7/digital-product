# SEO Change Log

All production and documentation changes for the SEO programme. Do not record planned work as done.

| Date | Batch | What changed | Files | Tests | Notes |
| --- | --- | --- | --- | --- | --- |
| 2026-09-14 | Phase 1 audit | Created audit and strategy docs. **No production code changed.** | `docs/seo-*.md` | None (docs only) | Incorporated owner-supplied Manus market report (14 Sep 2026) into `seo-market-opportunity.md` and the implementation map. |
| 2026-09-14 | NAP confirmation | Owner confirmed GBP address PIN **695104** (Korani / Chempakamangalam) and phone **9400355185**. Centralised NAP; fixed WhatsApp country code; review count 25 not 50; `/book` canonical `/book` not `/booking`. Hours left Mo–Sa pending confirmation (GBP shows 24h). | `src/lib/business.ts`, layout, footer, contact, book, about, portfolio, homepage, `llms.txt`, ChatbotAndSocialButtons | Not built this step | Do not invent geo coordinates. |
| 2026-09-14 | One-shot SEO system | Implemented demand-based landing pages, calculators, blog guides, duplicate noindex/canonicals, EMI noindex, NAP-safe metadata, GA4 events, allowlist sitemap. Typecheck pass; production static export pass (108 routes). | See `docs/seo-validation-report.md` | `tsc` pass; `npm run build` pass | Does not claim rankings or leads. |
