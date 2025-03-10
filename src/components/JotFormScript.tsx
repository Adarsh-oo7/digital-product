"use client";

import { useEffect, useRef } from "react";

export default function JotFormEmbed() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && iframeRef.current) {
      // Load the JotForm script dynamically
      const script = document.createElement("script");
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      script.onload = () => {
        // Once script is loaded, call the handler function
        // @ts-expect-error - TypeScript error about jotformEmbedHandler not being recognized
        if (window.jotformEmbedHandler) {
          // @ts-expect-error - TypeScript error
          window.jotformEmbedHandler(
            "iframe[id='JotFormIFrame-01957bc31fca7c41a203b140248b89346698']",
            "https://www.jotform.com"
          );
        }
      };

      document.body.appendChild(script);

      return () => {
        // Clean up the script when component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="w-full my-4">
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-01957bc31fca7c41a203b140248b89346698"
        title="Alex: Problem Solver for Your business"
        // Modern replacement for allowTransparency="true"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "688px",
          border: "none",
          width: "100%",
          backgroundColor: "transparent"
        }}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://agent.jotform.com/01957bc31fca7c41a203b140248b89346698?embedMode=iframe&background=1&shadow=1"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}