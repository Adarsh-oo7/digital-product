# Current SEO Architecture Audit

**Site:** https://www.digitalproductsolutions.in  
**Repo:** https://github.com/Adarsh-oo7/digital-product  
**Audit date:** 14 September 2026  
**Stack evidence:** Next.js `^15.2.1`, App Router (`src/app`), React 19, TypeScript (`strict: true`), Tailwind 3, `output: "export"` in `next.config.ts`, GitHub Pages via `.github/workflows/nextjs.yml`, custom domain `www.digitalproductsolutions.in` (`CNAME`).

**Audit scope:** 49 `page.tsx` files plus ~25 statically generated blog slugs from `src/app/blog/page.tsx`. No production code was changed in this phase.

**Evidence status key:** `VERIFIED` = present in source; `INFERENCE` = implied by Next.js behaviour; `NEEDS_CONFIRMATION` = business fact not verified by owner.

---

## Stack facts (verified)

| Item | Evidence |
| --- | --- |
| Next.js version | `package.json` → `"next": "^15.2.1"` |
| Router | App Router only (`src/app`). No `pages/` directory. |
| TypeScript | `tsconfig.json` strict; `next.config.ts` has `typescript.ignoreBuildErrors: true` |
| Static export | `output: "export"`, `images.unoptimized: true` |
| Sitemap | `next-sitemap` postbuild + committed `public/sitemap.xml`. No `src/app/sitemap.ts`. |
| Robots | Manual `public/robots.txt`. No `src/app/robots.ts`. `generateRobotsTxt: false`. |
| Redirects / rewrites | None in `next.config.ts`. No `trailingSlash` setting. No `not-found.tsx`. |
| Env vars | `.gitignore` ignores `.env*`. No `.env` committed. No `process.env` secrets in app code except `NODE_ENV` for canonical BASE_URL. |
| Analytics | GA4 `G-W95558LF2R` in `src/app/layout.tsx`. No GTM. No conversion events. |
| Lead routing | FormSubmit → `digitalproductkerala@gmail.com`; WhatsApp `919400355185` (one broken `9400355185`); Fastbots embed; JotForm agent. |
| Deployment | Push to `master` → GitHub Actions → `out/` → GitHub Pages. Alternate `gh-pages` npm script unused in workflow. |
| Lint/type gates | `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`. |

---

## Critical metadata inheritance (`INFERENCE` + source)

Root `src/app/layout.tsx` exports:

- `title`: `Web & App Development Agency | Trivandrum, Kerala`
- `alternates.canonical`: `https://www.digitalproductsolutions.in/`

App Router merges parent metadata. Any route that does **not** export `alternates.canonical` inherits the **homepage canonical**. Client pages using `next/head` do not reliably override this in App Router.

**Affected (inherit homepage canonical unless Head works, which it typically does not):** `/`, `/about`, `/services`, `/pricing`, `/portfolio`, `/contact`, `/book`, `/ai-services`, `/kerala-sellers`, `/certificate-verified`.

---

## Route table

