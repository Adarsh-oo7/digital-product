'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Layers, 
  Network, 
  ShoppingCart, 
  Search, 
  Smartphone, 
  Palette, 
  Gauge, 
  Wrench 
} from 'lucide-react';

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
  {
    title: 'Responsive Design',
    description: 'Ensure your website looks great on all devices with our expertise in responsive web design using Bootstrap and CSS. Provide a seamless experience for your users.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Prototyping',
    description: 'Create intuitive and visually appealing user interfaces using basic Figma designs. Turn your ideas into effective prototypes for a better user experience.',
    icon: Palette,
  },
  {
    title: 'Full-Stack Development',
    description: 'Get a complete solution for your web application with our full-stack development services. From frontend interfaces to backend functionality, we cover it all.',
    icon: Layers,
  },
  {
    title: 'Custom APIs and Integrations',
    description: 'Develop and integrate RESTful APIs tailored to your business needs. Connect multiple services and create a seamless ecosystem for your web application.',
    icon: Network,
  },
  {
    title: 'Performance Optimization',
    description: 'Enhance your website’s loading speed and overall performance with our optimization techniques, ensuring a smooth user experience.',
    icon: Gauge,
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website up-to-date and secure with regular maintenance. We handle bug fixes, updates, and performance improvements.',
    icon: Wrench,
  },
];


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

