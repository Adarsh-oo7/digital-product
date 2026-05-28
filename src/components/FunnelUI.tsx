"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

export default function SVGFunnel() {
    const [active, setActive] = useState(0);

    const layers = [
        {
            title: "Drive Brand Visibility",
            desc: [
                "OmniSEO® Approach",
                "SEO Services",
                "GEO Services",
                "Content Marketing Services"
            ],
            hoverColor: "#2563eb",
            width: 320,
            height: 110,
        },
        {
            title: "Maximize Website Traffic",
            desc: [
                "PPC Services",
                "Social Media Advertising",
                "Conversion Rate Optimization",
                "Local SEO Services"
            ],
            hoverColor: "#16a34a",
            width: 260,
            height: 95,
        },
        {
            title: "Boost Sales Efficiency",
            desc: [
                "CRM Integration",
                "AI Call Tracking",
                "Lead Nurture Systems",
                "Automation Tools"
            ],
            hoverColor: "#f59e0b",
            width: 200,
            height: 80,
        },
        {
            title: "Revenue Intelligence",
            desc: [
                "Analytics Platform",
                "AI Search Tracking",
                "Multi-channel Attribution",
                "Forecast Engine"
            ],
            hoverColor: "#ef4444",
            width: 140,
            height: 70,
        },
    ];

    const isRightSide = (i: number) => i % 2 === 1;

    return (
        <section className="relative min-h-screen bg-white overflow-hidden ">
            <ParticleNetwork />

            <div className="absolute inset-0 z-0">
                <div className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl top-[-150px] left-[-150px]" />
                <div className="absolute w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
            </div>

            {/* TOP INTRO */}
            <div className="absolute top-14 left-0 w-full px-4 text-center z-20 ">

                <h1 className="font-bold text-gray-900 leading-tight
        text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 
        max-w-5xl md:max-w-3xl mx-auto
        [@media(min-width:530px)_and_(max-width:639px)]:text-xl">
                    Unlock Business <span className="text-blue-600">Growth</span> with Our Connected
                    <span className="text-red-400"> Revenue Engine</span>
                </h1>

                <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed
        text-sm sm:text-lg md:text-lg lg:text-xl 
        max-w-4xl md:max-w-3xl mx-auto
        [@media(min-width:530px)_and_(max-width:639px)]:text-lg">
                    Integrated digital marketing systems combine seamlessly to increase revenue,
                    while tailored technology ensures every result can be clearly measured.
                </p>

            </div>

            {/* MOBILE STACK + DESKTOP FLOW WRAPPER */}
            <div className="flex flex-col mt-[14rem] sm:mt-[16rem] ">
                {/* TEXT BLOCK */}
                <div
                    className={`px-6 md:absolute md:top-[70%] md:-translate-y-1/2 z-20 max-w-md mx-auto md:mx-0
                    ${isRightSide(active)
                            ? "md:right-20 md:text-right"
                            : "md:left-20 md:text-left"
                        }`}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                            transition={{ duration: 0.45 }}
                            className="[@media(max-width:440px)]:translate-y-3"
                        >
                            <h3 className="font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl">
                                {layers[active].title}
                            </h3>

                            <p className="text-gray-600 mt-2 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg text-center md:text-left">
                                {layers[active].desc.map((item, i) => (
                                    <span key={i} className="block">
                                        {item}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* FUNNEL */}
                <div className="mt-10 md:mt-0 md:absolute md:left-1/2 md:top-[66%] md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex justify-center">

                    <svg
                        viewBox="0 0 400 500"
                        className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] h-auto"
                    >
                        {layers.map((layer, i) => {
                            const yOffset = i * 95;
                            const isActive = i <= active;

                            return (
                                <motion.g
                                    key={i}
                                    onMouseEnter={() => setActive(i)}
                                    onMouseLeave={() => setActive(0)}
                                    animate={{
                                        scale: active === i ? 1.07 : 1,
                                        opacity: i > active ? 0.4 : 1,
                                        y: active === i ? -3 : 0,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    style={{ originX: "50%", originY: "50%" }}
                                    filter={
                                        active === i
                                            ? "drop-shadow(0px 0px 14px rgba(37,99,235,0.6))"
                                            : "none"
                                    }
                                >
                                    <ellipse
                                        cx="200"
                                        cy={yOffset + 40}
                                        rx={layer.width / 2}
                                        ry={layer.height / 4}
                                        fill={isActive ? layer.hoverColor : "#d1d5db"}
                                    />

                                    <path
                                        d={`
                                            M ${200 - layer.width / 2} ${yOffset + 40}
                                            L ${200 - (layer.width - 40) / 2} ${yOffset + 90}
                                            L ${200 + (layer.width - 40) / 2} ${yOffset + 90}
                                            L ${200 + layer.width / 2} ${yOffset + 40}
                                            Z
                                        `}
                                        fill={isActive ? layer.hoverColor : "#d1d5db"}
                                    />

                                    <ellipse
                                        cx="200"
                                        cy={yOffset + 90}
                                        rx={(layer.width - 40) / 2}
                                        ry={layer.height / 5}
                                        fill="rgba(0,0,0,0.12)"
                                    />
                                </motion.g>
                            );
                        })}
                    </svg>
                </div>
            </div>
        </section>
    );
}