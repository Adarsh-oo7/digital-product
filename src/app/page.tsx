'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
import { ArrowRight,Cpu, Brain, Bitcoin as Robot} from "lucide-react"
import AnimatedReviews from '../components/AnimatedReviews'
import Image from "next/image";


const AIFeatures = [
  {
    icon: Cpu,
    title: "AI-Powered Web Solutions",
    description: "Enhance websites and applications with AI-driven analytics, personalized recommendations, and intelligent automation to improve user experience and engagement.",
  },
  {
    icon: Brain,
    title: "Chatbots & Virtual Assistants",
    description: "Build AI-powered chatbots using NLP to automate customer support, answer FAQs, and improve user interactions across websites and apps.",
  },
  {
    icon: Robot,
    title: "AI-Integrated SEO & Content Generation",
    description: "Leverage NLP models to generate high-quality, SEO-optimized content, automate keyword analysis, and improve website rankings with AI-driven insights",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

  <div className="flex-grow flex flex-col justify-center items-center text-center mt-7 px-4 py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
Expert Web Development to Transform Your Online Presence    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl mb-12 max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      We craft stunning websites and powerful web applications that propel your business forward in the digital
      landscape. Start your journey today with us!
    </motion.p>
    <motion.div
      className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Link
        href="/ai-services"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
        aria-label="Explore Our Web Development Services"
      >
        Explore Our AI Services
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Link
        href="/book"
        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
        aria-label="Get in Touch with Our Agency"
      >
        Book a Consultation
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </motion.div>
  </div>
  <motion.div
        className="py-16 px-4 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our AI-Powered Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AIFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="py-16 px-4 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">How AI Can Transform Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="./img/AiH.png?height=400&width=600&text=AI+Transformation"
                alt="AI Transformation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Enhance decision-making with data-driven insights</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Improve customer experiences through personalization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Automate repetitive tasks and increase productivity</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Predict market trends and stay ahead of competitors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

  <section className="bg-gray-800 py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Why Choose Digital Product as Your Web Development Agency?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Expertise in Modern Web Technologies</h3>
          <p>
            Our team of skilled developers stays at the forefront of web development trends, ensuring your digital
            product is built with the latest and most efficient technologies.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
          <p>
            We prioritize your business goals and user needs, crafting digital solutions that not only look great
            but also deliver tangible results for your organization.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Comprehensive Digital Services</h3>
          <p>
            From initial concept to post-launch support, we offer end-to-end web development services to ensure the
            success of your digital product.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
          <p>
            With a portfolio of successful projects across various industries, we have the experience and skills to
            bring your digital vision to life.
          </p>
        </div>
      </div>
    </div>
  </section>

  <AnimatedReviews />
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Online Presence?</h2>
      <p className="text-xl mb-8">
        Partner with Digital Product, your trusted web development agency, and let's create a digital product that
        sets you apart from the competition.
      </p>
      <Link
        href="/contact"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center"
        aria-label="Start Your Web Development Project"
      >
        Start Your Web Development Project
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </section>
</div>

  )
}

