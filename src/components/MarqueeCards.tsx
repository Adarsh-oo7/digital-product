"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const cards = [
    { title: "Fintech", image: "/img/fintech.jpg" },
    { title: "Healthcare", image: "/img/healthcare.jpg" },
    { title: "E-commerce", image: "/img/Ecommerce.jpg" },
    { title: "Education", image: "/img/education.webp" },
    { title: "Real Estate", image: "/img/realestate.webp" },
    { title: "Manufacturing", image: "/img/manufacturing.jpg" },
    { title: "Enterprise", image: "/img/enterprise.jpg" },
    { title: "Startups", image: "/img/startups.png" },
];

export default function MarqueeCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const startAnimation = () => {
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 50,
            },
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const handleMouseEnter = () => controls.stop();
    const handleMouseLeave = () => startAnimation();

    return (
        <div className="w-full overflow-hidden bg-gray-100 py-4">
            <div className="relative flex">
                <motion.div
                    ref={containerRef}
                    className="flex gap-4 whitespace-nowrap"
                    animate={controls}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {[...cards, ...cards].map((card, idx) => (
                        <div
                            key={idx}
                            className="relative min-w-[400px] h-[200px] rounded-lg overflow-hidden shadow"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center">
                                <span className="text-white text-xl font-semibold">{card.title}</span>
                            </div>
                        </div>

                    ))}
                </motion.div>
            </div>
        </div>
    );
}
