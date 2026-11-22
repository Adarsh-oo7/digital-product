import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";

export const metadata = pageMetadata({
  title: "Supermarket & Pharmacy Billing Software Kerala | GST POS",
  description:
    "Best supermarket, hypermarket & pharmacy billing software in Kerala. Fast barcode POS, medicine batch/expiry alerts, GST filing & multi-branch stock from ₹12,000.",
  path: "/supermarket-pharmacy-billing-software-kerala",
  absoluteTitle: true,
  keywords: [
    "supermarket billing software in kerala",
    "supermarket software kerala",
    "pharmacy billing software kerala",
    "pharmacy billing software price",
    "medical store billing software kerala",
    "hypermarket pos software kerala",
    "gst billing software kerala",
  ],
});

export default function SupermarketPharmacyBillingKeralaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Supermarket, Hypermarket & Pharmacy GST Billing Software in Kerala",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: business.legalName,
      url: SITE_URL,
      telephone: business.telephone,
      hasMap: business.mapsPlaceIdUrl,
    },
    areaServed: ["Thiruvananthapuram", "Kochi", "Thrissur", "Malappuram", "Kozhikode", "Kollam", "Kannur", "Kerala"],
    description:
      "High-speed barcode POS, weighing-scale integration, medicine batch/expiry tracking, WhatsApp digital bills, and GST reports for Kerala supermarkets and pharmacies.",
    offers: {
      "@type": "Offer",
      price: "12000",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the price of supermarket or pharmacy billing software in Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our single-counter pharmacy or retail supermarket GST billing software starts at ₹12,000–₹18,000 one-time setup with 100% data ownership, while multi-counter hypermarket and multi-branch cloud ERP/POS systems range from ₹25,000 to ₹55,000+.",
        },
      },
      {
        "@type": "Question",
        name: "Does your pharmacy billing software track medicine batch numbers, expiry dates, and rack locations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It includes batch-wise stock entry, 60/90-day near-expiry alerts, salt/generic substitute search, Schedule H/H1 register reports, and GST HSN summaries.",
        },
      },
      {
        "@type": "Question",
        name: "Does the supermarket software work offline if internet drops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Billing counters continue scanning barcodes, printing thermal receipts, and reading electronic weighing scales offline, syncing automatically to the owner's mobile dashboard once internet resumes.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "POS Billing Software Kerala", item: `${SITE_URL}/pos-billing-software-kerala` },
      { "@type": "ListItem", position: 3, name: "Supermarket & Pharmacy Billing", item: `${SITE_URL}/supermarket-pharmacy-billing-software-kerala` },
    ],
  };

  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-1.5 rounded-full mb-4 font-semibold">
            Offline-First Barcode POS · Medicine Batch/Expiry · GST GSTR-1 Ready
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Supermarket &amp; Pharmacy{" "}
            <span className="text-blue-600">Billing Software in Kerala</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purpose-built for <strong>Kerala supermarkets, margin-free markets, hypermarkets,
            medical stores, and Ayurvedic pharmacies</strong>. Sub-second barcode scanning,
            weighing-scale sync, near-expiry alerts, WhatsApp digital invoices, and live owner
            mobile dashboard — starting at <strong>₹12,000</strong> with zero per-bill commission.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Book Free Live POS Demo
            </Link>
            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20a%20demo%20of%20Supermarket%20%2F%20Pharmacy%20Billing%20Software"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 bg-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp POS Engineer
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Supermarket &amp; Hypermarket POS Features
            </h2>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>• High-speed USB/wireless barcode scanner &amp; thermal label printing</li>
              <li>• Electronic weighing-scale integration for loose groceries, fruits &amp; fish/meat</li>
              <li>• Customer loyalty points, MRP vs Our Price savings display &amp; combo offers</li>
              <li>• Multi-counter offline billing + live owner mobile sales &amp; stock app</li>
              <li>• Optional online home-delivery storefront synced with store inventory</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pharmacy &amp; Medical Store Billing Features
            </h2>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>• Batch number, MRP, strip-to-tablet loose billing &amp; rack/shelf location</li>
              <li>• Automatic 30/60/90-day near-expiry alerts &amp; distributor return memos</li>
              <li>• Chemical/generic salt composition search for instant substitute suggestion</li>
              <li>• Doctor prescription history, Schedule H/H1 logs &amp; WhatsApp refill reminders</li>
              <li>• 1-click GSTR-1 / GSTR-3B HSN summary export for your Chartered Accountant</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((f) => (
            <div key={f.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{f.name}</h3>
              <p className="text-gray-600 text-sm">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
