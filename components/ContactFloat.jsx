"use client";
import React, { useEffect, useState } from "react";

const ContactFloat = () => {
  const phoneNumber = "917350247244";
  const callNumber = "+917350247244";

  const message =
    "🇮🇳 Hello Aditya Exports,\n\nI am interested in your export products.\nPlease share pricing, MOQ, and shipment details.\n\nLooking forward to your reply.\n\nThank you.";

  const [visible, setVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // Slide in animation
  useEffect(() => {
    setTimeout(() => setVisible(true), 800);
  }, []);

  // Auto popup after 10 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Auto Popup Card */}
      {popupVisible && (
        <div className="fixed bottom-32 right-6 z-[999] w-80 backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-6 animate-fadeIn">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-blue-900 font-semibold text-lg">
                Need Export Details?
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Chat with us directly on WhatsApp.
              </p>
              <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                ⚡ We reply within 5 minutes
              </span>
            </div>
            <button
              onClick={() => setPopupVisible(false)}
              className="text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-gradient-to-r from-blue-600 to-sky-400 text-white py-2 rounded-full hover:scale-105 transition"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Buttons */}
      <div
        className={`fixed bottom-6 right-6 z-[999] flex flex-col gap-4 transition-all duration-700 ${
          visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        {/* Call Button */}
        <a
          href={`tel:${callNumber}`}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></span>
          📞
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-lg bg-green-500/80 border border-white/30 shadow-2xl hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>
          <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>

          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-8 h-8 relative z-10"
          >
            <path d="M16 .4C7.3.4.3 7.4.3 16.1c0 2.8.7 5.6 2.2 8L.2 31.8l7.9-2.2c2.3 1.3 5 2 7.7 2 8.7 0 15.7-7 15.7-15.7S24.7.4 16 .4z" />
          </svg>
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </>
  );
};

export default ContactFloat;