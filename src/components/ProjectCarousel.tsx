
"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

const projects = [
  { title: "Construction Company", image: "../img/buildwellz.jpg", url: "https://www.buildwellz.in" },
  { title: "Soft Drinks Company", image: "../img/guava-fizz.png", url: "https://www.squeezeberriez.in/" },
  { title: "Wedding Events", image: "../img/wedding events.jpg", url: "https://crystalknotfilms.com/" },
  { title: "Sports", image: "../img/mm.jpg", url: "https://www.mangrovemoments.com/" },
  { title: "Entertainment", image: "../img/ms.jpg", url: "https://www.mangrovespot.in/" },
]

const inHouseProjects = [
  { title: "Kerala Sellers", image: "../img/ks dsp.jpg", url: "/kerala-sellers", upcoming: false },
  { title: "Kerala PSC", image: "../img/ks dsp (1).jpg", url: "#", upcoming: true },
]

type Project = { title: string; image: string; url: string }

function InfiniteCarousel(props: { items: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)

  useEffect(() => {
    pausedRef.current = hovered
  }, [hovered])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let animId: number
    let pos = 0
    const speed = 0.5

    function step() {
      const singleWidth = track!.scrollWidth / 3
      if (!pausedRef.current) {
        pos += speed
        if (pos >= singleWidth) pos = 0
        track!.style.transform = "translateX(-" + pos + "px)"
      }
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [])

  const looped = [...props.items, ...props.items, ...props.items]

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
        {looped.map((project, i) => (
          <a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-2xl shadow-lg flex-shrink-0 w-56 h-56 md:w-72 md:h-72 block"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-sm md:text-base font-semibold text-center">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      </div>
      )
}

      export default function ProjectGrid() {
  return (
      <section className="py-16 bg-gray-100 overflow-hidden">

        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Our Projects
          </h2>
        </div>

        <InfiniteCarousel items={projects} />

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 mt-16">
            In-House Projects
          </h2>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {inHouseProjects.map((project) => {
                const card = (
                  <div className={
                    "relative group overflow-hidden rounded-2xl shadow-lg aspect-square w-60 md:w-64 bg-gray-100 transition-all " +
                    (project.upcoming ? "cursor-default grayscale opacity-80" : "hover:shadow-2xl")
                  }>
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
                  return <div key={project.title}>{card}</div>
                }

                if (project.url.startsWith("/")) {
                  return <Link key={project.title} href={project.url}>{card}</Link>
                }

                return (
                  <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-12">

            <a
              href="/portfolio"
              className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              View All Client Projects
            </a>

          </div>
        </div>

      </section>
      )
}