import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import {
  Trash2,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  MessageSquare,
  Facebook,
  Database,
  FileCheck,
} from "lucide-react";

export const metadata = pageMetadata({
  title: "Data Deletion Instructions",
  description:
    "Official User Data Deletion Instructions for Digital Product Solutions (Meta App ID: 1621336619429207). Learn how to request permanent deletion of your data and WhatsApp Business records.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  const lastUpdated = "September 16, 2026";
  const appId = "1621336619429207";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] via-[#f3f4fd] to-[#edeefa] text-gray-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-16 px-4 border-b border-indigo-100/60 bg-gradient-to-b from-[#ced4fd]/40 via-[#decef9]/30 to-transparent">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl -top-40 -left-20" />
          <div className="absolute w-[450px] h-[450px] bg-blue-200/30 rounded-full blur-3xl -bottom-20 -right-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trash2 className="w-4 h-4 text-emerald-600" />
            Meta Platform &amp; User Privacy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            User Data Deletion Instructions
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Step-by-step guide on how to request the permanent deletion of your personal information, Meta Platform Data, and WhatsApp Business API records held by Digital Product Solutions.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-600">
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Clock className="w-4 h-4 text-blue-600" />
              Effective Date: {lastUpdated}
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Building2 className="w-4 h-4 text-purple-600" />
              App: Digital Product Solutions
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 shadow-sm font-mono text-gray-700">
              App ID: {appId}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Compliance Notice */}
        <div className="bg-emerald-50/80 border-2 border-emerald-300/80 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-emerald-950 mb-1">
                Your Right to Data Deletion
              </h2>
              <p className="text-sm text-emerald-900 leading-relaxed">
                In compliance with <strong>Meta Platform Terms</strong>, <strong>Developer Policies</strong>, and India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, Digital Product Solutions provides full control over your data. We do not retain your personal data longer than necessary, and you may permanently purge your data from our systems at any time without fees.
              </p>
            </div>
          </div>
        </div>

        {/* Overview of Stored Data */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Database className="w-6 h-6 text-blue-600 shrink-0" />
            What Data Can Be Deleted?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Upon your request, all of the following data associated with your identity or business will be permanently and irreversibly purged:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Meta Platform Data:</strong> WhatsApp Business Account tokens, IDs, and authorized credentials.</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Messaging Logs &amp; Webhooks:</strong> Inbound/outbound message payloads, timestamps, and delivery receipts.</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Customer Contact Details:</strong> Phone numbers, names, email addresses, and CRM record profiles.</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Chatbot &amp; Support Histories:</strong> Inquiries submitted via web chatbot or contact forms.</span>
            </div>
          </div>
        </div>

        {/* Deletion Methods */}
        <div className="space-y-8 mb-12">
          {/* Method 1: Email Request */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-200/80 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Method 1 · Recommended for All Users &amp; Businesses
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600 shrink-0" />
              Direct Email Deletion Request
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              You can initiate a complete data purge by sending a request from the email address associated with your account or service.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Send Email to Our Compliance Team</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    Compose an email to: <a href="mailto:adarshsarachandran@gmail.com" className="font-semibold text-blue-600 hover:underline">adarshsarachandran@gmail.com</a> with a copy to <a href="mailto:digitalproductkerala@gmail.com" className="font-semibold text-blue-600 hover:underline">digitalproductkerala@gmail.com</a>.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Include Specific Subject &amp; Identifiers</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    Subject line: <code className="text-xs bg-gray-200/80 text-blue-800 font-mono px-1.5 py-0.5 rounded font-bold">Data Deletion Request - App ID 1621336619429207</code>.
                    <br />
                    In the email body, please specify:
                  </p>
                  <ul className="list-disc pl-5 mt-1 text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>Your full name and company/trade name</li>
                    <li>Registered phone number (used for WhatsApp messaging)</li>
                    <li>WhatsApp Business Account (WABA) ID if known</li>
                    <li>Specify whether you want a partial or complete account wipe</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Verification &amp; Confirmation Ticket</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    Within <strong>48 hours</strong>, our Grievance Officer will issue a unique Deletion Request Ticket ID and verify your identity to prevent unauthorized deletions.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Permanent Purge (Within 30 Days)</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    All associated records are permanently erased across production databases, backups, and API caches within <strong>30 calendar days</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Completion Certificate</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    A formal completion email will be delivered to you confirming the permanent removal of your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="mailto:adarshsarachandran@gmail.com?cc=digitalproductkerala@gmail.com&subject=Data%20Deletion%20Request%20-%20App%20ID%201621336619429207"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-sm"
              >
                Send Deletion Request Email <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Method 2: Facebook / Meta Settings */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Method 2 · For Users Connected via Facebook
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Facebook className="w-6 h-6 text-blue-600 shrink-0" />
              Remove App via Facebook Account Settings
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              If you connected with Digital Product Solutions through Facebook Login or Meta Business Manager, you can revoke access and delete your activity directly from Facebook:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700 mb-4">
              <li>Log in to your Facebook profile and click on your profile picture in the top right.</li>
              <li>Go to <strong>Settings &amp; Privacy</strong> &rarr; <strong>Settings</strong>.</li>
              <li>In the left sidebar, navigate to <strong>Apps and Websites</strong> (or <strong>Business Integrations</strong>).</li>
              <li>Locate <strong>Digital Product Solutions</strong> (App ID: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded text-xs">{appId}</code>).</li>
              <li>Click <strong>Remove</strong>.</li>
              <li>
                In the pop-up modal, check the option to <em>&quot;Delete posts, videos or events that Digital Product Solutions posted on your timeline&quot;</em> and click <strong>Remove</strong>.
              </li>
              <li>Click <strong>View Removed Apps and Websites</strong> and click on <strong>Digital Product Solutions</strong> &rarr; <strong>Send Request</strong> to automatically trigger Meta&apos;s data deletion request notification to our servers.</li>
            </ol>
          </div>

          {/* Method 3: WhatsApp In-Chat Opt-Out */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Method 3 · For End-User WhatsApp Recipients
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-emerald-600 shrink-0" />
              Instant WhatsApp Chat Opt-Out (&quot;STOP&quot;)
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              If you are a consumer or client end-user who has received automated notifications, order alerts, or updates from a business powered by our WhatsApp API systems:
            </p>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-sm text-emerald-950 space-y-2">
              <p>
                Simply reply with the word <strong>&quot;STOP&quot;</strong>, <strong>&quot;UNSUBSCRIBE&quot;</strong>, or <strong>&quot;DELETE&quot;</strong> in the WhatsApp conversation at any time.
              </p>
              <p className="text-xs text-emerald-800">
                Our messaging engine will instantly suppress your phone number from any future automated broadcast or notification queue, and mark your contact details for routine automated purge.
              </p>
            </div>
          </div>
        </div>

        {/* Tracking & Status Check */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-blue-600 shrink-0" />
            Check Deletion Status
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            If you have already submitted a deletion request and wish to check its real-time processing status, please email <a href="mailto:adarshsarachandran@gmail.com" className="text-blue-600 font-semibold hover:underline">adarshsarachandran@gmail.com</a> with your unique Ticket Confirmation ID. Our data privacy officer will provide an update within 24 business hours.
          </p>
        </div>

        {/* Grievance Officer & Contact Card */}
        <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/60 p-6 sm:p-8 rounded-2xl border border-indigo-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">
            Data Protection &amp; Grievance Officer Details
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Direct contact for all Meta App Review verifications, data deletion notices, and privacy queries:
          </p>

          <div className="space-y-2 text-sm text-gray-800">
            <div><strong>Company:</strong> Digital Product Solutions</div>
            <div><strong>Designated Officer:</strong> Adarsh B S (Founder &amp; Technical Lead)</div>
            <div>
              <strong>Address:</strong> Mangalasseri Veedu, Edakkode PO, Korani, Thiruvananthapuram, Kerala 695104, India
            </div>
            <div>
              <strong>Contact Email:</strong>{" "}
              <a href="mailto:adarshsarachandran@gmail.com" className="text-blue-600 hover:underline">
                adarshsarachandran@gmail.com
              </a>
              {" / "}
              <a href="mailto:digitalproductkerala@gmail.com" className="text-blue-600 hover:underline">
                digitalproductkerala@gmail.com
              </a>
            </div>
            <div>
              <strong>Phone / WhatsApp:</strong>{" "}
              <a href="tel:+919400355185" className="text-blue-600 font-semibold hover:underline">
                +91 9400355185
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/privacy-policy"
            className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition shadow-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
