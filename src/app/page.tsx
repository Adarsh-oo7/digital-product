'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link'
import {
  ArrowRight, Bitcoin as Star, Users, CheckCircle, Award, Shield, Clock,
  Zap, TrendingUp, MessageSquare, BarChart3, Globe,
  Headphones, Rocket, DollarSign, Phone, Code2, Instagram, BadgeDollarSign, MessageCircle, MapPin, Layers,
  Smartphone,
  Bot,
  Settings,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import AnimatedReviews from '../components/AnimatedReviews'
import Image from "next/image"
import ProjectCarousel from '@/components/ProjectCarousel'
import MarqueeCards from '@/components/MarqueeCards'
import LeftModelViewer from '@/components/LeftModelViewer'
import RightModelViewer from '@/components/RightModelViewer'


const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "SAIF" },
      "itemReviewed": {
        "@type": "Organization",
        "name": "CrystalKnotFilms"
      },
      "reviewBody":
        "The team transformed our online presence into something that matches the quality of our films. The improved visibility and structure brought us steady, serious client leads.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Vipin Mohan" },
      "itemReviewed": {
        "@type": "Organization",
        "name": "BuilDwellz"
      },
      "reviewBody":
        "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Abhishek" },
      "itemReviewed": {
        "@type": "Organization",
        "name": "Squeeze Berriez"
      },
      "reviewBody":
        "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Aromal V VG" },
      "itemReviewed": {
        "@type": "Organization",
        "name": "Kerala Sellers"
      },
      "reviewBody":
        "Kerala Sellers was built to empower local businesses with a powerful yet simple digital marketplace. From product listings to payments and automation, everything was designed for real-world execution.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anvar Riyas" },
      "itemReviewed": {
        "@type": "Organization",
        "name": "Lemon Caters and Events"
      },
      "reviewBody":
        "Digital Product rebuilt our catering website and optimized our Google presence.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      }
    }
  ]
}

