"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ArrowRight, Star, Users, Award, DollarSign } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import Link from "next/link";
// simple particle data

const trustIndicators = [
    { id: 1, icon: Users, number: "20+", text: "Happy Clients" },
    { id: 2, icon: Award, number: "95%", text: "Success Rate" },
    { id: 3, icon: DollarSign, number: "5x", text: "Average ROI" },
    { id: 4, icon: Star, number: "4.9/5", text: "Client Rating" },
]

const FlipWords = ({ words }: { words: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2200); // slightly slower feels more premium

        return () => clearInterval(interval);
    }, [words]);

    return (
        <span className="relative inline-flex min-w-[160px] justify-center">
            <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, scale: 1.02, filter: "blur(8px)" }}
                transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier feel
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
            >
                {words[index]}
            </motion.span>
        </span>
    );
};

export default function WhiteHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

            {/* 🌫️ Background blobs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl top-[-150px] left-[-150px]" />
                <div className="absolute w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
            </div>

            {/* 🌌 Particle Network Layer */}
            <ParticleNetwork />

            {/* ✨ Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-32">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full
           bg-gray-100 border border-gray-200 mb-6
           text-xs sm:text-sm"                >
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm text-gray-600">
                        Leading Digital Agency in Trivandrum, Kerala
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-semibold leading-tight text-gray-900
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                    We Build{" "}

                    <FlipWords words={["Software", "Apps", "AI Solutions"]} />

                    {" "}for Kerala Businesses
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-6 text-gray-600
               text-sm sm:text-base md:text-lg lg:text-lg
               max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
                >
                    We are your end-to-end technology partner. From custom web and mobile apps to technical SEO, WhatsApp bots, and AI automation, <strong>Digital Product Solutions</strong> builds the exact tools your Kerala business needs to eliminate manual work and generate sales. Based in Trivandrum, with <strong>20+ successful deployments</strong> across the state. Live in 7 days.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <Link href="/contact">
                        <button className="px-5 sm:px-6 py-3 rounded-xl bg-gray-900 text-white
           flex items-center gap-2 hover:scale-105 transition
           shadow-lg text-sm sm:text-base">
                            Get Free Consultation
                            <ArrowRight size={18} />
                        </button>
                    </Link>

                    {/* Secondary CTA */}
                    <Link href="/portfolio">
                        <button className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition">
                            View Work
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 relative z-10 mt-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {trustIndicators.map((item) => (
                        <div key={item.id} className="text-center bg-white/10 backdrop-blur-sm rounded-xl
           p-3 sm:p-4 border border-white/20">
                            <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                            <div className="text-xl sm:text-2xl font-bold text-blue-400">{item.number}</div>
                            <div className="text-xs sm:text-sm text-gray-700">{item.text}</div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}