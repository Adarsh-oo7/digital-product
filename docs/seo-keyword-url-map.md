# Keyword → URL Ownership Map

**Date:** 14 September 2026  
**Status:** Strategy hypotheses **plus implementation**. No search-volume figures are claimed.  
**Evidence labels:** `VERIFIED` / `VERIFIED-REPO` (in source), `QUALITATIVE` (SERP language or repeated commercial pattern; includes Manus 14 Sep 2026 extract), `ESTIMATED`, `INFERENCE`, `NEEDS_CONFIRMATION`.

Manus opportunity scores are **strategy scores, not Keyword Planner volumes**. Attack order for the first 20 queries is in `docs/seo-market-opportunity.md`.

One cluster = one canonical owner. Supporting URLs may exist but must not compete for the same primary query.

## Implementation snapshot (14 Sep 2026)

| Keyword cluster | Intent | Customer | Location | Canonical URL | Supporting URLs | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Affordable website Trivandrum | Commercial | SMB | Trivandrum | `/affordable-website-development-trivandrum` | `/pricing`, `/website-cost-calculator` | `QUALITATIVE` — published |
| Website developer Trivandrum | Provider | SMB | Trivandrum | `/website-developer-trivandrum` | `/about`, `/portfolio` | `QUALITATIVE` — published |
| Website development Trivandrum | Service | SMB | Trivandrum | `/website-development-trivandrum` | `/website-development` | `QUALITATIVE` — published |
| Website cost Kerala | Cost | Price-sensitive | Kerala | `/website-development-cost-kerala` | `/blog/website-cost-kerala-2026`, `/pricing` | `VERIFIED` — published |
| Small business website Kerala | Audience | Kerala SMB | Kerala | `/small-business-website-kerala` | `/pricing` | `QUALITATIVE` — published |
| Website redesign Trivandrum | Problem | Existing site | Trivandrum | `/website-redesign-trivandrum` | `/portfolio` | `QUALITATIVE` — published |
| Website maintenance Kerala | Retention | Existing client | Kerala | `/website-maintenance-kerala` | `/services` | `QUALITATIVE` — published |
| E-commerce Kerala | Commercial | Seller | Kerala | `/ecommerce-website-development-kerala` | `/affordable-ecommerce-website-kerala`, `/ecommerce-website-cost-kerala` | `VERIFIED` — published |
| Online store Trivandrum | Local commercial | Seller | Trivandrum | `/online-store-development-trivandrum` | ecommerce hub | `QUALITATIVE` — published |
| WooCommerce Kerala | Platform | WP merchant | Kerala | — | — | `NEEDS_CONFIRMATION` — **not published** |
| Freelance web developer Kerala | Provider type | Price-sensitive | Kerala | `/freelance-web-developer-kerala` | `/dedicated-developer-team-kerala`, `/outsource-web-development-kerala` | `QUALITATIVE` — published (honest team) |
| Hotel website Kerala | Industry | Hospitality | Kerala | `/website-development-for-hotels-resorts-kerala` | hotel blog | `VERIFIED` — existing URL kept |
| Restaurant website Kerala | Industry | F&B | Kerala | `/restaurant-website-online-ordering-kerala` | WhatsApp page | `VERIFIED` — existing URL kept |

---

## Website and local

| Keyword cluster | Search intent | Customer | Location | Canonical URL | Supporting URLs | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| affordable website developer Trivandrum / low cost website design Trivandrum | Commercial / price | SMB owner | Trivandrum | `/affordable-website-development-trivandrum` | `/pricing`, `/website-emi-kerala` | No | Create after price confirmation | `QUALITATIVE` |
| website developer Trivandrum / website designer Trivandrum / website developer near me | Provider selection | SMB owner | Trivandrum | `/website-developer-trivandrum` | `/about`, `/portfolio` | No | Create | `QUALITATIVE` |
| website development Trivandrum | Service | SMB owner | Trivandrum | `/website-development-trivandrum` | `/software-development-trivandrum` | Partial: `/software-development-trivandrum` is software not websites | Create distinct website page; do not reuse software page | `QUALITATIVE` |
| website for my business Kerala / small business website Kerala / business website developer Kerala | Audience | Kerala SMB | Kerala | `/small-business-website-kerala` | `/pricing` | No | Create | `QUALITATIVE` |
| website development cost Kerala / website charges Kerala | Research / cost | Price-sensitive buyer | Kerala | `/website-development-cost-kerala` | `/blog/website-cost-kerala-2026`, `/pricing` | Blog article exists | Promote/rebuild as commercial cost guide; 301 blog later if duplicate | `VERIFIED` (blog exists) |
| website redesign Trivandrum | Problem | Existing-site owner | Trivandrum | `/website-redesign-trivandrum` | `/portfolio` | No | Create | `QUALITATIVE` |
| website maintenance Kerala | Retention / support | Existing client | Kerala | `/website-maintenance-kerala` | `/services` (mentions maintenance) | No dedicated page | Create if service is sold | `NEEDS_CONFIRMATION` |
| website EMI Kerala | Offer | Budget SMB | Kerala | `/website-emi-kerala` | `/pricing` | Yes | Keep only if offer still valid | `VERIFIED` + `NEEDS_CONFIRMATION` (dates/prices) |

