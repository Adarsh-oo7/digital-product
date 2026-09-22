export type CrmAccent = {
  badge: string;
  accentText: string;
  button: string;
  check: string;
  related: string;
  relatedHover: string;
  cta: string;
  ctaMuted: string;
  stepBg: string;
};

export type CrmIndustry = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  badge: string;
  h1: string;
  h1Accent: string;
  lede: string;
  problemTitle: string;
  problem: string;
  workflowTitle: string;
  workflow: { label: string; detail: string }[];
  featuresTitle: string;
  features: string[];
  whyTitle: string;
  why: string[];
  proofTitle: string;
  proof: string;
  proofHref: string;
  proofLinkLabel: string;
  relatedTitle: string;
  related: { href: string; icon: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  whatsappText: string;
  ctaHeading: string;
  accent: CrmAccent;
  serviceName: string;
  icon: string;
  hubBlurb: string;
  searchQueries: string[];
};

const softwareFrom = "Custom software on this site starts at ₹15,000 for a simple portal. WhatsApp automation starts at ₹10,000. Larger CRM work (several agents, portal forwarding, reports) is estimated — full-scale platforms on the software page start at ₹75,000. Not a quote.";

export const realEstateCrm: CrmIndustry = {
  path: "/real-estate-crm-lead-management-kerala",
  metaTitle: "Real Estate CRM & Lead Management Software in Kerala",
  metaDescription:
    "4+ years building Kerala software. Stop losing property enquiries in WhatsApp. Real estate CRM for Trivandrum agents and builders — capture, follow-up, bookings.",
  keywords:
    "real estate CRM Kerala, property lead management software, real estate CRM Trivandrum, property enquiry management system, real estate WhatsApp CRM",
  badge: "Real Estate CRM — Kerala · 4+ years",
  h1: "Real Estate CRM Kerala — built like a sales desk, not a brochure",
  h1Accent: "That 99acres lead is going cold in WhatsApp while your agent is on another call.",
  lede:
    "We are a Kerala software team with 4+ years shipping sites, WhatsApp automation and custom software. This CRM is the desk after the enquiry hits: one inbox, an owner, a follow-up, a site visit, a booking — or a lost reason. Not an irpr-style “flats near IT park” SEO farm. WhatsApp the developer. No ranking promises.",
  problemTitle: "The problem",
  problem:
    "Enquiries arrive from 99acres, MagicBricks, your website, Facebook ads and walk-ins — then live in different phones. Without one inbox, follow-ups slip and hot buyers go cold. A spreadsheet does not remind anyone to call back after a site visit.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Sources", detail: "99acres / website / Facebook / WhatsApp / walk-in" },
    { label: "CRM", detail: "One lead record with source and project" },
    { label: "Assign", detail: "Agent by area or project" },
    { label: "Follow-up", detail: "Reminder so nothing sits untouched" },
    { label: "Site visit", detail: "Scheduled on a shared calendar" },
    { label: "Negotiate", detail: "Notes stay on the same card" },
    { label: "Booking", detail: "Stage moves to booked — or lost, with a reason" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Central lead inbox from the sources you actually use",
    "Assign leads to agents by area or project",
    "Follow-up reminders so a lead is not left untouched",
    "Site-visit scheduling",
    "Property / project tags on each enquiry",
    "WhatsApp path for a fast first reply",
    "Pipeline view: enquiry → visit → booked",
    "Simple agent activity the owner can see",
  ],
  whyTitle: "Not the same as a listing website",
  why: [
    "A builder website shows inventory. This page is the desk that works the lead after it arrives.",
    "We do not sell guaranteed Google rankings or portal #1 slots.",
    "Portal leads: you can forward WhatsApp/email into the CRM. Official 99acres/MagicBricks APIs only if that portal offers them and we confirm it in the estimate.",
    "Kerala team, 4+ years in the market, WhatsApp-first, direct developer access — not a national CRM licence with a 1800 number.",
  ],
  proofTitle: "Closest live work (website, not this CRM)",
  proof:
    "BuilDwellz is a Kerala construction / property-adjacent site we shipped (gallery, services, enquiry). That is public proof we work with builders. A CRM is scoped separately — we will not pretend their site is a multi-agent CRM.",
  proofHref: "/work/buildwellz",
  proofLinkLabel: "BuilDwellz project story",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "First reply and visit reminders on chat" },
    { href: "/local-seo-kerala", icon: "📍", title: "Local SEO Kerala", desc: "Maps and Google Business — not fake map-pack guarantees" },
    { href: "/real-estate-builder-website-development-kerala", icon: "🏗️", title: "Builder / real-estate website", desc: "Listings and public pages (different product)" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published starting ranges for portals and platforms" },
  ],
  faqs: [
    {
      q: "How is this different from a spreadsheet?",
      a: "A sheet does not assign an owner, remind a follow-up, or keep the source (portal vs WhatsApp vs walk-in) on the same record. Missed callbacks are the usual failure, not “we needed more columns”.",
    },
    {
      q: "Can it connect to 99acres or MagicBricks leads?",
      a: "Leads you already receive on WhatsApp, email or a forwarded inbox can be entered or forwarded into the CRM. We do not claim a secret official portal partnership. If a portal publishes an API you are allowed to use, that is estimated as extra work.",
    },
    {
      q: "How long does a real estate CRM take?",
      a: "Simple portals on this site are listed from ₹15,000. Custom business platforms typically take 15–45 days once sources, agents and stages are agreed. A brochure website is a different timeline (often about a week when content is ready).",
    },
    {
      q: "What does it cost?",
      a: softwareFrom,
    },
  ],
  whatsappText: "Hi, I want a real estate CRM estimate — Kerala / Trivandrum",
  ctaHeading: "Stop losing the next site-visit. WhatsApp us a scope.",
  accent: {
    badge: "bg-slate-100 text-slate-700",
    accentText: "text-slate-700",
    button: "bg-slate-700 hover:bg-slate-800 text-white",
    check: "text-slate-700",
    related: "bg-slate-50 border-slate-100",
    relatedHover: "hover:border-slate-400 group-hover:text-slate-700",
    cta: "bg-slate-800",
    ctaMuted: "text-slate-100",
    stepBg: "bg-slate-700",
  },
  serviceName: "Real Estate CRM Kerala",
  icon: "🏠",
  hubBlurb: "Portal, ads, website and walk-in leads in one inbox. Follow-up or they go to the next agent.",
  searchQueries: [
    "real estate CRM Kerala",
    "real estate CRM Trivandrum",
    "property lead management software",
    "property enquiry management system",
    "real estate WhatsApp CRM",
  ],
};

