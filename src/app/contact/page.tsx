"use client"

import { useState } from "react"
import { motion } from "framer-motion";
import { Send, Plus } from "lucide-react"
import Image from "next/image"
import { track } from "@/lib/analytics"
import { business } from "@/lib/business"






export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const markFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    track("form_start", { form: "contact" });
    track("estimate_start", { form: "contact" });
  };

  const faqs = [
    {
      question: "How can I contact Digital Product Solutions?",
      answer:
        "Use the form on this page, WhatsApp or call +91 94003 55185, or email digitalproductkerala@gmail.com. The office is in Korani, Thiruvananthapuram, Kerala 695104.",
    },
    {
      question: "What services do you provide?",
      answer:
        "Websites, mobile apps, custom software, SEO, social media, WhatsApp automation and AI tools for Kerala businesses. Starting prices are on the pricing page.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Most business websites go live in about 7 days. Custom apps and platforms usually take 15 to 45 days after the scope is agreed.",
    },
    {
      question: "Do you work with clients outside Kerala?",
      answer:
        "Most work is for businesses in Kerala. We also take a small number of clients outside Kerala when the scope fits.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    track("form_submit", { form: "contact" })
    setIsSubmitted(true)
    const formData = new FormData(form)
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form successfully submitted")
          form.reset()
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

      <div className="min-h-screen py-16 pt-36 px-4 relative bg-white">
        <Image
          src="/img/bgtt.jpg"
          alt="Contact background with telephone theme"
          fill
          style={{ objectFit: "cover" }}
          quality={85}
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
            Connect with our expert team in Korani, Thiruvananthapuram district, Kerala, to transform your business with innovative web development, AI-powered solutions, and reliable website maintenance. Serving clients across Trivandrum and Kerala, we offer personalized consultations to understand your goals and deliver tailored digital solutions. Fill out our contact form, email us, or call +91 9400355185 to start your project today and achieve a strong online presence.
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
                  Your message has been successfully sent. Our Kerala-based team will respond within 24–48 hours to discuss how we can support your business with customized web development and AI solutions. Check your inbox for our reply.
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
                  onFocusCapture={markFormStart}
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
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
                      Service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      defaultValue=""
                    >
                      <option value="" className="text-gray-800">Select a service</option>
                      <option value="website" className="text-gray-800">Website</option>
                      <option value="ecommerce" className="text-gray-800">E-commerce</option>
                      <option value="software" className="text-gray-800">Software</option>
                      <option value="app" className="text-gray-800">Mobile app</option>
                      <option value="seo" className="text-gray-800">SEO</option>
                      <option value="automation" className="text-gray-800">WhatsApp / automation</option>
                      <option value="other" className="text-gray-800">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2 text-white">
                      Town / district
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="e.g. Trivandrum, Kollam"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white">
                      Budget range (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      defaultValue=""
                    >
                      <option value="" className="text-gray-800">Not sure yet</option>
                      <option value="under-10k" className="text-gray-800">Under ₹10,000</option>
                      <option value="10-25k" className="text-gray-800">₹10,000–₹25,000</option>
                      <option value="25-50k" className="text-gray-800">₹25,000–₹50,000</option>
                      <option value="50k-plus" className="text-gray-800">₹50,000+</option>
                    </select>
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
                  <input type="hidden" name="_honeypot" value="" />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                    aria-label="Submit contact form"
                  >
                    Get a Project Estimate
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
              Prefer direct communication? Reach our Korani, Thiruvananthapuram team at:
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
                onClick={() => track("phone_click", { location: "contact" })}
              >
                +91 9400355185
              </a>
            </p>
            <p className="mt-4">
              Visit us: Korani, Thiruvananthapuram, Kerala 695104
            </p>
            <p className="mt-2">
              We’re dedicated to empowering businesses in Kerala with innovative digital solutions, from responsive websites to advanced AI integrations.
            </p>
          </motion.div>
          <motion.div
            className="mt-20 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition hover:border-blue-500"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left p-6"
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {faq.question}
                      </h4>

                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-blue-400"
                      >
                        <Plus size={22} />
                      </motion.div>
                    </button>

                    {/* Answer stays in the HTML so it can be read when closed. */}
                    <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="w-full mt-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              src={business.mapsEmbedSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}