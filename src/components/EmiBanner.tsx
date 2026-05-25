"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function EmiBanner({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="w-screen left-1/2 -translate-x-1/2 relative  bg-white flex justify-center">

            <div className="relative w-full aspect-[3.2/1]">
                <Image
                    src={images[index]}
                    alt="Banner"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/10" />

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}