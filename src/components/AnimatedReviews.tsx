'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons


interface Review {
  id: number
  name: string
  company: string
  content: string
  rating:number
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ashik J.S",
    company: "Lemon Caters and Events",
    content: "Digital Product transformed our online presence with their expert web development services. Their team's skills in creating custom digital products are unmatched!",
    rating:4.3

  },
  {
    id: 2,
    name: "Kiran Mohan",
    company: "E-commerce Giants",
    content: "The e-commerce solution provided by this web development agency boosted our sales by 200%. Digital Product's expertise in creating powerful online stores is highly recommended!",
    rating:4
  },
  {
    id: 3,
    name: "Johnson A",
    company: "StartUp Ventures",
    content: "As a startup, we needed a robust and scalable website. Digital Product delivered beyond our expectations, showcasing their prowess as a top-tier web development agency.",
    rating:5

  },
  {
    id: 4,
    name: "Gautam Raj",
    company: "Creative Studios",
    content: "The team at Digital Product brought our creative vision to life. Their web development skills and design expertise are truly top-notch!",
    rating:5


  },
  {
    id: 5,
    name: "Ishaan R.N",
    company: "Global Solutions",
    content: "Digital Product's SEO strategies significantly improved our online visibility. Their comprehensive approach to web development and digital marketing delivered great results!",
    rating:4.5

  }
]

const AnimatedReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <div ref={containerRef} className="w-full overflow-hidden  py-12">
    <h2 className="text-3xl font-bold text-center mb-8 text-white">
    What Our Clients Say About Our Web Development Agency
    </h2>
    <motion.div
      className="flex space-x-8 whitespace-nowrap"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { x: '100%' },
        visible: { x: '-100%' },
      }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    >
      {[...reviews, ...reviews].map((review, index) => (
        <div
          key={index}
          className="w-[370px] bg-white p-6 rounded-lg shadow-lg flex-shrink-0"
        >
          <p className="text-black mb-3 break-words whitespace-normal">
            &quot;{review.content}&quot;
          </p>
          <div className="flex items-center mb-3">
            {/* Render Star Rating */}
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-500">
                {i < review.rating ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
          </div>
          <p className="text-blue-400 font-semibold">{review.name}</p>
          <p className="text-gray-400">{review.company}</p>
        </div>
      ))}
    </motion.div>
  </div>
  
  )
}

export default AnimatedReviews