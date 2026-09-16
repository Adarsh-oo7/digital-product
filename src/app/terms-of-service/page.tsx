import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/business";
import {
  FileText,
  Scale,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Building2,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Lock,
  Ban,
  Server,
  HelpCircle,
} from "lucide-react";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Digital Product Solutions. Outlines legal terms, acceptable use, software development terms, and WhatsApp Business API / Meta Platform rules.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const lastUpdated = "September 16, 2026";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] via-[#f3f4fd] to-[#edeefa] text-gray-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-16 px-4 border-b border-indigo-100/60 bg-gradient-to-b from-[#ced4fd]/40 via-[#decef9]/30 to-transparent">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -top-40 -left-20" />
          <div className="absolute w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-3xl -bottom-20 -right-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4 text-blue-600" />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our software, websites, CRM solutions, or Meta Platform &amp; WhatsApp Business API automations.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-600">
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Clock className="w-4 h-4 text-blue-600" />
              Effective Date: {lastUpdated}
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Building2 className="w-4 h-4 text-purple-600" />
              Digital Product Solutions
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/80 backdrop-blur border border-blue-100 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Software &amp; Digital Services</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Transparent agreements for websites, web/mobile applications, business CRM tools, and cloud integrations.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur border border-purple-100 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">WhatsApp &amp; Meta APIs</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mandatory recipient consent, strict anti-spam compliance, and alignment with Meta Developer Policies.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur border border-emerald-100 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Fair &amp; Transparent Terms</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Clear intellectual property ownership, milestone deliveries, confidentiality, and data privacy safeguards.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-6 mb-12 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            <a href="#tos-1" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">1.</span> Acceptance of Terms
            </a>
            <a href="#tos-2" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">2.</span> Description of Services
            </a>
            <a href="#tos-3" className="hover:text-blue-600 transition flex items-center gap-2 font-bold text-blue-700">
              <span className="text-blue-600">3.</span> Meta &amp; WhatsApp Business API Terms
            </a>
            <a href="#tos-4" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">4.</span> Client Obligations &amp; Consent
            </a>
            <a href="#tos-5" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">5.</span> Prohibited Uses &amp; Anti-Spam
            </a>
            <a href="#tos-6" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">6.</span> Intellectual Property Rights
            </a>
            <a href="#tos-7" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">7.</span> Payment, Milestones &amp; Refunds
            </a>
            <a href="#tos-8" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">8.</span> Limitation of Liability
            </a>
            <a href="#tos-9" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">9.</span> Termination &amp; Suspension
            </a>
            <a href="#tos-10" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">10.</span> Governing Law &amp; Jurisdiction
            </a>
            <a href="#tos-11" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">11.</span> Contact Information
            </a>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-sm sm:text-base">

          {/* Section 1 */}
          <section id="tos-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-blue-600 shrink-0" />
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;User&quot;, or &quot;you&quot;) and <strong>Digital Product Solutions</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), having its principal office at Mangalasseri Veedu, Edakkode PO, Korani, Thiruvananthapuram, Kerala 695104, India.
            </p>
            <p className="mb-4">
              By accessing our website (<a href={SITE_URL} className="text-blue-600 font-semibold hover:underline">{SITE_URL}</a>), using our CRM platform (<code className="text-xs bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">crm.digitalproductsolutions.in</code>), engaging our development services, or authorizing our Meta Platform and WhatsApp Business Tech Provider integrations (App ID: <code className="text-xs bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">1621336619429207</code>), you agree to be bound by these Terms and our <Link href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</Link>.
            </p>
            <p>
              If you do not agree with any part of these Terms, you must immediately discontinue using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section id="tos-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-blue-600 shrink-0" />
              2. Description of Services
            </h2>
            <p className="mb-4">
              Digital Product Solutions provides high-performance digital products and technical consulting, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>Custom website design, landing page creation, and progressive web application (PWA) development.</li>
              <li>Mobile application engineering for Android and iOS platforms.</li>
              <li>CRM, ERP, and internal business workflow automation systems.</li>
              <li>Technical SEO, website speed optimization, and performance marketing setup.</li>
              <li>
                <strong>WhatsApp Business API &amp; Meta Platform Automation:</strong> Onboarding, configuration, chatbot design, and message template routing as an independent Meta Tech Provider.
              </li>
            </ul>
          </section>

          {/* Section 3 - WhatsApp & Meta Terms (CRITICAL FOR REVIEW) */}
          <section id="tos-3" className="bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 rounded-2xl p-6 sm:p-8 border-2 border-blue-200/80 shadow-sm scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Meta Platform &amp; WhatsApp Business Rules
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-600 shrink-0" />
              3. WhatsApp Business Platform &amp; Meta API Terms
            </h2>
            <p className="mb-4 text-gray-800">
              When utilizing our WhatsApp Business Tech Provider services, automated messaging solutions, and Meta Platform tools:
            </p>

            <div className="space-y-4 my-6">
              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                <h4 className="font-bold text-blue-950 mb-1 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Compliance with Meta Policies
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  You agree to comply with all applicable <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Meta Platform Terms</a>, <a href="https://developers.facebook.com/devpolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Meta Developer Policies</a>, <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">WhatsApp Business Policy</a>, and <a href="https://www.whatsapp.com/legal/commerce-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">WhatsApp Commerce Policy</a>.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                <h4 className="font-bold text-blue-950 mb-1 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Mandatory Recipient Opt-In / Consent
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  You represent and warrant that you have obtained verifiable, affirmative opt-in consent from every recipient before sending them business-initiated messages via our WhatsApp automation tools, in strict accordance with WhatsApp policies.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                <h4 className="font-bold text-blue-950 mb-1 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Honoring Opt-Outs (&quot;STOP&quot;)
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  You must immediately respect and honor any end-user request to stop receiving messages (e.g. replies of &quot;STOP&quot;, &quot;UNSUBSCRIBE&quot;). Our systems automatically support suppression lists, and you agree not to attempt to re-engage unsubscribed recipients without fresh consent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="tos-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
              4. Client Obligations &amp; Account Responsibility
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Accurate Information:</strong> You agree to provide accurate, up-to-date business documentation (such as registered trade name, GSTIN, PAN, and contact credentials) during onboarding.</li>
              <li><strong>Credential Security:</strong> You are responsible for safeguarding your administrative account logins, API keys, and webhook secrets. Any action conducted under your authenticated credentials will be deemed authorized by you.</li>
              <li><strong>Content Responsibility:</strong> You retain sole responsibility for all text, images, brochures, and links distributed through your custom application or WhatsApp messaging broadcasts.</li>
            </ul>
          </section>

          {/* Section 5 - Prohibited Uses */}
          <section id="tos-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Ban className="w-6 h-6 text-red-600 shrink-0" />
              5. Prohibited Uses &amp; Anti-Spam Policy
            </h2>
            <p className="mb-4">
              You agree never to use Digital Product Solutions software, infrastructure, or messaging channels for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                <strong>No Unsolicited Spam:</strong> Sending unsolicited broadcast messages to purchased or scraped phone number lists.
              </div>
              <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                <strong>No Prohibited Goods:</strong> Promoting counterfeit goods, weapons, illegal substances, adult services, or high-risk financial schemes prohibited by Meta Commerce Policies.
              </div>
              <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                <strong>No Phishing or Malware:</strong> Transmitting harmful code, malicious URLs, or deceptive identity spoofing.
              </div>
              <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                <strong>No Reverse Engineering:</strong> Attempting to reverse engineer, decompile, or copy our proprietary automation source code.
              </div>
            </div>
            <p className="mt-4 text-xs text-red-700 font-medium">
              * Any violation of this Section may result in immediate suspension of services, termination of WhatsApp API access, and reporting to Meta Platforms and law enforcement where necessary.
            </p>
          </section>

          {/* Section 6 */}
          <section id="tos-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-blue-600 shrink-0" />
              6. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              <strong>Custom Deliverables:</strong> Upon full payment of all contractual fees, full ownership of bespoke custom source code, website layouts, and creative assets designed specifically for the Client will transfer to the Client.
            </p>
            <p className="mb-4">
              <strong>Pre-Existing Frameworks:</strong> Digital Product Solutions retains all right, title, and interest in our proprietary core boilerplates, reusable modular libraries, automation workflows, and internal tooling used to construct client solutions.
            </p>
            <p>
              <strong>Third-Party Trademarks:</strong> Meta, WhatsApp, Facebook, Instagram, Google, and their respective logos are trademarks of their respective owners. Digital Product Solutions is an independent technology provider.
            </p>
          </section>

          {/* Section 7 */}
          <section id="tos-7" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-blue-600 shrink-0" />
              7. Payment, Milestones &amp; Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Milestone Payments:</strong> Software development projects proceed under agreed milestone structures (typically advance deposit, developmental review, and final production delivery).</li>
              <li><strong>Meta Conversation Charges:</strong> WhatsApp Business Cloud API charges (conversation fees assessed directly by Meta) are billed either directly to your Meta Business Manager payment method or reimbursed according to your service agreement.</li>
              <li><strong>Refund Policy:</strong> Work delivered and approved at completed project milestones is non-refundable due to the custom nature of software engineering services.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="tos-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
              8. Limitation of Liability
            </h2>
            <p className="mb-4 text-gray-700">
              To the maximum extent permitted by applicable Indian law:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>Digital Product Solutions shall not be liable for any indirect, incidental, punitive, or consequential damages, including loss of profits, data, goodwill, or business opportunity.</li>
              <li>We do not guarantee uninterrupted uptime for third-party platforms outside our control, including Meta Cloud API outages, internet service disruptions, or telecom network delays.</li>
              <li>Our aggregate liability for any claims arising under these Terms shall not exceed the total fees paid by you to us in the three (3) months preceding the incident.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="tos-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600 shrink-0" />
              9. Termination &amp; Suspension
            </h2>
            <p className="mb-4">
              Either party may terminate an ongoing service agreement upon thirty (30) days written notice.
            </p>
            <p className="mb-4">
              We reserve the right to suspend or terminate service access immediately without prior notice if you breach these Terms, violate Meta or WhatsApp Business Policies, engage in unsolicited spam, or default on scheduled payments.
            </p>
            <p>
              Upon termination, you may request permanent deletion of your stored data in accordance with our <Link href="/data-deletion" className="text-blue-600 font-semibold hover:underline">Data Deletion Instructions</Link>.
            </p>
          </section>

          {/* Section 10 */}
          <section id="tos-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-blue-600 shrink-0" />
              10. Governing Law &amp; Dispute Resolution
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
            </p>
            <p>
              Any disputes, controversies, or claims arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Thiruvananthapuram, Kerala, India</strong>.
            </p>
          </section>

          {/* Section 11 */}
          <section id="tos-11" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600 shrink-0" />
              11. Contact Information
            </h2>
            <p className="mb-6">
              For questions, clarifications, or contractual notices concerning these Terms of Service:
            </p>

            <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/60 p-6 rounded-2xl border border-indigo-100 space-y-3">
              <div className="font-bold text-gray-900 text-lg">Digital Product Solutions</div>
              <div className="text-sm text-gray-700">
                <strong>Legal Representative:</strong> Adarsh B S (Founder)
              </div>
              <div className="text-sm text-gray-700">
                <strong>Official Address:</strong> Mangalasseri Veedu, Edakkode PO, Korani, Thiruvananthapuram, Kerala 695104, India
              </div>
              <div className="text-sm text-gray-700 flex flex-wrap items-center gap-x-6 gap-y-1">
                <span>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:adarshsarachandran@gmail.com" className="text-blue-600 hover:underline">
                    adarshsarachandran@gmail.com
                  </a>
                  {" / "}
                  <a href="mailto:digitalproductkerala@gmail.com" className="text-blue-600 hover:underline">
                    digitalproductkerala@gmail.com
                  </a>
                </span>
              </div>
              <div className="text-sm text-gray-700">
                <strong>Phone / WhatsApp:</strong>{" "}
                <a href="tel:+919400355185" className="text-blue-600 font-semibold hover:underline">
                  +91 9400355185
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/privacy-policy"
            className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition shadow-sm"
          >
            Read Privacy Policy
          </Link>
          <Link
            href="/data-deletion"
            className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition shadow-sm"
          >
            Data Deletion Instructions
          </Link>
        </div>
      </main>
    </div>
  );
}
