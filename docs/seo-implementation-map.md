# SEO Implementation Map

**Date:** 14 September 2026  
**Status:** Audit complete. **No production code changed yet.**  
**Inputs:** repo audit + owner-supplied Manus market report (14 Sep 2026).

This map is the sequence to execute after the owner answers the confirmation list at the bottom. Batches are small and reviewable. Do not create hundreds of pages. Do not ship WooCommerce/WordPress/Shopify/Flutter-named URLs until confirmed.

---

## North star

Capture **qualified Google enquiries** (WhatsApp, phone, estimate, booking) from local, price-aware, small-business searches in Trivandrum and Kerala.

Funnel: search → intent page → proof + honest scope/price → case study → estimate/WhatsApp.

Positioning: small Kerala **team**, direct developer access, not a solo freelancer, not the cheapest national template vendor.

---

## Batch 0 — Owner confirmation (blocking)

Do not guess. See `seo-local-entity-audit.md` and `seo-content-inventory.md`.

1. Legal/GBP address: Trivandrum 695001 vs Attingal 695101 vs other.  
2. Phone, WhatsApp, public email vs lead email.  
3. Services currently for sale (websites, maintenance, Woo/Shopify/WP, Flutter, Odoo, school EMS, RAG).  
4. Which prices are current vs launch vs EMI vs stale (`/book` ecommerce ₹6,000 vs `/pricing` ₹35k+).  
5. Client names, quotes, metrics, logos that may stay public.  
6. Whether EMI offer (₹7,499 / 25/06/2026) is still live.  
7. GBP URL + category. GA4/GSC already have IDs in repo (`G-W95558LF2R`, Search Console verification meta) — confirm they are the live properties.

Until then: implement **technical SEO that does not invent NAP or prices** (Batch 1), using placeholders only in a central config marked `NEEDS_CONFIRMATION`.

---

## Batch 1 — Technical foundation (Days 1–15)

**Goal:** indexable, self-canonical, server-rendered titles. No new marketing URLs yet except config.

| Item | Action | Pri |
| --- | --- | --- |
| Root layout canonical | Remove homepage canonical from `layout.tsx`; per-route self-canonical | P0 |
| Client pages | Split `/`, `/about`, `/contact`, `/book`, `/pricing`, `/services`, `/portfolio` into server `page.tsx` + client islands; replace `next/head` | P0 |
| `/book` canonical | `/book` not `/booking`; add redirect `/booking` → `/book` if GH Pages allows | P0 |
| WhatsApp | One number after confirmation; fix `wa.me/9400355185` | P0 |
| NAP config | `src/lib/business.ts` (or similar) — values filled only after Batch 0 | P0 |
| Schema | One Organization/LocalBusiness; remove fake `aggregateRating` / mis-attached Reviews | P0 |
| `/certificate-verified` | `robots: { index: false }` | P0 |
| EMI double Navbar | Remove extra `Navbar` in `EMIPageClient` | P1 |
| `not-found.tsx` | Add custom 404 | P1 |
| Sitemap allowlist | Canonical public URLs only; drop System A blogs until rewritten | P1 |
| Breadcrumbs component + BreadcrumbList | Shared | P1 |
| JSON-LD helpers | Organization, WebPage, Service, FAQ, Article, Breadcrumb | P1 |
| GA4 events | whatsapp_click, phone_click, form_start/submit, book_start/submit — **no PII** | P1 |
| Superlatives | Strip “leading / premium / Page 1 / guaranteed” where unsupported | P1 |

**Validation after batch:** `npm run build`, inspect `out/` titles/canonicals, sitemap, robots.

---

## Batch 2 — Core commercial pages (Days 16–30)

Optimise in this order (Manus §17 + repo):