const trustIndicators = [
  { id: 1, icon: Users, number: "20+", text: "Happy Clients" },
  { id: 2, icon: Award, number: "95%", text: "Success Rate" },
  { id: 3, icon: DollarSign, number: "5x", text: "Average ROI" },
  { id: 4, icon: Star, number: "4.9/5", text: "Client Rating" },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Full-Service Digital Agency",
    description: "One-stop solution for all your digital needs - from AI automation to digital marketing and custom development."
  },
  {
    icon: Zap,
    title: "Proven Results & Fast Delivery",
    description: "We deliver measurable results 40% faster than competitors. Our clients see average 300% business growth."
  },
  {
    icon: TrendingUp,
    title: "Industry Expertise",
    description: "7+ years serving diverse industries including e-commerce, healthcare, fintech, and manufacturing."
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description: "Dedicated support team ensures your digital solutions run smoothly with 99.9% uptime guarantee."
  },
]

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

    <div className="min-h-screen  flex flex-col">

      {/* <div className="fixed min-h-screen w-full inset-0 z-0 pointer-events-none"> */}

      <LeftModelViewer scale={0.3} />
      <RightModelViewer scale={0.3} />


      {/* </div> */}
      {/* SEO-Optimized Hero Section */}
      <div className="relative flex-grow flex flex-col justify-center items-center text-center mt-5 px-4 py-10  overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          {/* <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div> */}
          {/* <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div> */}
          {/* <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div> */}
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Leading Digital Agency in Trivandrum, Kerala</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Build Software, Apps & Al Solutions
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              for Kerala Businesses
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-4xl text-gray-200 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Digital Product Solutions is a modern digital agency in Trivandrum providing helped <strong>20+ businesses across Kerala</strong> with
          website development, custom digital solution, software, mobile apps, WhatsApp automation, SEO, social media management,
          and AI-powered tools. Based in Trivandrum. Website live in 7 days.

        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {trustIndicators.map((item) => (
            <div key={item.id} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold text-white">{item.number}</div>
              <div className="text-sm text-gray-300">{item.text}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:scale-105"
            aria-label="Get Free Digital Strategy Consultation"
          >
            Get Free Consultation
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            aria-label="View Our Portfolio"
          >
            See Our Work
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>


      <section className="w-full text-white py-14">
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
                  <Counter value={stat.value} suffix={stat.suffix || ""} />
                )}

                <span className="text-sm md:text-base text-gray-300 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <ProjectCarousel />


      <section id="services" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything Your Kerala Business Needs
              <span className="block text-blue-400">
                Under One Roof
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              We've helped 20+ businesses across Kerala with these 6 service areas.
              All delivered by the same dedicated team.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Code2,
                title: "Software Development",
                desc: "Custom web apps, dashboards, booking systems and business platforms built specifically for Kerala businesses.",
                price: "Starting ₹15,000",
                link: "/software-development",
              },
              {
                icon: Smartphone,
                title: "App Development",
                desc: "Android and iOS mobile apps for Kerala businesses — restaurants, shops, clinics and delivery services.",
                price: "Starting ₹25,000",
                link: "/app-development",
              },
              {
                icon: TrendingUp,
                title: "SEO Services",
                desc: "Rank on Google when Kerala customers search for your service. Organic traffic that grows monthly.",
                price: "Starting ₹5,000",
                link: "/seo-services",
              },
              {
                icon: Instagram,
                title: "Social Media Management",
                desc: "Instagram, Facebook and WhatsApp marketing handled for you. Daily posts and audience growth.",
                price: "Starting ₹3,000/month",
                link: "/social-media-management",
              },
              {
                icon: Settings,
                title: "Business Automation",
                desc: "Automate WhatsApp replies, order tracking and invoice generation. Set once — runs forever.",
                price: "Starting ₹10,000",
                link: "/business-automation",
              },
              {
                icon: Bot,
                title: "AI-Powered Solutions",
                desc: "AI chatbots, smart recommendations and automation systems for Kerala businesses.",
                price: "Starting ₹12,000",
                link: "/ai-powered-solutions",
              },
            ].map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Icon Box */}
                  <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 group-hover:scale-110 transition duration-300">
                    <Icon className="w-7 h-7 text-blue-400 group-hover:text-yellow-400 transition duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-5">
                    {service.desc}
                  </p>

                  <div className="text-yellow-400 font-bold mb-4">
                    {service.price}
                  </div>

                  <a
                    href={service.link}
                    className="text-sm font-medium hover:text-yellow-400 transition"
                  >
                    Learn More →
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every business is unique. We create tailored digital solutions that fit your specific needs and goals.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Discuss Custom Solution
            <Rocket className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <motion.div
        className="py-10 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container mx-auto">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why 500+ Businesses
              <span className="block text-blue-600">Trust Digital Product Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just service providers - we're your strategic partners in digital success
              with a proven track record of delivering exceptional results.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div> */}

          <section id="why-us" className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6">

              {/* Heading */}
              <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl  font-bold mb-6 text-gray-900 tracking-tight">
                  Why 20+ Kerala Businesses Choose
                  <span className="block text-blue-600 font-normal mt-3">
                    Digital Product Solutions
                  </span>
                </h2>

                <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                  We're not a big agency with 50 people you'll never talk to. We are kerala builders who understand your market.
                </p>
              </div>

              {/* Grid */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                {[
                  {
                    title: "Talk Directly to the Developer",
                    desc: "No account managers. No project managers. You whatsapp Adarsh directly and get answers immediately.",
                    icon: MessageCircle,
                  },
                  {
                    title: "Built for Kerala Businesses",
                    desc: "Based in Trivandrum. We understand Kerala customers, kerala markets and what actually works here.",
                    icon: MapPin,
                  },
                  {
                    title: "Fast Delivery – 7 Days",
                    desc: "Most websites go live in 7 days. Apps in 30. No Months of waiting. No scope creep.",
                    icon: Zap,
                  },
                  {
                    title: "All Services in One Place",
                    desc: "Software, apps, SEO, socialmedia, automation and AI — all from one focused team that know your business.",
                    icon: Layers,
                  },
                  {
                    title: "Build Kerala Sellers",
                    desc: "We don't justbuilt for clients.we build our own live marketplace. We know what it takes to ship real.",
                    icon: Rocket,
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "You know the price before we start.No hidden fees. No surprise Invoices. Starting from ₹3,000/month.",
                    icon: BadgeDollarSign,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="group p-8 rounded-2xl border border-gray-100 hover:border-green-500 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="mb-6">
                        <Icon
                          size={28}
                          strokeWidth={1.5}
                          className="text-gray-700 group-hover:text-green-600 transition"
                        />
                      </div>

                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>



          {/* Industry Expertise */}
          <div className="rounded-2xl p-8 ">
            <h3 className="text-4xl font-bold text-center mb-8 text-gray-900">
              Industries We Serve
            </h3>
            <MarqueeCards />

            {/* Centered Grid Container */}
            {/* <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-6 text-center group">
                {[
                  'E-commerce',
                  'Healthcare',
                  'Fintech',
                  'Education',
                  'Real Estate',
                  'Manufacturing',
                  'Startups',
                  'Enterprise',
                ].map((industry) => (
                  <div
                    key={industry}
                    className="w-36 h-32 bg-gray-50 rounded-xl flex items-center justify-center 
          text-center text-gray-800 font-semibold shadow-md cursor-pointer 
          transition-all duration-300 group-hover:blur-sm hover:!blur-none 
          hover:scale-105 hover:bg-gray-800 hover:text-white"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div> */}
          </div>



        </div>
      </motion.div>

      {/* Results & ROI Section */}
      <motion.div
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="container mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Proven Results That Transform Businesses
              </h2>
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
                <Link
                  href="/book"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  View Case Studies
                  <BarChart3 className="ml-3 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
                >
                  Get Your ROI Estimate
                  <DollarSign className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Section with Image + Overlays */}
            <div className="relative">
              <Image
                src="./img/AiH.png"
                alt="Digital Business Transformation Results"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              {/* Bottom Right Overlay */}


              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-sm font-medium">Client Success</div>
                <div className="text-3xl font-bold">2.5×</div>
                <div className="text-sm opacity-90">Average Inquiry Growth</div>
              </div>
              {/* Top Left Overlay */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-sm font-medium">Projects Delivered</div>
                <div className="text-2xl font-bold">20+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <AnimatedReviews />

      {/* Enhanced CTA Section with Urgency */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-red-600/80 backdrop-blur-sm rounded-full mb-8">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Limited Client Slots Available – Start Your Project Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Get a <span className="font-semibold text-blue-600">free consultation</span> —
              talk directly to our developer. No sales pitch. No pressure.
              Just honest advice on what your business actually needs.
            </p>


            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
              <div className=" flex flex-col sm:flex-row items-center justify-center gap-4">

                <a
                  href="https://wa.me/919400355185?text=Hi%20Adarsh%2C%20I%20want%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Now – Free Consultation
                </a>

                <a
                  href="tel:+919400355185"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-800 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  📞 Call +91 94003 55185
                </a>

              </div>

            </div>

            {/* Contact Options */}
            <p className="mt-8 text-sm text-gray-100">
              📍 Based in Trivandrum, Kerala · Serving all of Kerala · Reply within 2 hours
            </p>
          </motion.div>
        </div>
      </section>


      {/* SEO Footer Content */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Digital Product Solutions - Your Complete Digital Transformation Partner
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Software development and digital marketing company based in
              Thiruvananthapuram (Trivandrum), Kerala. We help businesses across
              Kerala with software development, mobile apps, SEO, social media
              management, business automation and AI solutions.
            </p>
            <p className="mt-4 font-semibold text-blue-400">
              20+ Kerala businesses helped.
            </p>
          </div>

          {/* Service Keywords for SEO */}
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

    </div>
  )
}