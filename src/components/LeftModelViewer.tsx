'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface LeftModelViewerProps {
  scale?: number;
}

export default function LeftModelViewer({ scale = 0.4 }: LeftModelViewerProps) {
  const pathname = usePathname();
  const modelRef = useRef<HTMLModelViewerElement>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.exposure = 1;
    }
  }, [pathname]);

  return (
    <div
      className="absolute top-1/2 left-[-15vw] z-0 pointer-events-none"
      style={{
        transform: `translateY(-50%) scale(${scale})`,
        transformOrigin: 'left',
        width: '80vw',
        height: '20vh', // Increased to ensure enough vertical room
        overflow: 'visible',
        animation: 'floatY 5s ease-in-out infinite',
      }}
    >
      <model-viewer
        key={pathname + '-left'}
        ref={modelRef}
        src="/models/left-model/scene.gltf"
        auto-rotate
        auto-rotate-delay="0"
        disable-zoom
        camera-controls
        interaction-prompt="none"
        environment-image="neutral"
        exposure="1"
        camera-orbit="0deg 90deg 10m"
        camera-target="0m 19m 0m"
        field-of-view="55deg"
        style={{
          width: '100%',
          height: '150%',
          maxHeight: '100vh', // prevents overflow from scaling
          objectFit: 'contain',
          pointerEvents: 'none',
          opacity: 0.5, // ✅ set desired transparency
          transition: 'opacity 0.8s ease',
        }}
      />
    </div>
  );
}
