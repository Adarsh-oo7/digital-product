'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Link from 'next/link'
import {
  CheckCircle, 
  Zap, TrendingUp, BarChart3,
  Rocket, DollarSign, Code2, Instagram, BadgeDollarSign, MessageCircle, MapPin, Layers,
  Smartphone,
  Bot,
  Settings,
  Clock,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import AnimatedReviews from '../components/AnimatedReviews'
import Image from "next/image"
import ProjectCarousel from '@/components/ProjectCarousel'
// import MarqueeCards from '@/components/MarqueeCards'
import FunnelUI from "@/components/FunnelUI";
import HeroSectionV2 from "@/components/HeroSection";
import ImageCompare from "@/components/ImageCompare";
import Brands from "@/components/Brands";


const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "SAIF" },
      "itemReviewed": { "@type": "Organization", "name": "CrystalKnotFilms" },
      "reviewBody": "The team transformed our online presence into something that matches the quality of our films. The improved visibility and structure brought us steady, serious client leads.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Vipin Mohan" },
      "itemReviewed": { "@type": "Organization", "name": "BuilDwellz" },
      "reviewBody": "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Abhishek" },
      "itemReviewed": { "@type": "Organization", "name": "Squeeze Berriez" },
      "reviewBody": "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Aromal V VG" },
      "itemReviewed": { "@type": "Organization", "name": "Kerala Sellers" },
      "reviewBody": "Kerala Sellers was built to empower local businesses with a powerful yet simple digital marketplace. From product listings to payments and automation, everything was designed for real-world execution.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anvar Riyas" },
      "itemReviewed": { "@type": "Organization", "name": "Lemon Caters and Events" },
      "reviewBody": "Digital Product rebuilt our catering website and optimized our Google presence.",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Digital Product Solutions offer in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital Product Solutions is a registered MSME IT company in Trivandrum, Kerala. We specialize in custom software development, mobile app development (Android & iOS), search engine optimization (SEO), social media management, WhatsApp Business API automation, and custom AI chatbot systems."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to deploy a website or custom app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most professional business websites go live within 7 days. Mobile app development and custom business platforms typically take 15 to 45 days depending on the specific requirements, databases, and third-party integrations."
      }
    },
    {
      "@type": "Question",
      "name": "Why are your software and SEO pricing packages so affordable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are currently offering a limited-time launch discount to celebrate our registration as an MSME IT agency in Trivandrum. This allows local Kerala businesses to secure high-quality web assets at entry-level rates before prices return to normal market standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide direct communication with developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We eliminate bloated corporate structures and junior account managers. Our clients get direct WhatsApp communication with our founder and lead developer, Adarsh, ensuring rapid feedback and transparency."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve businesses outside of Trivandrum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we serve businesses all across Kerala, including Kochi, Kollam, Kozhikode, Kannur, Palakkad, Kottayam, and Thrissur, as well as select international clients."
      }
    }
  ]
};