export const travelCrm: CrmIndustry = {
  path: "/travel-agency-crm-kerala",
  metaTitle: "Travel Agency CRM & Enquiry Management Software in Kerala",
  metaDescription:
    "Manage travel enquiries, quotations, follow-ups and bookings in one system. Built for Kerala tour operators and travel agencies.",
  keywords:
    "travel agency CRM Kerala, travel CRM software, tour package enquiry management, travel quotation software Trivandrum",
  badge: "Travel Agency CRM — Kerala · 4+ years",
  h1: "Travel Agency CRM Kerala — quotes that do not vanish at 11pm",
  h1Accent: "Onam rush. Five WhatsApp threads. Nobody knows which quote is still alive.",
  lede:
    "4+ years building software for Kerala desks. This CRM is enquiry → package → quote → hound them → booking. WhatsApp stays in the loop. Not a tour-listing SEO farm. Direct developer. No fake “bookings up 300%”.",
  problemTitle: "The problem",
  problem:
    "Enquiries sit in personal WhatsApp, a shared phone, and a half-updated Excel of “pending quotes”. When Onam or summer peaks, nobody knows which quote is still open. Repeat travellers have no history attached to the number.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "Call / WhatsApp / website form" },
    { label: "Details", detail: "Traveller, dates, pax" },
    { label: "Interest", detail: "Destination or package tag" },
    { label: "Quote", detail: "Quotation sent and stored" },
    { label: "Follow-up", detail: "Reminder on pending quotes" },
    { label: "Booking", detail: "Confirmed on the same record" },
    { label: "Payment", detail: "Advance / balance noted" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Capture from WhatsApp, calls and website forms",
    "Package / destination tags",
    "Quotation stored against the enquiry",
    "Follow-up reminders for pending quotes",
    "Booking status on the same card",
    "Advance / payment notes (not a full accounting suite unless scoped)",
    "Repeat-customer history by phone number",
    "Season tags (Onam, summer, honeymoon) if you use them",
  ],
  whyTitle: "WhatsApp-first, Kerala tour desk",
  why: [
    "Most Kerala tour enquiries still start on chat. The CRM should not force staff off WhatsApp; it should log what already happens there.",
    "An AI chatbot can answer package FAQs; a human still closes the booking. We will not claim the bot replaces your operations team.",
    "No invented “bookings up X%” figures.",
  ],
  proofTitle: "Closest live work",
  proof:
    "We do not publish a travel-agency CRM case study yet. Closest public work: hospitality sites (Mangrove Moments, Mangrove Spot) and WhatsApp automation for Kerala businesses. Treat those as related proof, not a fake tour-operator dashboard screenshot.",
  proofHref: "/work/mangrove-moments",
  proofLinkLabel: "Mangrove Moments story",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "First reply and quote follow-ups" },
    { href: "/ai-chatbot-development-kerala", icon: "🤖", title: "AI chatbot", desc: "Package FAQs — not a replacement for closing" },
    { href: "/website-development-for-hotels-resorts-kerala", icon: "🏨", title: "Hotel / resort websites", desc: "If you sell stays as well as tours" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published portal and platform ranges" },
  ],
  faqs: [
    {
      q: "Is this a ready-made travel SaaS?",
      a: "No. It is custom software scoped to how your desk already quotes — destinations, seasons, and whether you need payment notes. We do not resell a generic national travel CRM licence as “Kerala exclusive”.",
    },
    {
      q: "Can quotations go out on WhatsApp?",
      a: "Yes, that is the usual path. The CRM stores who was quoted and when to follow up. Official WhatsApp Business API setup is the same product as /whatsapp-automation-kerala (from ₹10,000 on this site).",
    },
    {
      q: "How long and how much?",
      a: softwareFrom + " Custom platforms typically 15–45 days after you list packages and who handles quotes.",
    },
  ],
  whatsappText: "Hi, I want a travel agency CRM estimate in Kerala",
  ctaHeading: "Peak season is not the time to hunt chats. Get a CRM estimate.",
  accent: {
    badge: "bg-cyan-100 text-cyan-800",
    accentText: "text-cyan-700",
    button: "bg-cyan-700 hover:bg-cyan-800 text-white",
    check: "text-cyan-700",
    related: "bg-cyan-50 border-cyan-100",
    relatedHover: "hover:border-cyan-400 group-hover:text-cyan-700",
    cta: "bg-cyan-800",
    ctaMuted: "text-cyan-50",
    stepBg: "bg-cyan-700",
  },
  serviceName: "Travel Agency CRM Kerala",
  icon: "🚌",
  hubBlurb: "Munnar, Alleppey, honeymoon quotes — stored, followed up, booked. Not lost in a personal phone.",
  searchQueries: [
    "travel agency CRM Kerala",
    "travel CRM software",
    "tour package enquiry management",
    "travel quotation software Trivandrum",
  ],
};

