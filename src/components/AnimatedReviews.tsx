'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { Star } from 'lucide-react'


interface Review {
  id: number
  fullName: string
  businessName: string
  city: string
  content: string
  before?: string
  solution?: string
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

    before:
      "The brand relied mainly on Instagram to showcase wedding films, with no dedicated website to present portfolios or convert visitors into serious booking inquiries.",

    solution:
      "Built a cinematic portfolio website showcasing wedding films, optimized for mobile viewing, with a structured gallery and a simple inquiry system for couples.",

    result:
      "Booked 4 wedding projects within the first month of launching the new website.",

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

    before:
      "The business relied mainly on referrals and social media, with no professional website to showcase completed projects or build credibility with new clients.",

    solution:
      "Designed a modern construction company website showcasing project portfolio, service details, and an optimized inquiry system to attract serious residential clients.",

    result:
      "Increased direct client inquiries by 2.5x compared to before the website launch.",

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

    before:
      "The brand had limited online presence and no dedicated website to showcase products, making it difficult for retailers and distributors to discover the brand.",

    solution:
      "Designed a modern brand-focused website highlighting product range, Kerala-inspired identity, and clear contact options for retail and partnership inquiries.",

    result:
      "Received 4 new retail partnership discussions in the first month.",

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

    before:
      "Many small Kerala businesses relied only on Instagram and WhatsApp to sell products, with no central platform to manage listings, orders, or payments.",

    solution:
      "Developed a full-featured marketplace platform where local sellers can list products, manage orders, and receive payments through a simple dashboard.",

    result:
      "Successfully launched the platform and onboarded sellers from multiple districts within the first phase.",

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
    before: "No website and depended only on WhatsApp inquiries.",
    solution: "Built a fast catering website with menu showcase and WhatsApp booking.",
    result: "Received 11 catering inquiries in the first 10 days.",
    rating: 4.5,
    image: "/img/boy.jpg",
  }

]



const AnimatedReviews = () => {

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    })
  }, [controls])

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16">
          Real Results from Kerala Businesses
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: [0, -800],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              },
            })
          }
        >
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={controls}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="
              min-w-[85%]
              sm:min-w-[70%]
              md:min-w-[48%]
              lg:min-w-[48%]
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-2xl
              p-6 md:p-8
              hover:border-blue-400/40
              transition-all duration-300
            "
              >
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  "{review.content}"
                </p>

                {review.before && (
                  <div className="text-xs text-gray-400 mb-2">
                    <span className="font-semibold text-gray-200">Before:</span>{" "}
                    {review.before}
                  </div>
                )}

                {review.solution && (
                  <div className="text-xs text-gray-400 mb-4">
                    <span className="font-semibold text-gray-200">Solution:</span>{" "}
                    {review.solution}
                  </div>
                )}

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs px-4 py-2 rounded-lg mb-6 font-medium border border-blue-400/20">
                  📈 {review.result}
                </div>

                <div className="flex mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      strokeWidth={1.5}
                      className={
                        i < Math.floor(review.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {review.image && (
                    <img
                      src={review.image}
                      alt={`${review.fullName} from ${review.businessName} review`}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/20"
                    />
                  )}

                  <div>
                    <p className="font-semibold text-white text-sm md:text-base">
                      {review.fullName}
                    </p>

                    <p className="text-xs md:text-sm text-gray-400">
                      {review.businessName} • {review.city}
                    </p>

                    {review.website && (
                      <a
                        href={review.website}
                        target="_blank"
                        className="text-xs md:text-sm text-blue-400 hover:text-blue-300"
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
      </div>
    </section>
  )
}

export default AnimatedReviews