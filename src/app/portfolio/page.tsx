"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"

  export const metadata = {
    title: "Digital Product solutions | Web ",
    description:
      "Digital Product is a top web development agency offering custom websites, e-commerce solutions, and SEO services. Transform your online presence today!",
    keywords:
      "digital product, web development agency, custom websites, e-commerce solutions, SEO optimization",
  };
  


const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform built for businesses in Kerala, featuring secure payment gateways, advanced product filtering, and an intuitive user interface. Designed to enhance customer engagement and drive sales, this solution supports local businesses in Attingal and beyond with seamless online shopping experiences tailored to their needs.",
    image: "./img/ec.png?height=400&width=600",
    technologies: ["Django", "Bootstrap", "Sql-lite"],
  },
  {
    title: "Website Maintenance for Existing Clients",
    description:
      "Comprehensive website maintenance services for clients across Kerala, including Attingal. We provide regular content updates, bug fixes, performance optimization, SEO enhancements, and secure backups. Our services ensure business and personal websites operate smoothly, supporting local enterprises with reliable and secure digital solutions.",
    image: "./img/ht1.png?height=400&width=600",
    technologies: ["JavaScript", "Django", "MySql"],
  },
  {
    title: "Static Website for Event Management Team",
    description:
      "A modern, responsive static website developed for an event management team in Attingal, Kerala. The site highlights their professional services, showcases past events, and includes a contact form for local inquiries. Optimized for performance and SEO, it strengthens their online presence and attracts clients in the event planning industry.",
    image: "./img/lt.png?height=400&width=600",
    technologies: ["Bootstrap", "JavaScript"],
  },
  {
    title: "Basic Website for Honey Cultivating Farmer",
    description:
      "A clean, user-friendly static website for a honey cultivator in Kerala, showcasing organic honey products and sustainable farming practices. Designed to reflect the local essence of Attingal’s agricultural heritage, the site includes product details, contact information, and SEO optimization to drive direct sales and customer engagement.",
    image: "./img/sample1.png?height=400&width=600",
    technologies: ["Next Js"],
  },
]

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Digital Product Solutions - Web Development in Kerala</title>
        <meta
          name="description"
          content="Explore our portfolio of innovative web development projects in Kerala, including e-commerce platforms, static websites, and maintenance services. Serving Attingal and beyond with tailored digital solutions."
        />
        <meta
          name="keywords"
          content="web development Kerala, website design Attingal, e-commerce solutions, static websites, website maintenance, Digital Product Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/portfolio`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Portfolio",
              "description": "Explore our portfolio of web development projects by Digital Product Solutions, serving Kerala and Attingal with e-commerce platforms, static websites, and maintenance services.",
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
                }
              }
            }
          `}
        </script>
      </Head>
      <div className="min-h-screen py-16 px-4">
        <div className="container mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-1 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.h2
            className="text-xl md:text-xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Major Web Development Projects in Kerala
          </motion.h2>
          <motion.p
            className="text-lg mb-12 text-center text-gray-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our diverse portfolio of web development projects tailored for businesses and individuals in Kerala, particularly in Attingal. From robust e-commerce platforms to sleek static websites and reliable maintenance services, our work showcases innovation, quality, and a commitment to client success. Each project is designed to meet unique business needs, ensuring functionality, performance, and a strong online presence.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}