"use client";
import React, { useEffect, useState } from "react";

const SmartExportSystem = () => {
  const [country, setCountry] = useState("");
  const [regionText, setRegionText] = useState("");
  const [flag, setFlag] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true); // 👈 NEW

  const phoneNumber = "917350247244";

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setCountry(data.country_name);
        setFlag(data.country_code);

        if (
          ["United Arab Emirates", "Saudi Arabia", "Qatar"].includes(
            data.country_name
          )
        ) {
          setRegionText("Currently exporting to Middle East markets");
        } else if (
          ["Germany", "France", "Italy"].includes(data.country_name)
        ) {
          setRegionText("Supplying premium exports across Europe");
        } else {
          setRegionText(
            "Exporting globally with trusted logistics partners"
          );
        }
      } catch (error) {
        console.log("Location detection failed");
      }
    };

    fetchLocation();
  }, []);

  const aiMessage = `Hello Aditya Exports,

I am contacting you from ${country}.
I am interested in your premium export products.
Please share pricing, MOQ, and shipment details.

Looking forward to building long-term trade partnership.

Thank you.`;

  const handleLeadSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: leadEmail, country }),
    });

    alert("Catalogue sent to your email successfully!");
    setLeadEmail("");
  };

  // 👇 If closed, don't render anything
  if (!isVisible) return null;

  return (
    <div
      className="
        fixed z-[999] backdrop-blur-xl bg-white/30 
        border border-white/40 shadow-xl rounded-5xl 
        p-5 sm:p-6
        
        bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm
        
        lg:top-24 lg:right-6 lg:left-auto lg:bottom-auto 
        lg:translate-x-0 lg:w-80
      "
    >
      {/* ❌ Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-3xl font-bold"
      >
        ×
      </button>

      {/* Visitor Info */}
      <div className="mb-4 text-center lg:text-left">
        <h3 className="text-blue-900 font-semibold text-base sm:text-lg">
          🌍 Welcome {country}
        </h3>
        <p className="text-gray-700 text-xs sm:text-sm mt-2">
          {regionText}
        </p>
      </div>

      {/* Flag */}
      {flag && (
        <img
          src={`https://flagcdn.com/w40/${flag.toLowerCase()}.png`}
          alt="country flag"
          className="w-8 h-5 sm:w-10 sm:h-6 mb-4 rounded shadow mx-auto lg:mx-0"
        />
      )}

      {/* Lead Form */}
      <form onSubmit={handleLeadSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Enter your business email"
          required
          value={leadEmail}
          onChange={(e) => setLeadEmail(e.target.value)}
          className="
            w-full px-4 py-2 
            rounded-xl border border-blue-200 
            focus:ring-2 focus:ring-blue-400 
            outline-none text-sm sm:text-base
          "
        />
        <button
          type="submit"
          className="
            w-full py-2 sm:py-3 
            rounded-full 
            bg-green-600 text-white 
            hover:bg-green-700 transition 
            text-sm sm:text-base
          "
        >
          Get Export Catalogue
        </button>
      </form>
    </div>
  );
};

export default SmartExportSystem;