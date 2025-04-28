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
          form.reset() // Reset form after successful submission
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
          content="Contact Digital Product Solutions in Attingal, Kerala, for expert web development, AI solutions, and website maintenance. Reach us via email, phone (+91 9400355185), or our contact form to discuss your project needs."
        />
        <meta
          name="keywords"
          content="contact web development Kerala, website design Attingal, Digital Product Solutions, AI solutions Kerala, website maintenance Attingal, web developer Kerala"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Digital Product Solutions",
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
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+919400355185",
                  "email": "digitalproductkerala@gmail.com",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Malayalam"]
                }
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How can I contact Digital Product Solutions in Attingal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reach our Attingal, Kerala team via our contact form, email at digitalproductkerala@gmail.com, or phone at +91 9400355185. We’re here to assist with your web development and AI solution needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What services do you offer in Kerala?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide web development, AI integration, website maintenance, and e-commerce solutions tailored for businesses in Attingal and across Kerala, ensuring high-quality digital transformations."
                    }
                  }
                ]
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
          quality={85} // Optimized for performance
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
            Connect with our dedicated team in Attingal, Kerala, to elevate your business with innovative web development, AI-powered solutions, and reliable website maintenance. Serving clients in Attingal and across Kerala, we offer personalized consultations to understand your goals and deliver tailored digital solutions. Fill out our contact form, email us, or call +91 9400355185 to start your project today and achieve a strong online presence.
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
                  Your message has been successfully sent. Our Attingal, Kerala-based team will respond within 24–48 hours to discuss how we can support your business with customized web development, AI solutions, or website maintenance. Check your inbox (and spam folder) for our reply.
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
                      aria-required="true"
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
                      aria-required="true"
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
                      aria-required="true"
                    ></textarea>
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_honeypot" value="" /> {/* Honeypot for spam prevention */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                    aria-label="Submit contact form"
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
            <p className="mt-2">
              We’re dedicated to empowering businesses in Kerala with innovative digital solutions, from responsive websites to advanced AI integrations. Let’s collaborate to bring your vision to life!
            </p>
          </motion.div>
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
                  Reach our Attingal, Kerala team via our contact form, email at{" "}
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
                  . We’re here to assist with your web development and AI solution needs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  What services do you offer in Kerala?
                </h4>
                <p>
                  We provide expert web development, AI integration, website maintenance, and e-commerce solutions tailored for businesses in Attingal and across Kerala, ensuring high-quality digital transformations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  How quickly will I receive a response?
                </h4>
                <p>
                  Our Attingal team responds to inquiries within 24–48 hours, ensuring prompt communication to discuss your project requirements and next steps for your business in Kerala.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}