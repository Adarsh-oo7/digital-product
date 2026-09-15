# Cannibalization Map

**Date:** 14 September 2026  
**Rule:** One primary intent → one indexable URL. Duplicates should be merged, redirected, or differentiated with unique intent.

**Implementation (14 Sep 2026):** Static export cannot 301. Duplicates use **noindex + canonical** to the owner. Thin city pages were **kept** (not rebuilt, not cloned). EMI is **noindex**, not redirected.

---

## P0 — Same intent, two (or more) indexable URLs

| Cluster | Competing URLs | Why it cannibalises | Decision | Notes |
| --- | --- | --- | --- | --- |
| SEO services Kerala | `/seo-services` vs `/seo-services-kerala` | Near-identical titles. | **DONE:** `/seo-services-kerala` noindex, canonical `/seo-services`. | Static export: no 301. |
| App development Kerala | `/app-development` vs `/app-development-kerala` | Same commercial intent. | **UPDATED 15 Sep 2026:** `/app-development-kerala` is the indexable Kerala URL (GSC owner). `/app-development` remains a generic app-service hub with a different title. | User requested the Kerala URL to be available to Google. |
| AI hub | `/ai-powered-solutions` vs `/ai-services` vs `/ai-chatbot-development-kerala` vs `/ai-automation-for-businesses-kerala` | Four pages sell AI. | **DONE:** `/ai-services` noindex → `/ai-powered-solutions`. `/ai-automation-for-businesses-kerala` noindex → `/business-automation`. Chatbot page kept. | |
| Automation | `/business-automation` vs `/whatsapp-automation-kerala` vs `/ai-automation-for-businesses-kerala` | Overlapping copy. | **DONE:** WhatsApp page remains channel owner; AI-automation URL noindex to business-automation. | |
| Cost of a Kerala website | `/blog/website-cost-kerala-2026` vs `/pricing` vs `/website-emi-kerala` vs `/website-development-cost-kerala` | Four price stories. | **DONE:** Cost guide owner `/website-development-cost-kerala`. Pricing = packages. EMI noindex (expired). Blog kept as supporting article. | Do not pick a public price until remaining `/book` vs `/pricing` conflicts are confirmed. |
| Homepage vs everything | Layout canonical inherited | Child pages looked like home | **DONE:** Root layout no longer sets a global homepage canonical or global `robots index`. Per-page `pageMetadata()` / layouts. | |

---

## P1 — Thin city clones (doorway risk)

These five files are **151 lines each** with city-name substitution:

- `/digital-marketing-kollam`
- `/digital-marketing-kozhikode`
- `/seo-services-kannur`
- `/web-development-kottayam`
- `/web-development-palakkad`

Copy pattern: “We provide professional {service} in {city}. From SEO and web development to WhatsApp automation and AI chatbots — we help {city} businesses grow online. Based in Trivandrum.”

Kannur page even says “seo services services”.

`/digital-marketing-trivandrum` is **not** in this set; it is a longer unique page.

**Decision options (owner confirmation required):**

1. **Preferred:** 301 each thin city URL to the relevant Kerala service (`/seo-services`, `/software-development`, `/digital-marketing-trivandrum` or a future `/website-development`), and mention those cities in `areaServed` + a “serving {city}” section.
2. **Only if unique value exists:** Rebuild each with city-specific proof, industries, maps, and case studies. Do not ship find-and-replace pages.

**Do not add** Kochi, Thrissur, Malappuram, Alappuzha clones.

---

## P1 — Industry overlap

| Pages | Overlap | Decision |
| --- | --- | --- |
| `/website-development-for-hospitals-clinics-kerala` vs `/seo-for-doctors-clinics-kerala` vs `/blog/ai-chatbots-clinics-kerala` vs `/blog/ayurvedic-clinic-website-kerala` | Healthcare cluster | Keep: website vs SEO vs articles. Cross-link. Do not create a fourth “clinic website” URL yet. |
| `/website-development-for-hotels-resorts-kerala` vs `/blog/digital-marketing-hotels-kerala` | Hotels | Keep both (service vs article). |
| `/restaurant-website-online-ordering-kerala` vs `/blog/whatsapp-automation-restaurants-kerala` vs `/whatsapp-automation-kerala` | Restaurants | Keep. Internal links must make the commercial owner obvious. |
| `/real-estate-builder-website-development-kerala` vs construction portfolio (BuilDwellz) | Combined industry | Do not split construction until unique content exists. |
| `/school-education-management-software-kerala` vs future school website page | Software vs marketing site | Confirm what is sold. |

---

## P2 — Blog System A vs System B

- **System A:** 25 generic 2025 posts in `blogPosts` array → `/blog/[slug]`. Indexed in sitemap. Shown on `/blog`.
- **System B:** 7 Kerala commercial articles as dedicated routes. In sitemap `additionalPaths`. **Not** in `blogPosts`, so **not on the blog index**.

System A dilutes topical authority and competes with nothing useful. System B is the actual cluster.

**Decision:** Rebuild `/blog` to feature System B. Noindex or unpublish System A unless rewritten into buying-question articles.

---

## P2 — Marketing vs SEO vs SMM

| URL | Should own |
| --- | --- |
| `/seo-services` | Organic SEO Kerala |
| `/local-seo-kerala` | Maps / GBP / near-me |
| `/social-media-management` | Instagram/Facebook management |
| `/google-ads-management-kerala` | PPC |
| `/digital-marketing-trivandrum` | Bundled local marketing in HQ city |

Do not let `/social-media-management` and `/digital-marketing-trivandrum` share the same H1 intent after optimisation.

---

## Explicit non-owners

Do **not** let these ranks for website-development queries:

- `/software-development` (apps/ERP/SaaS, not brochure websites)
- `/kerala-sellers` (product, not agency service)
- `/certificate-verified`
- generic `/blog/*` System A posts
