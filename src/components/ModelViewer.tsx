'use client';

export default function ModelViewer() {
 

  return (
    <model-viewer
      src="/models/dna-model/scene.gltf"
      auto-rotate
      auto-rotate-delay="0"
      disable-zoom
      camera-controls
      interaction-prompt="none"
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
        opacity: 1, // 👈 semi-transparent
      }}
    />
  );
}