export const educationCrm: CrmIndustry = {
  path: "/education-admission-crm-kerala",
  metaTitle: "Education CRM & Admission Management Software in Kerala",
  metaDescription:
    "Track student enquiries from first contact to admission. Built for Kerala coaching centres, institutes and schools.",
  keywords:
    "education CRM Kerala, admission CRM software, student lead management, institute enquiry management Kerala",
  badge: "Education / Admission CRM — Kerala · 4+ years",
  h1: "Admission CRM Kerala — the enquiry dies between the gate and the counsellor",
  h1Accent: "Parents WhatsApp at 9pm. Your counsellor sees it on Monday. The seat is gone.",
  lede:
    "Kerala software team, 4+ years. This is the funnel before they join: enquiry → counsellor → application → admitted. Not the full school ERP. Coaching centres need this first. Direct WhatsApp to a developer — no call-centre CRM pitch.",
  problemTitle: "The problem",
  problem:
    "Walk-ins, website forms, WhatsApp and phone all reach different people. The counsellor who should call back does not see the front-desk note. Parents ask “what happened to our form?” and nobody can answer from one screen.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "Website / WhatsApp / walk-in / phone" },
    { label: "Course", detail: "Course or batch tagged" },
    { label: "Assign", detail: "Counsellor and workload" },
    { label: "Follow-up", detail: "Call or WhatsApp scheduled" },
    { label: "Application", detail: "Form / documents noted" },
    { label: "Admission", detail: "Confirmed on the funnel" },
    { label: "Fee note", detail: "Reminder if you scope it" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Enquiry capture from website, WhatsApp, walk-in and phone",
    "Course / batch tags",
    "Counsellor assignment and a simple workload view",
    "Follow-up call or chat scheduling",
    "Application / document checklist (not a full SIS unless scoped)",
    "Funnel view: enquiry → applied → admitted",
    "Parent communication log",
    "Fee reminder automation only if included in the estimate",
  ],
  whyTitle: "CRM vs school management software",
  why: [
    "Admission CRM tracks people who have not joined yet. School management software tracks students who already have a register number.",
    "A coaching centre often needs only the CRM. A CBSE school may need both — we will not sell ERP features you will not use.",
    "No “admission % guaranteed” copy.",
  ],
  proofTitle: "Related product on this site",
  proof:
    "We publish a school / education management software page (records, attendance, fees). That is a different build. Use this CRM page if your pain is lost enquiries; use the school page if your pain is running the institution after they join.",
  proofHref: "/school-education-management-software-kerala",
  proofLinkLabel: "School management software",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/school-education-management-software-kerala", icon: "🏫", title: "School management software", desc: "After they are admitted — attendance, fees, exams" },
    { href: "/school-website-development-kerala", icon: "🌐", title: "School website", desc: "Public admissions page and enquiry form" },
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "Parent replies and fee reminders" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published starting ranges" },
  ],
  faqs: [
    {
      q: "Is this the same as school management software?",
      a: "No. This CRM is for the admissions desk. School management software on /school-education-management-software-kerala is listed from ₹50,000 for records, attendance and fees. Do not buy both unless you need both.",
    },
    {
      q: "Can walk-in enquiries be added at the front desk?",
      a: "Yes. That is a core use: the same record whether the student came from Instagram, the website or the gate.",
    },
    {
      q: "Cost and timeline?",
      a: softwareFrom + " Custom platforms typically 15–45 days. The ₹50,000 school-management starting figure on the other page is not automatically this CRM.",
    },
  ],
  whatsappText: "Hi, I want an admission CRM estimate for our Kerala institute",
  ctaHeading: "Stop losing walk-ins. Estimate the admissions CRM.",
  accent: {
    badge: "bg-indigo-100 text-indigo-800",
    accentText: "text-indigo-700",
    button: "bg-indigo-700 hover:bg-indigo-800 text-white",
    check: "text-indigo-700",
    related: "bg-indigo-50 border-indigo-100",
    relatedHover: "hover:border-indigo-400 group-hover:text-indigo-700",
    cta: "bg-indigo-800",
    ctaMuted: "text-indigo-50",
    stepBg: "bg-indigo-700",
  },
  serviceName: "Education Admission CRM Kerala",
  icon: "🎓",
  hubBlurb: "Walk-in, WhatsApp, website — one record until they are admitted. ERP is a different page.",
  searchQueries: [
    "education CRM Kerala",
    "admission CRM software",
    "student lead management",
    "institute enquiry management Kerala",
  ],
};

