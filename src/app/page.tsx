'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Crafting Digital Experiences
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We build stunning websites and powerful web applications that drive your business forward.
      </motion.p>
      <motion.div 
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
          Our Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}

