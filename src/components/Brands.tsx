"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ParticleNetwork from "./ParticleNetwork";

const logoPairs = [
    [
        "/brands/Ck_logo-removebg-preview.png",
        "/brands/BW-removebg-preview.png",
    ],
    [
        "/brands/Screenshot_2026-05-29_222231-removebg-preview.png",
        "/brands/MM-removebg-preview.png",
    ],
    [
        "/brands/SB-removebg-preview.png",
        "/brands/Screenshot_2026-05-29_222231-removebg-preview.png",
    ],
    [
        "/brands/BW-removebg-preview.png",
        "/brands/SB-removebg-preview.png",
    ],
    [
        "/brands/MM-removebg-preview.png",
        "/brands/Ck_logo-removebg-preview.png",
    ],


];

export default function Brands() {
    const [activeIndex, setActiveIndex] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                prev.map((val, i) => (val + 1) % logoPairs[i].length)
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    return (
        <section className="relative w-full pt-20 pb-20 overflow-hidden">

            <div className="absolute inset-0 z-0">
                <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl top-[-150px] left-[-150px]" />
                <div className="absolute w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
            </div>

            <ParticleNetwork />


            <h3 className="text-center font-bold tracking-tight
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
  mb-10 md:mb-14
  bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600
  bg-clip-text text-transparent relative z-20">
                Our Brands
            </h3>

            {/* White Box Content */}
            <div className="relative z-20 flex items-center justify-center h-full px-4">
                <div className="bg-[#f5f5f5] p-10 md:p-16 rounded-lg shadow-lg max-w-5xl w-full text-center">


                    {/* Logos Grid */}
                    <div className="grid grid-cols-6 gap-6 items-center justify-items-center">
                        {/* First row */}
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="col-span-2 relative w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={logoPairs[i][activeIndex[i]]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Image
                                            src={logoPairs[i][activeIndex[i]]}
                                            alt={`Logo ${i}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* Second row */}
                        <div className="col-span-1" />
                        {[3, 4].map((i) => (
                            <div
                                key={i}
                                className="col-span-2 relative w-20 h-10 sm:w-30 sm:h-18 md:w-36 md:h-20"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={logoPairs[i][activeIndex[i]]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Image
                                            src={logoPairs[i][activeIndex[i]]}
                                            alt={`Logo ${i}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        ))}
                        <div className="col-span-1" />
                    </div>
                </div>
            </div>
        </section>
    );
}
