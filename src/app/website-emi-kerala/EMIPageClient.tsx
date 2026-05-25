"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { EmiBanner } from "@/components/EmiBanner";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useCountdown(targetDate: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    };
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const EMI_PLANS = [
  {
    months: 3,
    label: "3 Month Plan",
    labelMl: "No Cost EMI — Extra charge ഇല്ല",
    amount: "≈ ₹2,166",
    amountSub: "/ month",
    best: true,
    perks: [
      "No Cost EMI — Extra charges ഒന്നും ഇല്ല",
      "Equal monthly payments",
      "Faster website ownership",
      "Best overall value",
    ],
  },
  {
    months: 6,
    label: "6 Month Plan",
    labelMl: "ചെറിയ Monthly Payment",
    amount: "Flexible",
    amountSub: "lower / month",
    best: false,
    perks: [
      "Lower monthly payment",
      "Flexible installments",
      "Ideal for growing businesses",
    ],
  },
  {
    months: 8,
    label: "8 Month Plan",
    labelMl: "Budget-friendly ആയ Option",
    amount: "Lowest",
    amountSub: "monthly",
    best: false,
    perks: [
      "Smallest monthly installment",
      "Budget friendly for startups",
      "Easy cash flow management",
    ],
  },
] as const;

const FEATURES = [
  { en: "Professional Design", ml: "നല്ല ഡിസൈൻ" },
  { en: "Mobile Responsive", ml: "Mobile-ൽ Perfect" },
  { en: "WhatsApp Button", ml: "Direct Contact" },
  { en: "SEO Ready Pages", ml: "Google Ranking" },
  { en: "Contact Forms", ml: "Inquiry Form" },
  { en: "Fast Loading", ml: "Quick Load" },
  { en: "Secure SSL Setup", ml: "SSL Security" },
  { en: "1 Year Free Hosting", ml: "Hosting സൗജന്യം" },
  { en: "Google Ready Setup", ml: "Search Indexing" },
  { en: "Business Pages", ml: "Home, About, Services" },
  { en: "Modern UI Design", ml: "Latest Design" },
  { en: "Support & Help", ml: "Support ലഭ്യം" },
];

const FOR_WHOM = [
  { en: "Shops", ml: "കടകൾ" },
  { en: "Restaurants", ml: "ഹോട്ടൽ" },
  { en: "Clinics", ml: "ക്ലിനിക്" },
  { en: "Boutiques", ml: "ബൂട്ടിക്" },
  { en: "Startups", ml: "Startups" },
  { en: "Gyms", ml: "ജിം" },
  { en: "Freelancers", ml: "Freelancer" },
  { en: "Agencies", ml: "Agency" },
  { en: "Salons", ml: "സലൂൺ" },
];

const WHY_EMI = [
  { icon: "🚀", en: "Launch Now, Pay Later", ml: "Wait ചെയ്യാതെ ഇന്നുതന്നെ Online ആകൂ" },
  { icon: "💰", en: "No Huge Upfront Cost", ml: "₹1000 മാത്രം കൊടുത്ത് project start ചെയ്യാം" },
  { icon: "📈", en: "Start Marketing Early", ml: "Website live ആകുമ്പോൾ തന്നെ customer കിട്ടി തുടങ്ങും" },
  { icon: "✅", en: "Build Brand Credibility", ml: "Professional website — customers trust ചെയ്യും" },
];

const FAQS = [
  {
    q: "Can I start the project with just ₹1000?",
    qMl: "₹1000 കൊണ്ട് project start ആകുമോ?",
    a: "Yes! ₹1000 initial payment-ൽ project start ആകും. ബാക്കി amount EMI-ൽ pay ചെയ്യാം.",
  },
  {
    q: "Is the 3 Month plan really No Cost EMI?",
    qMl: "3 Month plan-ൽ extra charge ഉണ്ടോ?",
    a: "ഇല്ല. 3 Month plan No Cost EMI ആണ്. Extra EMI charges ഒന്നും ഇല്ല.",
  },
  {
    q: "Is hosting included in the package?",
    qMl: "Hosting ഉൾപ്പെടുന്നുണ്ടോ?",
    a: "Yes! Anniversary offer-ൽ 1 Year FREE Hosting ഉൾപ്പെടുന്നു. Domain charges extra ആണ്.",
  },
  {
    q: "How long does website development take?",
    qMl: "Website ready ആകാൻ എത്ര ദിവസം?",
    a: "Simple websites usually complete faster. Timeline depends on features and requirements. We discuss it after booking.",
  },
  {
    q: "Can I add more pages later?",
    qMl: "Later-ൽ pages add ചെയ്യാനാകുമോ?",
    a: "Yes. Additional pages and features add ചെയ്യാം. Project complete ആയ ശേഷവും upgrade option ഉണ്ട്.",
  },
];

