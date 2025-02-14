"use client";
import { useState } from 'react';
import SocialButtons from '@/components/SocialButtons';

export default function ChatbotAndSocialButtons() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // Start with chatbot hidden

  const toggleChatbotVisibility = () => {
    setIsChatbotVisible((prev) => !prev); // Toggle visibility
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbotVisibility}
        className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isChatbotVisible ? 'Close Chatbot' : 'Open Chatbot'}
      </button>

      {/* Social Buttons */}
      <SocialButtons />

      {/* Chatbot Iframe */}
      {isChatbotVisible && (
        <div className="fixed bottom-20 right-4 z-50">
          {/* Close Button on Top of Iframe */}
          <button
            onClick={toggleChatbotVisibility}
            className="absolute -top-8 right-0 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            Close
          </button>

          {/* Iframe */}
          <iframe
            className="w-[300px] h-[500px] sm:w-[350px] sm:h-[500px] rounded-lg shadow-lg border border-gray-700"
            src="https://app.fastbots.ai/embed/cm74658eg0tkgsvk7iw855klb"
            title="Chatbot"
            allow="microphone; camera" // Add this if the chatbot requires microphone/camera access
          ></iframe>
        </div>
      )}
    </div>
  );
}