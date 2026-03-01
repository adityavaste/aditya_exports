"use client";
import React, { useEffect, useState } from "react";

const ContactFloat = () => {
  const phoneNumber = "917350247244";
  const callNumber = "+917350247244";

  const message =
    "🇮🇳 Hello Aditya Exports,\n\nI am interested in your export products.\nPlease share pricing, MOQ, and shipment details.\n\nLooking forward to your reply.\n\nThank you.";

  const [visible, setVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 Auto hide when scrolling down, show when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowOnScroll(false); // scrolling down
      } else {
        setShowOnScroll(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= POPUP ================= */}
      {popupVisible && showOnScroll && (
        <div
          className="
            fixed z-[999]
            backdrop-blur-xl bg-white/20 border border-white/30
            shadow-2xl rounded-2xl
            p-4 sm:p-6
            w-[92%] max-w-sm
            bottom-28 left-1/2 -translate-x-1/2
            lg:w-80 lg:left-auto lg:translate-x-0 lg:right-6 lg:bottom-32
            transition-all duration-500
          "
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-blue-900 font-semibold text-base sm:text-lg">
                Need Export Details?
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">
                Chat with us directly on WhatsApp.
              </p>
              <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                ⚡ We reply within 5 minutes
              </span>
            </div>

            <button
              onClick={() => setPopupVisible(false)}
              className="text-gray-600 hover:text-red-500"
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
            className="
              block mt-4 text-center
              bg-gradient-to-r from-blue-600 to-sky-400
              text-white py-2 sm:py-3
              rounded-full hover:scale-105 transition
            "
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* ================= FLOAT BUTTONS ================= */}
      <div
        className={`
          fixed z-[999]
          flex flex-col gap-3 sm:gap-4
          bottom-4 right-4
          sm:bottom-6 sm:right-6
          lg:bottom-8 lg:right-8
          transition-all duration-500
          ${
            visible && showOnScroll
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }
        `}
      >
        {/* Call */}
        <a
          href={`tel:${callNumber}`}
          className="
            relative flex items-center justify-center
            rounded-full backdrop-blur-lg bg-white/20
            border border-white/30 shadow-xl
            hover:scale-110 transition
            w-12 h-12 sm:w-14 sm:h-14
          "
        >
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></span>
          <span className="relative z-10 text-lg sm:text-xl">📞</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative flex items-center justify-center
            rounded-full bg-green-500 shadow-2xl
            hover:scale-110 transition
            w-14 h-14 sm:w-16 sm:h-16
          "
        >
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-6 h-6 sm:w-8 sm:h-8 relative z-10"
          >
            <path d="M16 .4C7.3.4.3 7.4.3 16.1c0 2.8.7 5.6 2.2 8L.2 31.8l7.9-2.2c2.3 1.3 5 2 7.7 2 8.7 0 15.7-7 15.7-15.7S24.7.4 16 .4z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default ContactFloat;