---

## E-commerce

| Keyword cluster | Search intent | Customer | Location | Canonical URL | Supporting URLs | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ecommerce website developer Kerala / affordable ecommerce website Kerala | Commercial | Seller | Kerala | `/ecommerce-website-development-kerala` | `/pricing` (₹35k–70k+), `/kerala-sellers` | Yes | Optimize; do not create a second ecommerce hub | `VERIFIED` |
| online store developer Trivandrum | Local commercial | Seller | Trivandrum | `/ecommerce-website-development-kerala` (until a distinct Trivandrum page is justified) | `/software-development-trivandrum` | No dedicated Trivandrum store page | Do not clone city page | `QUALITATIVE` |
| ecommerce website cost Kerala | Cost research | Seller | Kerala | `/ecommerce-website-development-kerala#cost` or later `/ecommerce-website-cost-kerala` | `/pricing` | No standalone cost URL | Add cost section first; split only if unique | `QUALITATIVE` |
| WooCommerce developer Kerala | Platform | WP store owner | Kerala | None until confirmed | — | Not offered in repo | **Do not create** | `NEEDS_CONFIRMATION` |
| Shopify developer Kerala | Platform | Shopify merchant | Kerala | None until confirmed | — | Not mentioned in repo | **Do not create** | `NEEDS_CONFIRMATION` |

---

## Apps and software

| Keyword cluster | Search intent | Customer | Location | Canonical URL | Supporting URLs | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| app developer Trivandrum / affordable app developer Kerala / mobile app development cost Kerala | Commercial | Founder / SMB | Kerala / Trivandrum | `/app-development` | `/app-development-kerala` (merge) | Both exist | Merge Kerala duplicate into `/app-development` | `VERIFIED` |
| Flutter developer Kerala | Platform | Founder | Kerala | `/app-development` (section) | — | Claimed on homepage and app pages | Do not create `/flutter-...` until confirmed | `NEEDS_CONFIRMATION` |
| MVP developer Kerala / startup MVP | Commercial | Startup | Kerala | `/startup-mvp-development-kerala` | `/app-development`, `/software-development` | No | Create only with real MVP process | `QUALITATIVE` |
| custom software developer Trivandrum / business software developer Kerala / software development cost Kerala | Commercial | Ops / founder | Trivandrum / Kerala | `/software-development` | `/software-development-trivandrum` | Both exist | `/software-development` = Kerala service; `/software-development-trivandrum` = local entity. Differentiate or merge | `VERIFIED` |
| Odoo ERP Kerala | Product | Manufacturer / retail | Kerala | `/odoo-erp-development-kerala` | `/blog/odoo-erp-kerala-manufacturers` | Yes | Confirm capability | `NEEDS_CONFIRMATION` |
| school management software Kerala | Industry software | Schools | Kerala | `/school-education-management-software-kerala` | `/software-development` | Yes | Confirm delivery | `NEEDS_CONFIRMATION` |

---

## Automation and AI

| Keyword cluster | Search intent | Customer | Location | Canonical URL | Supporting URLs | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WhatsApp automation Kerala / automate WhatsApp orders | Commercial | Restaurant / shop / clinic | Kerala | `/whatsapp-automation-kerala` | `/business-automation`, restaurant blog | Yes | Keep as WhatsApp owner | `VERIFIED` |
| business automation Kerala / automation developer Kerala | Commercial | SMB ops | Kerala | `/business-automation` | `/ai-automation-for-businesses-kerala` | Both exist | Make `/business-automation` the owner; merge or retarget AI-automation page | `VERIFIED` |
| AI chatbot developer Kerala / AI chatbot for small business Kerala | Commercial | SMB | Kerala | `/ai-chatbot-development-kerala` | `/ai-powered-solutions`, `/ai-services` | Three overlapping pages | Owner: chatbot page. Navbar stays `/ai-powered-solutions` as AI hub. Merge `/ai-services` | `VERIFIED` |
| AI automation for small business Kerala | Commercial | SMB | Kerala | `/ai-powered-solutions` | `/ai-automation-for-businesses-kerala` | Yes | Hub vs lander must be differentiated | `VERIFIED` |
| AI agent / RAG India | Technical | Product teams | India | `/ai-agent-rag-development-india` | — | Yes | Confirm this is actually sold | `NEEDS_CONFIRMATION` |