export const carDealerCrm: CrmIndustry = {
  path: "/car-dealer-crm-kerala",
  metaTitle: "Car Dealer CRM & Sales Lead Management Software in Kerala",
  metaDescription:
    "Manage showroom enquiries, test drives and quotations from one dashboard. Built for Kerala car dealerships.",
  keywords:
    "car dealer CRM Kerala, automobile CRM software, test drive management software, vehicle enquiry management Trivandrum",
  badge: "Car Dealer CRM — Kerala · 4+ years",
  h1: "Car Dealer CRM Kerala — the test drive never got booked",
  h1Accent: "“Price for this model?” on WhatsApp. Three hours later, they bought from the next showroom.",
  lede:
    "4+ years building Kerala software. Showroom, Facebook, OLX and WhatsApp leads get an owner, a test-drive slot and a quote on one card. Not a national auto-SaaS login. Message the developer who will actually build it.",
  problemTitle: "The problem",
  problem:
    "The person who took the WhatsApp price query is not the person who booked the test drive. Exchange and finance notes live in a notebook. Follow-up on “will decide after salary day” never happens.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "Website / Facebook / WhatsApp / walk-in" },
    { label: "CRM", detail: "Model, source, branch" },
    { label: "Assign", detail: "Sales exec by model or branch" },
    { label: "Test drive", detail: "Slot and reminder" },
    { label: "Quote", detail: "Variant / price note" },
    { label: "Follow-up", detail: "Undecided buyers stay visible" },
    { label: "Booking", detail: "Pipeline by branch" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Multi-source enquiry capture",
    "Sales exec assignment by model or branch",
    "Test-drive scheduling and reminders",
    "Quotation notes with model / variant (not a manufacturer DMS unless you already have one to integrate)",
    "Follow-up tracker for undecided buyers",
    "Exchange / finance tags",
    "Pipeline view by branch if you have more than one",
    "Post-sale service reminder only if you ask for it in scope",
  ],
  whyTitle: "Showroom desk, not a generic CRM brochure",
  why: [
    "National auto CRMs exist. This page is for a Kerala dealer who wants WhatsApp in the workflow and a developer they can message.",
    "We will not claim OEM/DMS certification we do not have. Integrations are listed in the estimate after we see your current tools.",
    "No fake “cars sold” metrics.",
  ],
  proofTitle: "Proof on this site",
  proof:
    "There is no published car-dealer CRM case study yet. Closest public software/automation work is custom software and WhatsApp automation for Kerala businesses. Ask for a scoped demo of the pipeline — do not treat an unrelated industry screenshot as yours.",
  proofHref: "/software-development",
  proofLinkLabel: "Custom software page",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "Price queries and test-drive reminders" },
    { href: "/local-seo-kerala", icon: "📍", title: "Local SEO Kerala", desc: "Google Business for the showroom" },
    { href: "/google-ads-management-kerala", icon: "📈", title: "Google Ads", desc: "Paid traffic is separate from the CRM build" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published starting ranges" },
  ],
  faqs: [
    {
      q: "Will this replace my manufacturer dealer system?",
      a: "Usually no. OEM portals stay for invoicing and stock. This CRM is for enquiries and follow-up your staff already do on WhatsApp and the floor. Linking the two is extra, only if the OEM allows it.",
    },
    {
      q: "Can test drives send a reminder on WhatsApp?",
      a: "Yes, if WhatsApp automation is in the same estimate (from ₹10,000 on this site for a basic automation setup).",
    },
    {
      q: "Cost and timeline?",
      a: softwareFrom + " Custom platforms typically 15–45 days after models, branches and who owns a lead are written down.",
    },
  ],
  whatsappText: "Hi, I want a car dealer CRM estimate in Kerala",
  ctaHeading: "That undecided buyer needs a reminder today. Get a CRM estimate.",
  accent: {
    badge: "bg-orange-100 text-orange-800",
    accentText: "text-orange-700",
    button: "bg-orange-600 hover:bg-orange-700 text-white",
    check: "text-orange-600",
    related: "bg-orange-50 border-orange-100",
    relatedHover: "hover:border-orange-400 group-hover:text-orange-700",
    cta: "bg-orange-700",
    ctaMuted: "text-orange-50",
    stepBg: "bg-orange-600",
  },
  serviceName: "Car Dealer CRM Kerala",
  icon: "🚗",
  hubBlurb: "Walk-in, Facebook, WhatsApp → exec → test drive → quote → follow-up. Floor notes stop living in a diary.",
  searchQueries: [
    "car dealer CRM Kerala",
    "automobile CRM software",
    "test drive management software",
    "vehicle enquiry management Trivandrum",
  ],
};

