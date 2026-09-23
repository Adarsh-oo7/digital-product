"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react"
import ParticleNetwork from "@/components/ParticleNetwork"
import { track } from "@/lib/analytics"

const services = [
  { id: "web-dev", name: "Web Development" },
  { id: "ai-integration", name: "AI Integration" },
  { id: "seo-optimization", name: "SEO Optimization" },
  { id: "e-commerce", name: "E-commerce website" },
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
  const [open, setOpen] = useState<number | null>(null);
  const [bookStarted, setBookStarted] = useState(false);

  const markBookStart = () => {
    if (bookStarted) return;
    setBookStarted(true);
    track("book_start", { form: "book" });
  };

  const faqs = [
    {
      question:
        "What digital services does Digital Product Solutions offer in Kerala?",
      answer:
        "Websites, e-commerce, custom software, mobile apps, SEO, WhatsApp automation and AI tools for Kerala businesses. The office is in Korani, Thiruvananthapuram.",
    },
    {
      question:
        "Do you offer SEO services for businesses outside Kerala?",
      answer:
        "The SEO work is built for Kerala cities first. A business outside Kerala can ask, and we say yes only when the scope fits. We do not promise a Google position.",
    },
    {
      question:
        "What are your starting prices for web development and AI solutions?",
      answer:
        "Published starting ranges: websites ₹5,000–₹8,000, SEO from ₹5,000 a month, custom software from ₹15,000, apps from ₹25,000, AI from ₹12,000. The estimate depends on scope.",
    },
    {
      question:
        "How long does it take to complete a website or automation project?",
      answer:
        "Most business websites go live in about 7 days. Custom apps and platforms usually take 15 to 45 days after the scope is agreed.",
    },
    {
      question:
        "What happens on the first call?",
      answer:
        "We confirm the service, the town, a starting range from the published prices, and what the first build includes. You can also review project stories on the work page before you book.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    try {
      const formDataObj = new FormData(form)
      const response = await fetch(form.action, {
        method: "POST",
        body: formDataObj,
      })

      if (response.ok) {
        track("booking_submit", { form: "book" })
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen  pt-36 pb-20 px-4 relative overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl top-[-150px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
        </div>

        <ParticleNetwork />
        <motion.div
          className="container relative z-20 mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className=" p-8 bg-gradient-to-br from-blue-200 to-purple-200 backdrop-blur-lg">
            {isSubmitted ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h2>
                <p className="text-gray-600">
                  Your booking request has been successfully sent. Our Kerala team will confirm your appointment within 24–48 hours via email or phone. Check your inbox (and spam folder) for our confirmation to begin your digital transformation.
                </p>
              </motion.div>
            ) : (
              <>
                <motion.h1
                  className="text-2xl text-center font-extrabold mb-6 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Schedule Your Appointment
                </motion.h1>
                <form
                  action="https://formsubmit.co/digitalproductkerala@gmail.com"
                  method="POST"
                  onSubmit={handleFormSubmit}
                  onFocusCapture={markBookStart}
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
                              {service.name}
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
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-3 py-2 rounded-lg border bg-transparent border-white focus:outline-none focus:border-blue-500 text-gray-700"
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
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-3 py-2 rounded-lg border bg-transparent border-white focus:outline-none focus:border-blue-500 text-gray-700"
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
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-3 py-2 rounded-lg border bg-transparent border-white focus:outline-none focus:border-blue-500 text-gray-700"
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
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-lg border bg-transparent border-white focus:outline-none focus:border-blue-500 text-gray-700"
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
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-lg border bg-transparent border-white focus:outline-none focus:border-blue-500 text-gray-700"
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
                      <MessageSquare className="absolute left-3 top-3 text-gray-700" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-3 py-2 rounded-lg border bg-transparent border-white focus:outline-none focus:border-blue-500 text-gray-700"
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
        </motion.div>
        <motion.div
          className="container mx-auto max-w-4xl mt-20 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-black" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-black rounded-2xl p-6 cursor-pointer hover:border-indigo-500 transition-all duration-300"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <h4 className="text-lg text-gray-700 font-semibold flex justify-between items-center" style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {faq.question}
                  <span className="text-gray-700">
                    {open === index ? "−" : "+"}
                  </span>
                </h4>

                <div className={`grid transition-[grid-template-rows] duration-300 ${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-gray-500 leading-relaxed">
                    <span className="block pt-4">{faq.answer}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}