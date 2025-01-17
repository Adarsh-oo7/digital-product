'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {




  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.div 
          className="bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form action="https://formsubmit.co/adarshsarachandran@gmail.com" method="POST" className="space-y-6 form-container">
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="name"
      name="name"

      required
      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"

      required
      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <input type="hidden" name="_next" value="https://adarshbs.com" />


  <input type="hidden" name="_subject" value="New submission!" />


  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Message <span className="text-red-500">*</span>
    </label>
    <textarea
      id="message"
      name="message"

      required
      rows={4}
      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
  >
    Send Message
    <Send className="ml-2 h-5 w-5" />
  </button>
</form>


        </motion.div>
      </div>
    </div>
  )
}

