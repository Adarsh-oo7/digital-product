# Technical SEO Issues

**Date:** 14 September 2026  
**Priority:** `P0` blocks crawl/index/leads; `P1` major SEO/local/conversion; `P2` meaningful; `P3` optional.

P0 items T-P0-01–04, T-P0-07 (404), and T-P0-08 (TypeScript gate) were addressed in the 14 Sep 2026 one-shot. Remaining P0: hours/email confirmation (T-P0-05 partial), homepage Review JSON-LD still reviews client brands (T-P0-06 residual).

---

## P0 — Blocks indexing quality or leads

| ID | Issue | Evidence | Impact | Intended fix (later) |
| --- | --- | --- | --- | --- |
| T-P0-01 | Root layout canonical is homepage for **all** child routes that do not override `alternates` | `src/app/layout.tsx` `canonical: "https://www.digitalproductsolutions.in/"` | `/pricing`, `/services`, `/about`, `/contact`, `/book`, `/portfolio`, `/kerala-sellers` may be canonicalised to `/` | Remove canonical from root layout. Set per-page self-canonicals. |
| T-P0-02 | Core commercial pages are `'use client'` and use `next/head` | `/`, `/about`, `/contact`, `/book`, `/portfolio`, `/pricing`, `/services`, `/ai-services` | Titles, descriptions, canonicals, and JSON-LD in Head often **do not render** in static HTML | Split server `page.tsx` + client islands. Use `metadata` / `generateMetadata`. |
| T-P0-03 | `/book` canonical points to `/booking` | `src/app/book/page.tsx` `<link rel="canonical" href={`${BASE_URL}/booking`} />` | Signals a URL that does not exist. No redirects configured. | Canonical + schema to `/book`. |
| T-P0-04 | Floating WhatsApp uses `wa.me/9400355185` (no country code) | `ChatbotAndSocialButtons.tsx` | Broken or wrong chat destination vs site-wide `919400355185` | Unify number after NAP confirmation. |
| T-P0-05 | Conflicting NAP in schema and visible copy | Layout: Trivandrum 695001, geo 8.5241,76.9366, email `adarsh@digitalproductsolutions.in`. Contact/book: Attingal 695101, email `digitalproductkerala@gmail.com`. About map embed: “Digital product sale” near Attingal (8.66, 76.84). | Local pack trust failure | Centralise NAP. **Do not guess.** See `seo-local-entity-audit.md`. |
| T-P0-06 | Fake / unsupported review schema | Homepage Review JSON-LD `itemReviewed` is client brands, not DPS. Portfolio `aggregateRating` 5.0 / `reviewCount` 50. Homepage copy “5.0★ Google Rating”. | Policy risk | Remove aggregateRating until verified GBP reviews. Fix Review `itemReviewed` to DPS only if reviews are genuine and visible. |
| T-P0-07 | No 404 page; no redirects | No `not-found.tsx`; `next.config.ts` has no `redirects` | Soft 404s on GH Pages; `/booking` 404 | Add `not-found.tsx` + `_redirects` or Pages 404 + redirect `/booking` → `/book`. Static export needs a GH Pages 404 strategy. |
| T-P0-08 | Build ignores TS and ESLint errors | `next.config.ts` `ignoreDuringBuilds` / `ignoreBuildErrors` | Broken metadata or runtime can ship | Re-enable gates after cleanup. |

---

## P1 — Major SEO / conversion

