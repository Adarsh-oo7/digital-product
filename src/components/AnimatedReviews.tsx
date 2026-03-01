'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons
import { Star } from 'lucide-react'


interface Review {
  id: number
  fullName: string
  businessName: string
  city: string
  content: string
  result: string
  rating: number
  website?: string
  image?: string
}

const reviews: Review[] = [
  {
    id: 1,
    fullName: "SAIF",
    businessName: "CrystalKnotFilms",
    city: "Banglore",
    website: "https://crystalknotfilms.com/",
    content:
      "The team transformed our online presence into something that matches the quality of our films. The improved visibility and structure brought us steady, serious client leads.",
    result: "Booked 4 wedding projects within the first month of launching the new website.",
    rating: 5,
    image: "/img/boy.jpg",
  },

  {
    id: 2,
    fullName: "Vipin Mohan",
    businessName: "BuilDwellz",
    city: "Varkala",
    website: "https://www.buildwellz.in/",
    content:
      "The team understood our brand and translated it into a clean, high-end digital presence. We started attracting more serious residential clients shortly after launch.",
    result: "Increased direct client inquiries by 2.5x compared to before the website launch.",
    rating: 4.5,
    image: "/img/boy.jpg",
  },

  {
    id: 3,
    fullName: "Abhishek",
    businessName: "Squeeze Berriez",
    city: "Thrissur",
    website: "https://www.squeezeberriez.in/",
    content:
      "The new website perfectly captures our Kerala roots and premium beverage quality. It helped us build stronger brand trust and attract new retail partnership inquiries.",
    result: "Received 4 new retail partnership discussions in the first month.",
    rating: 4.5,
    image: "/img/boy.jpg",
  },

  {
    id: 4,
    fullName: "Aromal V VG",
    businessName: "Kerala Sellers",
    city: "Trivandrum",
    website: "https://www.keralasellers.in/",
    content:
      "Kerala Sellers was built to empower local businesses with a powerful yet simple digital marketplace. From product listings to payments and automation, everything was designed for real-world execution.",
    result: "Successfully launched the platform and onboarded sellers from multiple districts within the first phase.",
    rating: 5,
    image: "/img/boy.jpg",
  },
  {
    id: 5,
    fullName: "Anvar Riyas",
    businessName: "Lemon Caters and Events",
    city: "Kochi",
    website: "https://lemoncaters.in",
    content:
      "Digital Product rebuilt our catering website and optimized our Google presence.",
    result: "Received 11 catering inquiries in the first 10 days.",
    rating: 4.5,
    image: "/img/boy.jpg",
  },

]



const AnimatedReviews = () => {
  return (
    <section className="py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16">
          Trusted by 20+ Kerala Businesses
        </h2>

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
            { [...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="min-w-[380px] bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            {/* Content */}
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              "{review.content}"
            </p>

            {/* Result Highlight */}
            <div className="bg-blue-50 text-blue-700 text-xs px-4 py-2 rounded-lg mb-6 font-medium">
              📈 {review.result}
            </div>

            {/* Stars */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  strokeWidth={1.5}
                  className={
                    i < Math.floor(review.rating)
                      ? 'text-yellow-500 fill-yellow-500'
                      : 'text-gray-300'
                  }
                />
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              {review.image && (
                <img
                  src={review.image}
                  alt={review.fullName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}

              <div>
                <p className="font-semibold text-gray-900">
                  {review.fullName}
                </p>
                <p className="text-sm text-gray-500">
                  {review.businessName} • {review.city}
                </p>

                {review.website && (
                  <a
                    href={review.website}
                    target="_blank"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AnimatedReviews