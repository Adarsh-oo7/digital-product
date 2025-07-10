'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, Brain, Bitcoin as Star, Users, CheckCircle, Award, Shield, Clock,
  Zap, TrendingUp, MessageSquare, Target, Code, Search, BarChart3, Globe,
  Headphones, Rocket, DollarSign, Phone
} from "lucide-react"
import AnimatedReviews from '../components/AnimatedReviews'
import Image from "next/image"
import ProjectCarousel from '@/components/ProjectCarousel'
import MarqueeCards from '@/components/MarqueeCards'
import LeftModelViewer from '@/components/LeftModelViewer'
import RightModelViewer from '@/components/RightModelViewer'


// Comprehensive Digital Services
const digitalServices = [
  {
    icon: Brain,
    title: "AI Agent Development",
    description: "Custom AI agents that automate complex business processes, handle customer inquiries, and boost productivity by 400%.",
    benefits: ["24/7 automation", "Cost reduction", "Scalable solutions"],
    category: "AI Solutions"
  },
  {
    icon: MessageSquare,
    title: "Chatbot Setup & Integration",
    description: "Intelligent chatbots for websites, WhatsApp, Facebook Messenger, and more. Reduce support costs by 60%.",
    benefits: ["Multi-platform", "Smart responses", "Lead generation"],
    category: "AI Solutions"
  },
  {
    icon: Target,
    title: "Meta Ads & PPC Management",
    description: "High-converting Facebook and Instagram ad campaigns that deliver 5x ROAS with precision targeting.",
    benefits: ["5x ROAS average", "Precise targeting", "Campaign optimization"],
    category: "Digital Marketing"
  },
  {
    icon: Code,
    title: "Custom SaaS Development",
    description: "Scalable SaaS platforms tailored to your business needs. From MVP to enterprise-level solutions.",
    benefits: ["Scalable architecture", "Custom features", "Cloud hosting"],
    category: "Development"
  },
  {
    icon: Search,
    title: "SEO ",
    description: "Dominate search results with our proven SEO strategies. Average 300% increase in organic traffic.",
    benefits: ["Top rankings", "Organic traffic", "Content strategy"],
    category: "Digital Marketing"
  },
  {
    icon: Globe,
    title: "Complete Web Solutions",
    description: "From landing pages to complex web applications. Modern, fast, and conversion-optimized websites.",
    benefits: ["Mobile responsive", "Fast loading", "Conversion focused"],
    category: "Development"
  },
]

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
  "Increase revenue by up to 500% with AI-powered automation",
  "Reduce operational costs by 60% through intelligent systems",
  "Generate 10x more qualified leads with targeted campaigns",
  "Achieve 300% organic traffic growth with expert SEO",
  "Scale your SaaS product to millions of users seamlessly",
  "Dominate local search with comprehensive digital presence"
]

export default function Home() {
  return (

    <div className="min-h-screen  flex flex-col">

{/* <div className="fixed min-h-screen w-full inset-0 z-0 pointer-events-none"> */}

<LeftModelViewer scale={0.3}/>
<RightModelViewer scale={0.3}/>


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
            <span className="text-sm font-medium">India's Leading Digital Solutions Agency</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Complete Digital Solutions
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              AI • SaaS • Marketing • SEO
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-4xl text-gray-200 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your business with AI agents, custom SaaS platforms, high-converting Meta ads,
          SEO dominance, and intelligent chatbots. Your complete digital transformation partner.
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
            Get Free Strategy Consultation
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            aria-label="View Our Portfolio"
          >
            View Success Stories
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      

      {/* Comprehensive Services Section */}
      <motion.div
        className="py-20 px-4  relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Complete Digital Solutions
              <span className="block text-blue-400">Under One Roof</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto">
              From AI automation to digital marketing, custom SaaS development to SEO dominance -
              we provide everything your business needs to thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full font-semibold">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <Link
                    href="/services"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-transform"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Categories CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need a Custom Solution?</h3>
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
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why 500+ Businesses
              <span className="block text-blue-600">Trust Digital Product Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just service providers - we're your strategic partners in digital success
              with a proven track record of delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
          </div>

          <ProjectCarousel />

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
                <div className="text-sm font-medium">Average Client ROI</div>
                <div className="text-3xl font-bold">500%</div>
                <div className="text-sm opacity-90">Within 12 Months</div>
              </div>
              {/* Top Left Overlay */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-sm font-medium">Projects Delivered</div>
                <div className="text-2xl font-bold">1000+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


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
              <span className="font-semibold">Limited Time: 50% Off All Digital Solutions This Month!</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to 10x Your Business?
            </h2>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Join 50+ successful businesses who've transformed their operations with our
              comprehensive digital solutions. Don't let competitors get ahead - start today!
            </p>

            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="group bg-white text-gray-900 hover:bg-gray-100 font-bold py-5 px-12 rounded-full transition-all duration-300 inline-flex items-center shadow-2xl transform hover:scale-105 text-lg"
                aria-label="Get Free Digital Strategy Audit"
              >
                Get Free Digital Strategy Audit
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-center">
                <div className="text-sm text-gray-300 mb-1">🎯 Free comprehensive audit • No strings attached</div>
                <div className="text-sm text-gray-300">⭐ Trusted by Fortune 20 companies</div>
                <div className="text-sm text-yellow-400 font-semibold">💰 Average 500% ROI guaranteed</div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="font-bold mb-2">Call Now</h3>
                <p className="text-sm text-gray-300">Speak with our experts</p>
                <Link href="tel:+91-9400355185" className="text-blue-400 hover:text-blue-300 font-semibold">
                  +91-9400355185
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <MessageSquare className="w-8 h-8 mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-300">Quick consultation</p>
                <Link href="https://wa.me/919400355185" className="text-green-400 hover:text-green-300 font-semibold">
                  Chat Now
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Globe className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <h3 className="font-bold mb-2">Schedule Meeting</h3>
                <p className="text-sm text-gray-300">Book your slot</p>
                <Link href="/book" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Book Now
                </Link>
              </div>
            </div>
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
              Based in India, serving globally - we specialize in AI agents, custom SaaS development,
              Meta advertising, SEO services, chatbot integration, and comprehensive digital marketing solutions.
              Transform your business with cutting-edge technology and proven strategies that deliver measurable results.
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