1. Homepage — team positioning; services; no fake ratings.  
2. `/pricing` — one-time / recurring / optional; unique metadata; CTAs to estimate.  
3. Introduce **website hub** `/website-development` (missing today; software page is not a website page).  
4. `/software-development` — keep as custom software/ERP; differentiate from websites.  
5. `/app-development` — MVP qualification; **301** `/app-development-kerala`.  
6. `/seo-services` — local SEO honesty; **301** `/seo-services-kerala`.  
7. `/business-automation` vs `/whatsapp-automation-kerala` — distinct intents.  
8. `/ai-powered-solutions` — SME use cases; **301** `/ai-services`.  
9. `/portfolio` — structured case objects; delete copy-paste; no invented ROI.  
10. `/contact` + `/book` — estimate fields: name, business, location, service, budget bands, current site, timeline, WhatsApp, description. Primary CTA label: Get a Project Estimate.  
11. `/blog` index — feature Kerala System B posts; noindex System A.

**City templates (Kollam, Kozhikode, Kannur, Kottayam, Palakkad):** default **301** to parent service unless owner insists on unique rebuilds. Do not add more cities.

---

## Batch 3 — Highest-intent new landers (Days 31–45)

Create only if Batch 0 prices/NAP confirmed. Each page unique intent:

| URL | Intent | Notes |
| --- | --- | --- |
| `/affordable-website-development-trivandrum` | Price-ready buyer | Verified starter prices + exclusions |
| `/website-developer-trivandrum` | Provider selection | Team, process, local proof |
| `/website-development-trivandrum` | Service | Not a clone of developer or affordable pages |
| `/website-development-cost-kerala` | Cost research | Promote from blog cost article |
| `/small-business-website-kerala` | Audience / “website for my business” | |

Also: `/freelance-web-developer-kerala` as **team alternative** (not “we are a freelancer”).

Optimise existing: ecommerce, restaurant, hospital/clinic, WhatsApp, local SEO.

**Blocked:** `/woocommerce-development-kerala`, Shopify, WordPress freelancer URLs.

---

## Batch 4 — Industry / solution (Days 46–60)

Optimise existing industry URLs (restaurant, clinic/hospital, hotel, real estate, ecommerce). Add `/startup-mvp-development-kerala` only if Flutter/MVP confirmed. Construction split only with unique BuilDwellz-level content.

---

## Batch 5 — Support / comparison (Days 61–75)

`/website-redesign-trivandrum`, `/website-maintenance-kerala` (if sold), `/dedicated-developer-team-kerala`, `/outsource-web-development-kerala`, comparison articles (freelancer vs team, website vs landing page, SEO vs Ads, WhatsApp vs manual). No WordPress vs custom article that implies DPS sells WordPress unless confirmed.

---

## Batch 6 — Tools (Days 76–90)

`/website-cost-calculator` / `/project-cost-estimator` using **only confirmed package ranges**. Output is an estimate, not a quote. Optional `/website-package-comparison`.

---

## Internal linking rule (every commercial page)

Parent service → related industry → cost guide → one case study → `/contact` or estimate.

CTA pair: **Get a Project Estimate** + **WhatsApp a Developer**.

---

## Explicitly out of scope for v1

- Competing for “software development company Kerala” head terms  
- Duplicate city doorway pages  
- Fake freelancer identity  
- Fake reviews / aggregateRating  
- Buying spam backlinks  
- New CMS/framework  
- Changing FormSubmit/GA IDs without inspection  
- Publishing competitor (Zauca) prices as DPS prices  

---

## Doc index

| File | Purpose |
| --- | --- |
| `docs/seo-current-architecture.md` | Every route + action |
| `docs/seo-keyword-url-map.md` | Cluster ownership |
| `docs/seo-cannibalization-map.md` | Merge/redirect decisions |
| `docs/seo-technical-issues.md` | P0–P3 bugs |
| `docs/seo-content-inventory.md` | Prices, tech, cases |
| `docs/seo-local-entity-audit.md` | NAP / GBP |
| `docs/seo-market-opportunity.md` | Manus report mapped to repo |
| `docs/seo-implementation-map.md` | This file |
| `docs/seo-change-log.md` | What actually shipped |

Measurement plan and validation report will be written when Batch 1 is implemented.
