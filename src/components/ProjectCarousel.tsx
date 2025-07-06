"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const projects = [
  { title: "AI Chatbot Integration", image: "/img/lemons.png" },
  { title: "E-commerce Web App", image: "/img/lemons.png" },
  { title: "Real Estate 3D Viewer", image: "/img/lemons.png" },
  { title: "Healthcare Dashboard", image: "/img/lemons.png" },
  { title: "Logistics Tracker", image: "/img/lemons.png" },
  { title: "Online Learning Platform", image: "/img/lemons.png" },
]

export default function ProjectCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 3

  const canGoNext = startIndex + itemsToShow < projects.length
  const canGoPrev = startIndex > 0

  const nextSlide = () => {
    if (canGoNext) {
      setStartIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (canGoPrev) {
      setStartIndex((prev) => prev - 1)
    }
  }

  const visibleProjects = projects.slice(startIndex, startIndex + itemsToShow)

  return (
    <section className="py-16  relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our Projects</h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.title}
                  className="relative group rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold px-4 text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={`bg-white text-black p-3 rounded-full shadow transition ${
                canGoPrev ? "hover:bg-gray-200" : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Previous"
            >
              <ArrowLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={`bg-white p-3 text-black rounded-full shadow transition ${
                canGoNext ? "hover:bg-gray-200" : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Next"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
