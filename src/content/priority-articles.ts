export type ListedPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  keywords: string[];
  relatedPosts: number[];
};

const img = "/img/logo.png";

/** Listing-only rows for dedicated /blog/* folders. */
export const keralaDedicatedListings: ListedPost[] = [
  {
    id: 26,
    title: "How Much Does a Website Cost in Kerala in 2026?",
    excerpt:
      "Published website package ranges for Kerala businesses, plus one-time, recurring and optional costs — without fake quotes.",
    content: "",
    category: "Website Cost",
    date: "2026-06-12",
    image: img,
    slug: "website-cost-kerala-2026",
    keywords: ["website cost Kerala", "website development charges Kerala"],
    relatedPosts: [33, 34],
  },
  {
    id: 27,
    title: "WhatsApp Automation for Restaurants in Kerala",
    excerpt: "How restaurants in Kerala use WhatsApp for menus, orders and bookings without answering every chat by hand.",
    content: "",
    category: "WhatsApp",
    date: "2026-07-01",
    image: img,
    slug: "whatsapp-automation-restaurants-kerala",
    keywords: ["WhatsApp restaurant Kerala"],
    relatedPosts: [30],
  },
  {
    id: 28,
    title: "AI Chatbots for Clinics in Kerala",
    excerpt: "Where a clinic chatbot helps, and where a human receptionist still matters.",
    content: "",
    category: "Healthcare",
    date: "2026-07-01",
    image: img,
    slug: "ai-chatbots-clinics-kerala",
    keywords: ["clinic chatbot Kerala"],
    relatedPosts: [26],
  },
  {
    id: 29,
    title: "Local SEO Checklist for Kerala Businesses",
    excerpt: "Google Business Profile, NAP consistency, service pages and reviews — a practical checklist.",
    content: "",
    category: "SEO",
    date: "2026-07-01",
    image: img,
    slug: "local-seo-checklist-kerala",
    keywords: ["local SEO Kerala"],
    relatedPosts: [35],
  },
  {
    id: 30,
    title: "Odoo ERP for Kerala Manufacturers",
    excerpt: "When a manufacturer in Kerala actually needs ERP, and when a simpler operations tool is enough.",
    content: "",
    category: "Software",
    date: "2026-07-01",
    image: img,
    slug: "odoo-erp-kerala-manufacturers",
    keywords: ["Odoo Kerala"],
    relatedPosts: [34],
  },
  {
    id: 31,
    title: "Ayurvedic Clinic Website in Kerala",
    excerpt: "What an Ayurvedic clinic website should include for treatments, doctors and appointments.",
    content: "",
    category: "Healthcare",
    date: "2026-07-01",
    image: img,
    slug: "ayurvedic-clinic-website-kerala",
    keywords: ["Ayurvedic clinic website Kerala"],
    relatedPosts: [28],
  },
  {
    id: 32,
    title: "Digital Marketing for Hotels in Kerala",
    excerpt: "Website, Google Business Profile and paid ads for Kerala hotels — without promising occupancy.",
    content: "",
    category: "Hospitality",
    date: "2026-07-01",
    image: img,
    slug: "digital-marketing-hotels-kerala",
    keywords: ["hotel digital marketing Kerala"],
    relatedPosts: [29],
  },
];

