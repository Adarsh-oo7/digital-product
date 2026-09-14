export const verifiedPricing = {
  websiteBasic: { label: "Basic website", from: 5000, to: 8000, delivery: "3–5 days" },
  websiteStandard: { label: "Standard business website", from: 10000, to: 18000, delivery: "7–10 days" },
  websitePremium: { label: "Premium / dynamic website", from: 25000, to: 45000, delivery: "2–3 weeks" },
  ecommerce: { label: "E-commerce website", from: 35000, to: 70000, delivery: "3–4 weeks" },
  softwareFrom: 15000,
  appFrom: 25000,
  seoMonthlyFrom: 5000,
  socialMonthlyFrom: 3000,
  automationFrom: 10000,
  aiFrom: 12000,
  note: "Figures are the ranges currently published on this website. They are starting or package ranges, not a binding quote. Request an estimate for your scope.",
} as const;

export function inr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
