# Local Entity / NAP Audit

**Date:** 14 September 2026 (updated after owner GBP confirmation)

---

## Confirmed (owner + Google Business Profile, 14 Sep 2026)

| Field | Value | Status |
| --- | --- | --- |
| Public name | Digital Product Solutions | `VERIFIED` |
| Phone / WhatsApp | +91 94003 55185 (`919400355185`) | `VERIFIED` |
| GBP category | Internet marketing service | `VERIFIED` (see recommendation below) |
| GBP locality | Korani, Kerala | `VERIFIED` |
| **Office address** | Mangalapuram Panchayat, Korani, Chempakamangalam, Kerala **695104** | **`VERIFIED` — use this PIN, not 695001 or 695101** |
| GBP rating | 5.0 from **25** Google reviews | `VERIFIED` (not 50 reviews) |
| Service area language | Thiruvananthapuram district / Kerala | Honest; this is not a city-centre 695001 office |

**Do not use:** Trivandrum 695001, Attingal 695101, geo 8.5241/76.9366 (TVM centre), `wa.me/9400355185`.

Attingal may still appear as a **client or nearby-market** mention (e.g. BuilDwellz). That is not the office NAP.

---

## Still `NEEDS_CONFIRMATION`

| Field | Why |
| --- | --- |
| Hours | Site: Mon–Sat 09:00–19:00. GBP observed: **Open 24 hours**. Address was confirmed; hours were not. Left site hours unchanged. |
| Public email | Schema still has `adarsh@digitalproductsolutions.in`; forms use `digitalproductkerala@gmail.com`. |
| GBP primary category | “Internet marketing service” is weak for “website developer Trivandrum”. Recommend **Website Designer** or **Software Company** as primary, marketing as secondary — change in GBP, not by faking schema. |
| Exact Maps place ID | About page now uses an address query embed, not the old “Digital product sale” pin. Confirm the pin matches the GBP listing. |

---

## Branded Google SERP (owner paste, 14 Sep 2026)

Query: `digital product solutions`

**Observed:** official site ranks; snippet says Trivandrum MSME / software / apps. Sitelinks include Portfolio. GBP pack shows Korani, 5.0, 25 reviews, phone.

**Problem:** People Also Ask and related searches are about **selling digital products** (ebooks, courses), not this agency. Brand name collides with a generic ecommerce phrase. That is a long-term brand-SERP issue. Near-term: keep “Digital Product Solutions” + “Trivandrum / Kerala / websites / software” in titles so Google can disambiguate. Do not rename the legal brand in this batch.

---

## Central config

`src/lib/business.ts` is the single NAP source. Layout, footer, contact, book, about map, portfolio schema, `llms.txt`, and the WhatsApp button now follow **695104 / Korani / 919400355185**.

```ts
streetAddress: "Mangalapuram Panchayat, Korani, Chempakamangalam"
addressLocality: "Korani"
postalCode: "695104"
telephone: "+919400355185"
whatsapp: "919400355185"
googleReviewCount: 25
```
