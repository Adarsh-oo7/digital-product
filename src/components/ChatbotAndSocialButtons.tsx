"use client";
import { useState } from "react";
import JotFormEmbed from "../components/JotFormScript"

export default function ChatbotAndSocialButtons() {
  const [showJotForm, setShowJotForm] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Social and contact buttons */}
      <div className="flex flex-col gap-2 mb-4">
        {/* Instagram button */}
        <button 
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg text-white"
          onClick={() => window.open('hhttps://www.instagram.com/digital_product_solutions/', '_blank')}
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </button>

        {/* WhatsApp button */}
        <button 
          className="bg-green-600 hover:bg-green-700 p-3 rounded-full shadow-lg text-white"
          onClick={() => window.open('https://wa.me/9400355185', '_blank')}
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>

        {/* Contact form button */}
        <button 
  className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full shadow-lg text-white"
  onClick={() => {
    window.location.href = "tel:+919400355185"; // Replace with the actual phone number
  }}
  aria-label="Contact Form"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
</button>


        {/* Bot button with proper bot icon */}
        <button 
          className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full shadow-lg text-white"
          onClick={() => setShowJotForm(!showJotForm)}
          aria-label="Chat Bot"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <path d="M9 10h.01"></path>
            <path d="M15 10h.01"></path>
            <path d="M9 14h6"></path>
          </svg>
        </button>
      </div>

      {/* JotForm Modal */}
      {showJotForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-medium text-white">Contact Us</h3>
              <button 
                onClick={() => setShowJotForm(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <JotFormEmbed />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}