"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"

export default function Contact() {
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
          console.log("Form successfully submitted")
        } else {
          console.error("Form submission failed")
          setIsSubmitted(false)
        }
      })
      .catch((error) => {
        console.error("Error submitting the form:", error)
        setIsSubmitted(false)
      })
  }

  return (
    <>
      <Head>
        <title>Contact Us | Digital Product Solutions - Web Development in Kerala</title>
        <meta
          name="description"
          content="Contact Digital Product Solutions in Attingal, Kerala, for expert web development, AI solutions, and website maintenance. Reach us via email, phone, or our contact form to discuss your project needs."
        />
        <meta
          name="keywords"
          content="contact web development Kerala, website design Attingal, Digital Product Solutions, AI solutions Kerala, website maintenance Attingal"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Us",
              "description": "Get in touch with Digital Product Solutions in Attingal, Kerala, for professional web development, AI solutions, and website maintenance services.",
              "url": "${BASE_URL}/contact",
              "publisher": {
                "@type": "Organization",
                "name": "Digital Product Solutions",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${BASE_URL}/img/logo.png"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Attingal",
                  "addressLocality": "Attingal",
                  "addressRegion": "Kerala",
                  "postalCode": "695101",
                  "addressCountry": "India"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1234567890",
                  "email": "digitalproductkerala@gmail.com",
                  "contactType": "Customer Service"
                }
              }
            }
          `}
        </script>
      </Head>
      <div className="min-h-screen py-16 px-4 relative">
        <Image
          src="./img/bgtt.jpg?height=1080&width=1920&text=Telephone+Background"
          alt="Contact background with telephone theme"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
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
            Connect with our expert team in Attingal, Kerala, to transform your business with innovative web development, AI-powered solutions, and reliable website maintenance. Whether you’re a local business in Attingal or anywhere in Kerala, we’re here to discuss your project needs, answer questions, and provide tailored digital solutions. Fill out our contact form, email us, or call for a consultation to take the first step toward achieving your digital goals.
          </motion.p>
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
                  Your message has been successfully sent. Our team in Attingal, Kerala, will respond promptly to discuss how we can support your business with customized web and AI solutions. Expect a reply within 24–48 hours.
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-white"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-white"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-white"
                    >
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
              <a href="tel:+1234567890" className="underline hover:text-blue-400">
                +91 9400355185
              </a>
            </p>
            <p className="mt-4">
              Visit us: Attingal, Kerala, India – 695101
            </p>
            <p>
              We’re dedicated to empowering businesses in Kerala with innovative digital solutions. Let’s collaborate to bring your vision to life!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}