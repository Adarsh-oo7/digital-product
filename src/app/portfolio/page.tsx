"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"
import ParticleNetwork from "@/components/ParticleNetwork"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"

const projects = [
  {
    title: "Wedding Events Website",
    category: "Business Website",
    description:
      "A sophisticated, responsive static website crafted for a premier wedding planning team in Banglore, India. The platform features an elegant portfolio of luxury weddings, detailed service breakdowns, and a seamless inquiry system for prospective couples. Engineered for high performance and local SEO, the site effectively showcases their creative excellence and simplifies the booking process for the regional wedding market.",
    image: "./img/crystalknot.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Event Gallery", "Wedding Videos", "Contact and Services", "Custom SEO"],
    duration: "2 weeks",
    clientType: "Wedding Events",
    testimonial: "Now we can reach customers directly without middlemen!",
  },
  {
    title: "Construction Company Website",
    category: "Business Website",
    description:
      "A sophisticated, responsive static website crafted for a premier construction company in Attingal, India. The platform features an elegant portfolio of completed projects, detailed service breakdowns, and a seamless inquiry system for prospective clients. Engineered for high performance and local SEO, the site effectively showcases their creative excellence and simplifies the booking process for the regional construction market.",
    image: "./img/buildwellz.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Clients Gallery", "Construction Videos", "Contact and Services", "Custom SEO"],
    duration: "2 weeks",
    clientType: "Construction",
    testimonial: "Reached more clients in our area and got more inquiries after launching the new website.",
  },
  {
    title: "Soft Drinks Company Website",
    category: "Business Website",
    description:
      "Responsive static with mini ecommerce website crafted for a premier soft drinks company in Kochi, Kerala. The platform features an elegant portfolio of their products, detailed service breakdowns, and a seamless inquiry system for prospective clients. Engineered for high performance and local SEO, the site effectively showcases their creative excellence and simplifies the booking process for the regional soft drinks market.",
    image: "./img/Softdrinks.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Product Catalog", "Online Ordering", "Contact and Services", "Custom SEO"],
    duration: "2 weeks",
    clientType: "Soft Drinks",
    testimonial: "Got more inquiries after launching the new website.",
  },


  {
    title: "Kerala Sellers Website",
    category: "Business Website",
    description:
      "Kerala Sellers is an all-in-one e-commerce solution designed for Kerala’s local businesses. With secure payment integration, smart product management, custom dashboard, advanced product filtering, and a clean, intuitive interface, the platform helps sellers connect with customers effortlessly and scale their business online—starting from Attingal to all of Kerala.",
    image: "./img/keralasellers.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Own Website", "Dashboard", "Stock Management", "Billing Software"],
    duration: "8 Months",
    clientType: "E-Commerce",
    testimonial: "Our Sales increased significantly after launching the new website.",
  },
  {
    title: "Mangrove Moments Website",
    category: "Business Website",
    description:
      "Kerala Sellers is an all-in-one e-commerce solution designed for Kerala’s local businesses. With secure payment integration, smart product management, custom dashboard, advanced product filtering, and a clean, intuitive interface, the platform helps sellers connect with customers effortlessly and scale their business online—starting from Attingal to all of Kerala.",
    image: "./img/moments.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Own Website", "contact", "pricing", "Gallery", "Activities"],
    duration: "3 weeks",
    clientType: "Business",
    testimonial: "Now we can reach customers directly",
  },
  {
    title: "Mangrove spot Website",
    category: "Business Website",
    description:
      "Kerala Sellers is an all-in-one e-commerce solution designed for Kerala’s local businesses. With secure payment integration, smart product management, custom dashboard, advanced product filtering, and a clean, intuitive interface, the platform helps sellers connect with customers effortlessly and scale their business online—starting from Attingal to all of Kerala.",
    image: "./img/spot.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Own Website", "contact", "pricing", "Gallery", "Activities"],
    duration: "3 weeks",
    clientType: "Business",
    testimonial: "Now we can reach customers directly without middlemen!",
  },
  {
    title: "Event Management Website",
    category: "Business Website",
    description:
      "A modern, responsive static website developed for an event management team in Attingal, Kerala. The site highlights their professional services, showcases past events, and includes a contact form for local inquiries. Optimized for performance and SEO, it strengthens their online presence and attracts clients in the event planning industry.",
    image: "./img/lemons.jpeg?height=400&width=600",
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
    image: "./img/honey.jpeg?height=400&width=600",
    technologies: ["Next.js"],
    features: ["Product Catalog", "Online Ordering", "Farm Story", "Local SEO"],
    duration: "2 weeks",
    clientType: "Agriculture",
    testimonial: "Now we can reach customers directly without middlemen!",
  },
  {
    title: "E-commerce Platform",
    category: "E-commerce Development",
    description:
      "A fully responsive e-commerce platform built for businesses in Kerala, featuring secure payment gateways, advanced product filtering, and an intuitive user interface. Designed to enhance customer engagement and drive sales, this solution supports local businesses in Attingal and beyond with seamless online shopping experiences tailored to their needs.",
    image: "./img/ec.jpeg?height=400&width=600",
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
    image: "./img/ht1.jpeg?height=400&width=600",
    technologies: ["JavaScript", "Django", "MySQL"],
    features: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Performance Optimization"],
    duration: "Ongoing",
    clientType: "Multiple Businesses",
    testimonial: "Professional and reliable service that keeps our website running perfectly.",
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

      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative text-black py-36 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl top-[-150px] left-[-150px]" />
            <div className="absolute w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
          </div>
          <ParticleNetwork />

          <div className="container mx-auto relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent z-20 relative">
                Our Portfolio
              </h1>
              {/* <h2 className="text-md sm:text-lg md:text-xl lg:text-xl font-semibold mb-6 text-black z-20 relative">
                Premium Web Development Projects in Kerala
              </h2> */}
              <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-8 text-black leading-relaxed z-20 relative">
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
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-blue-500">{stat.label}</div>
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
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-col-1 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative rounded-3xl overflow-hidden shadow-md aspect-square cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Full Image */}
                  <Image
                    src={project.image}
                    alt={`${project.title} - Web Development Project`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Always visible: category badge */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-blue-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium shadow-md z-10">
                    {project.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Hover content — slides up */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-3 md:p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-[11px] md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[10px] md:text-xs bg-white/20 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-white/20 pt-2 md:pt-4">
                      <p className="text-[10px] md:text-xs text-gray-300 italic line-clamp-2">
                        "{project.testimonial}"
                      </p>
                      <div className="flex items-center mt-1 md:mt-2 gap-1 md:gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[10px] md:text-xs text-gray-400">Verified Client</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-400 text-white py-16 px-4">
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