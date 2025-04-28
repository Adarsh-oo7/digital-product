"use client"

import { motion } from "framer-motion"
import { Cpu, Brain, BotIcon as Robot, BarChart, Cloud, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Leverage the power of machine learning to gain insights from your data and automate complex tasks.",
    image: "./img/Ai11.png?height=300&width=400&text=Machine+Learning",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Implement advanced NLP techniques to understand and generate human-like text for chatbots and more.",
    image: "./img/Ai2.png?height=300&width=400&text=NLP",
  },
  {
    icon: Robot,
    title: "AI-Powered Automation",
    description:
      "Streamline your business processes with intelligent automation powered by cutting-edge AI technology.",
    image: "./img/ai3.jpg?height=300&width=400&text=AI+Automation",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Use AI to forecast trends, optimize operations, and make data-driven decisions for your business.",
    image: "/img/ai4.webp?height=300&width=400&text=Predictive+Analytics",
  },
  {
    icon: Cloud,
    title: "AI-Enabled Cloud Solutions",
    description: "Harness the power of AI in cloud computing to scale your operations and improve efficiency.",
    image: "./img/ai5.png?height=300&width=400&text=AI+Cloud",
  },
  {
    icon: Shield,
    title: "AI-Driven Cybersecurity",
    description: "Protect your digital assets with advanced AI-powered threat detection and prevention systems.",
    image: "./img/ai6.png?height=300&width=400&text=AI+Cybersecurity",
  },
]

export default function AIServices() {
  return (
    <div className="min-h-screen py-16 mt-7 px-4 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting-Edge AI Services
        </motion.h1>
        <motion.p
          className="text-xl mb-12 text-center text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Harness the power of artificial intelligence to transform your business and stay ahead of the competition.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 mr-2 text-indigo-600" />
                  <h2 className="text-xl text-black font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/book"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  {`Explore ${service.title}`}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl text-gray-600 font-semibold mb-4">Ready to Revolutionize Your Business with AI?</h2>
          <p className="mb-6 text-gray-500">Contact us to discuss how our AI services can benefit your organization.</p>
          <Link
            href="/book"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center"
          >
            Schedule a Consultation
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}