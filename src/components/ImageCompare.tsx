import React, { useState, useRef } from "react";

type ImageCompareProps = {
    before: string;
    after: string;
    className?: string;
};

export default function ImageCompare({
    before,
    after,
    className = "w-full"
}: ImageCompareProps) {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const updatePosition = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        let x = ((clientX - rect.left) / rect.width) * 100;

        // Clamp between 0–100
        x = Math.max(0, Math.min(100, x));

        setPosition(x);
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-2xl w-full aspect-[16/9] cursor-ew-resize select-none"
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={(e) => {
                if (!isDragging.current) return;
                updatePosition(e.clientX);
            }}

            onTouchStart={() => (isDragging.current = true)}
            onTouchEnd={() => (isDragging.current = false)}
            onTouchMove={(e) => {
                updatePosition(e.touches[0].clientX);
            }}
        >
            {/* AFTER IMAGE */}
            <img
                src={after}
                alt="after"
                className="absolute inset-0 w-full h-full object-contain bg-black"
                draggable={false}
            />

            {/* BEFORE IMAGE */}
            <img
                src={before}
                alt="before"
                className="absolute inset-0 w-full h-full object-contain bg-black"
                draggable={false}
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            />

            {/* DIVIDER */}
            <div
                className="absolute top-0 bottom-0 flex items-center justify-center"
                style={{
                    left: `${position}%`,
                    transform: "translateX(-50%)",
                }}
            >
                {/* Line */}
                <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />

                {/* Handle */}
                <div className="absolute w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="flex">
                        <div className="w-[2px] h-4 bg-black mx-[1px]" />
                        <div className="w-[2px] h-4 bg-black mx-[1px]" />
                    </div>
                </div>
            </div>

            {/* LABELS */}
            <div className="absolute top-4 left-4 bg-black/40 text-white text-sm px-3 py-1 rounded-md backdrop-blur">
                Before
            </div>

            <div className="absolute top-4 right-4 bg-black/40 text-white text-sm px-3 py-1 rounded-md backdrop-blur">
                After
            </div>
        </div>
    );
}