export const priorityGuides: ListedPost[] = [
  {
    id: 33,
    title: "Freelance Web Developer vs a Kerala Development Team",
    excerpt:
      "If you are searching for a freelancer, here is an honest comparison with a small development team — continuity, support and when each option fits.",
    content: `Many Kerala business owners type “freelance web developer” because they want a real person, a clear price and no agency theatre. That instinct is reasonable. A single freelancer can be a good fit for a small brochure site when the person is available, writes cleanly and will still answer the phone in six months.

The risk is not “freelancer versus company” as a slogan. The risk is single-person dependency. If that person is ill, overloaded, or moves on, the website, hosting access and WhatsApp number sit with one inbox. Revisions stall. A second developer inheriting undocumented work often charges to re-learn it.

Digital Product Solutions is not a solo freelancer. It is a small Kerala team: more than one developer, plus UI/UX, QA, SEO and support around the same project. You still get direct developer communication. You do not get a fake “one-person shop” story.

Choose a freelancer when the scope is tiny, you already trust the person, and you accept that support is personal. Choose a team when you need a store, booking, admin panel, handover documents, or someone to maintain the site after launch.

Related reading: dedicated developer team page, website cost guide, and the contact form for a scoped estimate. We do not guarantee rankings or lead volume.`,
    category: "How to choose",
    date: "2026-09-14",
    image: img,
    slug: "freelancer-vs-development-team-kerala",
    keywords: ["freelance web developer Kerala", "development team vs freelancer"],
    relatedPosts: [36, 26],
  },
  {
    id: 34,
    title: "WordPress vs a Custom Website in Kerala",
    excerpt:
      "WordPress is common. Custom sites (including Next.js, which we use) are a different ownership and maintenance model. Here is how to choose without platform hype.",
    content: `WordPress remains a practical choice when a business needs a familiar CMS, many plugins, and staff who already know how to publish posts. Hosting, updates, plugin conflicts and security patches are then part of the running cost. Cheap WordPress quotes often skip those updates.

A custom website — for Digital Product Solutions this is typically a modern JavaScript stack such as Next.js — is useful when you want a designed marketing site, a specific workflow, or a static export that deploys simply. Staff edit content through whatever admin we actually build, not through a generic theme shop. You own the code and the domain.

We do not currently publish a dedicated “WordPress package” or “WooCommerce package” on this site. If a project truly needs WordPress, that has to be scoped as custom work, not assumed from a productised list.

Cost context on this website: Basic sites are listed at ₹5,000–₹8,000, Standard ₹10,000–₹18,000, Premium ₹25,000–₹45,000. Those ranges are published packages, not a CMS-specific quote.

If you only need a few pages and WhatsApp, either model can work. If you need unusual booking logic, a catalogue with Kerala-specific filters, or a site that must stay fast on cheap hosting, ask for a custom estimate rather than forcing a plugin stack.`,
    category: "Website Cost",
    date: "2026-09-14",
    image: img,
    slug: "wordpress-vs-custom-website-kerala",
    keywords: ["WordPress vs custom website Kerala"],
    relatedPosts: [26, 37],
  },
  {
    id: 35,
    title: "Website vs Landing Page for a Kerala Small Business",
    excerpt:
      "A landing page sells one offer. A website holds the business. Mixing them up is how cheap builds disappoint.",
    content: `A landing page is one focused page: an offer, proof, and a form or WhatsApp button. It is the right tool for a campaign, a festival offer, or a single service you are testing.

A business website is the public office: Home, About, Services, Work, Contact, and usually a Google Business Profile that matches the same name, phone and address. It is where someone checks whether you are real before they message you.

Kerala buyers often ask for “a website” when they mean a landing page, or they ask for a ₹5,000 site that behaves like a 12-page brochure with a blog. Those are different jobs. Our published Basic range (₹5,000–₹8,000) is for a small site, not an unbounded marketing system.

Build a landing page when the traffic source is already paid or WhatsApp and you need one conversion path. Build a website when customers will search your name, compare you with neighbours, or return for services later.

You can start with a small site and add pages. What you should not do is hide the address, skip WhatsApp, or ship a page that cannot be maintained. See the small-business website page and the cost calculator for published ranges.`,
    category: "How to choose",
    date: "2026-09-14",
    image: img,
    slug: "website-vs-landing-page-kerala",
    keywords: ["website vs landing page Kerala"],
    relatedPosts: [26, 38],
  },
  {
    id: 36,
    title: "SEO vs Google Ads for Kerala Businesses",
    excerpt:
      "SEO and Google Ads solve different jobs. Neither is guaranteed traffic. Here is how we explain the trade-off using the prices already on this website.",
    content: `SEO is the slow, compounding work of making your pages understandable to Google and useful to a human in Thiruvananthapuram or elsewhere in Kerala. It needs accurate pages, Google Business Profile hygiene, and time. This website lists SEO from ₹5,000 per month. That is a starting retainer on the public price list, not a ranking contract.

Google Ads is paid placement. You can appear quickly for “website developer Trivandrum” or a service query if the account is set up correctly and the landing page matches the ad. Spend stops when the budget stops. We have a Google Ads page for Kerala; treat any spend as a media cost on top of management.

Use Ads when you have a clear offer, a working phone/WhatsApp path, and a budget you can lose while you learn. Use SEO when you can publish honest service pages and wait. Many businesses do a bit of both. Nobody should promise “page 1” from either.

If your Google Business Profile category, hours or address disagree with the website, fix that first. Paid clicks onto a confusing NAP waste money.

Related: local SEO Kerala, SEO services, Google Ads management, and the contact form for a scoped plan — still without traffic guarantees.`,
    category: "SEO",
    date: "2026-09-14",
    image: img,
    slug: "seo-vs-google-ads-kerala",
    keywords: ["SEO vs Google Ads Kerala"],
    relatedPosts: [29, 35],
  },
  {
    id: 37,
    title: "WhatsApp Automation vs Manual Chat for Kerala Shops",
    excerpt:
      "Manual WhatsApp is fine until the same questions repeat after 9 pm. Automation is a workflow, not a magic salesperson.",
    content: `Most Kerala shops already live on WhatsApp. Manual chat is personal and flexible. It also fails when the owner is driving, the staff share one phone, or the same “are you open?” message arrives fifty times.

Automation can send a menu, price list, location pin, or booking link, then hand the chat to a person. Published starting price on this site is ₹10,000 for business automation (WhatsApp is part of that family of work). Complex multi-flow or official API setups are scoped separately.

Automation is a poor idea when you have no written answers yet, or when every order is a negotiation. It is a good idea when FAQs are stable: hours, rates, service areas, “do you deliver to Attingal?”, deposit rules.

You still need a human path. Customers in Kerala will call if the bot loops. We do not claim a percentage lift in sales from automation; we claim fewer missed repeats of the same answer.

See the WhatsApp automation service page, the restaurant website page, and send a WhatsApp message to the team if you want the flow sketched before you pay.`,
    category: "WhatsApp",
    date: "2026-09-14",
    image: img,
    slug: "whatsapp-automation-vs-manual-kerala",
    keywords: ["WhatsApp automation vs manual Kerala"],
    relatedPosts: [27, 38],
  },
  {
    id: 38,
    title: "How to Create a Website for a Small Business in Kerala",
    excerpt:
      "A practical sequence: offer, pages, domain, WhatsApp, Google Business Profile, then development — using published package ranges.",
    content: `Write the offer first. “We install modular kitchens in Trivandrum” is a website. “We are a leading innovative solutions provider” is not.

Then list pages: Home, Services, a real About, Work or photos, Contact with the same phone and address as Google. Add WhatsApp. Add a form only if someone will actually read it.

Buy a domain in the business’s name. Decide hosting. Cheap hosting that sleeps on idle is a false saving if the site is slow on mobile. Our packages list domain/hosting as items to confirm in the estimate — they are often yearly costs on top of the build.

Published website ranges: Basic ₹5,000–₹8,000, Standard ₹10,000–₹18,000, Premium ₹25,000–₹45,000. E-commerce is listed separately at ₹35,000–₹70,000+. Use the website cost calculator for a non-binding band, then ask for an exact estimate.

After launch, connect Google Business Profile, request genuine reviews, and keep hours and photos updated. A pretty site with the wrong PIN or an old number will lose local trust.

We are a small team in Korani, Thiruvananthapuram district. If you want us to build it, use Get a Project Estimate or WhatsApp a developer.`,
    category: "How to choose",
    date: "2026-09-14",
    image: img,
    slug: "how-to-create-website-small-business-kerala",
    keywords: ["how to create a website for small business Kerala"],
    relatedPosts: [26, 35],
  },
  {
    id: 39,
    title: "How to Sell Online in Kerala",
    excerpt:
      "Catalogue, payments, delivery reality, WhatsApp and a storefront — what Kerala sellers actually need before an app.",
    content: `Selling online in Kerala is rarely “launch an app”. It is a catalogue people trust, a payment path, and a delivery promise you can keep to Palakkad or only within Trivandrum.

Start with products that have photos, prices and stock. Decide cash-on-delivery versus prepaid. Confirm who packs orders. A website cannot fix a messy warehouse.

Storefront options: a WhatsApp catalogue (fast, limited), a marketplace, or your own e-commerce site. Own-site work on this website is listed from ₹35,000–₹70,000+. Kerala Sellers is a marketplace we built for local businesses — useful proof, not a claim that every seller must join it.

Payment gateways, shipping APIs and GST invoices are optional cost layers. Cheap “shop in 2 days” quotes often omit them.

You do not need WooCommerce or Shopify specifically unless you already run those platforms. We have not published dedicated WooCommerce or Shopify packages. Custom / Next.js stores are what the current service pages describe.

Read the e-commerce cost page, the affordable ecommerce page, and request an estimate with your product count and delivery area.`,
    category: "E-commerce",
    date: "2026-09-14",
    image: img,
    slug: "how-to-sell-online-kerala",
    keywords: ["how to sell online Kerala", "ecommerce Kerala"],
    relatedPosts: [26, 34],
  },
  {
    id: 40,
    title: "How to Choose a Website Developer in Kerala",
    excerpt:
      "Questions that separate a scoped team from a cheap quote that quietly excludes hosting, content and support.",
    content: `Ask who will still pick up the phone after launch. Ask who owns the domain and the GitHub (or hosting) account. Ask what happens if the original developer is unavailable.

Ask for a written scope: pages, forms, WhatsApp, languages, revisions, timeline. Ask what is excluded: stock photos, copywriting, payment gateway fees, SSL, email, Google Business Profile setup.

Compare quotes against published ranges, not against a number on a flyer. On this site, a simple site is listed around ₹5,000–₹8,000 and a standard business site ₹10,000–₹18,000. A quote far below that usually moves cost into “you buy hosting”, “you send all text”, or “mobile is extra”.

Look at real work. Our portfolio includes Kerala Sellers and hospitality sites such as Mangrove Moments and Mangrove Spot. Do not treat every screenshot as a metric. We do not invent conversion percentages.

If you searched for a freelancer, you can still hire a small team and keep direct developer chat. That is our positioning. If you need a one-person hobbyist, say so — we will not pretend to be that.

Next: freelance-alternative page, dedicated team page, pricing, or WhatsApp.`,
    category: "How to choose",
    date: "2026-09-14",
    image: img,
    slug: "how-to-choose-a-website-developer-kerala",
    keywords: ["how to choose website developer Kerala"],
    relatedPosts: [33, 26],
  },
  {
    id: 41,
    title: "App Development Cost in Kerala",
    excerpt:
      "Android/iOS work is listed from ₹25,000 on this website. What that starting figure can include — and what always changes the quote.",
    content: `This website publishes app development from ₹25,000. That is a starting figure for a defined, relatively small application, not an unlimited consumer product with two stores, chat, payments and admin.

Costs rise with logins, payments, maps, notifications, bilingual UI, Play Store and App Store accounts, and a backend. A “wrapper” around a website is a different job from a native workflow for field staff.

Ask whether you need an app at all. Many Kerala businesses only need a fast mobile website and WhatsApp. An app is justified when there is a repeated task (bookings, catalogues for staff, attendance) that a browser handles poorly.

Ongoing costs: store fees, server, push-notification vendors, and maintenance when OS versions change. Those are not inside a one-time starting price unless the proposal says so.

Related: app development service page, project cost estimator, and a scoped conversation. We do not publish fake download or revenue results.`,
    category: "Apps",
    date: "2026-09-14",
    image: img,
    slug: "app-development-cost-kerala",
    keywords: ["app development cost Kerala"],
    relatedPosts: [42, 26],
  },
  {
    id: 42,
    title: "Software Development Cost in Kerala",
    excerpt:
      "Custom software is listed from ₹15,000. Use that as a floor for a small tool, not as the price of an ERP.",
    content: `Custom software on this website starts from ₹15,000. That floor is for a small, well-bounded tool — for example a simple internal workflow — not a full manufacturing ERP.

Odoo and school/education management appear on dedicated pages because those are specific products some clients ask for. They are scoped as projects. Do not read the ₹15,000 figure as “ERP for fifteen thousand”.

What changes the quote: number of user roles, data migration, reports, bilingual screens, integrations (WhatsApp, payment, accounting), and who hosts the database.

Ownership should be explicit: source access, credentials, and what support hours are included. Recurring hosting and maintenance are separate unless stated.

If you are comparing a freelancer’s weekend script with a team-built system, compare handover and testing, not just the first invoice.

See software development, software in Trivandrum, the estimator, and request an estimate with the workflow you want to replace.`,
    category: "Software",
    date: "2026-09-14",
    image: img,
    slug: "software-development-cost-kerala",
    keywords: ["software development cost Kerala"],
    relatedPosts: [41, 30],
  },
  {
    id: 43,
    title: "SEO Cost in Kerala",
    excerpt:
      "SEO is listed from ₹5,000 per month. That buys ongoing work, not a guaranteed Google rank.",
    content: `SEO from ₹5,000 per month is the starting retainer published on this website. It is a monthly service, not a one-time “submit to Google” fee.

At that level of spend, expect focused work: technical fixes on a small site, Google Business Profile support, a handful of service pages, and reporting you can actually read. It will not replace a national content machine.

What you should not buy: guaranteed #1, “10,000 backlinks”, or fake review schema. We do not add AggregateRating unless it matches a real, current Google rating display policy you have approved.

Local SEO for a Trivandrum-area business is mostly consistency: name, address, phone, hours, categories, photos, and pages that match how people search (“clinic website”, “modular kitchen Kazhakootam”, and so on).

Related: SEO services, local SEO Kerala, SEO versus Google Ads, and a conversation about your current profile — still without ranking promises.`,
    category: "SEO",
    date: "2026-09-14",
    image: img,
    slug: "seo-cost-kerala",
    keywords: ["SEO cost Kerala", "SEO charges Kerala"],
    relatedPosts: [36, 29],
  },
];
