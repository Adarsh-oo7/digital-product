# Content Inventory

**Date:** 14 September 2026  
**Sources:** repository copy only. Market language from owner-supplied Manus report is cited in `seo-market-opportunity.md`, not treated as DPS-published facts.

---

## Verified public prices (conflict — do not pick a single public number yet)

| Source | What is sold | Price | Recurring? | Evidence |
| --- | --- | --- | --- | --- |
| Homepage service cards | Software | ₹15,000 launch, “3 slots left” | One-time implied | `src/app/page.tsx` |
| Homepage | Apps | ₹25,000 launch, “2 slots left” | One-time | same |
| Homepage | SEO | ₹5,000/mo launch | Monthly | same |
| Homepage | Social media | ₹3,000/mo launch | Monthly | same |
| Homepage | Business automation | ₹10,000 launch | One-time implied | same |
| Homepage | AI solutions | ₹12,000 launch | One-time implied | same |
| `/pricing` | Basic website | ₹5,000–₹8,000 | One-time | `src/app/pricing/page.tsx` |
| `/pricing` | Standard business website | ₹10,000–₹18,000 | One-time | same |
| `/pricing` | Premium / dynamic | ₹25,000–₹45,000 | One-time | same |
| `/pricing` | E-commerce | ₹35,000–₹70,000+ | One-time | same |
| `/website-emi-kerala` | Anniversary website | ₹7,499 (claimed worth ₹16,000), EMI from ₹1,000, valid till **25/06/2026** | Mixed | `src/app/website-emi-kerala/page.tsx` |
| `/software-development` | Simple portal | from ₹15,000 | One-time | page FAQ |
| `/software-development` | SaaS / ERP | from ₹75,000 | One-time | page FAQ |
| `/book` radio prices | Web dev ₹5,000; AI ₹12,000; SEO ₹5,000; e-commerce **₹6,000** | Conflicts with `/pricing` ecommerce ₹35k+ | `src/app/book/page.tsx` |
| Hospital lander | Hospital/clinic website | from ₹25,000 | One-time | hospitals page metadata |
| Schema in layout | Software from ₹15,000; apps ₹25,000; SEO ₹5,000/mo; SMM ₹3,000/mo; automation ₹10,000; AI ₹12,000 | `layout.tsx` OfferCatalog |

**NEEDS_CONFIRMATION:** which of these are current, launch-only, EMI-only, or stale. Do not promote a ladder (starter / core / higher-value) until the owner picks one price sheet.

**Not in repo:** WooCommerce package prices, WordPress retainers, Shopify, “business website under ₹20,000” as a named SKU (Basic website ₹5–8k exists; Standard ₹10–18k exists).

---

## Technologies claimed in copy

| Claim | Where | Status |
| --- | --- | --- |
| Next.js | Homepage, portfolio | `VERIFIED` in this repo (the marketing site itself is Next.js). Client-site stack not independently verified. |
| Flutter / React Native | Homepage, `/app-development`, `/app-development-kerala` | `NEEDS_CONFIRMATION` |
| Kotlin/Java, Swift | `/app-development` FAQ | `NEEDS_CONFIRMATION` |
| Python AI | Homepage | `NEEDS_CONFIRMATION` |
| Odoo | `/odoo-erp-development-kerala` | `NEEDS_CONFIRMATION` |
| Razorpay / Cashfree | `/pricing` ecommerce features | `NEEDS_CONFIRMATION` |
| WhatsApp Business API | Multiple landers | `NEEDS_CONFIRMATION` (offered; delivery proof needed) |
| WordPress | Mentioned as **competitor weakness** on `/seo-services-kerala` (“bloated WordPress templates”) | Do **not** publish “freelance WordPress developer” as a DPS service until confirmed |
| WooCommerce / Shopify | **Not found** in `src/` | Do **not** create Woo/Shopify URLs until confirmed |
| AWS / Azure / GCP | Generic blog System A | Treat as unverified blog filler |

---

## Portfolio / case-study objects (verified as published on site, not as verified outcomes)

| Project title | Industry | Location in copy | Live URL in carousel | Issues |
| --- | --- | --- | --- | --- |
| Wedding Events / CrystalKnot | Wedding films | Bangalore | crystalknotfilms.com | Schema review exists; metric “4 wedding projects / first month” `NEEDS_CONFIRMATION` |
| Construction / BuilDwellz | Construction | Attingal / Varkala (inconsistent) | buildwellz.in | Strongest construction proof |
| Soft drinks / Squeeze Berriez | F&B | Kochi / Thrissur (inconsistent) | squeezeberriez.in | |
| Kerala Sellers | Marketplace | Attingal → Kerala | keralasellers.in | In-house product, not a client in the usual sense |
| Mangrove Moments | Hospitality | Kerala | mangrovemoments.com | Description **copy-pasted** from Kerala Sellers |
| Mangrove Spot | Hospitality | Kerala | mangrovespot.in | Same copy-paste |
| Lemon Caters | Events | Attingal | in reviews | |
| Organic honey farm | Agri | Attingal | no live URL in carousel | |
| Generic e-commerce / maintenance rows | Filler | Attingal | weak | |

**Rule for later rebuild:** qualitative problem/solution/tech/timeline only unless owner confirms metrics and permission.

---

## Team (About page)

Core: Adarsh B S (PM, SEO/marketing), Midhin S (full-stack/backend/QA), Aromal V G (full-stack/UI). Members: Akhil Shibu, Akhilesh C J, Adarsh M, Arjun, Mohd Sha, Nakul P. Homepage: “9 digital creators.” **NEEDS_CONFIRMATION** that this is current.

---

## Content quality by cluster

| Cluster | Useful unique content? | Thin / duplicate? | Notes |
| --- | --- | --- | --- |
| Homepage | Yes | Mixed claims, launch scarcity, client JS | Primary hub |
| Core 6 navbar services | Mostly yes | Titles overclaim Page 1 / slots | |
| `/seo-services` vs `/seo-services-kerala` | Overlap | Duplicate | Merge |
| `/app-development` vs `-kerala` | Overlap | Duplicate | Merge |
| City 151-line templates | No | Doorway | Redirect or rebuild unique |
| Industry landers | Partial | Template-like but longer | Align to Manus first-10-to-build |
| `/ai-services` | No | Generic ML/NLP/cyber | Merge |
| Blog System A (25) | No | Generic 2025 | Noindex/prune |
| Blog System B (7 Kerala) | Yes | Not linked from index | Keep |
| `/kerala-sellers` | Thin | Product teaser | Expand or leave supporting |
| `/certificate-verified` | Utility | Training | Noindex |

---

## CTAs currently used (not yet “Get a Project Estimate”)

Dominant: WhatsApp, Call, Book Now, Get Free Consultation, Start Your Project.  
**Gap vs strategy:** no primary “Get a Project Estimate” CTA; contact form lacks budget, current website, timeline, business, location fields (book has service/date/time).