export const weddingCrm: CrmIndustry = {
  path: "/wedding-planner-crm-kerala",
  metaTitle: "Wedding Planner CRM & Lead Management in Kerala",
  metaDescription:
    "4+ years Kerala software. Stop losing wedding enquiries in Instagram DMs. CRM for planners — leads, site visits, packages, bookings. Trivandrum team.",
  keywords:
    "wedding planner CRM Kerala, wedding CRM software, event enquiry management Kerala, wedding lead management Trivandrum",
  badge: "Wedding Planner CRM — Kerala · 4+ years",
  h1: "Wedding CRM Kerala — DMs are not a pipeline",
  h1Accent: "She asked for a quote on Instagram. You replied in three days. They already booked.",
  lede:
    "Kerala software team, 4+ years. Crystal Knot Films is live wedding-film work we shipped — a website, not this CRM. The CRM is the desk: enquiry → date/venue → package → follow-up → booked. WhatsApp-first. Direct developer.",
  problemTitle: "The problem",
  problem:
    "Leads land in Instagram, WhatsApp, the website form and a relative’s phone. Dates clash. The package you quoted is not on a card. Peak season is chaos because nothing is assigned.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "Instagram / WhatsApp / website / referral" },
    { label: "Event", detail: "Date, venue, guest count" },
    { label: "Assign", detail: "Planner / coordinator" },
    { label: "Package", detail: "Quote stored on the lead" },
    { label: "Visit", detail: "Venue or studio meeting" },
    { label: "Follow-up", detail: "Reminder before they ghost" },
    { label: "Booked", detail: "Advance noted on the same card" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "One inbox for Instagram, WhatsApp, web and walk-in enquiries",
    "Event date and venue on the lead (so you see clashes)",
    "Package / quote stored — not a lost screenshot",
    "Follow-up reminders in wedding season",
    "Assign a coordinator",
    "WhatsApp path for the first reply",
    "Pipeline: enquiry → quoted → booked",
    "Repeat / family referral notes if you want them",
  ],
  whyTitle: "Wedding desk, not a national events SaaS",
  why: [
    "4+ years building for Kerala creative and service businesses. We speak WhatsApp, not Salesforce.",
    "Crystal Knot Films is public website proof in this industry. The CRM is scoped separately — we will not fake a wedding-CRM screenshot.",
    "No guaranteed bookings.",
  ],
  proofTitle: "Closest live work",
  proof:
    "Crystal Knot Films: wedding-film website we built (gallery, films, enquiry). Use that as proof we work with wedding businesses. This CRM is a different product.",
  proofHref: "/work/crystal-knot-films",
  proofLinkLabel: "Crystal Knot Films story",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "First reply and reminder on chat" },
    { href: "/photography-crm-kerala", icon: "📷", title: "Photography CRM", desc: "If you shoot as well as plan" },
    { href: "/website-development", icon: "🌐", title: "Website", desc: "Public portfolio is a different job" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published starting ranges" },
  ],
  faqs: [
    {
      q: "Can Instagram DMs go into the CRM?",
      a: "Staff can log DMs as leads, or we estimate a connector if Instagram’s tools allow it for your account. We do not claim a secret unofficial hack.",
    },
    {
      q: "Cost and time?",
      a: softwareFrom + " Custom platforms typically 15–45 days.",
    },
    {
      q: "Is this the same as a wedding website?",
      a: "No. The website sells. The CRM chases the lead after they enquire.",
    },
  ],
  whatsappText: "Hi, I want a wedding planner CRM estimate in Kerala",
  ctaHeading: "Wedding season will not wait. Get a CRM estimate.",
  accent: {
    badge: "bg-rose-100 text-rose-800",
    accentText: "text-rose-700",
    button: "bg-rose-700 hover:bg-rose-800 text-white",
    check: "text-rose-700",
    related: "bg-rose-50 border-rose-100",
    relatedHover: "hover:border-rose-400 group-hover:text-rose-700",
    cta: "bg-rose-800",
    ctaMuted: "text-rose-50",
    stepBg: "bg-rose-700",
  },
  serviceName: "Wedding Planner CRM Kerala",
  icon: "💍",
  hubBlurb: "Instagram and WhatsApp wedding leads get a date, a package and a chase — before they book someone faster.",
  searchQueries: [
    "wedding planner CRM Kerala",
    "wedding CRM software",
    "event enquiry management Kerala",
    "wedding lead management Trivandrum",
  ],
};

