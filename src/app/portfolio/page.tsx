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
]

const stats = [
  { number: "50+", label: "Projects Completed" },
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
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === category
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
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Web Development Project by Digital Product Solutions`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <div className="text-right text-sm text-gray-500">
                        <div className="font-semibold">{project.duration}</div>
                        <div>{project.clientType}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-medium shadow-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Client Testimonial */}
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-gray-700 italic">"{project.testimonial}"</p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">Verified Client</span>
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
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  100% Satisfaction Guarantee
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Local Kerala Business
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
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