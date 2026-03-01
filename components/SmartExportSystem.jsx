"use client";
import React, { useEffect, useState } from "react";

const SmartExportSystem = () => {
  const [country, setCountry] = useState("");
  const [regionText, setRegionText] = useState("");
  const [flag, setFlag] = useState("");
  const [leadEmail, setLeadEmail] = useState("");

  const phoneNumber = "917350247244";

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setCountry(data.country_name);
        setFlag(data.country_code);

        // Dynamic Export Message
        if (["United Arab Emirates", "Saudi Arabia", "Qatar"].includes(data.country_name)) {
          setRegionText("Currently exporting to Middle East markets");
        } else if (["Germany", "France", "Italy"].includes(data.country_name)) {
          setRegionText("Supplying premium exports across Europe");
        } else {
          setRegionText("Exporting globally with trusted logistics partners");
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

    alert("Thank you! Our export team will contact you shortly.");
    setLeadEmail("");
  };

  return (
    <div className="fixed top-20 right-6 z-[999] backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-2xl p-6 w-80">

      {/* Visitor Info */}
      <div className="mb-4">
        <h3 className="text-blue-900 font-semibold text-lg">
          🌍 Welcome {country}
        </h3>
        <p className="text-gray-700 text-sm mt-2">{regionText}</p>
      </div>

      {/* Flag */}
      {flag && (
        <img
          src={`https://flagcdn.com/w40/${flag.toLowerCase()}.png`}
          alt="country flag"
          className="w-10 h-6 mb-4 rounded shadow"
        />
      )}

      {/* AI Chat Style CTA */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(aiMessage)}`}
        target="_blank"
        className="block text-center bg-gradient-to-r from-blue-700 to-sky-500 text-white py-2 rounded-full hover:scale-105 transition mb-4"
      >
        Chat With Export Consultant
      </a>

      {/* CRM Lead Capture */}
      <form onSubmit={handleLeadSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Enter your business email"
          required
          value={leadEmail}
          onChange={(e) => setLeadEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
        >
          Get Export Catalogue
        </button>
      </form>
    </div>
  );
};

export default SmartExportSystem;