export const photographyCrm: CrmIndustry = {
  path: "/photography-crm-kerala",
  metaTitle: "Photography CRM & Booking Lead Software in Kerala",
  metaDescription:
    "4+ years Kerala team. Photography CRM for wedding and commercial shooters — enquiries, packages, shoots, follow-up. Not another unpaid DM.",
  keywords:
    "photography CRM Kerala, photographer booking software, wedding photographer CRM Trivandrum, studio lead management Kerala",
  badge: "Photography CRM — Kerala · 4+ years",
  h1: "Photography CRM Kerala — unpaid DMs do not pay rent",
  h1Accent: "They asked for a wedding quote. You were on a shoot. The lead hired the next page they found.",
  lede:
    "Same Kerala team, 4+ years. Photography CRM: enquiry → shoot type → package → advance → shoot date. WhatsApp-first. Crystal Knot Films is live wedding-film web work — closest public proof. Direct developer.",
  problemTitle: "The problem",
  problem:
    "Enquiries sit in Instagram while you are shooting. Packages live in your head. Follow-up happens when you remember. Peak months leak money.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "Instagram / WhatsApp / website" },
    { label: "Shoot", detail: "Wedding, portrait, commercial" },
    { label: "Package", detail: "Quote on the card" },
    { label: "Follow-up", detail: "Reminder after the first reply" },
    { label: "Advance", detail: "Payment note" },
    { label: "Date", detail: "Shoot blocked on calendar" },
    { label: "Deliver", detail: "Gallery / film status if scoped" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Leads from Instagram, WhatsApp and the site in one list",
    "Shoot type tags",
    "Package quotes stored",
    "Follow-up when you are on location",
    "Calendar / date clash view",
    "Advance notes (not full accounting unless scoped)",
    "WhatsApp first reply",
    "Optional delivery status",
  ],
  whyTitle: "Studio desk, not a US photo-SaaS",
  why: [
    "Built for Kerala wedding and commercial shooters who live on WhatsApp.",
    "4+ years shipping software and sites. Crystal Knot is public wedding-film proof.",
    "No fake “booked 40 weddings from CRM” claims.",
  ],
  proofTitle: "Closest live work",
  proof: "Crystal Knot Films website — wedding films, gallery, enquiry. CRM for photographers is scoped on top of how you already quote.",
  proofHref: "/work/crystal-knot-films",
  proofLinkLabel: "Crystal Knot Films story",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/wedding-planner-crm-kerala", icon: "💍", title: "Wedding planner CRM", desc: "If you plan and shoot" },
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "Auto first reply while you shoot" },
    { href: "/website-development", icon: "🌐", title: "Portfolio website", desc: "Different from the lead desk" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published ranges" },
  ],
  faqs: [
    {
      q: "Will this replace my Google Drive galleries?",
      a: "No, unless we scope delivery. This page is the sales desk before the shoot.",
    },
    { q: "Cost?", a: softwareFrom },
  ],
  whatsappText: "Hi, I want a photography CRM estimate in Kerala",
  ctaHeading: "Reply slower than the next photographer and you lose the date.",
  accent: {
    badge: "bg-neutral-200 text-neutral-900",
    accentText: "text-neutral-800",
    button: "bg-neutral-900 hover:bg-black text-white",
    check: "text-neutral-900",
    related: "bg-neutral-100 border-neutral-200",
    relatedHover: "hover:border-neutral-400 group-hover:text-neutral-900",
    cta: "bg-neutral-900",
    ctaMuted: "text-neutral-100",
    stepBg: "bg-neutral-900",
  },
  serviceName: "Photography CRM Kerala",
  icon: "📷",
  hubBlurb: "Shoot enquiries, packages and dates in one place — not buried under Instagram while you are on a job.",
  searchQueries: [
    "photography CRM Kerala",
    "photographer booking software",
    "wedding photographer CRM Trivandrum",
    "studio lead management Kerala",
  ],
};

export const interiorCrm: CrmIndustry = {
  path: "/interior-design-crm-kerala",
  metaTitle: "Interior Design CRM & Project Lead Software in Kerala",
  metaDescription:
    "4+ years Kerala software. Interior CRM for designers — site visits, quotations, follow-up. Trivandrum team. WhatsApp-first, not a Delhi SaaS.",
  keywords:
    "interior design CRM Kerala, interior designer lead management, interior CRM Trivandrum, interior quotation software Kerala",
  badge: "Interior Design CRM — Kerala · 4+ years",
  h1: "Interior CRM Kerala — the site visit never got scheduled",
  h1Accent: "They sent floor plans on WhatsApp. You quoted last week. Nobody called back.",
  lede:
    "4+ years building for Kerala construction-adjacent businesses. BuilDwellz is a live builder site we shipped. This CRM is the designer’s desk: enquiry → site measure → quote → follow-up → project. Direct developer. No ranking theatre.",
  problemTitle: "The problem",
  problem:
    "Leads mix with vendor chats. Quotes live in PDF folders. After the site visit, follow-up depends on memory. A hot apartment lead goes to the designer who replies at night.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "WhatsApp / Instagram / website / walk-in" },
    { label: "Space", detail: "Apartment, villa, office, shop" },
    { label: "Visit", detail: "Measure / site visit booked" },
    { label: "Quote", detail: "Package or BOQ note" },
    { label: "Follow-up", detail: "Reminder after the visit" },
    { label: "Win", detail: "Project stage on the card" },
    { label: "Vendor", detail: "Optional — only if scoped" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Leads from chat, Instagram and the website",
    "Project type tags",
    "Site-visit scheduling",
    "Quote stored on the lead",
    "Follow-up after the visit",
    "Assign a designer",
    "WhatsApp first reply",
    "Simple pipeline the studio owner can see",
  ],
  whyTitle: "Studio CRM, not a global interior SaaS",
  why: [
    "WhatsApp is how Kerala clients send floor plans. The CRM has to live next to that.",
    "BuilDwellz is public construction-adjacent proof. Interior CRM is scoped to your studio, not copied from their website.",
    "No fake “₹2 crore pipeline” graphics.",
  ],
  proofTitle: "Closest live work",
  proof: "BuilDwellz construction website — gallery, services, enquiry. Interior CRM is a related product for designers and fit-out desks.",
  proofHref: "/work/buildwellz",
  proofLinkLabel: "BuilDwellz project story",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/construction-website-development-kerala", icon: "🏗️", title: "Construction websites", desc: "Public site is not the CRM" },
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "First reply and visit reminders" },
    { href: "/real-estate-crm-lead-management-kerala", icon: "🏠", title: "Real estate CRM", desc: "If you also sell inventory" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published ranges" },
  ],
  faqs: [
    { q: "Is this project management for carpenters?", a: "Only if we scope it. This page is the sales/enquiry desk. Site execution tools are extra." },
    { q: "Cost?", a: softwareFrom },
  ],
  whatsappText: "Hi, I want an interior design CRM estimate in Kerala",
  ctaHeading: "That floor-plan lead is cooling. Get a CRM estimate.",
  accent: {
    badge: "bg-amber-100 text-amber-900",
    accentText: "text-amber-800",
    button: "bg-amber-700 hover:bg-amber-800 text-white",
    check: "text-amber-800",
    related: "bg-amber-50 border-amber-100",
    relatedHover: "hover:border-amber-400 group-hover:text-amber-800",
    cta: "bg-amber-800",
    ctaMuted: "text-amber-50",
    stepBg: "bg-amber-700",
  },
  serviceName: "Interior Design CRM Kerala",
  icon: "🛋️",
  hubBlurb: "Site visits, quotations and follow-up for interior studios — floor plans stop dying in WhatsApp.",
  searchQueries: [
    "interior design CRM Kerala",
    "interior designer lead management",
    "interior CRM Trivandrum",
    "interior quotation software Kerala",
  ],
};