const businessResults = [
  "We automate your repetitive business processes & save daily operational hours",
  "We generate high-quality inquiries through targeted performance ads & local SEO",
  "We engineer custom, scalable software & mobile applications for your exact operations",
  "We rank your brand #1 on Google search & map pack rankings in your target Kerala cities",
  "We deploy custom WhatsApp chatbots & AI tools to capture and qualify leads 24/7",
  "We provide direct developer WhatsApp access for instant support and updates"
]


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="min-h-screen flex flex-col "
      style={{
        pointerEvents: "auto",
        background: `
          radial-gradient(ellipse 70% 50% at 85% 20%, rgba(219,234,254,0.55) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 10% 80%, rgba(191,219,254,0.4) 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 50% 5%,  rgba(239,246,255,0.7) 0%, transparent 50%)
        `,
      }}>


      <HeroSectionV2 />

      <div className="relative pointer-events-auto">
        <FunnelUI />
      </div>

      {/* <section className="w-full text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center hover:scale-105 transition-all duration-300"
              >
                {stat.custom ? (
                  <span className="text-3xl md:text-4xl font-bold text-yellow-400">
                    {stat.custom}
                  </span>
                ) : (
                  <Counter value={stat.value ?? 0} suffix={stat.suffix || ""} />
                )}
                <span className="text-sm md:text-base text-gray-300 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ProjectCarousel />

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <ImageCompare
          before="/img/funnelbef.jpg"
          after="/img/funnelaft.jpg"
          className="w-full h-[80vh]"
        />
      </div>


      <section id="services" className="py-10 text-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-[900px] h-[900px] bg-gradient-to-r from-blue-400/30 to-cyan-300/20 rounded-full blur-3xl top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute w-[900px] h-[900px] bg-gradient-to-r from-purple-400/30 to-pink-300/20 rounded-full blur-3xl top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="font-bold text-gray-900 leading-tight
        text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 
        max-w-5xl md:max-w-3xl mx-auto">
              Everything Your Kerala Business Needs
              <span className="block text-blue-500">Under One Roof</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed
        text-sm sm:text-lg md:text-lg lg:text-xl 
        max-w-4xl md:max-w-3xl mx-auto">
              We&apos;ve helped 20+ businesses across Kerala with these 6 service areas. 
              Take advantage of our <strong>limited-time launch pricing</strong> to lock in premium quality at entry-level rates (slots are strictly limited).
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { icon: Code2, title: "Software Development", desc: "Custom web apps, dashboards, booking systems and business platforms built specifically for Kerala businesses.", price: "₹15,000 (Launch Offer - 3 Slots Left!)", link: "/software-development" },
              { icon: Smartphone, title: "App Development", desc: "Android and iOS mobile apps for Kerala businesses — restaurants, shops, clinics and delivery services.", price: "₹25,000 (Launch Offer - 2 Slots Left!)", link: "/app-development" },
              { icon: TrendingUp, title: "SEO Services", desc: "Rank on Google when Kerala customers search for your service. Organic traffic that grows monthly.", price: "₹5,000/mo (Special Launch Offer!)", link: "/seo-services" },
              { icon: Instagram, title: "Social Media Management", desc: "Instagram, Facebook and WhatsApp marketing handled for you. Daily posts and audience growth.", price: "₹3,000/mo (Special Launch Offer!)", link: "/social-media-management" },
              { icon: Settings, title: "Business Automation", desc: "Automate WhatsApp replies, order tracking and invoice generation. Set once — runs forever.", price: "₹10,000 (Launch Offer - 4 Slots Left!)", link: "/business-automation" },
              { icon: Bot, title: "AI-Powered Solutions", desc: "AI chatbots, smart recommendations and automation systems for Kerala businesses.", price: "₹12,000 (Launch Offer - 3 Slots Left!)", link: "/ai-powered-solutions" },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 group-hover:scale-110 transition duration-300">
                    <Icon className="w-7 h-7 text-violet-400 group-hover:text-blue-400 transition duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-5">{service.desc}</p>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent font-bold mb-4">{service.price}</div>
                  <a href={service.link} className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent text-sm font-medium hover:text-red-400 transition">Learn More →</a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Every business is unique. We create tailored digital solutions that fit your specific needs and goals.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Discuss Custom Solution
            <Rocket className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section id="industries" className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">Industries We Serve</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Digital Solutions for Every <span className="text-blue-600">Kerala Industry</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              We build websites, apps, automation and marketing systems for specific Kerala industries — so everything we deliver is already optimised for your market.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🏥", name: "Hospitals & Clinics", link: "/website-development-for-hospitals-clinics-kerala" },
              { icon: "🏨", name: "Hotels & Resorts", link: "/website-development-for-hotels-resorts-kerala" },
              { icon: "🍽️", name: "Restaurants", link: "/restaurant-website-online-ordering-kerala" },
              { icon: "🛒", name: "E-commerce", link: "/ecommerce-website-development-kerala" },
              { icon: "🏗️", name: "Real Estate", link: "/real-estate-builder-website-development-kerala" },
              { icon: "🏫", name: "Schools", link: "/school-education-management-software-kerala" },
            ].map((ind, i) => (
              <Link
                key={i}
                href={ind.link}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group text-center"
              >
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 leading-tight">{ind.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/software-development" className="text-blue-600 text-sm font-medium hover:underline">View all industry solutions →</Link>
          </div>
        </div>
      </section>

      <motion.div
        className="px-4 relative overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {/* 🌈 BACKGROUND GLOW */}
        <div className="absolute inset-0 z-0 pointer-events-none">

          {/* BLUE GLOW */}
          <div className="absolute w-[700px] h-[700px] 
      bg-blue-400/30 rounded-full blur-3xl 
      top-1/2 left-1/3 
      -translate-x-1/2 -translate-y-1/2" />

          {/* PURPLE GLOW */}
          <div className="absolute w-[700px] h-[700px] 
      bg-purple-400/30 rounded-full blur-3xl 
      top-1/2 left-2/3 
      -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* 🌫️ FADE EDGES */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/70 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/70 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/70 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">

          <section id="why-us" className="py-10 relative">
            <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                  Why <span className="text-red-500">20+</span> Kerala Businesses Choose
                  <span className="block text-blue-600 font-bold mt-3">
                    Digital Product Solutions
                  </span>
                </h2>
                <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                  We're not a bloated agency with layers of communication.
                  We are Kerala builders who design and deploy the solutions your business needs.
                </p>
              </div>

              {/* CARDS */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Talk Directly to the Developer", desc: "No account managers or sales reps. You WhatsApp Adarsh directly to get updates and answers immediately.", icon: MessageCircle },
                  { title: "Built for Kerala Businesses", desc: "Based in Trivandrum. We understand Kerala customers, local markets, and what actually drives growth here.", icon: MapPin },
                  { title: "Fast Delivery – 7 Days", desc: "Most websites go live in 7 days. Custom apps in 30 days. No long months of waiting.", icon: Zap },
                  { title: "All Services in One Place", desc: "Software, apps, SEO, social media, automation and AI — all in one team.", icon: Layers },
                  { title: "Build Kerala Sellers", desc: "We build our own marketplace products. We know real execution.", icon: Rocket },
                  { title: "Transparent Pricing", desc: "No hidden fees. Clear pricing. Starting from ₹3,000/month.", icon: BadgeDollarSign },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="group p-8 rounded-2xl 
                bg-white/70 backdrop-blur-md
                border border-gray-200 
                hover:border-green-500 
                shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="mb-6">
                        <Icon size={28} strokeWidth={1.5} className="text-gray-700 group-hover:text-green-600 transition" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </motion.div>

      <Brands />

      <motion.div
        className="pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="container mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Proven Results That Transform Businesses</h2>
              <div className="space-y-6">
                {businessResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  >
                    <CheckCircle className="mr-4 h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{result}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  View Case Studies
                  <BarChart3 className="ml-3 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                  Get Your ROI Estimate
                  <DollarSign className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image src="./img/AiH.png" alt="Digital Business Transformation Results" width={600} height={400} className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-sm font-medium">Client Success</div>
                <div className="text-3xl font-bold">2.5×</div>
                <div className="text-sm opacity-90">Average Inquiry Growth</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-sm font-medium">Projects Delivered</div>
                <div className="text-2xl font-bold">20+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatedReviews />

      {/* ===== ABOUT TEAM SECTION ===== */}
      <section id="about-summary" className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto border-t border-gray-100 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4 font-semibold uppercase tracking-wider">Our Agency Team</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                A Dedicated Team of <span className="text-blue-600">9 Digital Creators</span> Based in Trivandrum
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a registered MSME IT company and growth agency. Unlike solo freelancers who might vanish mid-project, or bloated agencies where you get ignored, Digital Product Solutions offers a structured team of engineers, UI/UX designers, copywriters, and SEO specialists.
              </p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">✔</span> Direct developer WhatsApp access — no account manager filters
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">✔</span> Full-stack capability (Next.js, Flutter, Python AI, Odoo)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">✔</span> Locally owned and operated in Trivandrum, Kerala
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 p-8 rounded-3xl relative">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Agency Benchmarks</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">9</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Team Members</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">20+</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Happy Clients</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">MSME</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Govt Registered</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">5.0★</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ON HOMEPAGE ===== */}
      <section id="faq" className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3 font-semibold uppercase tracking-wider">Frequently Asked Questions</span>
            <h2 className="text-3xl font-bold text-gray-900">Answers to Your Questions</h2>
            <p className="text-gray-500 text-sm mt-2">Get direct facts on our timeline, pricing model, and how we deliver digital growth.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What services does Digital Product Solutions offer in Kerala?",
                a: "Digital Product Solutions is a registered MSME IT company in Trivandrum. We specialize in custom software development, mobile app development (Android & iOS), SEO, performance marketing (Google & Meta Ads), WhatsApp Business API automation, and custom conversational AI chatbot systems."
              },
              {
                q: "How long does it take to deploy a website or custom app?",
                a: "Our professional business websites go live within 7 days. Mobile app development and custom business platforms typically take 15 to 45 days depending on the specific databases, features, and third-party integrations required."
              },
              {
                q: "Why are your software and SEO pricing packages so affordable?",
                a: "We are currently offering a limited-time launch discount to celebrate our registration as an MSME IT agency in Trivandrum. This allows local Kerala businesses to secure high-quality web assets at entry-level rates before prices return to normal market standards."
              },
              {
                q: "Do you provide direct communication with developers?",
                a: "Yes. We eliminate bloated corporate structures and junior account managers. Our clients get direct WhatsApp communication with our founder and lead developer, Adarsh, ensuring rapid feedback and transparency."
              },
              {
                q: "Do you serve businesses outside of Trivandrum?",
                a: "Yes, we serve businesses all across Kerala, including Kochi, Kollam, Kozhikode, Kannur, Palakkad, Kottayam, and Thrissur, as well as select international clients."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-500 font-extrabold text-xl leading-none">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KERALA CITIES COVERAGE ===== */}
      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Serving Businesses Across <span className="text-blue-600">All of Kerala</span></h2>
            <p className="text-gray-500 text-sm">Based in Trivandrum — we provide digital services to every major city in Kerala.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { city: "Trivandrum", link: "/digital-marketing-trivandrum" },
              { city: "Kochi", link: "/local-seo-kerala" },
              { city: "Kollam", link: "/digital-marketing-kollam" },
              { city: "Kozhikode", link: "/digital-marketing-kozhikode" },
              { city: "Kannur", link: "/seo-services-kannur" },
              { city: "Kottayam", link: "/web-development-kottayam" },
            ].map((c, i) => (
              <Link
                key={i}
                href={c.link}
                className="flex items-center justify-center gap-2 px-3 py-3 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 text-sm font-medium text-gray-600 shadow-sm hover:shadow"
              >
                <span className="text-base">📍</span>{c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO SEMANTIC CONTENT BLOCK ===== */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Kerala&apos;s Digital Growth Agency</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                <strong>Digital Product Solutions</strong> is a software development and digital marketing agency based in <strong>Trivandrum, Kerala</strong>.
                We help businesses across Kerala grow online through custom websites, mobile apps, SEO, WhatsApp automation and AI chatbots.
                Trusted by 20+ businesses in Trivandrum, Kochi, Kollam, Kozhikode and across Kerala.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SEO Kerala", "WhatsApp Automation", "AI Chatbot", "Web Development", "App Development", "Google Ads Kerala"].map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Specialised Services in Kerala</h2>
              <ul className="space-y-2">
                {[
                  { text: "AI Chatbot Development Kerala", link: "/ai-chatbot-development-kerala" },
                  { text: "WhatsApp Automation Kerala", link: "/whatsapp-automation-kerala" },
                  { text: "Local SEO Kerala", link: "/local-seo-kerala" },
                  { text: "Hospital Website Development Kerala", link: "/website-development-for-hospitals-clinics-kerala" },
                  { text: "Google Ads Management Kerala", link: "/google-ads-management-kerala" },
                  { text: "Odoo ERP Development Kerala", link: "/odoo-erp-development-kerala" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-sm text-gray-600 hover:text-blue-600 transition flex items-center gap-2">
                      <span className="text-blue-400">→</span>{item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <div className="inline-flex items-center border border-blue-500 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full mb-8 text-sm sm:text-base font-medium shadow-sm">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Limited Client Slots Available
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Ready to Grow Your <br className="hidden sm:block" />
              <span className="text-blue-600">Business Online?</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get a <span className="font-semibold text-blue-600">free consultation</span> —
              talk directly to our developer. No sales pitch. No pressure.
              Just honest advice on what your business actually needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">

              {/* WhatsApp */}
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-400 hover:text-black hover:shadow-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Free Consultation
              </a>

              {/* Call */}
              <a
                href="tel:+919400355185"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-800 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>

            {/* Footer note */}
            <p className="text-xs sm:text-sm text-gray-500">
              📍 Based in Trivandrum, Kerala · Serving all of Kerala · Reply within 2 hours
            </p>

          </motion.div>
        </div>
      </section>

      {/* <section className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Digital Product Solutions - Your Complete Digital Transformation Partner</h2>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Software development and digital marketing company based in Thiruvananthapuram (Trivandrum), Kerala.
            </p>
            <p className="mt-4 font-semibold text-blue-400">20+ Kerala businesses helped.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-400">
            <div>AI Agent Development</div>
            <div>Custom SaaS Solutions</div>
            <div>Meta Ads Management</div>
            <div>SEO Services India</div>
            <div>Chatbot Integration</div>
            <div>Web Development</div>
            <div>Digital Marketing</div>
            <div>Business Automation</div>
          </div>
        </div>
      </section> */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,500&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
        .lux-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          color: #fff; font-family: 'DM Sans', sans-serif; font-size: 13.5px;
          font-weight: 500; letter-spacing: 0.5px; padding: 15px 38px;
          border-radius: 100px; border: none; cursor: pointer;
          text-decoration: none; position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(29,78,216,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .lux-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
        }
        .lux-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(29,78,216,0.45); }
 
        .lux-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.7); backdrop-filter: blur(12px);
          color: #1e3a8a; font-family: 'DM Sans', sans-serif; font-size: 13.5px;
          font-weight: 500; letter-spacing: 0.5px; padding: 14px 36px;
          border-radius: 100px; border: 1px solid rgba(29,78,216,0.25);
          cursor: pointer; text-decoration: none;
          box-shadow: 0 2px 16px rgba(29,78,216,0.08);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .lux-secondary:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(29,78,216,0.15); background: rgba(255,255,255,0.95); }
 
        .stat-glass {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 20px;
          padding: 22px 16px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(29,78,216,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          transition: transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .stat-glass:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 50px rgba(29,78,216,0.16), inset 0 1px 0 rgba(255,255,255,1); }
 
        .pill-tag {
          font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 400;
          color: #6b8dd6; padding: 5px 14px;
          border: 1px solid rgba(29,78,216,0.15); border-radius: 100px;
          background: rgba(255,255,255,0.6); backdrop-filter: blur(8px);
          letter-spacing: 0.2px; cursor: default;
          transition: all 0.18s;
        }
        .pill-tag:hover { background: rgba(29,78,216,0.07); color: #1d4ed8; border-color: rgba(29,78,216,0.3); }
 
        @keyframes float-badge { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }
        .float-badge { animation: float-badge 4s ease-in-out infinite; }
 
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
    </>
  )
}