// src/components/JotFormScript.tsx
import React, { useEffect } from 'react';

const JotFormEmbed: React.FC = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/static/feedback2.js';
    script.type = 'text/javascript';
    
    // Add attributes and setup function
    script.setAttribute('data-jotform-id', '123456789123'); // Replace with your actual JotForm ID
    
    // Load the script
    document.body.appendChild(script);
    
    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="jotform-feedback-container"
      style={{ height: '500px', width: '100%' }}
    >
      <iframe
        id="JotFormIFrame"
        title="JotForm"
        onLoad={() => {
          window.parent.scrollTo(0, 0);
        }}
        allowTransparency={true}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/123456789123" // Replace with your actual JotForm ID
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        scrolling="no"
      />
    </div>
  );
};

export default JotFormEmbed;