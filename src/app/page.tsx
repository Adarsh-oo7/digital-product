'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Link from 'next/link'
import {
  ArrowRight, Bitcoin as Star, Users, CheckCircle, Award,
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
import MarqueeCards from '@/components/MarqueeCards'
import FunnelUI from "@/components/FunnelUI";
import HeroSectionV2 from "@/components/HeroSection";
import ImageCompare from "@/components/ImageCompare";


// const reviewSchema = {
//   "@context": "https://schema.org",
//   "@type": "ItemList",
//   "itemListElement": [
//     {
//       "@type": "Review",
//       "author": { "@type": "Person", "name": "SAIF" },
//       "itemReviewed": {
//         "@type": "Organization",
//         "name": "CrystalKnotFilms"
//       },
//       "reviewBody":
//         "The team transformed our online presence into something that matches the quality of our films. The improved visibility and structure brought us steady, serious client leads.",
//       "reviewRating": {
//         "@type": "Rating",
//         "ratingValue": "5",
//         "bestRating": "5"
//       }
//     },
//     {
//       "@type": "Review",
//       "author": { "@type": "Person", "name": "Vipin Mohan" },
//       "itemReviewed": {
//         "@type": "Organization",
//         "name": "BuilDwellz"
//       },
//       "reviewBody":
//         "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
//       "reviewRating": {
//         "@type": "Rating",
//         "ratingValue": "4.5",
//         "bestRating": "5"
//       }
//     },
//     {
//       "@type": "Review",
//       "author": { "@type": "Person", "name": "Abhishek" },
//       "itemReviewed": {
//         "@type": "Organization",
//         "name": "Squeeze Berriez"
//       },
//       "reviewBody":
//         "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
//       "reviewRating": {
//         "@type": "Rating",
//         "ratingValue": "4.5",
//         "bestRating": "5"
//       }
//     },
//     {
//       "@type": "Review",
//       "author": { "@type": "Person", "name": "Aromal V VG" },
//       "itemReviewed": {
//         "@type": "Organization",
//         "name": "Kerala Sellers"
//       },
//       "reviewBody":
//         "Kerala Sellers was built to empower local businesses with a powerful yet simple digital marketplace. From product listings to payments and automation, everything was designed for real-world execution.",
//       "reviewRating": {
//         "@type": "Rating",
//         "ratingValue": "5",
//         "bestRating": "5"
//       }
//     },
//     {
//       "@type": "Review",
//       "author": { "@type": "Person", "name": "Anvar Riyas" },
//       "itemReviewed": {
//         "@type": "Organization",
//         "name": "Lemon Caters and Events"
//       },
//       "reviewBody":
//         "Digital Product rebuilt our catering website and optimized our Google presence.",
//       "reviewRating": {
//         "@type": "Rating",
//         "ratingValue": "4.5",
//         "bestRating": "5"
//       }
//     }
//   ]
// }



const businessResults = [
  "Automate workflows and reduce manual business processes",
  "Attract high-quality leads with data-driven marketing",
  "Build fast, scalable websites and SaaS platforms",
  "Improve visibility with advanced SEO strategies",
  "Create powerful digital platforms that grow with your business",
  "Strengthen your online presence across search and social"
]

const stats = [
  { value: 20, suffix: "+", label: "Kerala Businesses Helped" },
  { value: 7, suffix: " Days", label: "Average Delivery Time" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { custom: "Trivandrum", label: "Kerala Based" },
  { custom: "Direct", label: "Talk to Developer" },
];

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return (
    <motion.span className="text-3xl md:text-4xl font-bold text-yellow-400">
      <motion.span>{rounded}</motion.span> {suffix}
    </motion.span>
  );
}

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
              <span className="block text-blue-400">Under One Roof</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed
        text-sm sm:text-lg md:text-lg lg:text-xl 
        max-w-4xl md:max-w-3xl mx-auto">
              We've helped 20+ businesses across Kerala with these 6 service areas.
              All delivered by the same dedicated team.
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
              { icon: Code2, title: "Software Development", desc: "Custom web apps, dashboards, booking systems and business platforms built specifically for Kerala businesses.", price: "Starting ₹15,000", link: "/software-development" },
              { icon: Smartphone, title: "App Development", desc: "Android and iOS mobile apps for Kerala businesses — restaurants, shops, clinics and delivery services.", price: "Starting ₹25,000", link: "/app-development" },
              { icon: TrendingUp, title: "SEO Services", desc: "Rank on Google when Kerala customers search for your service. Organic traffic that grows monthly.", price: "Starting ₹5,000", link: "/seo-services" },
              { icon: Instagram, title: "Social Media Management", desc: "Instagram, Facebook and WhatsApp marketing handled for you. Daily posts and audience growth.", price: "Starting ₹3,000/month", link: "/social-media-management" },
              { icon: Settings, title: "Business Automation", desc: "Automate WhatsApp replies, order tracking and invoice generation. Set once — runs forever.", price: "Starting ₹10,000", link: "/business-automation" },
              { icon: Bot, title: "AI-Powered Solutions", desc: "AI chatbots, smart recommendations and automation systems for Kerala businesses.", price: "Starting ₹12,000", link: "/ai-powered-solutions" },
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
                  Why 20+ Kerala Businesses Choose
                  <span className="block text-blue-600 font-normal mt-3">
                    Digital Product Solutions
                  </span>
                </h2>
                <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                  We're not a big agency with 50 people you'll never talk to.
                  We are kerala builders who understand your market.
                </p>
              </div>

              {/* CARDS */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Talk Directly to the Developer", desc: "No account managers. No project managers. You whatsapp Adarsh directly and get answers immediately.", icon: MessageCircle },
                  { title: "Built for Kerala Businesses", desc: "Based in Trivandrum. We understand Kerala customers, kerala markets and what actually works here.", icon: MapPin },
                  { title: "Fast Delivery – 7 Days", desc: "Most websites go live in 7 days. Apps in 30. No Months of waiting.", icon: Zap },
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

          {/* INDUSTRIES */}
          <div className="rounded-2xl p-8 mt-10 relative z-10">
            <h3 className="text-4xl font-bold text-center mb-8 text-gray-900">
              Industries We Serve
            </h3>
            <MarqueeCards />
          </div>

        </div>
      </motion.div>

      <motion.div
        className="py-20 px-4"
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

      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-6 py-3 bg-red-600/80 backdrop-blur-sm rounded-full mb-8">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Limited Client Slots Available – Start Your Project Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Grow Your Business Online?</h2>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Get a <span className="font-semibold text-blue-600">free consultation</span> —
              talk directly to our developer. No sales pitch. No pressure.
              Just honest advice on what your business actually needs.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300">
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Now – Free Consultation
                </a>
                <a href="tel:+919400355185" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-800 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300">
                  📞 Call +91 94003 55185
                </a>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-100">📍 Based in Trivandrum, Kerala · Serving all of Kerala · Reply within 2 hours</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-4">
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
      </section>
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
  )
}