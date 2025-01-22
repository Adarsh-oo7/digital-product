'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
import { ArrowRight} from "lucide-react"
import AnimatedReviews from '../components/AnimatedReviews'


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

  <div className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16">
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Digital Product: Transform Your Online Presence with Expert Web Development
    </motion.h1>
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
        href="/services"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
        aria-label="Explore Our Web Development Services"
      >
        Explore Our Web Development Services
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Link
        href="/contact"
        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
        aria-label="Get in Touch with Our Agency"
      >
        Get in Touch with Our Agency
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </motion.div>
  </div>

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

