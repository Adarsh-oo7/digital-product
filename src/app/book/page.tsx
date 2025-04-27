"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react"

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
    service: "", // Added service to formData
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission

    const form = e.target as HTMLFormElement

    // Log form data for debugging
    console.log("Form Data:", formData)

    try {
      // Use FormData to send data programmatically
      const formDataObj = new FormData(form)
      const response = await fetch(form.action, {
        method: "POST",
        body: formDataObj,
      })

      // Log the response for debugging
      console.log("Response:", response)

      if (response.ok) {
        console.log("Form successfully submitted")
        setIsSubmitted(true) // Display thank you message
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
          service: "", // Reset service selection
        })
      } else {
        console.error("Form submission failed")
        alert("Form submission failed. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting the form:", error)
      alert("An error occurred. Please check your network connection and try again.")
    }
  }

  return (
    <div className="min-h-screen mt-7 py-16 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
      <motion.div
        className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row ">
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
              Choose a service and schedule your appointment with our expert team.
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
                <p className="text-gray-600">Your message has been successfully sent. We will get back to you soon.</p>
              </motion.div>
            ) : (
              <form
                action="https://formsubmit.co/digitalproductkerala@gmail.com"
                method="POST"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                {/* Service Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <label className="block text-gray-700 mb-2">Select a Service</label>
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
                          />
                          <span className="text-gray-700">{service.name}</span>
                          {/* <span className="text-gray-500">${service.price}</span> */}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
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
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
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
                    />
                  </div>
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
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
                    />
                  </div>
                </motion.div>

                {/* Date and Time Inputs */}
                <div className="flex space-x-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="w-1/2"
                  >
                    <label htmlFor="date" className="block text-gray-700 mb-2">
                      Date
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
                      Time
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
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Message Input */}
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

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2 }}
                >
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </motion.div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}