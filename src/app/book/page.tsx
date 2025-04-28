"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react"
import Head from "next/head"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"

const services = [
  { id: "web-dev", name: "Web Development", price: 5000 },
  { id: "ai-integration", name: "AI Integration", price: 7000 },
  { id: "seo-optimization", name: "SEO Optimization", price: 3000 },
  { id: "e-commerce", name: "E-commerce Solutions", price: 6000 },
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    service: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    console.log("Form Data:", formData)

    try {
      const formDataObj = new FormData(form)
      const response = await fetch(form.action, {
        method: "POST",
        body: formDataObj,
      })

      if (response.ok) {
        console.log("Form successfully submitted")
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
          service: "",
        })
        form.reset()
      } else {
        console.error("Form submission failed")
        alert("Form submission failed. Please try again.")
        setIsSubmitted(false)
      }
    } catch (error) {
      console.error("Error submitting the form:", error)
      alert("An error occurred. Please check your network connection and try again.")
      setIsSubmitted(false)
    }
  }

  return (
    <>
      <Head>
        <title>Book Services | Digital Product Solutions - Web Development in Kerala</title>
        <meta
          name="description"
          content="Book web development, AI integration, SEO optimization, or e-commerce solutions with Digital Product Solutions in Attingal, Kerala. Schedule your appointment today."
        />
        <meta
          name="keywords"
          content="book web development Kerala, website design Attingal, AI solutions Kerala, SEO optimization Attingal, e-commerce solutions, Digital Product Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/booking`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Book Services",
              "description": "Schedule an appointment with Digital Product Solutions in Attingal, Kerala, for professional web development, AI integration, SEO optimization, and e-commerce solutions.",
              "url": "${BASE_URL}/booking",
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
                    "name": "What services can I book in Attingal, Kerala?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer web development, AI integration, SEO optimization, and e-commerce solutions for businesses in Attingal and across Kerala, tailored to your needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I schedule an appointment?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use our booking form to select a service, date, and time. Our Attingal team will confirm your appointment within 24–48 hours."
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Head>
      <div className="min-h-screen mt-7 py-16 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
        <motion.div
          className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
              <motion.h1
                className="text-4xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Book Our Services
              </motion.h1>
              <motion.p
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Schedule a consultation with our expert team in Attingal, Kerala, to transform your business with professional web development, AI integration, SEO optimization, or e-commerce solutions. Select a service and preferred time to start your digital journey with us.
              </motion.p>
            </div>
            <div className="md:w-1/2 p-8">
              {isSubmitted ? (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h2>
                  <p className="text-gray-600">
                    Your booking request has been successfully sent. Our Attingal, Kerala team will confirm your appointment within 24–48 hours via email or phone.
                  </p>
                </motion.div>
              ) : (
                <>
                  <motion.h2
                    className="text-2xl font-bold mb-6 text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Schedule Your Appointment
                  </motion.h2>
                  <form
                    action="https://formsubmit.co/digitalproductkerala@gmail.com"
                    method="POST"
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <label className="block text-gray-700 mb-2">
                        Select a Service <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-4">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                          >
                            <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="radio"
                                name="service"
                                value={service.id}
                                checked={formData.service === service.id}
                                onChange={handleInputChange}
                                className="form-radio text-blue-600"
                                required
                                aria-label={`Select ${service.name} service`}
                              />
                              <span className="text-gray-700">
                                {service.name} (₹{service.price})
                              </span>
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
                          placeholder="Your Name"
                          aria-required="true"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
                          placeholder="your@email.com"
                          aria-required="true"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
                          placeholder="Your Phone Number"
                          aria-required="true"
                        />
                      </div>
                    </motion.div>
                    <div className="flex space-x-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="w-1/2"
                      >
                        <label htmlFor="date" className="block text-gray-700 mb-2">
                          Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
                            aria-required="true"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="w-1/2"
                      >
                        <label htmlFor="time" className="block text-gray-700 mb-2">
                          Time <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
                            aria-required="true"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    >
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
                          placeholder="Any additional information..."
                        ></textarea>
                      </div>
                    </motion.div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_honeypot" value="" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    >
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                        aria-label="Submit booking form"
                      >
                        Book Now
                      </button>
                    </motion.div>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="container mx-auto max-w-4xl mt-12 text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold">
                What services can I book in Attingal, Kerala?
              </h4>
              <p>
                We offer professional web development, AI integration, SEO optimization, and e-commerce solutions for businesses in Attingal and across Kerala. Each service is tailored to meet your unique business needs, ensuring a strong digital presence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                How do I schedule an appointment?
              </h4>
              <p>
                Use our booking form to select a service, date, and time. Our Attingal-based team will confirm your appointment within 24–48 hours via email or phone, ensuring a seamless process.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                What are the starting prices for your services?
              </h4>
              <p>
                Our services start at ₹3000 for SEO optimization, ₹5000 for web development, ₹6000 for e-commerce solutions, and ₹7000 for AI integration. Contact us for a detailed quote customized to your project in Kerala.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}