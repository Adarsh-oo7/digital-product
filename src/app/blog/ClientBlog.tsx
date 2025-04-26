"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  keywords: string[];
  relatedPosts: number[];
};

export default function ClientBlog({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const categories = ["All", ...new Set(initialPosts.map((post) => post.category))];

  const filteredPosts = initialPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase()),
        )),
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Digital Product Solutions Blog
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover expert insights on AI solutions, e-commerce software, web design, and more to grow your business in 2025. Stay ahead with Digital Product Solutions.
          </p>
        </motion.header>

        {/* Search Bar */}
        <motion.div
          className="mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="search"
              placeholder="Search for digital solutions, AI, e-commerce, and more..."
              className="w-full px-4 py-3 bg-white rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search blog posts"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.nav
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-900 hover:bg-blue-100"
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </motion.nav>

        {/* Blog Posts Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index % 9) }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                  <h2 className="text-xl font-semibold mt-2 mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <time className="text-gray-500 text-sm">{post.date}</time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:underline font-medium"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No posts found. Try a different search term or category.
            </p>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.nav
            className="flex justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 hover:bg-blue-100"
                }`}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            ))}
          </motion.nav>
        )}

        {/* Service Highlights */}
        <motion.section
          className="bg-gray-100 py-12 px-6 rounded-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Our Digital Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Solutions</h3>
              <p className="text-gray-600 mb-4">
                Transform your business with custom AI tools for automation, analytics, and personalization.
              </p>
              <Link
                href="/services/ai-solutions"
                className="text-blue-600 hover:underline"
                aria-label="Learn more about AI solutions"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Software</h3>
              <p className="text-gray-600 mb-4">
                Build scalable online stores with tailored features to boost sales and customer loyalty.
              </p>
              <Link
                href="/services/ecommerce-solutions"
                className="text-blue-600 hover:underline"
                aria-label="Learn more about e-commerce solutions"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Design</h3>
              <p className="text-gray-600 mb-4">
                Create responsive, SEO-friendly websites that engage and convert clients.
              </p>
              <Link
                href="/services/web-design"
                className="text-blue-600 hover:underline"
                aria-label="Learn more about web design"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Business with Digital Product Solutions
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Partner with us to build cutting-edge AI, e-commerce, and web design solutions tailored to your needs. Join hundreds of satisfied clients who have grown their businesses with us.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            aria-label="Contact us for digital solutions"
          >
            Get Started Today
          </Link>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="bg-gray-100 py-12 px-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Digital Product Solutions transformed our e-commerce platform, increasing our sales by 50% in just six months!"
              </p>
              <p className="text-gray-900 font-semibold">— John Doe, CEO of TechTrend</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Their AI solutions streamlined our operations, saving us 30% in costs. Highly recommend!"
              </p>
              <p className="text-gray-900 font-semibold">— Jane Smith, CTO of InnovateNow</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}