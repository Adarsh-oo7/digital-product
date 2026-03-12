"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Send, Plus } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

// Base URL for canonical tags
const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.digitalproductsolutions.in"
  : "http://localhost:3000"






export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I contact Digital Product Solutions?",
      answer:
        "You can contact us through our website contact form, email us at digitalproductkerala@gmail.com, or call +91 9400355185. We assist businesses with web development, AI solutions, SEO and digital automation services globally.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We provide professional website development, mobile app development, AI-powered solutions, SEO optimization, social media management and business automation systems for businesses in India and worldwide.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "A typical business website takes around 2–4 weeks depending on features, design requirements and integrations. Advanced systems such as AI automation or custom platforms may take longer.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes. Digital Product Solutions works with businesses globally, providing scalable digital solutions including SaaS platforms, automation systems and modern web applications.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <>
      <Head>
        <title>Contact Digital Product Solutions | Web Development & AI Solutions</title>

        <meta
          name="description"
          content="Contact Digital Product Solutions for professional web development, AI-powered solutions, SEO services, and business automation. Serving Kerala, India, and global clients."
        />

        <meta
          name="keywords"
          content="contact web development company, AI solutions company, website development India, SEO services India, Digital Product Solutions contact"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={`${BASE_URL}/contact`} />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Contact Digital Product Solutions" />
        <meta
          property="og:description"
          content="Get in touch with Digital Product Solutions for web development, AI solutions, SEO services, and digital automation."
        />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/img/logo.png`} />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Digital Product Solutions" />
        <meta
          name="twitter:description"
          content="Reach our team for web development, AI solutions, SEO and digital services."
        />
        <meta name="twitter:image" content={`${BASE_URL}/img/logo.png`} /> */}

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Digital Product Solutions",
        "url": "${BASE_URL}",
        "logo": "${BASE_URL}/img/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919400355185",
          "contactType": "Customer Service",
          "email": "digitalproductkerala@gmail.com",
          "areaServed": ["IN", "Worldwide"],
          "availableLanguage": ["English", "Malayalam"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Attingal",
          "addressRegion": "Kerala",
          "postalCode": "695101",
          "addressCountry": "IN"
        }
      }
    `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I contact Digital Product Solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Digital Product Solutions through our website contact form, email at digitalproductkerala@gmail.com, or phone at +91 9400355185."
            }
          },
          {
            "@type": "Question",
            "name": "What services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide website development, mobile app development, AI-powered solutions, SEO services, social media marketing and business automation systems."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly will I receive a response?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team usually responds within 24 hours to discuss your project requirements and provide consultation."
            }
          }
        ]
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
            Connect with our expert team in Attingal, Kerala, to transform your business with innovative web development, AI-powered solutions, and reliable website maintenance. Serving clients in Attingal and across Kerala, we offer personalized consultations to understand your goals and deliver tailored digital solutions. Fill out our contact form, email us, or call +91 9400355185 to start your project today and achieve a strong online presence.
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
                  Your message has been successfully sent. Our Attingal, Kerala-based team will respond within 24–48 hours to discuss how we can support your business with customized web development and AI solutions. Check your inbox for our reply.
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
                  <input type="hidden" name="_honeypot" value="" />
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

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="w-full mt-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3284626251293!2d76.8380526744956!3d8.660278494652756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x893ab90196d09cb5%3A0xdbfd038c9bb1b62!2sDigital%20product%20solutions!5e0!3m2!1sen!2sin!4v1772689938826!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
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