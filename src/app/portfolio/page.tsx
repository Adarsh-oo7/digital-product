"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head"

const projects = [
  {
    title: "E-commerce Platform for Kerala Businesses",
    description: "A fully responsive e-commerce platform built for businesses in Kerala, featuring secure payment gateways and intuitive UI. Designed to enhance customer engagement and drive sales for local businesses in Attingal.",
    image: "/img/ec.png",
    technologies: ["Django", "Bootstrap", "SQLite"],
    location: "Attingal, Kerala"
  },
  {
    title: "Website Maintenance Services",
    description: "Comprehensive website maintenance for clients across Kerala including regular updates, performance optimization, and SEO enhancements. Ensuring reliable digital solutions for local enterprises.",
    image: "/img/ht1.png",
    technologies: ["JavaScript", "Django", "MySQL"],
    location: "Across Kerala"
  },
  {
    title: "Event Management Website",
    description: "Modern responsive website for an Attingal-based event management team showcasing services and past events. Optimized for performance and local SEO to attract clients.",
    image: "/img/lt.png",
    technologies: ["Bootstrap", "JavaScript"],
    location: "Attingal, Kerala"
  },
  {
    title: "Honey Farm Website",
    description: "Clean static website for a Kerala honey cultivator showcasing organic products and farming practices. Designed to reflect local agricultural heritage and drive direct sales.",
    image: "/img/sample1.png",
    technologies: ["Next.js"],
    location: "Kerala"
  },
]

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Web Development Portfolio in Kerala | Digital Product Solutions</title>
        <meta 
          name="description" 
          content="Our portfolio showcases web development projects for Kerala businesses including e-commerce platforms, websites, and maintenance services in Attingal and across Kerala." 
        />
        <link rel="canonical" href="https://www.digitalproductsolutions.in/portfolio" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digitalproductsolutions.in/portfolio" />
        <meta property="og:title" content="Web Development Portfolio in Kerala | Digital Product Solutions" />
        <meta 
          property="og:description" 
          content="See our web development projects for Kerala businesses including e-commerce and websites in Attingal" 
        />
        <meta property="og:image" content="https://www.digitalproductsolutions.in/og-portfolio.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.digitalproductsolutions.in/portfolio" />
        <meta property="twitter:title" content="Web Development Portfolio in Kerala" />
        <meta 
          property="twitter:description" 
          content="Our web development projects for Kerala businesses in Attingal and beyond" 
        />
        <meta property="twitter:image" content="https://www.digitalproductsolutions.in/og-portfolio.jpg" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio",
            "description": "Web development projects by Digital Product Solutions serving Kerala",
            "url": "https://www.digitalproductsolutions.in/portfolio",
            "mainEntity": projects.map(project => ({
              "@type": "CreativeWork",
              "name": project.title,
              "description": project.description,
              "locationCreated": {
                "@type": "Place",
                "name": project.location
              }
            }))
          })}
        </script>
      </Head>

      <div className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Our Kerala Web Development Portfolio
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600">
              Projects in Attingal and Across Kerala
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our work building digital solutions for local businesses, from e-commerce platforms to professional websites.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                      {project.location}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-white rounded-lg p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Whether you're in Attingal or elsewhere in Kerala, we can help bring your digital vision to life with custom web solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Contact Our Kerala Team
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}