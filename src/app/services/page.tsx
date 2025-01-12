'use client'

import { motion } from 'framer-motion'
import { Code, ShoppingCart, Search } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications tailored to your specific needs. We use cutting-edge technologies to ensure your site is fast, secure, and scalable.',
    icon: Code,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that drive sales and improve customer experience. We integrate secure payment gateways and optimize for mobile shopping.',
    icon: ShoppingCart,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your online visibility and attract more customers to your website. We use data-driven strategies to boost your search engine rankings and increase organic traffic.',
    icon: Search,
  },
]

export default function Services() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <service.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