export const gymCrm: CrmIndustry = {
  path: "/gym-crm-kerala",
  metaTitle: "Gym CRM & Membership Lead Software in Kerala",
  metaDescription:
    "4+ years Kerala software. Gym CRM for trial leads, follow-up and memberships. WhatsApp-first. Trivandrum team, not a US fitness app.",
  keywords:
    "gym CRM Kerala, gym membership software, fitness centre lead management, gym WhatsApp CRM Trivandrum",
  badge: "Gym / Fitness CRM — Kerala · 4+ years",
  h1: "Gym CRM Kerala — the trial walk-in never got a call",
  h1Accent: "They tried a class. Front desk wrote a number. Nobody followed up. They joined the gym down the road.",
  lede:
    "Kerala software team, 4+ years. Gym CRM: walk-in / Instagram / WhatsApp → trial → follow-up → membership. Optional fee reminders if you scope them. Direct developer. No “members guaranteed”.",
  problemTitle: "The problem",
  problem:
    "Trial names live in a notebook. Instagram “price?” messages sit unread during peak hours. Renewals are a surprise to the member because nobody messaged them.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Lead", detail: "Walk-in / Instagram / WhatsApp / website" },
    { label: "Trial", detail: "Class or day pass logged" },
    { label: "Assign", detail: "Trainer / counsellor" },
    { label: "Follow-up", detail: "Call or WhatsApp after trial" },
    { label: "Join", detail: "Membership on the card" },
    { label: "Fee", detail: "Reminder if scoped" },
    { label: "Renew", detail: "Before the pack ends" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Trial and enquiry capture",
    "Trainer / counsellor assignment",
    "Follow-up after the trial class",
    "Membership status",
    "WhatsApp first reply and reminders",
    "Fee reminder automation only if in the estimate",
    "Simple owner dashboard",
    "Not a full biometric attendance ERP unless scoped",
  ],
  whyTitle: "Neighbourhood gym desk",
  why: [
    "US gym apps assume card-on-file and English-only staff. Kerala gyms live on WhatsApp and cash/UPI packs.",
    "4+ years shipping WhatsApp automation and custom software here.",
    "No fake member-count screenshots.",
  ],
  proofTitle: "Proof on this site",
  proof: "No published gym-CRM case study yet. Closest: WhatsApp automation and custom software for Kerala businesses. Ask for a scoped pipeline — do not treat another industry’s screenshot as yours.",
  proofHref: "/whatsapp-automation-kerala",
  proofLinkLabel: "WhatsApp automation",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "Trial follow-up and fee reminders" },
    { href: "/local-seo-kerala", icon: "📍", title: "Local SEO", desc: "Google Business for the gym" },
    { href: "/website-development", icon: "🌐", title: "Gym website", desc: "Public pages vs the membership desk" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published ranges" },
  ],
  faqs: [
    { q: "Does this include biometric attendance?", a: "Only if we write it into the estimate. This page is leads and memberships first." },
    { q: "Cost?", a: softwareFrom },
  ],
  whatsappText: "Hi, I want a gym CRM estimate in Kerala",
  ctaHeading: "Trials without follow-up are wasted ad spend. Get a CRM estimate.",
  accent: {
    badge: "bg-lime-100 text-lime-900",
    accentText: "text-lime-800",
    button: "bg-lime-700 hover:bg-lime-800 text-white",
    check: "text-lime-800",
    related: "bg-lime-50 border-lime-100",
    relatedHover: "hover:border-lime-500 group-hover:text-lime-800",
    cta: "bg-lime-800",
    ctaMuted: "text-lime-50",
    stepBg: "bg-lime-700",
  },
  serviceName: "Gym CRM Kerala",
  icon: "💪",
  hubBlurb: "Trial walk-ins and Instagram price chats become memberships — or you know they were lost.",
  searchQueries: [
    "gym CRM Kerala",
    "gym membership software",
    "fitness centre lead management",
    "gym WhatsApp CRM Trivandrum",
  ],
};

