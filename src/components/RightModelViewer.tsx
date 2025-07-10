'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface RightModelViewerProps {
  scale?: number;
}

export default function RightModelViewer({ scale = 0.4 }: RightModelViewerProps) {
  const pathname = usePathname();
  const modelRef = useRef<HTMLModelViewerElement>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.exposure = 1;
    }
  }, [pathname]);

  return (
    <div
      className="absolute top-1/2 right-[5vw] z-0 pointer-events-none"
      style={{
        transform: 'translateY(-35%)',
        width: '100vw',          // ❗️Constrain width
        height: '100vh',         // ❗️Constrain height to avoid overflow
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'floatY 5s ease-in-out infinite',      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'right',
          width: '100%',
          height: '100%',
        }}
      >
        <model-viewer
          key={pathname + '-right'}
          ref={modelRef}
          src="/models/right-model/scene.gltf"
          auto-rotate
          auto-rotate-delay="0"
          disable-zoom
          camera-controls
          interaction-prompt="none"
          environment-image="neutral"
          exposure="1"
          camera-orbit="0deg 150deg 0m"
          camera-target="0m 200m 0m"
          field-of-view="45deg"
          style={{
            width: '100%',
            height: '150%',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
