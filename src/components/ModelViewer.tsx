'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ModelViewer() {
  const pathname = usePathname();
  const modelRef = useRef<HTMLModelViewerElement>(null);

  useEffect(() => {
    if (modelRef.current) {
      // Forcefully reset exposure after component mount
      modelRef.current.exposure = 10;
    }
  }, [pathname]); // 👈 Ensures it re-applies when you return to page

  return (
    <model-viewer
      key={pathname}
      ref={modelRef}
      src="/models/dna-model/scene.gltf"
      auto-rotate
      auto-rotate-delay="0"
      disable-zoom
      camera-controls
      interaction-prompt="none"
      environment-image="neutral"
      exposure="10"
      camera-orbit="0deg 90deg 1.2m"
      field-of-view="25deg"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        objectFit: 'cover',
        opacity: 1,
      }}
    />
  );
}
