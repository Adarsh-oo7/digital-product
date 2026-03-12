"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"

const projects = [
  {
    title: "E-commerce Platform",
    category: "E-commerce Development",
    description:
      "A fully responsive e-commerce platform built for businesses in Kerala, featuring secure payment gateways, advanced product filtering, and an intuitive user interface. Designed to enhance customer engagement and drive sales, this solution supports local businesses in Attingal and beyond with seamless online shopping experiences tailored to their needs.",
    image: "./img/ec.png?height=400&width=600",
    technologies: ["Django", "Bootstrap", "SQLite"],
    features: ["Secure Payment Gateway", "Product Filtering", "Mobile Responsive", "SEO Optimized"],
    duration: "6 weeks",
    clientType: "Local Business",
    testimonial: "Increased our online sales by 300% within the first month!",
  },
  {
    title: "Website Maintenance Services",
    category: "Maintenance & Support",
    description:
      "Comprehensive website maintenance services for clients across Kerala, including Attingal. We provide regular content updates, bug fixes, performance optimization, SEO enhancements, and secure backups. Our services ensure business and personal websites operate smoothly, supporting local enterprises with reliable and secure digital solutions.",
    image: "./img/ht1.png?height=400&width=600",
    technologies: ["JavaScript", "Django", "MySQL"],
    features: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Performance Optimization"],
    duration: "Ongoing",
    clientType: "Multiple Businesses",
    testimonial: "Professional and reliable service that keeps our website running perfectly.",
  },
  {
    title: "Event Management Website",
    category: "Business Website",
    description:
      "A modern, responsive static website developed for an event management team in Attingal, Kerala. The site highlights their professional services, showcases past events, and includes a contact form for local inquiries. Optimized for performance and SEO, it strengthens their online presence and attracts clients in the event planning industry.",
    image: "./img/lt.png?height=400&width=600",
    technologies: ["Bootstrap", "JavaScript"],
    features: ["Event Gallery", "Contact Forms", "Service Showcase", "Mobile Optimized"],
    duration: "3 weeks",
    clientType: "Event Management",
    testimonial: "Our bookings increased significantly after launching the new website.",
  },
  {
    title: "Organic Honey Farm Website",
    category: "Agriculture & Local Business",
    description:
      "A clean, user-friendly static website for a honey cultivator in Kerala, showcasing organic honey products and sustainable farming practices. Designed to reflect the local essence of Attingal's agricultural heritage, the site includes product details, contact information, and SEO optimization to drive direct sales and customer engagement.",
    image: "./img/sample1.png?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Product Catalog", "Online Ordering", "Farm Story", "Local SEO"],
    duration: "2 weeks",
    clientType: "Agriculture",
    testimonial: "Now we can reach customers directly without middlemen!",
  },
  {
    title: "Wedding Events Website",
    category: "Business Website",
    description:
      "A sophisticated, responsive static website crafted for a premier wedding planning team in Banglore, India. The platform features an elegant portfolio of luxury weddings, detailed service breakdowns, and a seamless inquiry system for prospective couples. Engineered for high performance and local SEO, the site effectively showcases their creative excellence and simplifies the booking process for the regional wedding market.",
    image: "./img/Screenshot 2026-01-20 221313.png",
    technologies: ["Next.js"],
    features: ["Event Gallery", "Wedding Videos", "Contact and Services", "Custom SEO"],
    duration: "2 weeks",
    clientType: "Wedding Events",
    testimonial: "Now we can reach customers directly without middlemen!",
  },
  {
    title: "Kerala Sellers Website",
    category: "Business Website",
    description:
      "Kerala Sellers is an all-in-one e-commerce solution designed for Kerala’s local businesses. With secure payment integration, smart product management, custom dashboard, advanced product filtering, and a clean, intuitive interface, the platform helps sellers connect with customers effortlessly and scale their business online—starting from Attingal to all of Kerala.",
    image: "./img/Screenshot 2026-01-21 153250.png",
    technologies: ["Next.js"],
    features: ["Own Website", "Dashboard", "Stock Management", "Billing Software"],
    duration: "8 Months",
    clientType: "E-Commerce",
    testimonial: "Our Sales increased significantly after launching the new website.",
  },
]

const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "3+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "E-commerce Development", "Business Website", "Maintenance & Support", "Agriculture & Local Business"]

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <>
      <Head>
        <title>Portfolio | Digital Product Solutions - Premium Web Development in Kerala & Attingal</title>
        <meta
          name="description"
          content="Explore our award-winning portfolio of web development projects in Kerala. Specialized in e-commerce platforms, business websites, and maintenance services. Serving Attingal and all of Kerala with 100% client satisfaction guarantee."
        />
        <meta
          name="keywords"
          content="web development Kerala, website design Attingal, e-commerce solutions Kerala, static websites, website maintenance, Digital Product Solutions portfolio, web developer Attingal, business websites Kerala"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Digital Product Solutions" />
        <meta property="og:title" content="Portfolio | Digital Product Solutions - Premium Web Development in Kerala" />
        <meta property="og:description" content="50+ successful projects, 100% client satisfaction. Professional web development services in Kerala and Attingal." />
        <meta property="og:image" content={`${BASE_URL}/img/portfolio-banner.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/portfolio`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`${BASE_URL}/portfolio`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Digital Product Solutions Portfolio",
              "description": "Premium web development portfolio showcasing 50+ successful projects in Kerala, including e-commerce platforms, business websites, and maintenance services.",
              "url": "${BASE_URL}/portfolio",
              "publisher": {
                "@type": "Organization",
                "name": "Digital Product Solutions",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${BASE_URL}/img/logo.png"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Attingal",
                  "addressRegion": "Kerala",
                  "addressCountry": "India"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "50"
                }
              },
              "mainEntity": [
                ${projects.map(project => `{
                  "@type": "CreativeWork",
                  "name": "${project.title}",
                  "description": "${project.description}",
                  "image": "${BASE_URL}/${project.image}",
                  "creator": {
                    "@type": "Organization",
                    "name": "Digital Product Solutions"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Portfolio
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Premium Web Development Projects in Kerala
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Discover our award-winning collection of digital solutions that have transformed businesses across Kerala and Attingal. From cutting-edge e-commerce platforms to elegant business websites, each project represents our commitment to excellence and client success.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 bg-white shadow-sm">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === category
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Smaller Image */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Web Development Project`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features - Modern Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial - Cleaner */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <p className="text-sm text-gray-600 italic">
                        “{project.testimonial}”
                      </p>

                      <div className="flex items-center mt-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          Verified Client
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Join our satisfied clients in Kerala and Attingal. Let's transform your digital presence with a custom solution tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  View Our Services
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100% Satisfaction Guarantee
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local Kerala Business
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Support Available
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}