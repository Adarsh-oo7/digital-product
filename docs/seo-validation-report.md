# SEO validation report

**Date:** 14 September 2026  
**Command:** `npx tsc --noEmit` (pass) · `npm run build` (pass, static export) · `postbuild` `next-sitemap` (pass)  
**Pages generated:** 108 static routes  
**Sitemap URL count:** 74 allowlisted canonical URLs  
**404:** `out/404.html` present  

This report records checks that were run. It does **not** claim rankings, traffic, or leads.

## TypeScript and lint

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass after typing `WebsiteCalculator` min/max/label as `number`/`string` |
| `npx next lint` / build ESLint | Environment error `nextVitals is not defined`. `eslint.ignoreDuringBuilds` left `true` so CI is not blocked by that plugin bug |
| `typescript.ignoreBuildErrors` | Set to `false` |
| Production build | Compiled, generated 108 pages, exported |

## Indexation and canonicals (exported HTML)

| URL | robots | canonical | Notes |
| --- | --- | --- | --- |
| `/affordable-website-development-trivandrum` | index, follow | self | H1 present in HTML |
| `/contact` | index, follow | self | “Get a Project Estimate” in HTML |
| `/blog/freelancer-vs-development-team-kerala` | index, follow | self | Guide is indexable |
| `/seo-services-kerala` | noindex, follow | `/seo-services` | Duplicate consolidated |
| `/app-development-kerala` | noindex, follow | `/app-development` | Duplicate consolidated |
| `/ai-services` | noindex, follow | `/ai-powered-solutions` | Duplicate consolidated |
| `/ai-automation-for-businesses-kerala` | noindex, follow | `/business-automation` | Duplicate consolidated |
| `/website-emi-kerala` | noindex, follow | self | Offer ended 25/06/2026; expired banner; Product offer schema removed |
| `/certificate-verified` | noindex, follow | self | Disallowed in robots.txt |

Sitemap **does not** include EMI, certificate, duplicate SEO/app/AI URLs, or generic System A blog posts.

## Static-export constraints still true

- No Next.js `redirects()` (incompatible with `output: "export"`). Consolidation uses **noindex + canonical**.
- FormSubmit-to-Gmail preserved. No CMS/database.
- Images remain `unoptimized: true` (GitHub Pages).
- Fastbots and JotForm widgets both still load. Overlap is documented, not removed (would change lead capture without owner confirmation).

## Content honesty checks

- WooCommerce / Shopify dedicated URLs **not created** (`NEEDS_CONFIRMATION`).
- `/hotel-website-development-kerala` **not created**; owner remains `/website-development-for-hotels-resorts-kerala`.
- `/restaurant-website-development-kerala` **not created**; owner remains `/restaurant-website-online-ordering-kerala`.
- E-commerce public “starting ₹30,000” aligned to published `/pricing` range ₹35,000–₹70,000+.
- Book form no longer shows conflicting ₹6,000 e-commerce radio price.
- Mangrove Moments / Mangrove Spot portfolio copy no longer repeats Kerala Sellers text.
- No fake AggregateRating added. GBP 5.0 / 25 reviews remains the verified public figure where shown.
- No ranking, traffic, or ROI guarantees in new landing/guide copy.

## Remaining failed or incomplete checks

| Item | Status |
| --- | --- |
| Live crawl of digitalproductsolutions.in | Not run in this execution |
| JSON-LD rich-result test in Google | Not run; schema is present in HTML for landings (WebPage/Service/FAQ) and root LocalBusiness |
| Broken-link spider of all `<a href>` | Not run; internal links on new landings are relative App Router paths |
| Core Web Vitals field data | Not measured |
| Thin city pages uniquely rebuilt | **Not done** — kept, not cloned further |
| Double navbar on EMI page | Still present (layout + EMI client) |
| Duplicate LocalBusiness JSON-LD in root layout | Still present (two scripts) |
| Hours GBP 24h vs site Mo–Sa | `NEEDS_CONFIRMATION` |
| Schema email vs FormSubmit Gmail | `NEEDS_CONFIRMATION` |
| Generic blog posts 1–25 | Still generated as noindex URLs; removed from `/blog` listing and sitemap |