export const furnitureCrm: CrmIndustry = {
  path: "/furniture-crm-kerala",
  metaTitle: "Furniture Showroom CRM & Lead Software in Kerala",
  metaDescription:
    "4+ years Kerala software. Furniture CRM for showroom and WhatsApp enquiries, quotations and follow-up. Trivandrum team.",
  keywords:
    "furniture CRM Kerala, furniture showroom lead management, furniture quotation software Trivandrum, modular kitchen CRM Kerala",
  badge: "Furniture CRM — Kerala · 4+ years",
  h1: "Furniture CRM Kerala — the sofa enquiry went to sleep",
  h1Accent: "They asked for a modular kitchen quote. You sent PDFs. Nobody followed up after Onam.",
  lede:
    "4+ years building Kerala software. Furniture / modular / interiors-adjacent CRM: showroom walk-in, Instagram, WhatsApp → product interest → quote → follow-up → order. Direct developer. Kerala Sellers is marketplace proof we understand product catalogues — not the same as this showroom CRM.",
  problemTitle: "The problem",
  problem:
    "Showroom numbers go into a book. WhatsApp photos of sofas sit in a staff phone. After the quote, silence. The customer buys from the next showroom that called.",
  workflowTitle: "Lead journey we build for",
  workflow: [
    { label: "Enquiry", detail: "Walk-in / WhatsApp / Instagram / website" },
    { label: "Product", detail: "Sofa, kitchen, wardrobe, office" },
    { label: "Assign", detail: "Sales exec" },
    { label: "Quote", detail: "Stored against the lead" },
    { label: "Follow-up", detail: "After quote and after festival" },
    { label: "Order", detail: "Advance noted" },
    { label: "Delivery", detail: "Optional if scoped" },
  ],
  featuresTitle: "What the CRM is for",
  features: [
    "Multi-source showroom leads",
    "Product / category tags",
    "Quotes on the lead",
    "Follow-up reminders",
    "Exec assignment",
    "WhatsApp first reply",
    "Pipeline the owner can see",
    "Delivery status only if you ask for it",
  ],
  whyTitle: "Showroom desk, not a national retail CRM",
  why: [
    "Kerala furniture sales still close on chat and the floor. The CRM has to match that.",
    "Kerala Sellers is a marketplace we built — catalogue DNA, different product. This page is a dealer/showroom lead desk.",
    "No invented “sales +300%” lines (we already stripped that kind of copy elsewhere on the site).",
  ],
  proofTitle: "Closest live work",
  proof: "Kerala Sellers marketplace (listings, payments, seller desk) plus WhatsApp automation. Furniture CRM is scoped to your showroom, not a clone of that marketplace.",
  proofHref: "/work/kerala-sellers",
  proofLinkLabel: "Kerala Sellers story",
  relatedTitle: "Usually scoped with the CRM",
  related: [
    { href: "/ecommerce-website-development-kerala", icon: "🛒", title: "E-commerce website", desc: "If you also sell online" },
    { href: "/whatsapp-automation-kerala", icon: "💬", title: "WhatsApp automation", desc: "Catalogue and quote follow-up" },
    { href: "/interior-design-crm-kerala", icon: "🛋️", title: "Interior CRM", desc: "If you design and supply" },
    { href: "/software-development", icon: "💻", title: "Custom software", desc: "Published ranges" },
  ],
  faqs: [
    { q: "Is this an online store?", a: "No. The store is /ecommerce-website-development-kerala. This CRM is the showroom follow-up desk." },
    { q: "Cost?", a: softwareFrom },
  ],
  whatsappText: "Hi, I want a furniture showroom CRM estimate in Kerala",
  ctaHeading: "Quoted and forgotten is how showrooms leak. Get a CRM estimate.",
  accent: {
    badge: "bg-yellow-100 text-yellow-900",
    accentText: "text-yellow-800",
    button: "bg-yellow-700 hover:bg-yellow-800 text-white",
    check: "text-yellow-800",
    related: "bg-yellow-50 border-yellow-100",
    relatedHover: "hover:border-yellow-500 group-hover:text-yellow-800",
    cta: "bg-yellow-800",
    ctaMuted: "text-yellow-50",
    stepBg: "bg-yellow-700",
  },
  serviceName: "Furniture CRM Kerala",
  icon: "🪑",
  hubBlurb: "Showroom and WhatsApp furniture quotes get a chase — modular, sofa, kitchen, office.",
  searchQueries: [
    "furniture CRM Kerala",
    "furniture showroom lead management",
    "furniture quotation software Trivandrum",
    "modular kitchen CRM Kerala",
  ],
};

export const crmIndustries = [
  realEstateCrm,
  travelCrm,
  educationCrm,
  carDealerCrm,
  weddingCrm,
  photographyCrm,
  interiorCrm,
  gymCrm,
  furnitureCrm,
];

export const CRM_HUB_PATH = "/crm-software-kerala";

