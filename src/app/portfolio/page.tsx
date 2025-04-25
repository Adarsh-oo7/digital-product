'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with advanced features and seamless user experience.',
    image: './img/ec.png?height=400&width=600',
    technologies: ['Django', 'Bootstrap', 'Sql-lite'],
  },
  {
    title: 'Website Maintenance for Existing Clients',
    description: 'Provide ongoing maintenance and support for existing websites, including content updates, bug fixes, performance optimization, SEO improvements, and regular backups. Ensured smooth and secure operation for business and personal sites.',
    image: './img/ht1.png?height=400&width=600',
    technologies: ['JavaScript', 'Django', 'MySql'],
  },
  {
    title: 'Static website for Event management Team ',
    description: 'Designed and developed a sleek, responsive static website for an event management team based in Attingal. The site showcases their services, event highlights, and contact details, providing a professional online presence to attract local clients.',
    image: './img/lt.png?height=400&width=600',
    technologies: [' Bootstrap', 'JavaScript'],
  },
  {
    title: 'Basic website for Honey cultivating farmer ',
    description: 'Created a clean and informative static website for a honey cultivator to showcase natural honey products, share farming practices, and provide contact information for direct sales. The design highlights purity, sustainability, and the local essence of Kerala farming.',
    image: './img/sample1.png?height=400&width=600',
    technologies: ['Next Js', ],
  },
]

export default function Portfolio() {
  return (
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
        <motion.h6 
          className="text-1xl md:text-1xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Some Major Project
        </motion.h6>
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
                    <span key={tech} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
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
  )
}

