"use client";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lead1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Inquiry Submitted Successfully!");
        setForm({
          name: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          quantity: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Server error.");
    }

    setLoading(false);
  };

  return (
    <main className="pt-28 sm:pt-32 md:pt-40 bg-gradient-to-b from-blue-50 via-sky-50 to-white text-gray-800">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20 md:mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">
          Get in Touch
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Whether you're exploring export opportunities or sourcing premium products,
          our team is ready to assist you with professionalism and care.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
      grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-28">

        {/* Contact Info */}
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
            Contact Information
          </h2>

          <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg">

            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-blue-100">
              <p className="font-semibold text-blue-800">Phone</p>
              <p className="break-all">+91 7350247244</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-blue-100">
              <p className="font-semibold text-blue-800">Email</p>
              <p className="break-all">info@adityaexports.com</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-blue-100">
              <p className="font-semibold text-blue-800">Address</p>
              <p>
                Manufacturing Unit,<br />
                Industrial Area,<br />
                India
              </p>
            </div>

            <p className="text-gray-500 text-sm sm:text-base">
              We respond to all inquiries within 24–48 business hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl 
        shadow-xl p-6 sm:p-8 md:p-10 border border-blue-100">

          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-2">
            Request Export Quote
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Get FOB pricing, MOQ details & shipment timeline within 30 minutes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

            {[
              { name: "name", placeholder: "Full Name (Required)", required: true },
              { name: "company", placeholder: "Company Name" },
              { name: "country", placeholder: "Country (For Shipping Calculation)", required: true },
              { name: "email", placeholder: "Business Email Address", type: "email", required: true },
              { name: "phone", placeholder: "WhatsApp Number (For Quick Response)" },
              { name: "quantity", placeholder: "Required Quantity (e.g., 1 Ton / 500 Kg)" },
            ].map((field, i) => (
              <input
                key={i}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required || false}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 text-sm sm:text-base border border-blue-200 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            ))}

            <textarea
              rows={4}
              name="message"
              placeholder="Tell us your product requirement (Packaging, Private Label, Target Port, etc.)"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 sm:px-5 py-3 text-sm sm:text-base border border-blue-200 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-sm sm:text-base
              hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Get Export Pricing Now"}
            </button>

            <p className="text-xs sm:text-sm text-gray-500 text-center">
              ✔ 100% Confidential Inquiry • ✔ Export Certified • ✔ Fast Response
            </p>

          </form>
        </div>
      </section>

      <section className="text-center pb-20 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-3">
          Trusted Export & Manufacturing Partner
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Supplying premium-quality products across India and international markets.
        </p>
      </section>

    </main>
  );
};

export default Page;