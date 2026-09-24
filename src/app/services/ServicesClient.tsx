'use client'

import Link from 'next/link';
import ParticleNetwork from '@/components/ParticleNetwork';
import { motion } from 'framer-motion'
import CtaBand from '@/components/seo/CtaBand';
import {
  Code,
  Layers,
  Network,
  ShoppingCart,
  Search,
  Smartphone,
  Palette,
  Gauge,
  Wrench,
  Bot,
  MessageCircle,
  Database
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications tailored to your specific needs. We use cutting-edge technologies to ensure your site is fast, secure, and scalable.',
    icon: Code,
    link: '/website-development',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that drive sales and improve customer experience. We integrate secure payment gateways and optimize for mobile shopping.',
    icon: ShoppingCart,
    link: '/ecommerce-website-development-kerala',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your online visibility and attract more customers to your website. We use data-driven strategies to boost your search engine rankings and increase organic traffic.',
    icon: Search,
    link: '/seo-services-kerala',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for Android & iOS built with Flutter and React Native. Clean code, high performance, and published prices.',
    icon: Smartphone,
    link: '/app-development-kerala',
  },
  {
    title: 'WhatsApp Automation',
    description: 'Official Meta Cloud API automation, automated customer replies, order notification broadcasts, and lead capture for Kerala businesses.',
    icon: MessageCircle,
    link: '/whatsapp-automation-kerala',
  },
  {
    title: 'AI Solutions & Chatbots',
    description: 'Intelligent AI agents, customer support chatbots, and machine learning automations tailored to reduce business operational hours.',
    icon: Bot,
    link: '/ai-services',
  },
  {
    title: 'Kerala Industry CRM Software',
    description: 'Industry-specific lead management CRM software for real estate, clinics, gyms, wedding planners, coaching centres, and travel agencies.',
    icon: Database,
    link: '/crm-software-kerala',
  },
  {
    title: 'Responsive Design',
    description: 'Ensure your website looks great on all devices with our expertise in responsive web design using Bootstrap and Tailwind CSS. Provide a seamless experience for your users.',
    icon: Smartphone,
    link: '/website-development-trivandrum',
  },
  {
    title: 'UI/UX Prototyping',
    description: 'Create intuitive and visually appealing user interfaces using modern Figma workflows. Turn your ideas into effective prototypes for a better user experience.',
    icon: Palette,
    link: '/contact',
  },
  {
    title: 'Full-Stack Development',
    description: 'Get a complete solution for your web application with our full-stack development services. From frontend interfaces to backend functionality, we cover it all.',
    icon: Layers,
    link: '/software-development',
  },
  {
    title: 'Custom APIs and Integrations',
    description: 'Develop and integrate RESTful APIs tailored to your business needs. Connect multiple services and create a seamless ecosystem for your web application.',
    icon: Network,
    link: '/freelance-software-developer-kerala',
  },
  {
    title: 'Performance Optimization',
    description: 'Enhance your website’s loading speed and overall performance with our optimization techniques, ensuring a smooth user experience.',
    icon: Gauge,
    link: '/website-maintenance-kerala',
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website up-to-date and secure with regular maintenance. We handle bug fixes, updates, and performance improvements.',
    icon: Wrench,
    link: '/website-maintenance-kerala',
  },
];

export default function ServicesClient() {
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
        flex
        flex-col
        justify-between
      "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition duration-300 pointer-events-none" />

              <div>
                <service.icon className="
                    w-8 h-8 
                    sm:w-10 sm:h-10 
                    md:w-12 md:h-12 
                    mb-3 md:mb-4 
                    text-blue-500
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
                  text-black/80
                  mb-5
                ">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-200/50 flex items-center justify-between z-10 relative">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-sm"
                >
                  Know More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <CtaBand heading="Need a scoped estimate for one of these services?" />
        </div>
      </div>
    </div>
  )
}
