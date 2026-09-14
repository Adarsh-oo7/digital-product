# SEO measurement plan

**Date:** 14 September 2026  
**Analytics:** GA4 `G-W95558LF2R`  
**Leads:** FormSubmit → `digitalproductkerala@gmail.com`; primary CTA WhatsApp `wa.me/919400355185`  
**Do not send** names, emails, phones, or message text to analytics.

This plan is for **indexing, measurement and optimisation**. It does not forecast rankings or enquiry volume.

## Events implemented (no PII)

| Event | Fired from | Params allowed |
| --- | --- | --- |
| `whatsapp_click` | CtaBand, floating button, homepage | `location` only |
| `phone_click` | CtaBand, floating button, homepage, contact | `location` only |
| `form_start` | Contact form first focus | `form=contact` |
| `form_submit` | Contact FormSubmit | `form=contact` |
| `estimate_start` | Contact first focus, homepage contact CTA, CtaBand | `form` / `location` |
| `book_start` | Book form first focus | `form=book` |
| `booking_submit` | Book FormSubmit success | `form=book` |
| `calculator_start` | Website calculator, project estimator mount | `tool` |
| `calculator_complete` | Explicit complete control on those tools | `tool`, `band` or `need` (not personal data) |
| `estimate_submit` | Not a separate form; contact `form_submit` is the estimate submit | — |

`src/lib/analytics.ts` drops any param key containing `name`, `email`, `phone`, `whatsapp`, `message`, or `comment`.

## Search Console (owner)

1. Submit `https://www.digitalproductsolutions.in/sitemap.xml` after deploy.
2. Inspect new canonical URLs (affordable Trivandrum website, cost guide, freelancer-alternative, calculators).
3. Request indexing only for canonicals. Duplicates should show noindex/canonical in the URL Inspection tool.
4. Watch for EMI and certificate URLs dropping from the index over time.

## GA4 reports to build

- Event count by `whatsapp_click.location` and `phone_click.location`.
- Contact `form_submit` vs `form_start` (completion rate, no PII).
- Calculator `calculator_complete` vs `calculator_start`.
- Landing-page paths for `/affordable-website-development-trivandrum`, `/website-developer-trivandrum`, `/website-development-cost-kerala`, `/freelance-web-developer-kerala`.

UTM on GBP website button (owner): `utm_source=google&utm_medium=organic&utm_campaign=gbp` — **NEEDS_CONFIRMATION** before changing the live GBP URL.

## Editorial KPIs (qualitative)

- Each commercial URL still has one H1, unique title, and a self-canonical.
- Blog index shows Kerala + 2026 guides only.
- No new city doorway pages.
- Prices on pages match `src/lib/pricing.ts` or are labelled as estimate-only.

## What not to measure as “success”

Do not treat impressions, a single ranking, or one WhatsApp as proof the architecture “worked”. Revisit cannibalisation in Search Console 30–60 days after deploy.
