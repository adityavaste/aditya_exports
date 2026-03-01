"use client";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {

  // Set Launch Date
  const launchDate = new Date("2026-04-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white px-6"
      style={{
        backgroundImage: "url('/worldmap2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center max-w-4xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
          Global Product Launch
        </h1>

        <p className="text-lg md:text-xl font-bold text-blue-200 mb-10">
          Aditya Exports is preparing to launch premium agricultural products
          to international markets.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-blue-400 shadow-lg hover:scale-105 transition duration-300"
            >
              <h2 className="text-3xl font-bold text-white">
                {item.value}
              </h2>
              <p className="text-blue-200 mt-2">{item.label}</p>
            </div>

            
          ))}

          
        </div>

        {/* Email Subscription */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-blue-400 shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Get Notified When We Launch
          </h3>

          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-black w-full md:w-96 focus:outline-none bg-white"
              required
            />

            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Notify Me
            </button>
          </form>
        </div>

       {/* Animated Counter */}
<div className="mt-12">
  <h2 className="text-5xl font-bold text-white">
    10+
  </h2>
  <p className="text-blue-300 mt-2">
    Countries We Are Expanding To
  </p>
</div>
      </div>

    </div>
  );
};

export default ProductsPage;