"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { SITE_URL, business } from "@/lib/business";

const budgets = [
  "Below ₹35,000",
  "₹35,000–₹75,000",
  "₹75,000–₹1,50,000",
  "₹1,50,000–₹3,00,000",
  "₹3,00,000–₹6,00,000",
  "Above ₹6,00,000",
  "Not sure; need guidance",
];

export default function DiasporaEnquiryForm({
  path,
  pageTitle,
}: {
  path: string;
  pageTitle: string;
}) {
  const [started, setStarted] = useState(false);
  const [sent, setSent] = useState(false);
  const next = `${SITE_URL}${path}?sent=1`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSent(params.get("sent") === "1");
  }, []);

  if (sent) {
    return (
      <section id="consultation" className="mt-16 rounded-3xl border border-green-100 bg-green-50 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Thank you</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Your estimate request is in</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-700">
          We received the form. The Kerala team reads it on Monday to Saturday and replies to the email or WhatsApp number you entered, usually within 24–48 hours. Your details are not published on this page.
        </p>
        <ol className="mt-6 space-y-3 text-gray-700">
          <li>1. Check the inbox you typed, including spam, for the reply.</li>
          <li>2. If you need to add a file or a correction, email hello@digitalproductsolutions.in.</li>
          <li>3. Or message the same request on WhatsApp.</li>
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:hello@digitalproductsolutions.in" className="rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white">
            Email hello@digitalproductsolutions.in
          </a>
          <a href={`https://wa.me/${business.whatsapp}`} className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-900">
            WhatsApp the team
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="mt-16 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
      <h2 className="text-2xl font-bold text-gray-900">Request an estimate</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Tell us the country, the service and a budget range. The written estimate confirms the price. You can also email hello@digitalproductsolutions.in directly. The form itself still goes to the existing enquiry inbox.
      </p>
      <form
        action={`https://formsubmit.co/${business.emailLeads}`}
        method="POST"
        className="mt-6 grid gap-4 md:grid-cols-2"
        onFocus={() => {
          if (!started) {
            setStarted(true);
            track("form_start", { page: path });
          }
        }}
        onSubmit={() => track("submit_consultation_form", { page: path })}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value={`Diaspora enquiry: ${pageTitle}`} />
        <input type="hidden" name="_next" value={next} />
        <input type="hidden" name="landing_page" value={path} />
        <Field label="Name" name="name" required />
        <Field label="Business name" name="business_name" required />
        <Field label="Country" name="country" required />
        <Field label="City or region" name="city" />
        <Field label="Business type" name="business_type" required />
        <label className="block text-sm font-medium text-gray-800">
          Existing or new business
          <select name="business_stage" className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" defaultValue="new">
            <option value="new">New business</option>
            <option value="existing">Existing business</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-800">
          Required service
          <select name="service" required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" defaultValue="website">
            <option value="website">Business website</option>
            <option value="ecommerce">E-commerce website</option>
            <option value="software">Custom software</option>
            <option value="crm">CRM and lead management</option>
            <option value="app">Mobile application</option>
            <option value="booking">Booking or ordering system</option>
            <option value="whatsapp">WhatsApp automation</option>
            <option value="seo">SEO</option>
            <option value="analytics">Analytics or reporting</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </label>
        <Field label="Current website URL, if you have one" name="website_url" type="url" />
        <Field label="Expected launch date" name="launch_date" />
        <label className="block text-sm font-medium text-gray-800">
          Approximate budget in INR
          <select name="budget_inr" required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" defaultValue={budgets[6]}>
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-800">
          Preferred contact
          <select name="contact_method" className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" defaultValue="WhatsApp">
            <option>WhatsApp</option>
            <option>Email</option>
            <option>Phone</option>
          </select>
        </label>
        <Field label="WhatsApp number or email" name="contact_detail" required />
        <label className="block text-sm font-medium text-gray-800 md:col-span-2">
          Main business problem
          <textarea name="problem" required rows={4} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" />
        </label>
        <label className="flex items-start gap-2 text-sm text-gray-600 md:col-span-2">
          <input type="checkbox" name="consent" value="yes" required className="mt-1" />
          <span>
            I agree to be contacted about this enquiry. Read the{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link>.
          </span>
        </label>
        <button type="submit" className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white md:col-span-2 md:w-fit">
          Request exact estimate
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-gray-800">
      {label}
      <input type={type} name={name} required={required} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" />
    </label>
  );
}
