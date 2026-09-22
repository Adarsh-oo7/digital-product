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
};

const softwareFrom = "Custom software on this site starts at ₹15,000 for a simple portal. WhatsApp automation starts at ₹10,000. Larger CRM work (several agents, portal forwarding, reports) is estimated — full-scale platforms on the software page start at ₹75,000. Not a quote.";

export const realEstateCrm: CrmIndustry = {
  path: "/real-estate-crm-lead-management-kerala",
  metaTitle: "Real Estate CRM & Lead Management Software in Kerala",
  metaDescription:
    "Stop losing property enquiries in WhatsApp and spreadsheets. Real estate CRM for Kerala agents and builders — capture, follow-up, site visits, bookings.",
  keywords:
    "real estate CRM Kerala, property lead management software, real estate CRM Trivandrum, property enquiry management system, real estate WhatsApp CRM",
  badge: "Real Estate CRM — Kerala",
  h1: "Real Estate CRM for Kerala Businesses",
  h1Accent: "Stop losing property enquiries in WhatsApp chats and spreadsheets.",
  lede:
    "This is a lead system for agents, brokers and builders — not another “flats near IT park” SEO page. Enquiries from portals, ads, the website and walk-ins land in one place, get assigned, and get a follow-up. Pair it with WhatsApp automation and, if you need listings online, the builder website page.",
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
    "Kerala team, WhatsApp-first, direct developer access — not a national CRM licence with a Coimbatore or Bengaluru call centre.",
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
  whatsappText: "Hi, I want an estimate for real estate CRM / lead management in Kerala",
  ctaHeading: "Get a scoped estimate for property lead management",
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
};

export const travelCrm: CrmIndustry = {
  path: "/travel-agency-crm-kerala",
  metaTitle: "Travel Agency CRM & Enquiry Management Software in Kerala",
  metaDescription:
    "Manage travel enquiries, quotations, follow-ups and bookings in one system. Built for Kerala tour operators and travel agencies.",
  keywords:
    "travel agency CRM Kerala, travel CRM software, tour package enquiry management, travel quotation software Trivandrum",
  badge: "Travel Agency CRM — Kerala",
  h1: "Travel Agency CRM for Kerala Tour Operators",
  h1Accent: "Turn scattered WhatsApp and phone enquiries into organised bookings.",
  lede:
    "Kerala agencies take calls and chats for Munnar, Alleppey, honeymoons and group tours — then lose the thread when the same number asks for a revised quote. This CRM is enquiry → quote → follow-up → booking, with WhatsApp in the loop. It is not a public tour-listing SEO farm.",
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
  whatsappText: "Hi, I want an estimate for travel agency CRM in Kerala",
  ctaHeading: "Get a scoped estimate for tour enquiry management",
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
};

export const educationCrm: CrmIndustry = {
  path: "/education-admission-crm-kerala",
  metaTitle: "Education CRM & Admission Management Software in Kerala",
  metaDescription:
    "Track student enquiries from first contact to admission. Built for Kerala coaching centres, institutes and schools.",
  keywords:
    "education CRM Kerala, admission CRM software, student lead management, institute enquiry management Kerala",
  badge: "Education / Admission CRM — Kerala",
  h1: "Admission CRM for Kerala Institutes",
  h1Accent: "Never lose a student enquiry between the front desk and the counsellor.",
  lede:
    "This page is the enquiry → counsellor → application → admitted funnel. It is not the full school ERP (attendance, exams, parent app). That product lives on the school management software page. Coaching centres and admissions desks need the CRM first.",
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
  whatsappText: "Hi, I want an estimate for education / admission CRM in Kerala",
  ctaHeading: "Get a scoped estimate for admission lead management",
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
};

export const carDealerCrm: CrmIndustry = {
  path: "/car-dealer-crm-kerala",
  metaTitle: "Car Dealer CRM & Sales Lead Management Software in Kerala",
  metaDescription:
    "Manage showroom enquiries, test drives and quotations from one dashboard. Built for Kerala car dealerships.",
  keywords:
    "car dealer CRM Kerala, automobile CRM software, test drive management software, vehicle enquiry management Trivandrum",
  badge: "Car Dealer CRM — Kerala",
  h1: "Car Dealer CRM for Kerala Showrooms",
  h1Accent: "Showroom, Facebook and WhatsApp enquiries should not live on three different phones.",
  lede:
    "Walk-ins, OLX/Facebook leads and WhatsApp “price for this model?” messages need an owner, a test-drive slot and a quote on one card. This is custom lead software for a Kerala dealership desk — not a national auto-SaaS login we white-label without saying so.",
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
  whatsappText: "Hi, I want an estimate for car dealer CRM in Kerala",
  ctaHeading: "Get a scoped estimate for showroom lead management",
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
};

export const crmIndustries = [realEstateCrm, travelCrm, educationCrm, carDealerCrm];
