"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    setIsSubmitted(true)
    const formData = new FormData(form)
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          form.reset()
        } else {
          setIsSubmitted(false)
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error)
        setIsSubmitted(false)
      })
  }

  return (
    <>
      <Head>
        <title>Contact Web Developers in Attingal, Kerala | Digital Product Solutions</title>
        <meta
          name="description"
          content="Get in touch with our Kerala web development team. Call +91 9400355185 or email digitalproductkerala@gmail.com for custom website solutions."
        />
        <link rel="canonical" href="https://www.digitalproductsolutions.in/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digitalproductsolutions.in/contact" />
        <meta property="og:title" content="Contact Our Kerala Web Development Team" />
        <meta 
          property="og:description" 
          content="Professional web development services in Attingal, Kerala" 
        />
        <meta property="og:image" content="https://www.digitalproductsolutions.in/og-contact.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.digitalproductsolutions.in/contact" />
        <meta property="twitter:title" content="Contact Our Kerala Web Development Team" />
        <meta 
          property="twitter:description" 
          content="Professional web development services in Attingal, Kerala" 
        />
        <meta property="twitter:image" content="https://www.digitalproductsolutions.in/og-contact.jpg" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Digital Product Solutions",
            "description": "Web development services in Kerala",
            "url": "https://www.digitalproductsolutions.in/contact",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Attingal",
              "addressRegion": "Kerala",
              "postalCode": "695101",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919400355185",
              "email": "digitalproductkerala@gmail.com",
              "contactType": "customer service",
              "areaServed": "IN"
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen py-16 px-4 relative">
        {/* Background Image */}
        <Image
          src="/img/bgtt.jpg"
          alt="Contact background with telephone theme"
          fill
          style={{ objectFit: "cover" }}
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        {/* Main Content */}
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Digital Product Solutions
          </motion.h1>
          
          <motion.p
            className="text-lg mb-12 text-center text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect with our expert team in Attingal, Kerala, to transform your business with innovative web development solutions.
          </motion.p>

          {/* Contact Form Container */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Thank You for Reaching Out!</h2>
                <p>
                  Our Attingal-based team will respond within 24–48 hours.
                </p>
              </div>
            ) : (
              <>
                <motion.h2
                  className="text-2xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Get in Touch with Our Kerala Team
                </motion.h2>
                
                <form
                  action="https://formsubmit.co/digitalproductkerala@gmail.com"
                  method="POST"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://www.digitalproductsolutions.in/thank-you" />
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-8 text-center text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mb-4">
              Prefer direct communication? Reach our Attingal-based team at:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:digitalproductkerala@gmail.com"
                className="underline hover:text-blue-400"
              >
                digitalproductkerala@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919400355185"
                className="underline hover:text-blue-400"
              >
                +91 9400355185
              </a>
            </p>
            <p className="mt-4">
              Visit us: Attingal, Kerala, India – 695101
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mt-12 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  How can I contact Digital Product Solutions in Attingal?
                </h4>
                <p>
                  Reach our team via our contact form, email at{" "}
                  <a
                    href="mailto:digitalproductkerala@gmail.com"
                    className="underline hover:text-blue-400"
                  >
                    digitalproductkerala@gmail.com
                  </a>
                  , or phone at{" "}
                  <a
                    href="tel:+919400355185"
                    className="underline hover:text-blue-400"
                  >
                    +91 9400355185
                  </a>
                  .
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  What services do you offer in Kerala?
                </h4>
                <p>
                  We provide web development, AI integration, website maintenance, and e-commerce solutions for businesses in Kerala.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  How quickly will I receive a response?
                </h4>
                <p>
                  Our team responds to inquiries within 24–48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}