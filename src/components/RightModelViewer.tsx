'use client';

import { useEffect, useRef, useState } from "react";

interface RightModelViewerProps {
  scale?: number;
}

function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
}

export default function RightModelViewer({ scale = 0.4 }: RightModelViewerProps) {
  const modelRef = useRef<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isMobile()) return;

    // delay loading to protect LCP
    const timer = setTimeout(() => {
      setShow(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.exposure = 1;
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="absolute top-1/2 right-[5vw] z-0 pointer-events-none"
      style={{
        transform: "translateY(-35%)",
        width: "100vw",
        height: "100vh",
        overflow: "visible",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "floatY 6s ease-in-out infinite"
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "right",
          width: "100%",
          height: "100%",
        }}
      >
        <model-viewer
          ref={modelRef}
          src="/models/right-model/scene.gltf"
          loading="lazy"
          auto-rotate
          auto-rotate-delay="0"
          disable-zoom
          interaction-prompt="none"
          environment-image="neutral"
          camera-orbit="0deg 150deg 0m"
          camera-target="0m 200m 0m"
          field-of-view="45deg"
          style={{
            width: "100%",
            height: "150%",
            objectFit: "contain",
            pointerEvents: "none",
            opacity: 0.5,
            transition: "opacity 0.8s ease"
          }}
        />
      </div>
    </div>
  );
}