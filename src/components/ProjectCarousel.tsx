"use client"

import Image from "next/image"
import Link from "next/link"

const projects = [
  { title: "Construction Company", image: "../img/buildwellz.jpg", url: "https://www.buildwellz.in" },
  { title: "Soft Drinks Company", image: "../img/guava-fizz.png", url: "https://www.squeezeberriez.in/" },
  { title: "Wedding Events", image: "../img/wedding events.jpg", url: "https://crystalknotfilms.com/" },
]

const InHouseprojects = [
  {
    title: "Kerala Sellers",
    image: "../img/ks dsp.jpg",
    url: "/kerala-sellers",   // internal route
    upcoming: false
  },
  {
    title: "Kerala PSC",
    image: "../img/ks dsp (1).jpg",
    url: "#",
    upcoming: true
  },
];

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

              {/* Permanent bottom overlay with transparent background */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-10">
                <h3 className="text-lg text-center font-semibold">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>

      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 mt-10">In-House Projects</h2>

        <div className="w-full flex justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-fit mx-auto">
            {InHouseprojects.map((project) => {
              const Card = (
                <div
                  className={`relative group overflow-hidden rounded-2xl shadow-lg aspect-square block w-60 md:w-64 bg-gray-100 transition-all
      ${project.upcoming ? "cursor-default grayscale opacity-80" : "hover:shadow-2xl"}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <h3 className="text-sm md:text-base text-center font-semibold">
                      {project.title}
                    </h3>
                    {project.upcoming && (
                      <p className="text-[10px] uppercase tracking-widest text-yellow-500 text-center mt-1">
                        Coming Soon
                      </p>
                    )}
                  </div>
                </div>
              )

              if (project.upcoming) {
                return <div key={project.title}>{Card}</div>
              }

              // 🔥 Internal route
              if (project.url.startsWith("/")) {
                return (
                  <Link key={project.title} href={project.url}>
                    {Card}
                  </Link>
                )
              }

              // 🌍 External route
              return (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              )
            })}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            View All Projects
          </a>
        </div>
      </div>

    </section>
  )
}