---

## SEO and marketing

| Keyword cluster | Search intent | Customer | Location | Canonical URL | Supporting URLs | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SEO freelancer Trivandrum / affordable SEO services Kerala / SEO monthly cost Kerala | Commercial SEO | SMB | Kerala | `/seo-services` | `/seo-services-kerala` (merge), `/local-seo-kerala` | Duplicate pair | `/seo-services` owns Kerala SEO. Honest team positioning, not freelancer claim | `VERIFIED` |
| local SEO freelancer Kerala / Google Maps SEO Trivandrum | Local SEO | Local business | Kerala / Trivandrum | `/local-seo-kerala` | `/digital-marketing-trivandrum` | Yes | Keep distinct from general SEO | `VERIFIED` |
| digital marketing freelancer Trivandrum / digital marketing Trivandrum | Local marketing | SMB | Trivandrum | `/digital-marketing-trivandrum` | `/social-media-management`, `/google-ads-management-kerala` | Yes | Owner for Trivandrum marketing. Do not clone to every city | `VERIFIED` |
| Google Ads Kerala | PPC | SMB | Kerala | `/google-ads-management-kerala` | `/social-media-management` | Yes | Keep | `VERIFIED` |
| SEO doctors / clinics Kerala | Industry SEO | Clinics | Kerala | `/seo-for-doctors-clinics-kerala` | hospital website page | Yes | Keep | `VERIFIED` |

---

## Honest freelancer-alternative intent

| Keyword cluster | Search intent | Customer | Location | Canonical URL | Supporting URLs | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| freelance web developer Kerala / freelance website developer Trivandrum | Provider type | Price-sensitive buyer | Kerala / Trivandrum | `/freelance-web-developer-kerala` | `/dedicated-developer-team-kerala`, `/about` | No | Create truthful “small team / freelancer alternative” page. Do not claim DPS is a freelancer | `QUALITATIVE` |
| freelance app / software / WordPress / Flutter developer Kerala | Provider type | Founder | Kerala | Support from `/app-development` and `/software-development` unless platform is confirmed | — | No | WordPress/Flutter standalone URLs blocked until confirmed | `NEEDS_CONFIRMATION` |
| outsource web development Kerala / dedicated developer team Kerala | B2B / agency | Agency / founder | Kerala | `/dedicated-developer-team-kerala` and `/outsource-web-development-kerala` | `/about` | No | Create after team-capacity confirmation | `QUALITATIVE` |

---

## Industry cluster (existing owners)

| Keyword cluster | Canonical URL | Existing page | Action | Evidence status |
| --- | --- | --- | --- | --- |
| hospital / clinic website Kerala | `/website-development-for-hospitals-clinics-kerala` hub; dedicated `/hospital-website-development-kerala` and `/clinic-website-development-kerala` | Split **with unique copy**. Hub cross-links both. | `VERIFIED` + `INFERENCE` (split needed unique pages) |
| hotel / resort website Kerala | `/website-development-for-hotels-resorts-kerala` | **Not created** `/hotel-website-development-kerala` (would cannibalise). | `VERIFIED` |
| restaurant website / online ordering Kerala | `/restaurant-website-online-ordering-kerala` | **Not created** `/restaurant-website-development-kerala`. | `VERIFIED` |
| real estate / builder website Kerala | `/real-estate-builder-website-development-kerala` | Kept. Construction has `/construction-website-development-kerala`. | `VERIFIED` |
| school website Kerala | `/school-website-development-kerala` (marketing site) vs `/school-education-management-software-kerala` (EMS) | Both published; different intent. EMS capability still `NEEDS_CONFIRMATION`. | `QUALITATIVE` |

---

## Homepage ownership

`/` owns branded queries (`Digital Product Solutions`, `digitalproductsolutions.in`) and generic “IT company Trivandrum” hub intent. It must **not** be the canonical owner of “SEO services Kerala” or “app development Kerala”.
