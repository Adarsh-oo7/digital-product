"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head"
import ParticleNetwork from "@/components/ParticleNetwork"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"

const teamMembers = [
  {
    name: "Adarsh B S",
    role: ["Project Manager", "SEO and Marketing Specialist"],
    image: "./img/adarshnew.png?height=300&width=300",
    imageHover: "/img/adarshcrazy.jpeg?height=300&width=300",
    tier: "core",
  },
  {
    name: "Midhin S",
    role: ["Full-Stack Developer", "Backend Specialist", "Quality Assurance (QA)"],
    image: "./img/midhin.jpg?height=300&width=300",
    imageHover: "/img/midhincrazy.jpeg?height=300&width=300",
    tier: "core",
  },

  {
    name: "Aromal V G",
    role: ["Full-Stack Developer", "UI/UX Designer", "Frontend Specialist"],
    image: "./img/aromalnew.png?height=300&width=300",
    imageHover: "/img/aromalcrazy.jpeg?height=300&width=300",
    tier: "core",
  },
  {
    name: "Akhil Shibu",
    image: "./img/shibu.png?height=300&width=300",
    tier: "member",
  },

  {
    name: "Akhilesh C J",
    image: "./img/akhilesh.png?height=300&width=300",
    tier: "member",
  },
  {
    name: "Adarsh M",
    image: "./img/adarsh m.png?height=300&width=300",
    tier: "member",
  },

  {
    name: "Arjun",
    image: "./img/arjun.png?height=300&width=300",
    tier: "member",
  },
  {
    name: "Mohd Sha",
    image: "./img/shah new.png?height=300&width=300",
    tier: "member",
  },
  {
    name: "Nakul P",
    image: "./img/nakul.png?height=300&width=300",
    tier: "member",
  },
]

// ✅ Moved outside the component to avoid re-creating on every render
const MemberCard = ({
  member,
  index,
}: {
  member: (typeof teamMembers)[0]
  index: number
}) => (
  <motion.div
    className="flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
  >
    <div className="relative w-[200px] h-[200px] group">
      {/* Default Image */}
      <Image
        src={member.image}
        alt={`${member.name}${member.role?.[0] ? ` – ${member.role[0]}` : ""} at Digital Product Solutions`}
        fill
        className="rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Hover Image */}
      {member.imageHover && (
        <Image
          src={member.imageHover}
          alt={member.name}
          fill
          className="rounded-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
    </div>
    <h3 className="text-xl font-semibold mt-2">{member.name}</h3>

    {member.role && member.role.length > 0 && (
      <p className="text-gray-400 text-center">
        {member.role.map((r, i) => (
          <span key={i}>
            {r}
            {i < member.role!.length - 1 && <br />}
          </span>
        ))}
      </p>
    )}
  </motion.div>
)

export default function About() {

  const coreTeam = teamMembers.filter((m) => m.tier === "core")
  const otherMembers = teamMembers.filter((m) => m.tier === "member")



  return (
    <>
      <Head>
        <title>About Us | Digital Product Solutions</title>
        <link rel="canonical" href={`${BASE_URL}/about`} />
        < script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Digital Product Solutions",
              "url": "https://www.digitalproductsolutions.in",
              "logo": "https://www.digitalproductsolutions.in/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Adarsh B S"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Trivandrum",
                "addressRegion": "Kerala",
                "addressCountry": "India"
              }
            })
          }
          }
        />

      </Head>
      <div className="min-h-screen py-16 px-4 mt-20">

        <div className="absolute inset-0 z-0 pointer-events-none">

          {/* BLUE GLOW */}
          <div className="absolute w-[700px] h-[700px] 
      bg-blue-300/30 rounded-full blur-3xl 
      top-1/2 left-1/3 
      -translate-x-1/2 -translate-y-1/2" />

          {/* PURPLE GLOW */}
          <div className="absolute w-[700px] h-[700px] 
      bg-purple-300/30 rounded-full blur-3xl 
      top-1/2 left-2/3 
      -translate-x-1/2 -translate-y-1/2" />
        </div>

        <ParticleNetwork />

        <div className="container mx-auto">
          {/* Page Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-900">About </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Product Solutions
            </span>
          </motion.h1>

          {/* Mission and Vision */}
          <div className="space-y-12">
            {/* Mission & Vision — full width stacked with big number labels */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gray-800/60 rounded-2xl p-8 overflow-hidden">
                <span className="absolute top-4 right-6 text-8xl font-bold text-white select-none leading-none">
                  01
                </span>
                <h2 className="text-xl font-semibold mb-4 text-blue-400">Our Mission</h2>
                <p className="text-white leading-relaxed relative z-10">
                  At Digital Product Solutions, we are dedicated to empowering businesses with
                  innovative web and AI solutions that drive growth and digital transformation.
                  Our mission is to transform your ideas into impactful digital realities using
                  cutting-edge technologies, tailored strategies, and a client-centric approach.
                  We strive to deliver measurable results, helping businesses of all sizes succeed
                  in the competitive online landscape.
                </p>
              </div>

              <div className="relative bg-gray-800/60 rounded-2xl p-8 overflow-hidden">
                <span className="absolute top-4 right-6 text-8xl font-bold text-white select-none leading-none">
                  02
                </span>
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Our Vision</h2>
                <p className="text-white leading-relaxed relative z-10">
                  We envision a future where every business, from startups to global enterprises,
                  has access to high-quality digital products that compete on a global stage. Our
                  goal is to bridge the gap between ambition and achievement by providing scalable,
                  user-focused solutions that elevate brands, enhance user experiences, and create
                  lasting value in the digital ecosystem.
                </p>
              </div>
            </motion.div>

            {/* Team — full width banner style */}
            <motion.div
              className="rounded-2xl border border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="px-8 py-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold">Our Team</h2>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  Our dynamic team of developers, designers, and strategists collaborates to bring
                  your digital vision to life. With expertise in web development, AI integration,
                  UI/UX design, SEO, and project management, we deliver innovative and reliable
                  solutions. Staying ahead of industry trends, we ensure your project is built with
                  the latest technologies and best practices for optimal performance and user
                  satisfaction.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
                {[
                  { text: "Expert developers proficient in modern frameworks and programming languages", color: "text-blue-400" },
                  { text: "Creative designers crafting intuitive, visually stunning interfaces", color: "text-purple-400" },
                  { text: "Experienced project managers ensuring seamless delivery and client satisfaction", color: "text-green-400" },
                  { text: "Dedicated support team for ongoing maintenance, optimization, and updates", color: "text-orange-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 px-6 py-5">
                    <span className={`text-lg font-bold shrink-0 ${item.color}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Team Members */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Core Team */}
            <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <MemberCard key={index} member={member} index={index} />
              ))}
            </div>

            {otherMembers.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-px bg-gray-700" />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                    Our Crew
                  </h3>
                  <div className="flex-1 h-px bg-gray-700" />
                </div>
                <div className="flex gap-6 overflow-x-auto pb-4 justify-center flex-wrap">
                  {otherMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center gap-2 min-w-[200px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={130}
                        height={130}
                        className="rounded-full border-2 border-gray-600"
                      />
                      <p className="text-sm text-gray-500 text-center">{member.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Google Map */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Location</h2>
            <div className="relative overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.16649578382!2d76.84067420000002!3d8.660266599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x893ab90196d09cb5%3A0xdbfd038c9bb1b62!2sDigital%20product%20sale!5e1!3m2!1sen!2sin!4v1737039748951!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}