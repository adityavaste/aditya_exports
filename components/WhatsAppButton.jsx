"use client";
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "917350247244"; // replace with your number (91 + number)
  const message = "Hello Aditya Exports, I would like to inquire about your products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      {/* Glow Ring */}
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-400 opacity-70 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center h-16 w-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M16 .4C7.3.4.3 7.4.3 16.1c0 2.8.7 5.6 2.2 8L.2 31.8l7.9-2.2c2.3 1.3 5 2 7.7 2 8.7 0 15.7-7 15.7-15.7S24.7.4 16 .4zm0 28.6c-2.4 0-4.8-.7-6.9-2l-.5-.3-4.7 1.3 1.3-4.6-.3-.5c-1.4-2.1-2.1-4.5-2.1-7 0-7.2 5.9-13.1 13.1-13.1s13.1 5.9 13.1 13.1S23.2 29 16 29zm7.2-9.8c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.2.4-1 1.3-1.2 1.6-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.1-2-2.5-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.3 5.4 4.6.8.3 1.4.5 1.9.6.8.3 1.5.3 2.1.2.6-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;