type PricingStyle = "strike" | "orange" | "normal" | "green" | "muted" | "total";
const PRICING: { label: string; labelMl: string; value: string; style: PricingStyle }[] = [
  { label: "Market Value", labelMl: "Original Price", value: "₹16,000", style: "strike" },
  { label: "Anniversary Offer Price", labelMl: "ഓഫർ വില", value: "₹7,499", style: "orange" },
  { label: "Initial Payment", labelMl: "ആദ്യ payment", value: "₹1,000", style: "normal" },
  { label: "Remaining Balance", labelMl: "ബാക്കി EMI-ൽ", value: "₹6,499", style: "normal" },
  { label: "Hosting", labelMl: "1 Year FREE", value: "FREE", style: "green" },
  { label: "Domain", labelMl: "Domain charge", value: "Extra", style: "muted" },
  { label: "You Save", labelMl: "", value: "₹8,501 + Hosting", style: "total" },
];

// ─── Workflow steps ───────────────────────────────────────────────────────────

const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: "💬",
    en: "Requirement Gathering",
    ml: "ആവശ്യങ്ങൾ മനസ്സിലാക്കുന്നു",
    desc: "We discuss your business goals, design preferences, pages needed, and any special features via WhatsApp or call.",
    descMl: "WhatsApp / Call-ൽ ബിസിനസ്സ് details, design ideas, pages ഒക്കെ discuss ചെയ്യും.",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-500",
    connector: true,
  },
  {
    step: "02",
    icon: "📋",
    en: "Proposal & Quotation",
    ml: "Proposal അയക്കുന്നു",
    desc: "You receive a detailed proposal with scope, timeline, EMI plan options, and total cost — no hidden charges.",
    descMl: "Scope, timeline, EMI options സഹിതം clear ആയ proposal — hidden charges ഇല്ല.",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-500",
    connector: true,
  },
  {
    step: "03",
    icon: "✅",
    en: "Confirmation & Booking",
    ml: "Confirm ചെയ്ത് Book ചെയ്യൂ",
    desc: "Agree on the plan, pay ₹1,000 initial amount, and sign a simple agreement to lock in your project slot.",
    descMl: "₹1,000 pay ചെയ്ത് project slot confirm ചെയ്യൂ. Agreement simple ആണ്.",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-500",
    connector: true,
  },
  {
    step: "04",
    icon: "🎨",
    en: "Design & Development",
    ml: "Website Build ചെയ്യുന്നു",
    desc: "Our team designs and builds your website. You review drafts and share feedback until you're 100% satisfied.",
    descMl: "Design draft share ചെയ്യും, feedback നൽകൂ, final approval നിങ്ങൾക്ക് ആണ്.",
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-500",
    connector: true,
  },
  {
    step: "05",
    icon: "🚀",
    en: "Launch & Deployment",
    ml: "Website Live ആകുന്നു!",
    desc: "Website goes live with SSL, hosting setup, and Google indexing. Your business is now online!",
    descMl: "SSL, Hosting, Google indexing — complete setup. ബിസിനസ്സ് ഇനി Online ആണ്! 🎉",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-500",
    connector: true,
  },
  {
    step: "06",
    icon: "🛠️",
    en: "Support & Assistance",
    ml: "Launch ശേഷവും നിങ്ങൾക്കൊപ്പം",
    desc: "Post-launch support for edits, fixes, and guidance. We're just a WhatsApp message away whenever you need help.",
    descMl: "Launch ശേഷം edits, fixes, guidance — WhatsApp-ൽ always available ആണ്.",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-500",
    connector: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Rahul Menon",
    biz: "Rahul Bakery, Thrissur",
    text: "വെബ്സൈറ്റ് ready ആയതിന് ശേഷം Google-ൽ നിന്ന് customer വരാൻ തുടങ്ങി. EMI ആയതുകൊണ്ട് ഒരു burden-ഉം തോന്നിയില്ല!",
    stars: 5,
    avatar: "RM",
    color: "bg-blue-500",
  },
  {
    name: "Sneha Krishnan",
    biz: "Sneha Boutique, Kochi",
    text: "Professional design, fast delivery. Payment EMI-ൽ ആയതുകൊണ്ട് startup-ന് manage ചെയ്യാൻ easy ആയിരുന്നു.",
    stars: 5,
    avatar: "SK",
    color: "bg-pink-500",
  },
  {
    name: "Dr. Arun P.",
    biz: "Arun Clinic, Kozhikode",
    text: "Clinic-ന് ഒരു professional website ഉണ്ടാകണം എന്ന് ആഗ്രഹം ഉണ്ടായിരുന്നു. ₹1000-ൽ start ചെയ്തു, ഇപ്പോൾ online appointments കിട്ടുന്നു!",
    stars: 5,
    avatar: "AP",
    color: "bg-teal-500",
  },
];

