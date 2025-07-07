"use client"

import Image from "next/image"
import Link from "next/link" // Optional if linking to internal route

const projects = [
  { title: "Construction Company", image: "../img/buildwellz.jpg", url: "https://www.buildwellz.in" },
  { title: "Soft Drinks Company", image: "../img/guava-fizz.png", url: "https://www.squeezeberriez.in/" },
  { title: "Catering", image: "../img/caters.png", url: "https://adarsh-oo7.github.io/-Lemons-Elegant-Catering/" },
]

export default function ProjectGrid() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-center px-4">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/portfolio" // Change this to your actual "All Projects" page route
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
