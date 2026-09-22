import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, SITE_URL } from "@/lib/business";
import {
  ShieldCheck,
  Lock,
  FileText,
  Trash2,
  Building2,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Database,
  Eye,
  MessageSquare,
  Share2,
  AlertCircle,
  ArrowRight,
  Server,
} from "lucide-react";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Official Privacy Policy of Digital Product Solutions. Details how we collect, use, and safeguard user data, our Meta Platform & WhatsApp Business API compliance, and step-by-step user data deletion instructions.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 16, 2026";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] via-[#f3f4fd] to-[#edeefa] text-gray-900">
      {/* Hero / Header Section */}
      <section className="relative overflow-hidden pt-28 pb-16 px-4 border-b border-indigo-100/60 bg-gradient-to-b from-[#ced4fd]/40 via-[#decef9]/30 to-transparent">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -top-40 -left-20" />
          <div className="absolute w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-3xl -bottom-20 -right-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            How Digital Product Solutions collects, uses, protects, and manages personal data, including our Meta Platform & WhatsApp Business API operations and data deletion instructions.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-600">
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Clock className="w-4 h-4 text-blue-600" />
              Last Updated: {lastUpdated}
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Building2 className="w-4 h-4 text-purple-600" />
              Entity: {business.legalName}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/80 backdrop-blur border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Zero Data Selling</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We never sell, trade, or monetize your personal details or Meta Platform data to data brokers or ad networks.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur border border-purple-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Meta & WhatsApp API</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Data accessed via WhatsApp Business APIs is strictly used for authorized business messaging and automation.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur border border-emerald-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Easy Data Deletion</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              You retain full control over your data. Request complete deletion anytime with guaranteed 30-day resolution.
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
            <a href="#section-1" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">1.</span> About Us & Scope
            </a>
            <a href="#section-2" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">2.</span> Information We Collect
            </a>
            <a href="#section-3" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">3.</span> Meta Platform & WhatsApp Data
            </a>
            <a href="#section-4" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">4.</span> How We Use Your Data
            </a>
            <a href="#section-5" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">5.</span> Data Sharing & Sub-Processors
            </a>
            <a href="#section-6" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">6.</span> Data Retention Policy
            </a>
            <a href="#section-7" className="hover:text-blue-600 transition flex items-center gap-2 font-bold text-blue-700">
              <span className="text-blue-600">7.</span> User Data Deletion Instructions
            </a>
            <a href="#section-8" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">8.</span> Data Security Standards
            </a>
            <a href="#section-9" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">9.</span> Your Legal Rights (DPDP Act)
            </a>
            <a href="#section-10" className="hover:text-blue-600 transition flex items-center gap-2">
              <span className="text-blue-500 font-semibold">10.</span> Grievance Officer & Contact
            </a>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-sm sm:text-base">

          {/* Section 1 */}
          <section id="section-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-blue-600 shrink-0" />
              1. About Us & Scope
            </h2>
            <p className="mb-4">
              <strong>Digital Product Solutions</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a registered MSME technology agency based in Korani, Thiruvananthapuram, Kerala 695104, India. We operate the website <a href={SITE_URL} className="text-blue-600 font-semibold hover:underline">{SITE_URL}</a> and build custom software, web applications, mobile apps, business automations, and AI integrations.
            </p>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, process, disclose, and safeguard personal information when:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>You browse our website, submit inquiries, or use our project cost estimators and calculators.</li>
              <li>You engage us for custom software development, mobile apps, web design, or digital transformation.</li>
              <li>
                You or your business uses our <strong>WhatsApp Business Solutions</strong> and Meta Platform integrations, where we act as a <strong>Tech Provider / Solution Provider</strong> utilizing Meta APIs (including <code className="text-xs bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">whatsapp_business_messaging</code> and <code className="text-xs bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">whatsapp_business_management</code>).
              </li>
            </ul>
            <p>
              By accessing our website or using our services, you acknowledge that you have read, understood, and agreed to the practices outlined in this Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-blue-600 shrink-0" />
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information in three ways: information you provide directly, technical data gathered automatically, and integration data received through authorized third-party APIs.
            </p>

            <h3 className="font-bold text-gray-900 text-base sm:text-lg mt-6 mb-2">A. Information You Provide Voluntarily</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Contact & Identification Details:</strong> Name, business name, email address, phone number, and physical office address submitted via our contact forms, booking links, or email communications.</li>
              <li><strong>Project Inquiries & Specs:</strong> Requirements, estimated budgets, architectural goals, and technical specifications you share with us to quote or deliver services.</li>
              <li><strong>Billing & Contract Data:</strong> Invoicing details, tax identification numbers (e.g. GSTIN), and payment confirmation records necessary for contract execution.</li>
            </ul>

            <h3 className="font-bold text-gray-900 text-base sm:text-lg mt-6 mb-2">B. Automatically Collected Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, device characteristics, language preferences, referring URLs, and pages visited.</li>
              <li><strong>Cookies & Analytics:</strong> We use aggregated web analytics (Google Analytics <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">G-W95558LF2R</code>) and local session storage strictly to measure site speed, visitor trends, and performance.</li>
              <li><strong>Support Chat Logs:</strong> Queries submitted through our live chat widget (powered by fastbots.ai) to answer customer questions about our development capabilities.</li>
            </ul>
          </section>

          {/* Section 3 - Meta & WhatsApp Business API */}
          <section id="section-3" className="bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 rounded-2xl p-6 sm:p-8 border-2 border-blue-200/80 shadow-sm scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Meta App Review & Tech Provider Compliance
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-600 shrink-0" />
              3. Meta Platform & WhatsApp Business API Data
            </h2>
            <p className="mb-4 text-gray-800">
              Digital Product Solutions develops and manages automated communication software that connects to Meta Platforms, Inc. via the <strong>WhatsApp Business Cloud API</strong> and <strong>Meta Graph API</strong>. When operating as an independent Tech Provider:
            </p>

            <div className="space-y-4 my-6">
              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  WhatsApp Business Management (<code className="text-xs bg-blue-50 text-blue-800 px-1 py-0.5 rounded font-mono">whatsapp_business_management</code>)
                </h4>
                <p className="text-sm text-gray-700">
                  We access WhatsApp Business Account (WABA) IDs, Phone Number IDs, display names, and message template configurations solely to onboard clients, register sender phone numbers, configure message templates, and manage business assets on behalf of the registered business client.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  WhatsApp Business Messaging (<code className="text-xs bg-blue-50 text-blue-800 px-1 py-0.5 rounded font-mono">whatsapp_business_messaging</code>)
                </h4>
                <p className="text-sm text-gray-700">
                  We process end-user phone numbers, outbound message payloads, delivery receipts, read receipts, and inbound customer responses strictly to deliver notifications, alerts, transactional order updates, customer service replies, and automated chatbot workflows requested by our clients.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 text-base mt-6 mb-3">Strict Meta Policy Commitments:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Sale of Meta Platform Data:</strong> We do not sell, rent, lease, sublicense, transfer, or commercialize any Meta Platform Data, customer phone numbers, or WhatsApp message records to data brokers, ad networks, or third parties.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Surveillance or Profiling:</strong> We do not process WhatsApp message contents or user identifiers for surveillance, credit assessment, employment background checks, or unauthorized profiling.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Authorized Use Only:</strong> Data is handled strictly in accordance with Meta Platform Terms, Developer Policies, and WhatsApp Business Terms of Service.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-blue-600 shrink-0" />
              4. How We Use Your Data
            </h2>
            <p className="mb-4">
              We process personal information only for legitimate, transparent business purposes, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Service Delivery</h4>
                <p className="text-xs text-gray-600">Building, hosting, testing, and supporting custom software, web platforms, and mobile applications.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Business Automation</h4>
                <p className="text-xs text-gray-600">Executing authorized WhatsApp chatbot workflows, notifications, and CRM synchronizations.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Customer Support</h4>
                <p className="text-xs text-gray-600">Responding to inquiries, resolving software bugs, delivering technical assistance, and billing.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Legal & Security</h4>
                <p className="text-xs text-gray-600">Preventing fraudulent activity, ensuring network security, and fulfilling legal/tax obligations in India.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Share2 className="w-6 h-6 text-blue-600 shrink-0" />
              5. Data Sharing & Sub-Processors
            </h2>
            <p className="mb-4">
              We do not sell personal data. We only share information with trusted third-party service providers (sub-processors) who assist us in operating our services under strict contractual confidentiality:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Meta Platforms, Inc.:</strong> Via the WhatsApp Business Cloud API for routing and delivering messages.</li>
              <li><strong>Cloud Hosting & Infrastructure:</strong> Scalable, encrypted cloud servers (such as Vercel, AWS, or Cloudflare) for hosting web apps and API endpoints.</li>
              <li><strong>Communication & Form Handling:</strong> FormSubmit and Google Workspace for handling lead inquiries sent to our corporate email.</li>
              <li><strong>Statutory Authorities:</strong> If required by court order, law enforcement, or competent government authorities under applicable Indian law.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-blue-600 shrink-0" />
              6. Data Retention Policy
            </h2>
            <p className="mb-4">
              We adhere to data minimization and do not keep personal data longer than necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Client Account Data:</strong> Retained for the duration of the commercial agreement and up to 5 years thereafter to comply with Indian accounting, tax, and legal requirements.</li>
              <li><strong>WhatsApp Message Logs & Webhook Payloads:</strong> Transient messaging logs, delivery receipts, and payload metadata are retained on our servers for a maximum of <strong>90 days</strong> for error diagnosis and delivery verification, after which they are permanently purged.</li>
              <li><strong>Website Inquiries:</strong> Contact form inquiries that do not convert into active contracts are deleted or anonymized within 12 months.</li>
            </ul>
          </section>

          {/* Section 7 - User Data Deletion Instructions (CRITICAL FOR META) */}
          <section id="section-7" className="bg-gradient-to-br from-emerald-50/70 via-white to-blue-50/50 rounded-2xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Meta Requirement · User Data Deletion Instructions
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Trash2 className="w-6 h-6 text-emerald-700 shrink-0" />
              7. User Data Deletion Instructions
            </h2>
            <p className="mb-4 text-gray-800">
              In compliance with Meta Platform Terms, Developer Policies, and the Digital Personal Data Protection Act, 2023, Digital Product Solutions provides an immediate, transparent mechanism for any user or business to request the complete deletion of their personal data, account information, and Meta Platform data.
            </p>

            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3">Step-by-Step Instructions to Request Data Deletion:</h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Send an Email Request</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Send an email from your registered address to <a href="mailto:digitalproductkerala@gmail.com" className="font-semibold text-blue-600 hover:underline">digitalproductkerala@gmail.com</a> with a copy to <a href="mailto:adarsh@digitalproductsolutions.in" className="font-semibold text-blue-600 hover:underline">adarsh@digitalproductsolutions.in</a>.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Specify Your Details</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Include the subject line: <code className="text-xs bg-gray-100 text-emerald-800 font-mono px-1 py-0.5 rounded font-bold">Data Deletion Request - WhatsApp / DPS</code>. In the body, provide your full name, registered phone number (used with WhatsApp), company name, and the specific data you wish to remove.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Verification & Processing</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Our Data Grievance Team will acknowledge your request within <strong>48 hours</strong> with a unique confirmation ticket number. We will verify ownership to protect against unauthorized deletion.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Permanent Purge (Within 30 Days)</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Within <strong>30 calendar days</strong>, all requested personal data, WhatsApp message records, contact entries, and Meta platform credentials will be permanently and irreversibly purged from our active databases, logs, and backups.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Confirmation Delivered</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    You will receive a formal closure email verifying that your data has been successfully deleted.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-100/60 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <strong>End-User WhatsApp Messaging Opt-Out:</strong> If you are an end-user receiving messages from a business powered by our software, you may reply with &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; directly in the WhatsApp chat at any time.
              </div>
              <a
                href="mailto:digitalproductkerala@gmail.com?subject=Data%20Deletion%20Request%20-%20WhatsApp%20%2F%20DPS"
                className="inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold text-xs transition shadow-sm"
              >
                Send Deletion Request <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-blue-600 shrink-0" />
              8. Data Security Standards
            </h2>
            <p className="mb-4">
              We implement industry-grade technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li><strong>Encryption in Transit:</strong> All website and API traffic is strictly routed over TLS 1.3 / HTTPS encryption.</li>
              <li><strong>API Token Security:</strong> Meta Graph API access tokens and webhook secret keys are stored in encrypted secret vaults with restricted access.</li>
              <li><strong>Access Controls:</strong> Role-based access control (RBAC) and mandatory two-factor authentication (2FA) for engineers and administrative personnel.</li>
              <li><strong>Regular Audits:</strong> Ongoing code analysis and vulnerability assessments of our software architecture.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
              9. Your Legal Rights (DPDP Act, 2023)
            </h2>
            <p className="mb-4">
              Under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and international data privacy benchmarks, you have the following rights regarding your personal data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <strong>Right to Access:</strong> Request a summary of personal data being processed.
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <strong>Right to Correction:</strong> Request correction or updating of misleading or inaccurate data.
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <strong>Right to Erasure:</strong> Request deletion of data no longer necessary for the specified purpose.
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <strong>Right to Grievance Redressal:</strong> Direct complaints to our designated Grievance Officer.
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600 shrink-0" />
              10. Grievance Officer & Contact Information
            </h2>
            <p className="mb-6">
              In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the details of our designated Grievance Officer are published below:
            </p>

            <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/60 p-6 rounded-2xl border border-indigo-100 space-y-3">
              <div className="font-bold text-gray-900 text-lg">Digital Product Solutions</div>
              <div className="text-sm text-gray-700">
                <strong>Grievance Officer:</strong> Adarsh B S (Founder & Technical Lead)
              </div>
              <div className="text-sm text-gray-700">
                <strong>Office Address:</strong> {business.addressLine}, India
              </div>
              <div className="text-sm text-gray-700 flex flex-wrap items-center gap-x-6 gap-y-1">
                <span>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:digitalproductkerala@gmail.com" className="text-blue-600 hover:underline">
                    digitalproductkerala@gmail.com
                  </a>
                  {" / "}
                  <a href="mailto:adarsh@digitalproductsolutions.in" className="text-blue-600 hover:underline">
                    adarsh@digitalproductsolutions.in
                  </a>
                </span>
              </div>
              <div className="text-sm text-gray-700">
                <strong>Telephone / WhatsApp:</strong>{" "}
                <a href="tel:+919400355185" className="text-blue-600 font-semibold hover:underline">
                  +91 9400355185
                </a>
              </div>
              <div className="text-xs text-gray-500 pt-2 border-t border-indigo-200/60">
                Response timeframe: All grievance notices and data deletion inquiries are acknowledged within 48 business hours and resolved within 30 days.
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
              11. Updates to this Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may revise this Privacy Policy periodically to reflect technological advances, changes in Meta Developer Policies, or applicable legal obligations. Any updates will be published immediately on this URL with the revised &quot;Last Updated&quot; date. We encourage users to review this page regularly.
            </p>
          </section>

        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition shadow-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-sm"
          >
            Contact Our Team
          </Link>
        </div>
      </main>
    </div>
  );
}
