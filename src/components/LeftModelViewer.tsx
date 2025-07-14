'use client'
import { useEffect,useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

function isMobile() {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false;
}

export default function LeftModelViewer({ scale = 0.4 }: LeftModelViewerProps) {
  const pathname = usePathname();
  const modelRef = useRef<HTMLModelViewerElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(!isMobile());
    if (modelRef.current) {
      // Cast to any to access model-viewer specific properties
      (modelRef.current as any).exposure = 1;
    }
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      className="absolute top-1/2 left-[-15vw] z-0 pointer-events-none"
      style={{
        transform: `translateY(-50%) scale(${scale})`,
        transformOrigin: 'left',
        width: '80vw',
        height: '20vh',
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
          maxHeight: '100vh',
          objectFit: 'contain',
          pointerEvents: 'none',
          opacity: 0.5,
          transition: 'opacity 0.8s ease',
        }}
      />
    </div>
  );
}