| Existing route | Page purpose | Primary intent | Existing title | Existing H1 | Canonical | Indexability | Internal links | Quality | Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Main sales homepage | Brand + commercial hub | Layout: `Web & App Development Agency \| Trivandrum, Kerala` (page is `'use client'`, no page metadata) | Hero: `We Build Software / Apps / AI Solutions for Kerala Businesses` | Layout self-canonical. Homepage owns it. | Indexable. Client-rendered body. | Strong: services, industries, cities, book, contact | High commercial, mixed claims | `OPTIMIZE` |
| `/about` | Team + mission | Brand / trust | Head: `About Us \| Digital Product Solutions` | `About Digital Product Solutions` (`motion.h1`) | Head `/about`; likely inherits `/` | Indexable; metadata unreliable | Weak | Medium. No H1-level NAP consistency | `OPTIMIZE` |
| `/services` | Generic service grid | Service hub | None (inherits layout title) | `Our Services` (`motion.h1`) | Inherits `/` | Indexable but wrong canonical | Weak; not aligned with navbar services | Low. Legacy taxonomy | `REBUILD` |
| `/pricing` | Website package prices | Commercial / cost | None (inherits layout title) | `Website Plans & Pricing` | Inherits `/` | Indexable; wrong title+canonical | CTAs to `/contact` | High commercial value, poor SEO wiring | `OPTIMIZE` |
| `/portfolio` | Case-study gallery | Proof | Head first-match bug: project title `Wedding Events Website` can leak; intended `Portfolio \| ... Attingal` | `Our Portfolio` | Head `/portfolio`; likely inherits `/` | Indexable. Fake `aggregateRating` 5.0 / 50 reviews | Weak | Medium. Copy-paste descriptions | `REBUILD` |
| `/contact` | Enquiry form | Conversion | Head: `Contact Digital Product Solutions \| Web Development & AI Solutions` | `Contact Digital Product Solutions` | Head `/contact`; likely inherits `/` | Indexable | Form + WhatsApp | Medium. Attingal NAP. Client-only | `OPTIMIZE` |
| `/book` | Appointment form | Conversion | Head: `Book Services \| Digital Product Solutions - Web Development in Kerala` | No H1; H2 `Schedule Your Appointment` | Head **`/booking` (wrong)** vs route `/book` | Indexable. Canonical mismatch | Form | Medium. Attingal NAP. Price list conflicts | `OPTIMIZE` |
| `/software-development` | Core software service | Commercial service | `Custom Software Development in Kerala \| Web Apps & ERP \| Starting ₹15,000` | `Custom Software Development in Kerala For Your Business` | Self | Indexable; server metadata | Contact, portfolio | High | `KEEP` then `OPTIMIZE` |
| `/software-development-trivandrum` | Trivandrum software lander | Local commercial | `Digital Product Development Company in Trivandrum \| Custom Software` | `Digital Product Development Company in Trivandrum` | Self | Indexable | WhatsApp, tel | Medium-high; overlaps `/software-development` | `OPTIMIZE` |
| `/app-development` | Core app service | Commercial service | `Mobile App Development in Kerala \| Starting ₹25,000 \| iOS & Android Apps` | `Build Powerful Mobile Apps For Android & iOS` | Self | Indexable | Contact, portfolio | High | `KEEP` then `OPTIMIZE` |
| `/app-development-kerala` | Duplicate app lander | Same as above | `Mobile App Development Company in Kerala \| Starting ₹25,000` | `Premium Mobile App Development Company in Kerala...` | Self | Indexable; cannibalises `/app-development` | WhatsApp | Duplicate-plus | `MERGE` into `/app-development` |
| `/seo-services` | Core SEO service | Commercial SEO | `SEO Services in Kerala \| Starting ₹5,000/mo \| Google Page 1 Rankings` | `Rank Higher on Google in Kerala Get More Local Customers` | Self | Indexable. “Page 1” claim unsupported | Related services | High, aggressive title | `KEEP` then `OPTIMIZE` |
| `/seo-services-kerala` | Duplicate SEO lander | Same as `/seo-services` | `SEO Services in Kerala \| Starting ₹5,000/mo \| Top SEO Company in Kerala` | `Professional SEO Services in Kerala Rank Page 1 & Double Your Leads` | Self | Indexable; near-duplicate | WhatsApp | Duplicate-plus | `MERGE` into `/seo-services` |
| `/seo-services-kannur` | City template | Local SEO Kannur | `SEO Services in Kannur \| Digital Product Solutions` | `SEO Services in Kannur Digital Growth for Kannur Businesses` | Self | Indexable. Thin doorway pattern | Template links | Thin. 151-line city clone | `REDIRECT` or unique `REBUILD` |
| `/local-seo-kerala` | Maps / near-me SEO | Local SEO | `Local SEO Services in Kerala \| Google Maps Ranking \| Digital Product Solutions` | `Local SEO Services in Kerala Rank on Google Maps & "Near Me" Searches` | Self | Indexable | Related | Medium-high | `KEEP` then `OPTIMIZE` |
| `/social-media-management` | SMM + ads | Commercial marketing | `Social Media & Performance Marketing for Kerala Businesses \| Digital Product Solutions` | `Grow Your Brand on Social Media Turn Followers Into Customers` | Self | Indexable | Related | Medium | `KEEP` then `OPTIMIZE` |
| `/business-automation` | Automation + WhatsApp | Commercial automation | `Business Automation & WhatsApp Bots for Kerala SMEs \| Digital Product Solutions` | `Automate Your Business Operations Save Time. Increase Efficiency.` | Self | Indexable; overlaps WhatsApp page | Related | Medium | `OPTIMIZE` |
| `/whatsapp-automation-kerala` | WhatsApp product | Commercial WhatsApp | `WhatsApp Automation for Kerala Businesses \| Digital Product Solutions` | `WhatsApp Automation for Kerala Businesses Reply Instantly. Sell More. Save Time.` | Self | Indexable | Contact | High | `KEEP` then `OPTIMIZE` |
| `/ai-powered-solutions` | AI service (navbar) | Commercial AI | `AI Chatbots & Automation for Kerala Businesses \| Digital Product Solutions` | `Transform Your Kerala Business with Artificial Intelligence` | Self | Indexable | Related | Medium | `KEEP` then `OPTIMIZE` |
| `/ai-services` | Legacy AI marketing | Overlap AI | Head: `AI Services \| Digital Product Solutions` | `Cutting-Edge AI Services` | Head `/ai-services`; likely inherits `/` | Indexable. Client-only. Claims ML/NLP/cybersecurity | Weak | Low. Unverified capabilities | `MERGE` into `/ai-powered-solutions` |
| `/ai-chatbot-development-kerala` | Chatbot lander | Commercial chatbot | `AI Chatbot Development in Kerala \| WhatsApp Chatbot \| Digital Product Solutions` | `AI Chatbot Development in Kerala WhatsApp, Website & Appointment Bots` | Self | Indexable; overlaps AI + WhatsApp | WhatsApp | Medium-high | `OPTIMIZE` |
| `/ai-automation-for-businesses-kerala` | AI workflow lander | Overlap automation | `AI Automation for Kerala Businesses \| Workflow Automation \| Digital Product Solutions` | `AI Automation for Kerala Businesses — Intelligent Workflow Automation` | Self | Indexable; overlaps `/business-automation` | WhatsApp | Medium | `MERGE` or differentiate |
| `/ai-agent-rag-development-india` | RAG/LLM India | India technical | `AI Agent & RAG/LLM Integration Services India \| Digital Product Solutions` | `AI Agent & RAG/LLM Integration Services` | Self | Indexable | WhatsApp | Medium. Capability `NEEDS_CONFIRMATION` | `NEEDS_CONFIRMATION` then `OPTIMIZE` or `NOINDEX` |
| `/google-ads-management-kerala` | PPC | Commercial ads | `Google Ads Management in Kerala \| PPC Agency Trivandrum \| Digital Product Solutions` | `Google Ads Management in Kerala — ROI-Tracked PPC Campaigns...` | Self | Indexable | Related | Medium | `KEEP` then `OPTIMIZE` |
| `/digital-marketing-trivandrum` | HQ city marketing | Local commercial | `Digital Marketing in Trivandrum \| ₹3,000/mo \| 20+ Clients \| Free Audit` | `Premium Digital Marketing in Trivandrum Scale Your Sales & Leads` | Self | Indexable | Unique-ish vs other city pages | Medium-high. “Premium” + competitor framing | `OPTIMIZE` |
| `/digital-marketing-kollam` | City template | Local marketing | `Digital Marketing in Kollam \| Digital Product Solutions` | `Digital Marketing in Kollam Digital Growth for Kollam Businesses` | Self | Indexable. Doorway pattern | Template | Thin. 151-line clone | `REDIRECT` or unique `REBUILD` |
| `/digital-marketing-kozhikode` | City template | Local marketing | `Digital Marketing in Kozhikode (Calicut) \| Digital Product Solutions` | `Digital Marketing in Kozhikode (Calicut) Digital Growth for...` | Self | Indexable. Doorway pattern | Template | Thin. 151-line clone | `REDIRECT` or unique `REBUILD` |
| `/web-development-kottayam` | City template | Local web | `Web Development in Kottayam \| Digital Product Solutions` | `Web Development in Kottayam Digital Growth for Kottayam Businesses` | Self | Indexable. Doorway pattern | Template | Thin. 151-line clone | `REDIRECT` or unique `REBUILD` |
| `/web-development-palakkad` | City template | Local web | `Web Development in Palakkad \| Digital Product Solutions` | `Web Development in Palakkad Digital Growth for Palakkad Businesses` | Self | Indexable. Doorway pattern | Template | Thin. 151-line clone | `REDIRECT` or unique `REBUILD` |
| `/ecommerce-website-development-kerala` | Ecommerce service | Commercial ecommerce | `E-commerce Website Development in Kerala \| Online Store \| Digital Product Solutions` | `E-commerce Website Development in Kerala — Sell Online` | Self | Indexable | WhatsApp | Medium. No Woo/Shopify proof | `KEEP` then `OPTIMIZE` |
| `/website-development-for-hospitals-clinics-kerala` | Hospital/clinic websites | Industry | `Hospital & Clinic Website Development in Kerala \| Digital Product Solutions` | `Hospital & Clinic Website Development in Kerala Online Appointments...` | Self | Indexable | Related | Medium-high | `OPTIMIZE` (split clinic vs hospital later) |
| `/website-development-for-hotels-resorts-kerala` | Hotel websites | Industry | `Website Development for Hotels & Resorts in Kerala \| Digital Product Solutions` | `Website Development for Hotels & Resorts in Kerala Direct Bookings...` | Self | Indexable | Related | Medium-high | `KEEP` then `OPTIMIZE` |
| `/restaurant-website-online-ordering-kerala` | Restaurant websites | Industry | `Restaurant Website & Online Ordering System in Kerala \| Digital Product Solutions` | `Restaurant Website & Online Ordering in Kerala` | Self | Indexable | Related | Medium-high | `KEEP` then `OPTIMIZE` |
| `/real-estate-builder-website-development-kerala` | Builder websites | Industry | `Website Development for Builders & Real Estate in Kerala \| Digital Product Solutions` | `Website Development for Builders & Real Estate in Kerala` | Self | Indexable | Related | Medium. Proof: BuilDwellz | `KEEP` then `OPTIMIZE` |
| `/school-education-management-software-kerala` | School software | Industry software | `School & Education Management Software in Kerala \| Digital Product Solutions` | `School & Education Management Software in Kerala` | Self | Indexable | Related | Medium. Delivery capability `NEEDS_CONFIRMATION` | `NEEDS_CONFIRMATION` |
| `/seo-for-doctors-clinics-kerala` | Healthcare SEO | Industry SEO | `SEO for Doctors & Clinics in Kerala \| Google Ranking for Healthcare \| Digital Product Solutions` | `SEO for Doctors & Clinics in Kerala — Rank When Patients Search...` | Self | Indexable | Related | Medium | `OPTIMIZE` |
| `/odoo-erp-development-kerala` | Odoo ERP | Commercial ERP | `Odoo ERP Development in Kerala \| ERP for Manufacturing & Retail \| Digital Product Solutions` | `Odoo ERP Development in Kerala` | Self | Indexable | Related | Medium. Capability `NEEDS_CONFIRMATION` | `NEEDS_CONFIRMATION` |
| `/website-emi-kerala` | EMI offer | Promotional commercial | `Anniversary Website EMI Offer Kerala \| Website Worth ₹16,000 at ₹7,499 \| Limited Time` | Client H1 in `EMIPageClient` (not in server page) | Self | Indexable. Offer end `25/06/2026` | WhatsApp | Medium. Double Navbar. Dated offer | `OPTIMIZE` or `NOINDEX` if offer expired |
| `/kerala-sellers` | In-house product | Product / proof | None (inherits layout title) | No H1; H2 `We Also Built Kerala Sellers` | Inherits `/` | Indexable; wrong title+canonical | External keralasellers.in | Thin | `OPTIMIZE` |
| `/certificate-verified` | Intern certificate lookup | Private utility | Head: `Certificate Verification \| Digital Product Solutions` | `Certificate Verification` | None / Head | Sitemap excluded. Still crawlable. Attingal copy | Email | Utility | `NOINDEX` |
| `/blog` | Blog index | Informational hub | `Digital Product Solutions Blog \| AI, E-commerce, Web Design & More` | No H1 in `page.tsx` (H1 may be in ClientBlog) | Self | Indexable. Generic 2025 posts. Kerala articles missing from index | Pagination/search | Low-medium authority | `REBUILD` |
| `/blog/[slug]` × 25 | Generic thought-leadership posts | Informational, weak commercial | Per-post titles from array | `{post.title}` | Self per slug | Indexable. Thin generic content. OG image `/images/blog-og-image.jpg` likely missing | Related posts only | Low. Not Kerala buying questions | `NOINDEX` or prune; keep only if rewritten |
| `/blog/website-cost-kerala-2026` | Cost article | Commercial research | `How Much Does a Website Cost in Kerala in 2026? \| Digital Product Solutions` | `How Much Does a Website Cost in Kerala in 2026?` | Self | Indexable. Not listed on blog index | WhatsApp | High intent | `KEEP` then `OPTIMIZE`; consider promoting to `/website-development-cost-kerala` |
| `/blog/whatsapp-automation-restaurants-kerala` | Industry article | Informational + commercial | `WhatsApp Automation for Restaurants in Kerala: Complete Guide 2026 \| ...` | Matching H1 | Self | Indexable. Not on blog index | WhatsApp | Medium-high | `KEEP` |
| `/blog/ai-chatbots-clinics-kerala` | Industry article | Informational | Matching title/H1 | Matching | Self | Indexable. Not on blog index | WhatsApp | Medium | `KEEP` |
| `/blog/local-seo-checklist-kerala` | Checklist | Informational | Matching | Matching | Self | Indexable. Not on blog index | WhatsApp | Medium-high | `KEEP` |
| `/blog/odoo-erp-kerala-manufacturers` | ERP article | Informational | Matching | Matching | Self | Indexable. Not on blog index | WhatsApp | Medium | `NEEDS_CONFIRMATION` with Odoo service |
| `/blog/ayurvedic-clinic-website-kerala` | Industry article | Informational | Matching | Matching | Self | Indexable. Not on blog index | WhatsApp | Medium | `KEEP` |
| `/blog/digital-marketing-hotels-kerala` | Industry article | Informational | Matching | Matching | Self | Indexable. Not on blog index | WhatsApp | Medium | `KEEP` |