const WA_URL =
  "https://wa.me/919400355185?text=Hi%2C%20I%27m%20interested%20in%20the%20Anniversary%20Website%20EMI%20Offer";

// ─── Small reusable pieces ────────────────────────────────────────────────────

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-orange-500 rounded-xl px-4 py-3 min-w-[62px]">
      <span className="text-2xl sm:text-3xl font-extrabold text-white leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] text-orange-100 font-semibold uppercase tracking-wide mt-1">
        {label}
      </span>
    </div>
  );
}

function SectionHeading({ en, ml }: { en: string; ml: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900">{en}</h2>
      <p className="text-sm font-semibold text-orange-500 mt-0.5">{ml}</p>
      <div className="mt-2 h-[3px] w-12 bg-orange-500 rounded-full" />
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function EMIPageClient() {
  const timeLeft = useCountdown("2026-06-25T23:59:59");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <>
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="pt-7 bg-gray-50 min-h-screen">

        <EmiBanner
          images={[
            "blog/WEBSITE.jpg",
            "blog/WEBSITE.jpg",
            "blog/WEBSITE.jpg",
          ]}
        />

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 px-5 pt-14 pb-16 text-center">
          {/* decorative blobs */}
          <span className="pointer-events-none absolute -top-14 -right-14 h-56 w-56 rounded-full bg-white/10" />
          <span className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-white/8" />



          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-orange-500 mb-5">
              🎉 Anniversary Special Offer 2026
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug mb-3">
              Premium Business Website<br />
              Worth{" "}
              <span className="line-through decoration-white/50">₹16,000</span>{" "}
              at Just{" "}
              <span className="underline decoration-white/60">₹7,499</span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-6">
              കേരളത്തിലെ ബിസിനസ്സുകൾക്ക് ഇനി Website ഒരു ഭാരമല്ല!
            </p>
          </motion.div>

          {/* Price card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.15}
            className="inline-block rounded-2xl bg-white px-8 py-5 mb-6 shadow-xl"
          >
            <p className="text-sm text-gray-400 line-through mb-0.5">Market Value: ₹16,000</p>
            <p className="text-5xl font-extrabold text-orange-500 leading-none">₹7,499</p>
            <p className="text-xs text-gray-400 mt-2">
              Domain Charges Extra &nbsp;|&nbsp; 1 Year Free Hosting Included
            </p>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.25}
            className="text-white/90 text-sm"
          >
            Start with just{" "}
            <strong className="text-white text-base font-extrabold">₹1,000</strong>{" "}
            initial payment &bull; EMI available
          </motion.p>

          {/* Social proof micro-stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.35}
            className="flex justify-center gap-6 mt-6 flex-wrap"
          >
            {[
              { num: "50+", label: "Websites Delivered" },
              { num: "5★", label: "Average Rating" },
              { num: "100%", label: "Kerala-Based Team" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-white leading-none">{s.num}</p>
                <p className="text-[11px] text-white/70 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── COUNTDOWN ────────────────────────────────────────────── */}
        <section className="bg-gray-900 px-5 py-5 text-center">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            ⏳ Offer Ends In — ഓഫർ അവസാനിക്കുന്നു
          </p>
          <div className="flex justify-center gap-3">
            <CountdownBlock value={timeLeft.days} label="Days" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <CountdownBlock value={timeLeft.minutes} label="Mins" />
            <CountdownBlock value={timeLeft.seconds} label="Secs" />
          </div>
          <p className="text-gray-500 text-xs mt-3">Valid until 25 June 2026</p>
        </section>

        {/* ── URGENCY STRIP ────────────────────────────────────────── */}
        <div className="bg-gray-900 border-t border-orange-500/20 px-4 py-3 text-center text-xs font-bold tracking-wide text-orange-400">
          ⚡ Limited Slots Available —{" "}
          <span className="text-white">ഇന്നുതന്നെ Book ചെയ്യൂ!</span> — Offer Ends 25/06/2026
        </div>

        {/* ── OFFER HIGHLIGHTS ─────────────────────────────────────── */}
        <motion.section
          className="container mx-auto max-w-5xl px-5 py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            en="Anniversary Offer Highlights"
            ml="ഈ ഓഫറിൽ നിങ്ങൾക്ക് ലഭിക്കുന്നത്"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: "🌐", en: "1 Year Free Hosting", ml: "1 വർഷം Hosting സൗജന്യം" },
              { icon: "💳", en: "Easy EMI Plans", ml: "എളുപ്പം EMI ഓപ്ഷൻ" },
              { icon: "📱", en: "Responsive Design", ml: "Mobile / Tablet Ready" },
              { icon: "🔒", en: "Secure & Fast", ml: "Fast Loading & Secure" },
              { icon: "💬", en: "WhatsApp Integration", ml: "Direct Customer Contact" },
              { icon: "🔍", en: "SEO Friendly", ml: "Google-ൽ കണ്ടെത്താം" },
            ].map((item) => (
              <div
                key={item.en}
                className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-bold text-gray-900">{item.en}</p>
                <p className="text-xs text-orange-500 font-semibold mt-0.5">{item.ml}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── HOW IT WORKS (WORKFLOW) ───────────────────────────────── */}
        <section className="bg-white py-12">
          <motion.div
            className="container mx-auto max-w-4xl px-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              en="How It Works — Our Process"
              ml="Requirement മുതൽ Support വരെ — Step by Step"
            />

            <div className="relative">
              {/* Vertical line on desktop */}
              <div className="hidden md:block absolute left-[28px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-300 via-orange-300 to-teal-300" />

              <div className="space-y-5">
                {WORKFLOW_STEPS.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative flex gap-4 rounded-2xl border ${step.color} p-5`}
                  >
                    {/* Step icon circle */}
                    <div
                      className={`shrink-0 ${step.iconBg} rounded-full h-14 w-14 flex flex-col items-center justify-center shadow-sm`}
                    >
                      <span className="text-xl leading-none">{step.icon}</span>
                      <span className="text-[9px] text-white font-bold mt-0.5 leading-none">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="text-sm font-extrabold text-gray-900">{step.en}</p>
                        <span className="text-xs font-semibold text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5">
                          {step.ml}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">{step.descMl}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA inside workflow */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 p-5 text-center">
              <p className="text-white font-bold text-base mb-1">
                Ready to Start? 🚀
              </p>
              <p className="text-white/80 text-xs mb-4">
                ഇന്നുതന്നെ WhatsApp ചെയ്യൂ — Step 1 ഇവിടെ നിന്ന് തുടങ്ങാം!
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-6 py-2.5 text-sm font-extrabold text-orange-500 hover:bg-orange-50 transition-colors shadow"
              >
                📞 WhatsApp Now — +91 94003 55185
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── EMI PLANS ────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-12">
          <motion.div
            className="container mx-auto max-w-5xl px-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              en="Choose Your EMI Plan"
              ml="നിങ്ങൾക്ക് ഇഷ്ടമുള്ള EMI Plan തിരഞ്ഞെടുക്കൂ"
            />
            <div className="grid md:grid-cols-3 gap-5">
              {EMI_PLANS.map((plan) => (
                <div
                  key={plan.months}
                  className={`relative rounded-2xl border-[1.5px] p-5 flex flex-col ${plan.best
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-orange-100 bg-gray-50"
                    }`}
                >
                  {plan.best && (
                    <span className="absolute -top-3 right-5 rounded-full bg-orange-500 px-3 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wide">
                      ⭐ Best Value
                    </span>
                  )}
                  <div className="mb-4">
                    <p className="text-xl font-extrabold text-gray-900">{plan.label}</p>
                    <p className="text-xs font-semibold text-orange-500 mt-0.5">{plan.labelMl}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-orange-500">{plan.amount}</span>
                    <span className="text-sm text-gray-400 ml-1">{plan.amountSub}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="text-sm text-gray-600 flex items-start gap-1.5">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-xl py-2.5 text-sm font-bold transition-colors ${plan.best
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-white border border-orange-200 text-orange-500 hover:bg-orange-50"
                      }`}
                  >
                    Book This Plan
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────────────── */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto max-w-5xl px-5">
            <SectionHeading
              en="What's Included in Your Website"
              ml="നിങ്ങളുടെ Website-ൽ ഉൾപ്പെടുന്നത്"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {FEATURES.map((f) => (
                <div
                  key={f.en}
                  className="bg-white rounded-xl border-l-4 border-l-orange-500 border border-orange-100 px-4 py-3 shadow-sm"
                >
                  <p className="text-sm font-bold text-gray-900">{f.en}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{f.ml}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">* Domain Charges Extra</p>
          </div>
        </motion.section>

        {/* ── WHO IS THIS FOR ──────────────────────────────────────── */}
        <section className="bg-white py-12">
          <motion.div
            className="container mx-auto max-w-5xl px-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading en="Perfect For" ml="ഇവർക്ക് ഒക്കെ ഉപകരിക്കും" />
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
              {FOR_WHOM.map((item) => (
                <div
                  key={item.en}
                  className="rounded-xl bg-orange-50 border border-orange-100 px-2 py-3 text-center"
                >
                  <p className="text-xs font-bold text-orange-500">{item.en}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{item.ml}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 px-5 py-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-orange-500">Kerala-യിലെ ഏത് ബിസിനസ്സും</strong> ഇനി
                Online-ൽ വരണം. Budget ഉള്ളതോ ഇല്ലാത്തതോ — EMI-യിൽ തുടങ്ങാം! 🚀
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── PRICING BREAKDOWN ────────────────────────────────────── */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto max-w-2xl px-5">
            <SectionHeading en="Pricing Breakdown" ml="ചെലവ് ഇങ്ങനെ Calculate ചെയ്യാം" />
            <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
              {PRICING.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-5 py-4 border-b border-orange-50 last:border-b-0 ${row.style === "total" ? "bg-orange-500" : ""
                    }`}
                >
                  <div>
                    <p
                      className={`text-sm font-semibold ${row.style === "total" ? "text-white" : "text-gray-600"
                        }`}
                    >
                      {row.label}
                    </p>
                    {row.labelMl && (
                      <p
                        className={`text-xs ${row.style === "total" ? "text-orange-100" : "text-gray-300"
                          }`}
                      >
                        {row.labelMl}
                      </p>
                    )}
                  </div>
                  <p
                    className={`font-bold text-base ${row.style === "total"
                      ? "text-white text-lg font-extrabold"
                      : row.style === "orange"
                        ? "text-orange-500"
                        : row.style === "green"
                          ? "text-green-600"
                          : row.style === "muted"
                            ? "text-gray-400 text-sm"
                            : row.style === "strike"
                              ? "text-gray-300 line-through text-sm"
                              : "text-gray-800"
                      }`}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── WHY EMI ──────────────────────────────────────────────── */}
        <section className="bg-white py-12">
          <motion.div
            className="container mx-auto max-w-5xl px-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading en="Why Choose EMI?" ml="EMI എന്തുകൊണ്ട് നല്ലതാണ്?" />
            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_EMI.map((item) => (
                <div
                  key={item.en}
                  className="flex items-start gap-4 rounded-2xl bg-orange-50 p-4 border border-orange-100"
                >
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.en}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.ml}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="bg-gray-50 py-12">
          <motion.div
            className="container mx-auto max-w-5xl px-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              en="What Our Clients Say"
              ml="ഞങ്ങളുടെ customers പറയുന്നത്"
            />
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                    <div className={`${t.color} rounded-full h-9 w-9 flex items-center justify-center text-white text-xs font-extrabold shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.biz}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── GUARANTEE BADGE ──────────────────────────────────────── */}
        <motion.section
          className="py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto max-w-3xl px-5">
            <div className="rounded-2xl border-2 border-green-200 bg-green-50 px-6 py-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="text-5xl shrink-0">🛡️</div>
              <div>
                <p className="text-lg font-extrabold text-green-800 mb-1">
                  Our Commitment to You
                </p>
                <p className="text-sm text-green-700 leading-relaxed">
                  Written agreement, clear scope, free revisions until you're satisfied — and post-launch support always available on WhatsApp. No hidden charges. No surprises. <strong>100% transparency.</strong>
                </p>
                <p className="text-xs text-green-600 mt-2 font-semibold">
                  Written agreement ഉണ്ടാകും · Hidden charges ഇല്ല · Free revisions ഉൾപ്പെടും
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto max-w-3xl px-5">
            <SectionHeading
              en="Frequently Asked Questions"
              ml="പലരും ചോദിക്കുന്ന ചോദ്യങ്ങൾ"
            />
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden divide-y divide-gray-100">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-start justify-between px-5 py-4 text-left gap-3 hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <div>
                      <p className="text-sm font-bold text-gray-900">{faq.q}</p>
                      <p className="text-xs text-orange-500 font-semibold mt-0.5">{faq.qMl}</p>
                    </div>
                    <span className="text-orange-400 text-xl shrink-0 mt-0.5 font-light">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-4"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── FINAL URGENCY STRIP ──────────────────────────────────── */}
        <div className="bg-gray-900 px-4 py-4 text-center text-sm font-bold text-orange-400">
          ⏳ Offer Ends:{" "}
          <span className="text-white">25 June 2026</span> — After this, price &amp; EMI
          benefits may change ❌
        </div>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-orange-500 to-amber-400 py-14 px-5">
          <motion.div
            className="container mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Start Your Website Today!
            </h2>
            <p className="text-base text-white/90 mb-8">
              ഇന്നുതന്നെ നിങ്ങളുടെ Business Online-ൽ കൊണ്ടുവരൂ 🚀
            </p>

            <ul className="inline-block text-left space-y-2.5 mb-10">
              {[
                "🎯 Premium Website Worth ₹16,000",
                "🔥 Offer Price: ₹7,499",
                "💳 EMI Available — 3, 6, 8 Months",
                "🌐 1 Year Free Hosting Included",
                "💰 Start With Only ₹1,000",
                "📅 Offer Valid Until 25/06/2026",
              ].map((item) => (
                <li key={item} className="text-sm font-semibold text-white">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl bg-green-500 py-4 text-center text-base font-extrabold text-white hover:bg-green-600 transition-colors shadow-lg"
              >
                📞 WhatsApp Now — +91 94003 55185
              </a>
              <a
                href="https://www.digitalproductsolutions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl border-2 border-white/50 bg-white/20 py-4 text-center text-sm font-bold text-white hover:bg-white/30 transition-colors"
              >
                🌐 Visit Our Website
              </a>
            </div>

            <p className="mt-6 text-xs text-white/60">
              Domain Charges Extra &nbsp;|&nbsp; Limited Anniversary Offer &nbsp;|&nbsp; Ends 25/06/2026
            </p>
          </motion.div>
        </section>

      </main>
    </>
  );
}