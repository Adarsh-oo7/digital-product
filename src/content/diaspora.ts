import type { DiasporaContent } from "@/components/seo/DiasporaPage";

const priceNote =
  "INR is the price on the estimate. A foreign-currency figure on this page is only a rough reference so you can plan. It is not a locked exchange rate.";

const remote =
  "The team works from Korani, Thiruvananthapuram, Kerala 695104, Monday to Saturday, 09:00–19:00 India time (IST, UTC+5:30). There is no DPS office in your country. Reviews happen on a call or WhatsApp. A reply is usually within 24–48 hours on those working days.";

const proof =
  "Published project stories are on the work page. They are Kerala businesses we shipped, including Mangrove Moments, Mangrove Spot, BuilDwellz, Crystal Knot Films, Squeeze Berriez and Kerala Sellers. We do not invent overseas results. An international project uses the same written estimate and your own content.";

const hub = "/malayali-business-solutions-worldwide";

export const diasporaPages: DiasporaContent[] = [
  {
    path: hub,
    metaTitle: "Websites, Software & SEO for Malayali Businesses Worldwide | DPS",
    metaDescription:
      "DPS builds affordable websites, software, CRM, SEO and automation for Malayali entrepreneurs and Kerala-connected businesses worldwide.",
    absoluteTitle: true,
    h1: "Build and Grow Your Business Anywhere in the World",
    lede: "Kerala-based websites, software, AI and digital support for Malayali entrepreneurs and Kerala-connected businesses worldwide. International-quality work, transparent INR pricing, and direct contact with the Kerala team.",
    image: "/img/blog/blog-team-desk.jpg",
    imageAlt: "Digital Product Solutions team desk in Kerala",
    event: "view_service_page",
    serviceName: "Malayali business websites and software worldwide",
    whatsappText: "Hi, I run a Malayali business outside India and want an estimate",
    showPackages: true,
    sections: [
      {
        h2: "Who this is for",
        paragraphs: [
          "Malayali business owners living outside India, people planning a business abroad, and Kerala companies that sell to NRIs or to customers in other countries.",
          "The company is Digital Product Solutions, a Kerala team in Korani, Thiruvananthapuram. You deal with that team directly. We do not open a local office in your city.",
        ],
      },
      {
        h2: "What we build",
        paragraphs: ["Pick the product that matches the job. A page is not a ranking promise and not a lead guarantee."],
        bullets: [
          "Business website, e-commerce, booking or online ordering",
          "CRM and lead follow-up",
          "Custom software and mobile apps",
          "WhatsApp automation and other business automation",
          "AI tools and WhatsApp automation when the estimate includes them",
          "SEO and a Google Business Profile checklist where the listing is yours",
          "Website or software maintenance after launch",
        ],
      },
      {
        h2: "How a remote project runs",
        paragraphs: [remote, "You own the domain. Hosting, payment-gateway and ad fees are separate unless the estimate includes them. Scope and exclusions are written before work starts."],
      },
      { h2: "Proof we can show", paragraphs: [proof] },
    ],
    faqs: [
      { q: "Do you have an office in the UK, UAE or Australia?", a: "No. Work is delivered from Korani, Thiruvananthapuram. Calls follow India business hours." },
      { q: "Will this put me first on Google?", a: "No. SEO is technical and content work. Position is not promised." },
      { q: "Which currency is on the invoice?", a: "INR. A GBP, AUD or AED number on a country page is approximate only." },
    ],
    related: [
      { href: "/start-business-website-software", label: "Starting a business abroad" },
      { href: "/international-business-digital-solutions", label: "International technology services" },
      { href: "/kerala-affordable-software-web-ai-agency", label: "Affordable software, web and AI" },
      { href: "/kerala-digital-lead-generation-agency", label: "Lead-generation systems" },
      { href: "/international-business-pricing", label: "Starting prices" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy policy" },
    ],
  },
  {
    path: "/start-business-website-software",
    metaTitle: "Start a Business Website and Software Abroad",
    metaDescription:
      "Domain, website, WhatsApp, booking, CRM and analytics for a new Malayali business abroad. Built from Kerala. INR starting prices.",
    h1: "Starting a Business Abroad? Build Your Digital Foundation With DPS",
    lede: "A new shop, clinic, consultancy or restaurant abroad needs a site people can trust, a way to enquire, and a place to see what happens next. This page is that foundation, not a company-registration service.",
    image: "/img/pages/office-website.jpg",
    imageAlt: "Office desk with a services website on a laptop",
    event: "view_service_page",
    serviceName: "Digital foundation for a new business abroad",
    whatsappText: "Hi, I am starting a business abroad and need a website",
    showPackages: true,
    sections: [
      {
        h2: "What the first build includes",
        paragraphs: ["We set up the pieces you choose. We do not register your company, open a bank account, or give tax advice."],
        bullets: [
          "Domain in your name and a website that states what you sell",
          "Service pages, lead form and WhatsApp",
          "Booking or order flow only if the estimate includes it",
          "A simple CRM if enquiries need a status",
          "Analytics so you can see visits and form sends",
          "A basic SEO setup: titles, indexable pages, and a sitemap entry",
        ],
      },
      {
        h2: "Launch checklist",
        paragraphs: ["Before the site goes live you check the pages, the form, the phone number and the country you actually serve. Hosting and any payment gateway stay in the estimate."],
      },
      { h2: "Time and price", paragraphs: ["A small site is often planned in days once your text and photos are ready. A lead system or software takes longer. The prices are the same published INR ranges as the homepage. Ask for an exact estimate. " + remote] },
      { h2: "Proof", paragraphs: [proof] },
    ],
    faqs: [
      { q: "Can you register my company abroad?", a: "No. We build the website and software. Registration and tax stay with your local adviser." },
      { q: "What do you need from me?", a: "Business name, services, city, photos you have rights to, and the WhatsApp number that should receive enquiries." },
    ],
    related: [
      { href: hub, label: "Malayali business solutions" },
      { href: "/international-business-pricing", label: "Starting prices" },
      { href: "/website-development", label: "Website development" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    path: "/international-business-digital-solutions",
    metaTitle: "Digital Solutions for International Malayali Businesses",
    metaDescription:
      "Websites, software, CRM, apps, automation, analytics and SEO for Malayali businesses, delivered from Kerala.",
    h1: "Technology for a Malayali business that sells beyond one city",
    lede: "Use this page when the business already exists and the gap is the website, the follow-up, the software, or the report you read each month.",
    image: "/img/pages/booking-website.jpg",
    imageAlt: "Phone showing an appointment booking calendar",
    event: "view_service_page",
    serviceName: "International business digital solutions",
    whatsappText: "Hi, I need software or a website for a business outside India",
    showPackages: true,
    sections: [
      {
        h2: "Services",
        paragraphs: ["Each line is a real service already offered from Kerala. Advertising is support around those builds, not a promise of sales."],
        bullets: [
          "Website development and e-commerce",
          "Custom software, CRM and mobile apps",
          "Booking and online ordering when scoped",
          "WhatsApp automation and business automation",
          "SEO and a Google Business Profile checklist for a listing you control",
          "A reporting view of enquiries, not a guaranteed dashboard of profit",
          "Monthly maintenance when a support plan is written down",
        ],
      },
      { h2: "How support works across time zones", paragraphs: [remote, "If you message during your evening in the UK or UAE, the reply is on the next India working morning unless a call was already booked."] },
      { h2: "Proof", paragraphs: [proof] },
    ],
    faqs: [
      { q: "Do you run Google Ads or Meta Ads?", a: "There is a Google Ads page for Kerala campaigns. An international ad account is only taken if the estimate says who owns the account and what is excluded. Spend is yours." },
      { q: "Where is customer data stored?", a: "Say in the form which customer details the project must store. Read the privacy policy. We do not ask for passports or bank passwords." },
    ],
    related: [
      { href: hub, label: "Malayali business solutions" },
      { href: "/software-development", label: "Software development" },
      { href: "/crm-software-kerala", label: "CRM software" },
      { href: "/whatsapp-automation-kerala", label: "WhatsApp automation" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    path: "/international-business-pricing",
    metaTitle: "International Website and Software Prices in INR",
    metaDescription:
      "Starting INR prices for diaspora websites, lead systems and software. Smaller Kerala packages stay on the main pricing page.",
    h1: "Starting prices for an international project",
    lede: "INR is the currency. These ranges are starting points for a diaspora or international scope. The exact figure is in the written estimate.",
    image: "/img/blog/blog-choose-path.jpg",
    imageAlt: "Two paths representing a choice of project scope",
    event: "view_service_page",
    serviceName: "International project pricing",
    whatsappText: "Hi, I want an exact estimate for an international project",
    showPackages: true,
    sections: [
      {
        h2: "What changes the price",
        paragraphs: [
          "Pages, languages, booking or payment, number of staff logins, and whether you need a CRM. Hosting, domain, GST and payment-gateway fees are confirmed in the estimate.",
          "The main pricing page still lists the smaller Kerala website ranges. This page does not replace those.",
        ],
      },
      { h2: "How to ask for the exact number", paragraphs: ["Use the form on this page. Include country, business type and a budget range. We reply with scope, exclusions and a starting figure, not a ranking promise."] },
    ],
    faqs: [
      { q: "Is an overseas enquiry more expensive?", a: "No. The same published ranges apply: a basic website from ₹5,000, a standard site ₹10,000–₹18,000, and software from ₹15,000. The estimate depends on scope, not on the country name." },
      { q: "Are the foreign currency amounts official?", a: "No. Only the INR line is the price. GBP, AUD and AED notes elsewhere are approximate." },
    ],
    related: [
      { href: "/pricing", label: "Main Kerala pricing page" },
      { href: hub, label: "Malayali business solutions" },
      { href: "/website-development-cost-kerala", label: "Website cost in Kerala" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function country(input: {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  country: string;
  examples: string;
  clock: string;
  money: string;
  privacy: string;
  image: string;
  imageAlt: string;
}): DiasporaContent {
  return {
    path: input.path,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    h1: input.h1,
    lede: `Websites, software and follow-up systems for Malayali businesses in ${input.country}, built by a Kerala team. DPS has no office in ${input.country}.`,
    image: input.image,
    imageAlt: input.imageAlt,
    event: "view_country_page",
    serviceName: `Websites for Malayali businesses in ${input.country}`,
    whatsappText: `Hi, I need a website for a Malayali business in ${input.country}`,
    showPackages: true,
    sections: [
      { h2: `Who in ${input.country} this is for`, paragraphs: [input.examples, "Kerala businesses that sell into this market can use the same page. The work is still done from Thiruvananthapuram."] },
      { h2: "Time zone and process", paragraphs: [input.clock, remote, "Typical path: scope on WhatsApp, a written estimate in INR, build, your review, then launch on a domain you own."] },
      { h2: "Payment and currency", paragraphs: [input.money, priceNote] },
      { h2: "Privacy", paragraphs: [input.privacy, "Customer lists, enquiry forms and any CRM fields are described in the estimate. The privacy policy explains how DPS handles an enquiry sent from this site."] },
      { h2: "Proof", paragraphs: [proof] },
    ],
    faqs: [
      { q: `Do you visit ${input.country}?`, a: "Not as a local office. Delivery is remote from Kerala unless a visit is separately agreed." },
      { q: "Can the site be in English and Malayalam?", a: "English is published now. A Malayalam page is added only after a person reviews the wording. We do not publish an unchecked translation." },
    ],
    related: [
      { href: hub, label: "Malayali business solutions" },
      { href: "/international-business-pricing", label: "Starting prices" },
      { href: "/start-business-website-software", label: "Start a business site" },
      { href: "/contact", label: "Contact" },
    ],
  };
}

diasporaPages.push(
  country({
    path: "/uk-malayali-business-website-development",
    metaTitle: "Malayali Business Websites for the UK",
    metaDescription: "Websites and software for Malayali businesses in the UK, delivered from Kerala. INR pricing. No UK office.",
    h1: "Websites for Malayali businesses in the UK",
    country: "the UK",
    examples: "Restaurants, grocery and catering, recruitment, accountants, property agents and clinics run by Malayali owners in Britain.",
    clock: "The UK is on GMT or BST, about 4.5 or 5.5 hours behind India. A message sent after your workday is read on the next India morning.",
    money: "Plan in INR. A basic site starts from ₹5,000 and a standard site is ₹10,000–₹18,000. In rough pounds that is tens of pounds, not a quote. Check a live rate before you budget.",
    privacy: "If the site stores UK customer enquiries, say so in the form. DPS does not claim a UK legal registration.",
    image: "/img/blog/blog-team-desk.jpg",
    imageAlt: "Kerala team desk that handles remote UK projects",
  }),
  country({
    path: "/australia-malayali-business-website-development",
    metaTitle: "Malayali Business Websites for Australia",
    metaDescription: "Websites, CRM and software for Malayali businesses in Australia, delivered from Kerala. INR pricing. No Australia office.",
    h1: "Websites for Malayali businesses in Australia",
    country: "Australia",
    examples: "Cafes, trades, education, recruitment and professional firms run by Malayali owners in Australian cities.",
    clock: "Eastern Australia is several hours ahead of India. Western Australia is closer. We still reply inside India working hours, Monday to Saturday.",
    money: "Plan in INR. A basic site starts from ₹5,000 and a standard site is ₹10,000–₹18,000. In rough Australian dollars that is a small amount, not a quote. Confirm the rate yourself.",
    privacy: "If you store Australian customer details, name that in the estimate. DPS does not claim an Australian business registration.",
    image: "/img/pages/travel-website.jpg",
    imageAlt: "Travel desk with a laptop, used here for remote Australia projects",
  }),
  country({
    path: "/uae-malayali-business-website-development",
    metaTitle: "Malayali Business Websites for the UAE",
    metaDescription: "Websites, WhatsApp follow-up and software for Malayali businesses in the UAE, delivered from Kerala.",
    h1: "Websites for Malayali businesses in the UAE",
    country: "the UAE",
    examples: "Restaurants, salons, recruitment, trading and professional services run by Malayali owners in Dubai, Abu Dhabi and other emirates.",
    clock: "UAE time is 1.5 hours behind India. Overlap with the Kerala workday is wide, so a same-day reply is often possible on Monday to Saturday.",
    money: "Plan in INR. A basic site starts from ₹5,000 and a standard site is ₹10,000–₹18,000. In rough dirhams that is a few hundred, not a quote.",
    privacy: "WhatsApp is a common enquiry channel. Say whether the CRM should store UAE phone numbers. DPS has no UAE trade licence.",
    image: "/img/pages/office-website.jpg",
    imageAlt: "Office laptop showing a services page for a UAE client project",
  }),
  country({
    path: "/gcc-malayali-business-digital-solutions",
    metaTitle: "Digital Solutions for Malayali Businesses in the GCC",
    metaDescription: "Websites, WhatsApp CRM and software for Malayali businesses across the GCC, delivered from Kerala.",
    h1: "Digital systems for Malayali businesses in the GCC",
    country: "the GCC",
    examples: "This page covers Qatar, Kuwait, Bahrain, Oman and Saudi Arabia as well as the UAE. Use the UAE page if the business is only in the Emirates.",
    clock: "GCC clocks sit close to India. Kuwait is 2.5 hours behind. The rest are about 1.5 hours behind. Replies follow the Kerala Monday to Saturday hours.",
    money: "INR remains the invoice currency. Dirham, riyal or dinar amounts are planning notes only.",
    privacy: "Rules differ by country. The estimate states which customer fields are stored. DPS does not claim a GCC licence.",
    image: "/img/pages/logistics-website.jpg",
    imageAlt: "Delivery van and a shipment screen for GCC trade enquiries",
  }),
);

function industry(input: {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  focus: string[];
  extra: string;
  serviceName: string;
  whatsappText: string;
  related: { href: string; label: string }[];
}): DiasporaContent {
  return {
    path: input.path,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    h1: input.h1,
    lede: input.lede,
    image: input.image,
    imageAlt: input.imageAlt,
    event: "view_industry_page",
    serviceName: input.serviceName,
    whatsappText: input.whatsappText,
    showPackages: true,
    sections: [
      { h2: "What this build focuses on", paragraphs: [input.extra], bullets: input.focus },
      { h2: "Remote delivery", paragraphs: [remote] },
      { h2: "Proof", paragraphs: [proof] },
    ],
    faqs: [
      { q: "Is this only for businesses outside India?", a: "No. A Kerala business that serves NRIs or international customers can use the same scope." },
      { q: "Do you guarantee enquiries?", a: "No. The site or CRM collects the enquiries you actually receive. Volume is not promised." },
    ],
    related: [{ href: hub, label: "Malayali business solutions" }, ...input.related, { href: "/contact", label: "Contact" }],
  };
}

diasporaPages.push(
  industry({
    path: "/restaurant-website-software-for-malayali-businesses",
    metaTitle: "Restaurant Websites for Malayali Businesses",
    metaDescription: "Menu, ordering, catering enquiries and WhatsApp follow-up for Malayali restaurants, built from Kerala.",
    h1: "Restaurant websites and ordering for Malayali businesses",
    lede: "A restaurant or caterer needs a menu people can read, a way to order or ask for a function, and a WhatsApp trail the kitchen can see.",
    image: "/img/pages/restaurant-malayali.jpg",
    imageAlt: "Restaurant dining room with a digital menu on a tablet",
    focus: ["Menu pages", "Order or catering enquiry", "WhatsApp follow-up", "A place for reviews you already have", "Delivery zones only if scoped"],
    extra: "The Kerala restaurant page covers local ordering in more detail. This page is the same product for a Malayali restaurant abroad or a Kerala kitchen serving NRIs. We do not claim a count of restaurant clients.",
    serviceName: "Restaurant websites for Malayali businesses",
    whatsappText: "Hi, I need a restaurant website for a Malayali business",
    related: [{ href: "/restaurant-website-online-ordering-kerala", label: "Restaurant ordering in Kerala" }, { href: "/whatsapp-automation-kerala", label: "WhatsApp automation" }],
  }),
  industry({
    path: "/recruitment-consultancy-website-crm-malayali-businesses",
    metaTitle: "Recruitment Websites and CRM for Malayali Firms",
    metaDescription: "Candidate and employer enquiries, a CRM pipeline and WhatsApp alerts for Malayali recruitment firms.",
    h1: "Recruitment and consultancy websites with a lead pipeline",
    lede: "Candidates and employers should land on a page that says what you place, then the enquiry should get an owner and a status.",
    image: "/img/pages/office-website.jpg",
    imageAlt: "Consultancy desk with a services page on a laptop",
    focus: ["Role and service pages", "Separate candidate and employer forms", "CRM status from new enquiry to placed or closed", "Email or WhatsApp notification", "A simple count of enquiries by source"],
    extra: "Document collection is a file field you agree in the estimate. We do not store passports unless you explicitly ask and the privacy note covers it.",
    serviceName: "Recruitment website and CRM",
    whatsappText: "Hi, I need a recruitment website and CRM",
    related: [{ href: "/crm-software-kerala", label: "CRM software" }, { href: "/professional-service-website-kerala", label: "Professional service websites" }],
  }),
  industry({
    path: "/property-real-estate-website-crm-malayali-businesses",
    metaTitle: "Property Websites and CRM for Malayali Agents",
    metaDescription: "Listing sites, viewing requests and lead follow-up for Malayali property businesses. Built from Kerala.",
    h1: "Property listings and lead follow-up for Malayali agents",
    lede: "Buyers need the listing. Your team needs to know which viewing was requested and who replies.",
    image: "/img/pages/property-website.jpg",
    imageAlt: "House exterior with property cards on a laptop",
    focus: ["Listing cards", "Viewing or enquiry form", "CRM status", "WhatsApp handoff", "Lead source noted when the form sends it"],
    extra: "Kerala listing and builder pages already exist. This page is for a Malayali agent abroad, or a Kerala developer selling to NRIs. We do not supply the properties.",
    serviceName: "Property website and CRM",
    whatsappText: "Hi, I need a property website and CRM",
    related: [{ href: "/real-estate-website-kerala", label: "Real estate websites in Kerala" }, { href: "/real-estate-crm-lead-management-kerala", label: "Real estate CRM" }],
  }),
  industry({
    path: "/kerala-tourism-travel-website-booking-system",
    metaTitle: "Kerala Tourism Websites for International Guests",
    metaDescription: "Tour package sites, enquiries and booking handoff for Kerala travel businesses serving visitors abroad.",
    h1: "Kerala tour websites for guests booking from abroad",
    lede: "International visitors need packages, dates and a way to ask. The page is in English first. A second language is added only when the text is reviewed.",
    image: "/img/pages/travel-website.jpg",
    imageAlt: "Kerala backwater view and tour package cards on a laptop",
    focus: ["Package pages", "Date enquiry", "WhatsApp with the package name", "Payment only if a gateway is in the estimate", "No invented availability"],
    extra: "Hotel booking and travel-agency pages on this site cover the Kerala version. Use this page when the guest is abroad and the operator is in Kerala.",
    serviceName: "Kerala tourism website for international guests",
    whatsappText: "Hi, I need a Kerala tour website for international guests",
    related: [{ href: "/travel-agency-website-kerala", label: "Travel agency websites" }, { href: "/hotel-booking-website-kerala", label: "Hotel booking websites" }],
  }),
  industry({
    path: "/kerala-products-ecommerce-website-development",
    metaTitle: "E-commerce Sites for Kerala Products",
    metaDescription: "Catalogue, payment and shipping pages for Kerala products sold in India or abroad. Inventory only if scoped.",
    h1: "E-commerce websites for Kerala products",
    lede: "A buyer outside Kerala needs the product, the price in INR, and a plain statement of where you ship.",
    image: "/img/projects/kerala-sellers.jpg",
    imageAlt: "Kerala Sellers, a marketplace project we shipped",
    focus: ["Product catalogue", "Checkout when the e-commerce package is chosen", "Shipping notes you write", "Stock fields only if scoped", "A view of orders, not a promise of repeat sales"],
    extra: "Published e-commerce work starts at ₹35,000–₹70,000 and up. Kerala Sellers is a marketplace we built. Your shop is a smaller catalogue unless the estimate says otherwise.",
    serviceName: "Kerala products e-commerce",
    whatsappText: "Hi, I want an online store for Kerala products",
    related: [{ href: "/ecommerce-website-development-kerala", label: "E-commerce development" }, { href: "/kerala-sellers", label: "Kerala Sellers story" }],
  }),
  industry({
    path: "/professional-services-website-crm-seo",
    metaTitle: "Professional Service Websites, CRM and SEO",
    metaDescription: "Authority websites, consultation booking, lead forms and SEO for Malayali professional firms. No ranking promise.",
    h1: "Websites, consultation booking and SEO for professional firms",
    lede: "Architects, lawyers, accountants and consultants need a page a client can check, a way to book a conversation, and SEO work that does not promise a position.",
    image: "/img/pages/office-website.jpg",
    imageAlt: "Professional office desk with a services website",
    focus: ["Service and team pages you approve", "Consultation form", "CRM status for those enquiries", "Technical SEO and page titles", "A monthly note of what was published, if a retainer is active"],
    extra: "SEO retainers on this site start from ₹5,000 a month. The retainer does not buy a Google position.",
    serviceName: "Professional services website, CRM and SEO",
    whatsappText: "Hi, I need a professional services website",
    related: [{ href: "/professional-service-website-kerala", label: "Professional service websites" }, { href: "/seo-services", label: "SEO services" }],
  }),
);

diasporaPages.push(
  {
    path: "/kerala-affordable-software-web-ai-agency",
    metaTitle: "Affordable Software, Web & AI Agency in Kerala | DPS",
    metaDescription: "Affordable websites, software, apps and AI from a Kerala team. Published INR prices. Direct support. No ranking or lead promise.",
    absoluteTitle: true,
    h1: "Affordable Software, Website and AI Solutions from Kerala",
    lede: "Digital Product Solutions is a Kerala technology team for small businesses that want a clear scope, a published starting price, and a person they can message. This is not a cheap-outsourcing pitch and it is not a promise of sales.",
    image: "/img/blog/blog-team-desk.jpg",
    imageAlt: "Kerala team desk at Digital Product Solutions",
    event: "view_service_page",
    serviceName: "Affordable software, website and AI agency in Kerala",
    whatsappText: "Hi, I want an affordable website, software or AI estimate",
    showPackages: true,
    sections: [
      {
        h2: "What you can buy",
        paragraphs: ["Each item is a service already offered from Korani. You choose the one that matches the job."],
        bullets: [
          "Websites from ₹5,000, standard sites ₹10,000–₹18,000, premium sites ₹25,000–₹45,000",
          "Custom software from ₹15,000 and mobile apps from ₹25,000",
          "AI tools from ₹12,000 and WhatsApp automation from ₹10,000",
          "SEO from ₹5,000 a month, with no ranking guarantee",
          "Booking, ordering and CRM only when the estimate includes them",
        ],
      },
      {
        h2: "How delivery works",
        paragraphs: [remote, "Milestones are scope, build and your review. You own the domain. Hosting, ads and payment-gateway fees are extra unless the estimate includes them."],
      },
      { h2: "Proof you can open", paragraphs: [proof, "Search volume for these phrases was not taken from a keyword tool for this page, so no monthly-search number is shown."] },
    ],
    faqs: [
      { q: "Are you only a low-cost outsourcing shop?", a: "No. The price is the published INR range for a written scope. You speak with the Kerala team, not a reseller." },
      { q: "Will AI or SEO bring a set number of leads?", a: "No. We can build the site, the tracking and the follow-up. Lead count and profit are not promised." },
    ],
    related: [
      { href: hub, label: "Malayali businesses worldwide" },
      { href: "/software-development", label: "Software development" },
      { href: "/ai-powered-solutions", label: "AI solutions" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    path: "/kerala-digital-lead-generation-agency",
    metaTitle: "Digital Lead Generation Systems from Kerala | DPS",
    metaDescription: "Websites, ads, SEO and follow-up for business enquiries. Built in Kerala. No lead-count or ROI promise without your own numbers.",
    h1: "A website and follow-up system for business enquiries",
    lede: "DPS can build the pages, the form, the ad landing path and the CRM status for enquiries. DPS does not claim a past ROI figure on this page. A result needs your revenue, the comparison period and your permission.",
    image: "/img/pages/office-website.jpg",
    imageAlt: "Office desk with a services website on a laptop",
    event: "view_service_page",
    serviceName: "Lead-generation websites and follow-up from Kerala",
    whatsappText: "Hi, I want a lead follow-up system for my business",
    showPackages: true,
    sections: [
      {
        h2: "What is included when you ask for it",
        paragraphs: ["The estimate names which of these are in the project. An ad account spend is yours."],
        bullets: [
          "A page with one clear enquiry action",
          "Google Ads or Meta Ads support only if the estimate says who owns the account",
          "SEO work linked from the SEO page, without a position promise",
          "CRM or WhatsApp follow-up so a person owns the next reply",
          "Analytics events already on this site for form, phone and WhatsApp clicks",
        ],
      },
      {
        h2: "What is not included",
        paragraphs: ["A guaranteed number of leads, a cost-per-lead target, or a return on ad spend. Those need your baseline and a written attribution method. Care N Cure is not used here as a DPS result."],
      },
      { h2: "How we work", paragraphs: [remote] },
      { h2: "Proof", paragraphs: [proof] },
    ],
    faqs: [
      { q: "Have you published a lead-generation case study?", a: "Not on this page. A client name, dates, before-and-after numbers and written permission are required first." },
      { q: "Do you promise qualified leads?", a: "No. We define a lead as a form, call or WhatsApp message you receive. Whether it is qualified is your rule, written in the estimate." },
    ],
    related: [
      { href: "/kerala-affordable-software-web-ai-agency", label: "Software, web and AI" },
      { href: "/seo-services", label: "SEO services" },
      { href: "/google-ads-management-kerala", label: "Google Ads" },
      { href: "/crm-software-kerala", label: "CRM software" },
      { href: hub, label: "Malayali businesses worldwide" },
      { href: "/contact", label: "Contact" },
    ],
  },
);

export function diaspora(path: string): DiasporaContent {
  const item = diasporaPages.find((page) => page.path === path);
  if (!item) throw new Error(`Missing diaspora page ${path}`);
  return item;
}