### Generic blog slugs (System A) — all `NOINDEX` or rewrite, not commercial owners

`/blog/ai-powered-digital-solutions-business-growth`, `/blog/custom-ecommerce-software-sales`, `/blog/responsive-web-design-clients`, `/blog/cloud-based-digital-solutions`, `/blog/seo-critical-digital-product-success`, `/blog/secure-digital-products-cybersecurity`, `/blog/future-ux-design-digital-solutions`, `/blog/data-analytics-business-decisions`, `/blog/choose-right-digital-solution`, `/blog/apis-digital-product-development`, `/blog/ai-driven-marketing-solutions`, `/blog/microservices-ecommerce-development`, `/blog/optimize-website-voice-search`, `/blog/scalable-web-applications-nextjs`, `/blog/5g-digital-product-performance`, `/blog/ai-chatbots-ecommerce-store`, `/blog/content-marketing-digital-success`, `/blog/optimizing-web-performance`, `/blog/accessibility-digital-products`, `/blog/blockchain-security-digital-solutions`, `/blog/top-trends-digital-product-development`, `/blog/ab-testing-digital-products`, `/blog/devops-digital-development`, `/blog/future-proof-business-digital-innovation`, `/blog/low-code-platforms-rapid-development`.

---

## Missing high-intent routes (not in repo)

