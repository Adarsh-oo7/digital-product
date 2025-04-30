"use client"

import { motion } from "framer-motion"
import { Cpu, Brain, BotIcon as Robot, BarChart, Cloud, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const services = [
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Leverage the power of machine learning to gain insights from your data and automate complex tasks.",
    image: "/img/Ai11.png",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Implement advanced NLP techniques to understand and generate human-like text for chatbots and more.",
    image: "/img/Ai2.png",
  },
  {
    icon: Robot,
    title: "AI-Powered Automation",
    description: "Streamline your business processes with intelligent automation powered by cutting-edge AI technology.",
    image: "/img/ai3.jpg",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Use AI to forecast trends, optimize operations, and make data-driven decisions for your business.",
    image: "/img/ai4.jpg",
  },
  {
    icon: Cloud,
    title: "AI-Enabled Cloud Solutions",
    description: "Harness the power of AI in cloud computing to scale your operations and improve efficiency.",
    image: "/img/ai5.png",
  },
  {
    icon: Shield,
    title: "AI-Driven Cybersecurity",
    description: "Protect your digital assets with advanced AI-powered threat detection and prevention systems.",
    image: "/img/ai6.png",
  },
]

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services in Kerala | Digital Product Solutions</title>
        <meta 
          name="description" 
          content="Expert AI services in Kerala including machine learning, NLP, automation, and predictive analytics. Transform your business with our AI solutions." 
        />
        <link rel="canonical" href="https://www.digitalproductsolutions.in/ai-services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digitalproductsolutions.in/ai-services" />
        <meta property="og:title" content="AI Services in Kerala | Digital Product Solutions" />
        <meta 
          property="og:description" 
          content="Expert AI services in Kerala including machine learning, NLP, automation, and predictive analytics" 
        />
        <meta property="og:image" content="https://www.digitalproductsolutions.in/og-ai-services.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.digitalproductsolutions.in/ai-services" />
        <meta property="twitter:title" content="AI Services in Kerala | Digital Product Solutions" />
        <meta 
          property="twitter:description" 
          content="Expert AI services in Kerala including machine learning, NLP, automation, and predictive analytics" 
        />
        <meta property="twitter:image" content="https://www.digitalproductsolutions.in/og-ai-services.jpg" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Digital Product Solutions",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Attingal",
                "addressRegion": "Kerala",
                "postalCode": "695101",
                "addressCountry": "IN"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen py-16 mt-7 px-4 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cutting-Edge AI Services in Kerala
          </motion.h1>
          
          <motion.p
            className="text-xl mb-6 text-center text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness the power of artificial intelligence to transform your business
          </motion.p>
          
          <motion.p
            className="text-lg mb-12 text-center text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our AI services empower Kerala businesses with innovative solutions, from machine learning to automation.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} service`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 mr-2 text-indigo-600" />
                    <h2 className="text-xl text-black font-semibold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/book"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-white rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl text-gray-600 font-semibold mb-4">Ready to Implement AI in Your Business?</h2>
            <p className="mb-6 text-gray-500">
              Contact our Kerala-based AI experts to discuss customized solutions for your organization.
            </p>
            <Link
              href="/book"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center"
            >
              Schedule Consultation
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}