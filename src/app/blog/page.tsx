"use client"

// import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";

// import { Search } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// const blogPosts = [
//   {
//     id: 1,
//     title: "The Future of AI in Web Development",
//     excerpt:
//       "Explore how artificial intelligence is shaping the future of web development and what it means for businesses.",
//     category: "AI",
//     date: "2023-06-15",
//     image: "/placeholder.svg?height=200&width=300&text=AI+in+Web+Dev",
//   },
//   {
//     id: 2,
//     title: "Optimizing Your E-commerce Site for Conversions",
//     excerpt: "Learn the best practices for optimizing your e-commerce website to increase conversions and boost sales.",
//     category: "E-commerce",
//     date: "2023-06-10",
//     image: "/placeholder.svg?height=200&width=300&text=E-commerce+Optimization",
//   },
//   {
//     id: 3,
//     title: "The Importance of Responsive Design in 2023",
//     excerpt: "Discover why responsive design is more crucial than ever in today's multi-device world.",
//     category: "Web Design",
//     date: "2023-06-05",
//     image: "/placeholder.svg?height=200&width=300&text=Responsive+Design",
//   },
// ]

export default function Blog() {
  // const [searchTerm, setSearchTerm] = useState("")

  // const filteredPosts = blogPosts.filter(
  //   (post) =>
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  // )

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog <br />
         

          
        </motion.h1> */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4">🚧 Under Maintenance 🚧</h1>
      <p className="text-lg mb-4">
        We're currently working on improvements. This page will be back soon!
      </p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-full transition-colors">
        Go to Home
      </Link>
    </div>{/* 
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full px-4 py-2 bg-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-400 text-sm font-semibold">{post.category}</span>
                <h2 className="text-xl font-semibold mb-2 mt-1">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Link href={`/blog/${post.id}`} className="text-blue-400 hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  )
}