| ID | Issue | Evidence | Intended fix |
| --- | --- | --- | --- |
| T-P1-01 | Duplicate LocalBusiness + Organization JSON-LD on every page | `layout.tsx` has inline LocalBusiness + WebSite + second LocalBusiness script | One Organisation/LocalBusiness in a server component; page-level Service/FAQ/Breadcrumb only |
| T-P1-02 | Duplicate city doorway pages | Five 151-line templates | Redirect or uniquely rebuild. See cannibalization map |
| T-P1-03 | Sitemap includes thin/generic blog URLs; excludes nothing for duplicates | `public/sitemap.xml` lists System A posts; also lists both SEO URLs and both app URLs | Generate from an allowlist of canonical indexable routes |
| T-P1-04 | `certificate-verified` excluded from sitemap but still indexable | `next-sitemap.config.js` exclude; page has no `robots: noindex` | Add `robots: { index: false }` |
| T-P1-05 | Homepage, pricing, services inherit layout title | Client pages without `export const metadata` | Unique titles via server metadata |
| T-P1-06 | Double navbar on EMI page | `layout.tsx` renders `Navbar`; `EMIPageClient.tsx` also renders `Navbar` | Remove inner Navbar |
| T-P1-07 | Forms are client-only FormSubmit POSTs | `/contact`, `/book` | Keep FormSubmit. Add server-rendered copy + tracked events without PII |
| T-P1-08 | No conversion analytics events | Only `gtag('config', 'G-W95558LF2R')` | Add wa/phone/form events, no PII |
| T-P1-09 | Conflicting prices in public HTML | See content inventory | Do not “fix” prices without owner confirmation |
| T-P1-10 | Images unoptimized; mixed `./img` vs `/img`; missing OG files | `images.unoptimized: true`; blog OG `/images/blog-og-image.jpg` not in `public/` listing; EMI OG `/images/emi-offer-og.jpg` | Add real OG images; consistent absolute paths; width/height/alt |
| T-P1-11 | No breadcrumbs | No BreadcrumbList in source | Add visual + schema breadcrumbs |
| T-P1-12 | Kerala SEO articles not in blog index | Dedicated folders vs `blogPosts` array | Unify content model |
| T-P1-13 | `BASE_URL` uses localhost in non-production | about/contact/book/portfolio Head canonicals | Always use production host in metadata |

---

## P2 — Meaningful improvements

| ID | Issue | Notes |
| --- | --- | --- |
| T-P2-01 | No `sitemap.ts` / `robots.ts` | Static export can still emit both via next-sitemap or App Router if compatible with `output: "export"` (Next 13.3+ robots/sitemap work with static). Verify at implementation. |
| T-P2-02 | www vs non-www | CNAME is `www.digitalproductsolutions.in`. Apex redirect is DNS/hosting, not in repo. Confirm GH Pages + domain registrar. |
| T-P2-03 | Trailing slash | Not configured. Sitemap mixes host without trailing slash on home vs with path. |
| T-P2-04 | Custom cursor + particle canvas + Framer Motion on many pages | CWV / TBT risk |
| T-P2-05 | Fastbots + JotForm two chat widgets | UX and performance |
| T-P2-06 | Unused 3D: `LeftModelViewer`, `RightModelViewer`, `public/models/`; R3F deps | Dead weight |
| T-P2-07 | `gsap` dependency with little usage | Bundle |
| T-P2-08 | Homepage Review schema `itemReviewed` = client company names | Invalid for DPS reviews |
| T-P2-09 | Titles use “Premium”, “Top”, “Page 1”, “Double Your Leads”, “Leading” | Unsupported superlatives |
| T-P2-10 | `llms.txt` claims Trivandrum 695001 | Conflicts with Attingal pages |
| T-P2-11 | Social `sameAs` Threads URL typo `digital_prodect_sale` | `layout.tsx` |
| T-P2-12 | No `og:image` on most landing pages | |
| T-P2-13 | Icon `href="./img/logo.png"` | Relative, fragile |
| T-P2-14 | Static export cannot use Next Image optimizer or ISR | Accept; use static-friendly patterns |

---

## P3 — Optional

- Manifest `site.webmanifest`
- hreflang not needed (English-only; EMI has EN/ML UI — confirm)
- International targeting beyond Kerala not justified yet

---

## Deployment / environment (do not change yet)

| Item | Value |
| --- | --- |
| CI | `.github/workflows/nextjs.yml` on `master` |
| Node | 20 |
| Artifact | `./out` |
| Domain | `CNAME` = `www.digitalproductsolutions.in` |
| Secrets in repo | None found. GA ID and bot IDs are public client IDs, not secrets. |
| Lead email | FormSubmit public endpoint to Gmail — do not change routing |

---

## Indexability snapshot

| Class | Index? | Why |
| --- | --- | --- |
| SEO landers with `export const metadata` + self canonical | Yes | Server metadata present |
| Client pages without metadata | Yes, but with **home canonical / home title** | Harmful |
| `/certificate-verified` | Should be no | Currently crawlable |
| Generic blog System A | Yes today | Should likely noindex |
| `/admin` `/api` `/private` | Disallowed in robots | Routes do not exist |
