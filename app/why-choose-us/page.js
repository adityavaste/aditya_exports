import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-sky-50 to-white">

      {/* Certifications */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-block mb-4 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-blue-800 bg-blue-100 rounded-full shadow-sm">
            Quality • Compliance • Global Standards
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-blue-900 mb-6">
            Certified & Export Ready
          </h2>

          <p className="max-w-3xl text-base sm:text-lg md:text-xl mx-auto text-gray-700 mb-12 md:mb-16 leading-relaxed">
            Our manufacturing processes meet stringent Indian and international
            quality standards, ensuring safety, purity, and consistency for
            global markets.
          </p>

          <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-6 sm:gap-8">

            {[
              { name: "FSSAI", desc: "Food Safety & Standards Authority of India" },
              { name: "ISO", desc: "International Quality Management Systems" },
              { name: "HACCP", desc: "Hazard Analysis & Critical Control Points" },
              { name: "APEDA", desc: "Agricultural Export Development Authority" },
              { name: "Export Certified", desc: "Approved for Global Trade" },
            ].map((cert, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-lg sm:text-xl shadow-inner">
                  ✓
                </div>
                <h3 className="font-semibold text-blue-900 mb-2 text-base sm:text-lg">
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 md:mt-16 text-base sm:text-lg text-gray-600">
            Trusted by partners across India, Asia, Europe, and the Middle East
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 px-4">
          Why Choose Aditya Exports
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
          We are committed to excellence, ensuring quality products, customer
          trust, and competitive pricing in every shipment.
        </p>

        <div className="mt-12 md:mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {/* Assured Quality */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 sm:p-8 text-center">
            <img
              src="/Assured_Quality.webp"
              alt="Assured Quality"
              className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 object-contain"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Assured Quality
            </h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Every product undergoes strict quality checks to ensure freshness,
              hygiene, and export-grade standards.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 sm:p-8 text-center">
            <img
              src="/Customer_Satisfaction.webp"
              alt="Customer Satisfaction"
              className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 object-contain"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Customer Satisfaction
            </h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              We build long-term partnerships by delivering reliable service,
              consistent quality, and timely shipments worldwide.
            </p>
          </div>

          {/* Competitive Rates */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 sm:p-8 text-center">
            <img
              src="/Competitive_Rates.webp"
              alt="Competitive Rates"
              className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 object-contain"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Competitive Rates
            </h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              We offer cost-effective pricing without compromising on product
              quality or international standards.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 md:py-24 text-black px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6">
          Partner with a Trusted Farmers
        </h2>

        <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg">
          Whether you’re a brand, distributor, or wellness company — we’re ready
          to support your growth with premium quality and global expertise.
        </p>

        <a
          href="Contact"
          className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 
          rounded-full bg-white text-blue-700 font-semibold 
          hover:bg-blue-100 transition duration-300 shadow-lg text-sm sm:text-base"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default page;