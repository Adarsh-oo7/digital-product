/**
 * First-party project stories. Only facts we can show: live URL, what shipped,
 * published timeline, and quotes already used on the homepage. No invented
 * traffic, ranking or revenue numbers.
 */
export type WorkStory = {
  slug: string;
  client: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  industry: string;
  where: string;
  timeline: string;
  liveUrl?: string;
  image: string;
  imageAlt: string;
  problem: string;
  whatWeDid: string;
  shipped: string[];
  quote?: { name: string; text: string };
  supplements: { href: string; label: string }[];
};

export const workStories: WorkStory[] = [
  {
    slug: "buildwellz",
    client: "BuilDwellz",
    metaTitle: "BuilDwellz Construction Website Story, Kerala",
    metaDescription:
      "What we built for BuilDwellz: a Kerala construction website with project gallery, services and enquiry — live at buildwellz.in. Timeline about two weeks.",
    h1: "BuilDwellz: a construction company website Kerala buyers can actually check",
    industry: "Construction",
    where: "Kerala (Attingal / Varkala region)",
    timeline: "About 2 weeks",
    liveUrl: "https://www.buildwellz.in/",
    image: "/img/buildwellz.jpg",
    imageAlt: "BuilDwellz construction website built by Digital Product Solutions",
    problem:
      "Serious residential clients look up a builder before they WhatsApp. A folder of site photos is not a company they can verify.",
    whatWeDid:
      "We designed and shipped a public website for BuilDwellz: completed-work gallery, services, and a way to enquire. This page supplements the construction website service page — it is one real job, not a generic “what is a builder website” article.",
    shipped: ["Project gallery", "Construction videos", "Contact and services", "On-page SEO for the live domain"],
    quote: {
      name: "Vipin Mohan, BuilDwellz",
      text: "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
    },
    supplements: [
      { href: "/construction-website-development-kerala", label: "Construction websites in Kerala" },
      { href: "/real-estate-builder-website-development-kerala", label: "Builder websites" },
      { href: "/portfolio", label: "All work" },
    ],
  },
  {
    slug: "crystal-knot-films",
    client: "Crystal Knot Films",
    metaTitle: "Crystal Knot Films Website Story",
    metaDescription:
      "Wedding-film website we built for Crystal Knot Films — gallery, films, contact. Live at crystalknotfilms.com. About two weeks.",
    h1: "Crystal Knot Films: a wedding-film site that matches the actual work",
    industry: "Wedding films",
    where: "Client in Bangalore; built by the Kerala team",
    timeline: "About 2 weeks",
    liveUrl: "https://crystalknotfilms.com/",
    image: "/img/crystalknot.jpg",
    imageAlt: "Crystal Knot Films wedding website",
    problem:
      "A film studio’s site has to look as considered as the films. Couples compare portfolios before they enquire.",
    whatWeDid:
      "We built a fast, visual site for Crystal Knot Films: wedding gallery, film embeds, services and enquiry. They also link back to Digital Product Solutions from their site — a real referral, not a purchased backlink.",
    shipped: ["Event gallery", "Wedding film embeds", "Contact and services", "Custom SEO"],
    quote: {
      name: "Saif, Crystal Knot Films",
      text: "The team transformed our online presence into something that matches the quality of our films. The improved visibility and structure brought us steady, serious client leads.",
    },
    supplements: [
      { href: "/website-development", label: "Website development" },
      { href: "/portfolio", label: "All work" },
    ],
  },
  {
    slug: "squeeze-berriez",
    client: "Squeeze Berriez",
    metaTitle: "Squeeze Berriez Kerala Beverage Website Story",
    metaDescription:
      "Product website for Squeeze Berriez, a Kerala beverage brand. Catalogue, ordering and contact. Live at squeezeberriez.in. About two weeks.",
    h1: "Squeeze Berriez: a Kerala drink brand with a product site, not just Instagram",
    industry: "Beverages / F&B",
    where: "Kerala",
    timeline: "About 2 weeks",
    liveUrl: "https://www.squeezeberriez.in/",
    image: "/img/Softdrinks.jpg",
    imageAlt: "Squeeze Berriez product website",
    problem:
      "Retail and hospitality buyers still ask for a URL. An Instagram grid does not show the brand, products and how to order in one place.",
    whatWeDid:
      "We shipped a product-led site: catalogue, ordering path, contact, and SEO for the live domain. No invented “sales up X%” claim — the public proof is the live site and the client’s own words.",
    shipped: ["Product catalogue", "Online ordering", "Contact and services", "On-page SEO"],
    quote: {
      name: "Abhishek, Squeeze Berriez",
      text: "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
    },
    supplements: [
      { href: "/ecommerce-website-development-kerala", label: "E-commerce websites in Kerala" },
      { href: "/small-business-website-kerala", label: "Small business websites" },
      { href: "/portfolio", label: "All work" },
    ],
  },
  {
    slug: "mangrove-moments",
    client: "Mangrove Moments",
    metaTitle: "Mangrove Moments Hospitality Website Story",
    metaDescription:
      "Hospitality website for Mangrove Moments: contact, pricing, gallery and activities. Live at mangrovemoments.com. About three weeks.",
    h1: "Mangrove Moments: guests can reach the venue without a middleman page",
    industry: "Hospitality",
    where: "Kerala backwaters",
    timeline: "About 3 weeks",
    liveUrl: "https://www.mangrovemoments.com/",
    image: "/img/moments.jpg",
    imageAlt: "Mangrove Moments hospitality website",
    problem:
      "Activity and stay businesses lose enquiries when guests only find them on someone else’s listing.",
    whatWeDid:
      "We built a site guests can use: contact, pricing, gallery and activities. Mangrove Moments also published a public link to Digital Product Solutions from their own content.",
    shipped: ["Contact", "Pricing", "Gallery", "Activities"],
    quote: {
      name: "Mangrove Moments",
      text: "Now we can reach customers directly.",
    },
    supplements: [
      { href: "/website-development-for-hotels-resorts-kerala", label: "Hotel and resort websites" },
      { href: "/portfolio", label: "All work" },
    ],
  },
  {
    slug: "mangrove-spot",
    client: "Mangrove Spot",
    metaTitle: "Mangrove Spot Kerala Website Story",
    metaDescription:
      "Hospitality website for Mangrove Spot: contact, pricing, gallery and activities. Live at mangrovespot.in. About three weeks.",
    h1: "Mangrove Spot: a Kerala venue site for contact, pricing and activities",
    industry: "Hospitality",
    where: "Kerala",
    timeline: "About 3 weeks",
    liveUrl: "https://www.mangrovespot.in/",
    image: "/img/spot.jpg",
    imageAlt: "Mangrove Spot website",
    problem: "Visitors searching the venue name need hours, photos and a way to book — not a Facebook cover photo.",
    whatWeDid:
      "Same job as other hospitality work: a clear public site. Mangrove Spot’s own blog links to digitalproductsolutions.in.",
    shipped: ["Contact", "Pricing", "Gallery", "Activities"],
    supplements: [
      { href: "/website-development-for-hotels-resorts-kerala", label: "Hotel and resort websites" },
      { href: "/portfolio", label: "All work" },
    ],
  },
  {
    slug: "lemon-caters",
    client: "Lemon Caters and Events",
    metaTitle: "Lemon Caters Kerala Website Story",
    metaDescription:
      "Catering website rebuild for Lemon Caters and Events, plus Google presence work. Live at lemoncaters.in. About three weeks.",
    h1: "Lemon Caters: a catering site and Google listing, not only WhatsApp",
    industry: "Catering and events",
    where: "Kerala",
    timeline: "About 3 weeks",
    liveUrl: "https://lemoncaters.in/",
    image: "/img/lemons.jpg",
    imageAlt: "Lemon Caters and Events website",
    problem: "Catering enquiries that live only in WhatsApp are hard to trust when a family is choosing a vendor for a function.",
    whatWeDid:
      "We rebuilt the public website and worked on Google presence so people can find menus, work samples and a contact path. We do not publish a lead count unless the client has confirmed it for this page.",
    shipped: ["Event gallery", "Service pages", "Contact forms", "Mobile layout"],
    quote: {
      name: "Anvar Riyas, Lemon Caters and Events",
      text: "Digital Product rebuilt our catering website and optimized our Google presence.",
    },
    supplements: [
      { href: "/restaurant-website-online-ordering-kerala", label: "Restaurant and F&B websites" },
      { href: "/website-development", label: "Website development" },
      { href: "/portfolio", label: "All work" },
    ],
  },
  {
    slug: "kerala-sellers",
    client: "Kerala Sellers",
    metaTitle: "Kerala Sellers Marketplace We Built",
    metaDescription:
      "Kerala Sellers is a marketplace our team built for local shops: listings, payments and a seller dashboard. About eight months of product work.",
    h1: "Kerala Sellers: a marketplace we built for Kerala shops, not a template store",
    industry: "Marketplace (in-house product)",
    where: "Kerala",
    timeline: "About 8 months",
    liveUrl: "https://www.keralasellers.in/",
    image: "/img/keralasellers.jpg",
    imageAlt: "Kerala Sellers marketplace",
    problem:
      "Many local sellers only had Instagram and WhatsApp — no shared catalogue, orders or payments in one place.",
    whatWeDid:
      "This is our own product, not a two-week brochure site. We built listings, payments and a seller dashboard. Treat it as proof we ship software, not as a client testimonial with a fake revenue chart.",
    shipped: ["Seller website and dashboard", "Stock and product management", "Payments", "Order flow"],
    quote: {
      name: "Aromal V VG",
      text: "Kerala Sellers was built to empower local businesses with a powerful yet simple digital marketplace. From product listings to payments and automation, everything was designed for real-world execution.",
    },
    supplements: [
      { href: "/ecommerce-website-development-kerala", label: "E-commerce websites" },
      { href: "/kerala-sellers", label: "Kerala Sellers product page" },
      { href: "/software-development", label: "Software development" },
    ],
  },
];

export function storyBySlug(slug: string) {
  return workStories.find((s) => s.slug === slug);
}
