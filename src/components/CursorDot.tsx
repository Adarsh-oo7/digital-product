"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", move);

    let raf: number;

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Cursor Styles */}
      <style jsx global>{`
        .custom-cursor-dot {
          position: fixed;
          width: 7px;
          height: 7px;
          background: #3b82f6;
          border-radius: 50%;
          pointer-events: none;
          z-index: 999999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s;
          mix-blend-mode: multiply;
        }

        .custom-cursor-ring {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 1.5px solid #3b82f6; 
          border-radius: 50%;
          pointer-events: none;
          z-index: 999998;
          transform: translate(-50%, -50%);
          opacity: 0.3;
          transition: width 0.3s, height 0.3s, opacity 0.3s;
        }
      `}</style>

      {/* Dot */}
      <div ref={dotRef} className="custom-cursor-dot" />

      {/* Ring */}
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}