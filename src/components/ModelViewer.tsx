'use client';
import { useEffect } from 'react';

export default function ModelViewer() {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <model-viewer
      src="/models/stylized_simply_visualization_of_dna.glb"
      auto-rotate
      auto-rotate-delay="0"
      disable-zoom
      camera-controls
      interaction-prompt="none"
      exposure="1"
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
        opacity: 0.3, // 👈 semi-transparent
      }}
    />
  );
}
