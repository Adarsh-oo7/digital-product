/**
 * Single source of truth for NAP and local entity fields.
 *
 * Public pin is the Google listing the owner shared (Korani,
 * Thiruvananthapuram). Coordinates come from the existing Contact map
 * embed for “Digital product solutions”, not from a panchayat text search.
 *
 * Office vs service area:
 * - Office: Korani, Thiruvananthapuram, Kerala 695104
 * - Service area: Trivandrum / Kerala (not a city-centre office at 695001)
 */
export const SITE_URL = "https://www.digitalproductsolutions.in";

export const business = {
  legalName: "Digital Product Solutions",
  publicName: "Digital Product Solutions",
  description:
    "Registered MSME IT company in Korani, Thiruvananthapuram, Kerala. Websites, software, mobile apps, SEO, WhatsApp automation and AI solutions for small and medium businesses.",

  streetAddress: "Korani",
  addressLocality: "Thiruvananthapuram",
  addressRegion: "Kerala",
  postalCode: "695104",
  addressCountry: "IN",
  addressCountryName: "India",
  district: "Thiruvananthapuram",

  /** One-line visible address (matches the Korani Google pin). */
  addressLine: "Korani, Thiruvananthapuram, Kerala 695104",

  /** Pin from the Contact page Google embed for this business. */
  latitude: 8.660278,
  longitude: 76.838053,

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

  /** Opens the Digital Product Solutions place pin in Korani. */
  mapsUrl: "https://www.google.com/maps?cid=990739385366027106",
  mapsShareUrl: "https://share.google/RQBkpICvuXSo7u45X",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3284626251293!2d76.8380526744956!3d8.660278494652756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x893ab90196d09cb5%3A0xdbfd038c9bb1b62!2sDigital%20product%20solutions!5e0!3m2!1sen!2sin!4v1772689938826!5m2!1sen!2sin",

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

export const geoSchema = {
  "@type": "GeoCoordinates" as const,
  latitude: business.latitude,
  longitude: business.longitude,
};
