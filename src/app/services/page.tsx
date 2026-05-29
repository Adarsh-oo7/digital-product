'use client'

import ParticleNetwork from '@/components/ParticleNetwork';
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
    <div className="min-h-screen py-32 px-4 relative overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
      </div>

      <ParticleNetwork />


      <div className="container mx-auto">
        <motion.h1
          className="
    text-3xl 
    sm:text-4xl 
    md:text-5xl 
    lg:text-6xl 
    font-extrabold 
    mb-8 
    md:mb-12 
    text-center
    bg-gradient-to-r 
    from-blue-500 
    via-purple-500 
    to-pink-500 
    bg-clip-text 
    text-transparent
    z-2
    relative
  "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8 z-10 relative">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="
        relative
        rounded-2xl
        p-6
        backdrop-blur-lg
        bg-white/10
        border border-purple-300
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        overflow-hidden
      "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition duration-300" />

              {/* Content */}
              <service.icon className="
                  w-8 h-8 
                  sm:w-10 sm:h-10 
                  md:w-12 md:h-12 
                  mb-3 md:mb-4 
                  text-blue-300
                " />

              <h2 className="
                text-md 
                sm:text-lg 
                md:text-xl 
                font-semibold 
                mb-2 md:mb-3 
                text-black
              ">
                {service.title}
              </h2>

              <p className="
                text-sm 
                sm:text-base 
                md:text-md 
                leading-relaxed 
                text-black
              ">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

