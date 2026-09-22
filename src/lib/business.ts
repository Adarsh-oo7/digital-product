/**
 * Single source of truth for NAP and local entity fields.
 *
 * Address, PIN and phone were confirmed from Google Business Profile
 * (owner, 14 Sep 2026): Korani / Chempakamangalam, Kerala 695104.
 *
 * Office vs service area:
 * - Office: Korani, Mangalapuram Panchayat, Thiruvananthapuram district
 * - Service area: Trivandrum / Kerala (not a city-centre office at 695001)
 */
export const SITE_URL = "https://www.digitalproductsolutions.in";

export const business = {
  legalName: "Digital Product Solutions",
  publicName: "Digital Product Solutions",
  description:
    "Registered MSME IT company in Thiruvananthapuram district, Kerala. Websites, software, mobile apps, SEO, WhatsApp automation and AI solutions for small and medium businesses.",

  streetAddress: "Mangalapuram Panchayat, Korani, Chempakamangalam",
  addressLocality: "Korani",
  addressRegion: "Kerala",
  postalCode: "695104",
  addressCountry: "IN",
  addressCountryName: "India",
  district: "Thiruvananthapuram",

  /** One-line visible address (matches GBP). */
  addressLine:
    "Mangalapuram Panchayat, Korani, Chempakamangalam, Kerala 695104",

  telephone: "+919400355185",
  telephoneDisplay: "+91 94003 55185",
  whatsapp: "919400355185",

  emailLeads: "digitalproductkerala@gmail.com",
  /** Schema email — still used in existing layout; role vs Gmail is NEEDS_CONFIRMATION. */
  emailSchema: "adarsh@digitalproductsolutions.in",

  /**
   * Website currently publishes Mon–Sat 09:00–19:00.
   * GBP listing observed as “Open 24 hours” — do not change public hours
   * until the owner confirms which is correct.
   */
  openingHours: "Mo-Sa 09:00-19:00",
  gbpHoursObserved: "Open 24 hours",

  yearsExperience: "4+",
  googleRatingValue: "5.0",
  googleReviewCount: 25,

  sameAs: [
    "https://www.instagram.com/digital_product_solutions/",
    "https://www.facebook.com/Digital.Product.kerala/",
    "https://www.linkedin.com/company/digital-product-adarsh/",
  ] as const,

  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Mangalapuram%20Panchayat%2C%20Korani%2C%20Chempakamangalam%2C%20Kerala%20695104&output=embed",

  gbpCategoryObserved: "Internet marketing service",
} as const;

export const whatsappUrl = (prefill?: string) =>
  prefill
    ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(prefill)}`
    : `https://wa.me/${business.whatsapp}`;

export const telUrl = `tel:${business.telephone}`;

export const postalAddressSchema = {
  "@type": "PostalAddress" as const,
  streetAddress: business.streetAddress,
  addressLocality: business.addressLocality,
  addressRegion: business.addressRegion,
  postalCode: business.postalCode,
  addressCountry: business.addressCountry,
};