These are proposed in the strategy and **do not exist** today:

- `/website-development`
- `/website-maintenance` / `/website-maintenance-kerala`
- `/affordable-website-development-trivandrum`
- `/website-developer-trivandrum`
- `/website-development-trivandrum`
- `/website-development-cost-kerala` (partial overlap: blog cost article)
- `/small-business-website-kerala`
- `/website-redesign-trivandrum`
- `/affordable-ecommerce-website-kerala`
- `/woocommerce-development-kerala` — **do not create** until WooCommerce is confirmed
- `/online-store-development-trivandrum`
- `/ecommerce-website-cost-kerala`
- `/freelance-web-developer-kerala`
- `/dedicated-developer-team-kerala`
- `/outsource-web-development-kerala`
- `/website-cost-calculator`
- `/project-cost-estimator`
- `/website-package-comparison`
- `/kerala-small-business-digital-guide`
- `/startup-mvp-development-kerala`
- split clinic vs hospital website URLs
- construction-only URL (currently combined with real estate)

---

## Navigation vs routes

**Navbar (`src/components/Navbar.tsx`):** Home, About, Services dropdown (6 core services), Pricing, Blog, Contact, Book Now.

**Not in nav:** Portfolio (footer only), EMI, Kerala Sellers, city/industry landers, `/services` hub, `/ai-services`.

**Footer:** Home, About, Blog, Portfolio, Contact. No service cluster. No breadcrumbs anywhere.

---

## Action summary

| Action | Count (approx.) | Examples |
| --- | --- | --- |
| `KEEP` (then light optimize) | 12 | Core services with unique metadata |
| `OPTIMIZE` | 18 | Home, pricing, contact, book, local SEO, industries, Trivandrum DM |
| `MERGE` | 4 | `/seo-services-kerala`, `/app-development-kerala`, `/ai-services`, possibly `/ai-automation-for-businesses-kerala` |
| `REDIRECT` | 5 | Thin city clones (Kollam, Kozhikode, Kannur, Kottayam, Palakkad) unless unique content is written |
| `REBUILD` | 3 | `/services`, `/portfolio`, `/blog` |
| `NOINDEX` | 26+ | Certificate page + generic blog slugs |
| `NEEDS_CONFIRMATION` | 4 | Odoo, school EMS, RAG/India, EMI offer status |

Do not implement merges/redirects until owner confirms city-page strategy and service availability.
