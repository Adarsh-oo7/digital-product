"use client";

import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const parent = canvas.parentElement;

        let width = 0;
        let height = 0;
        const resize = () => {
            width = canvas.width = parent?.clientWidth || window.innerWidth;
            height = canvas.height = parent?.clientHeight || window.innerHeight;
        };
        resize();

        const count = window.matchMedia("(max-width: 768px)").matches ? 28 : 48;
        const particles = Array.from({ length: count }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            size: Math.random() * 2 + 1,
        }));

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        window.addEventListener("mousemove", handleMouse);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // update particles
            for (const p of particles) {
                // mouse interaction (repel effect)
                const dx = p.x - mouse.current.x;
                const dy = p.y - mouse.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    p.x += dx * 0.02;
                    p.y += dy * 0.02;
                }

                p.x += p.vx;
                p.y += p.vy;

                // bounce
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(59,130,246,0.7)";
                ctx.fill();
            }

            // draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59,130,246,${1 - dist / 120})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            if (active) raf = requestAnimationFrame(draw);
        };

        let raf = 0;
        let active = false;
        const start = () => {
            if (active) return;
            active = true;
            raf = requestAnimationFrame(draw);
        };
        const stop = () => {
            active = false;
            cancelAnimationFrame(raf);
        };

        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) start();
            else stop();
        });
        if (parent) io.observe(parent);

        const idle = window.setTimeout(start, 600);
        window.addEventListener("resize", resize);

        return () => {
            window.clearTimeout(idle);
            stop();
            io.disconnect();
            window.removeEventListener("mousemove", handleMouse);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-10 pointer-events-none"
        />
    );
}