"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SmartExportSystem from "./SmartExportSystem";

const Main = () => {
  return (
    <div>
      <SmartExportSystem />
      {/* HERO SECTION */}
      <div
        className="relative h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/ship.webp')" }}
      >
        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-black/70"></div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
  px-6 sm:px-8 md:px-16 lg:px-24 
  text-white max-w-5xl"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl 
    font-extrabold leading-tight tracking-wide"
          >
            Global Agricultural Excellence <br />
            <span className="text-[#D4AF37]">Aditya Exports</span>
          </h1>

          <p
            className="mt-6 sm:mt-8 
    text-base sm:text-lg md:text-xl 
    text-gray-300 max-w-2xl"
          >
            Delivering premium farm-fresh vegetables across international
            markets with precision logistics and uncompised quality standards.
          </p>

          <div
            className="mt-8 sm:mt-10 
    flex flex-col sm:flex-row 
    gap-4 sm:gap-6"
          >
            <Link href="Products" className="px-6 sm:px-8 md:px-10 
      py-3 sm:py-4 
      bg-[#1E90FF] hover:bg-[#187bcd] 
      rounded-full 
      text-base sm:text-lg 
      font-semibold shadow-xl transition text-center">Explore Products
</Link>

            <Link
              href="/Contact"
              className="px-6 sm:px-8 md:px-10 
                      py-3 sm:py-4 
                            border border-[#D4AF37] text-[#D4AF37] 
                       rounded-full 
                      text-base font-bold sm:text-lg 
                          hover:bg-[#D4AF37] hover:text-black 
                        transition inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Certificate  */}
      <div className="py-16 sm:py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl 
  font-bold text-center text-gray-800 leading-tight"
        >
          Government Recognized & Internationally Certified
        </h2>

        <p
          className="text-center text-black 
  mt-4 sm:mt-6 
  max-w-xl sm:max-w-2xl mx-auto 
  text-base sm:text-lg md:text-xl"
        >
          We operate under strict compliance with Indian Government regulations
          and international export standards. Our certifications ensure quality,
          safety, and reliability for global trade partners.
        </p>

        <div
          className="mt-12 sm:mt-16 
  max-w-6xl mx-auto 
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
  gap-6 sm:gap-8 md:gap-10"
        >            




  {/* Certificate 1 */}


  <div
  className="bg-gray-50 rounded-2xl shadow-md 
  hover:shadow-xl transition duration-300 
  p-5 sm:p-6 text-center"
>
  <div className="relative">
    <img
      src="/Fssai.webp"
      alt="FSSAI Certificate"
      className="w-full 
      h-48 sm:h-56 md:h-64 
      object-contain rounded-lg"
    />

    {/* Coming Soon Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
      <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
        Coming Soon
      </span>
    </div>
  </div>

  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4">
    FSSAI Certified
  </h3>
</div>

          {/* Certificate 2 */}
          <div
  className="bg-gray-50 rounded-2xl shadow-md 
  hover:shadow-xl transition duration-300 
  p-5 sm:p-6 text-center"
>
  <div className="relative">
    <img
      src="/iso.png"
      alt="ISO Certificate"
      className="w-full 
      h-48 sm:h-56 md:h-64 
      object-contain rounded-lg"
    />

    {/* Coming Soon Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
      <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
        Coming Soon
      </span>
    </div>
  </div>

  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4">
    ISO Certified
  </h3>
</div>

          {/* Certificate 3 */}
         <div
  className="bg-gray-50 rounded-2xl shadow-md 
  hover:shadow-xl transition duration-300 
  p-5 sm:p-6 text-center"
>
  <div className="relative">
    <img
      src="/Apeda.webp"
      alt="APEDA Certificate"
      className="w-full 
      h-48 sm:h-56 md:h-64 
      object-contain rounded-lg"
    />

    {/* Coming Soon Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
      <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
        Coming Soon
      </span>
    </div>
  </div>

  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4">
    APEDA Registered
  </h3>
</div>
        </div>
      </div>

     <div className="py-14 sm:py-16 md:py-20 bg-gray-100 px-4 sm:px-6 lg:px-8">
  <h2
    className="text-3xl sm:text-4xl md:text-5xl 
    font-bold text-center text-gray-800 
    mt-10 sm:mt-14 md:mt-20 leading-tight"
  >
    Our Fresh Products
  </h2>

  <p
    className="text-center text-gray-600 
    mt-4 sm:mt-6 
    max-w-xl sm:max-w-2xl mx-auto 
    text-base sm:text-lg md:text-2xl"
  >
    We export high-quality farm-fresh vegetables carefully selected to
    meet international standards.
  </p>

  <div className="mt-10 sm:mt-12 max-w-6xl mx-auto">
    
    {/* First Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

      {/* Product Card */}
      {[
        { src: "/onion.webp", name: "Onion", desc: "Fresh, premium quality onions sourced directly from trusted farms." },
        { src: "/potato.webp", name: "Potato", desc: "High-grade potatoes ideal for global markets and bulk supply." },
        { src: "/ginger.webp", name: "Ginger", desc: "Naturally grown ginger with rich aroma and superior freshness." }
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl 
          transition duration-300 p-5 sm:p-6 text-center"
        >
          <div className="relative group">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-44 sm:h-48 md:h-52 object-cover 
              rounded-lg transition duration-300 group-hover:scale-105"
            />

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-lg 
              flex items-center justify-center">
              <span className="text-white text-lg font-bold tracking-wide">
                Coming Soon
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4">
            {product.name}
          </h3>
          <p className="mt-2 text-gray-600 text-xs sm:text-sm">
            {product.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Second Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 md:w-2/3 mx-auto">

      {[
        { src: "/tomato.webp", name: "Tomato", desc: "Juicy, vibrant tomatoes carefully selected for export quality." },
        { src: "/greenchilli.webp", name: "Green Chilli", desc: "Fresh and spicy green chillies packed with flavor and quality." }
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl 
          transition duration-300 p-5 sm:p-6 text-center"
        >
          <div className="relative group">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-44 sm:h-48 md:h-52 object-cover 
              rounded-lg transition duration-300 group-hover:scale-105"
            />

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-lg 
              flex items-center justify-center">
              <span className="text-white text-lg font-bold tracking-wide">
                Coming Soon
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4">
            {product.name}
          </h3>
          <p className="mt-2 text-gray-600 text-xs sm:text-sm">
            {product.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</div>
      {/* Export Countries Section */}
      <div className="py-14 sm:py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl 
  font-bold text-center text-gray-800 leading-tight"
        >
          Exporting Worldwide
        </h2>

        <p
          className="text-center text-gray-600 
  mt-4 sm:mt-6 
  max-w-xl sm:max-w-2xl mx-auto 
  text-base sm:text-lg md:text-xl"
        >
          Serving international markets with premium-quality vegetables and
          reliable global logistics.
        </p>

        {/* Countries Grid */}
        <div
          className="mt-10 sm:mt-14 md:mt-16 
  max-w-6xl mx-auto 
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
  gap-6 sm:gap-8 text-center"
        >
          <div
            className="bg-gray-50 rounded-xl p-5 sm:p-6 
    shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl sm:text-4xl mb-3">🇦🇪</div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              UAE
            </h3>
          </div>

          <div
            className="bg-gray-50 rounded-xl p-5 sm:p-6 
    shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl sm:text-4xl mb-3">🇸🇦</div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              Saudi Arabia
            </h3>
          </div>

          <div
            className="bg-gray-50 rounded-xl p-5 sm:p-6 
    shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl sm:text-4xl mb-3">🇬🇧</div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              United Kingdom
            </h3>
          </div>

          <div
            className="bg-gray-50 rounded-xl p-5 sm:p-6 
    shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl sm:text-4xl mb-3">🇪🇺</div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              Europe
            </h3>
          </div>
        </div>

        {/* Trust Line */}
        <p
          className="text-center text-gray-700 
  mt-10 sm:mt-12 
  text-sm sm:text-base md:text-lg"
        >
          Proudly serving 10+ countries with trusted export partnerships.
        </p>
      </div>
      {/* GLOBAL EXPORT SECTION */}
      <div
        className="relative py-16 sm:py-20 md:py-28 
bg-gradient-to-b from-blue-50 via-blue-100 to-white 
overflow-hidden px-4 sm:px-6"
      >
        {/* Background World Map */}
        <img
          src="/worldmap.png"
          alt="World Map"
          className="absolute inset-0 w-full h-full object-contain opacity-10 sm:opacity-20"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
    font-bold text-blue-900 leading-tight"
          >
            Global Export Network
          </h2>

          <p
            className="mt-4 sm:mt-6 
    text-base sm:text-lg md:text-xl 
    text-blue-800 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto"
          >
            Connecting Indian farms to global markets with seamless logistics
            and trusted export partnerships.
          </p>

          {/* Map Animation Area */}
          <div
            className="relative mt-12 sm:mt-16 md:mt-20 
    h-[250px] sm:h-[320px] md:h-[400px] 
    max-w-5xl mx-auto"
          >
            {/* Glowing Markers */}

            <motion.div
              className="absolute top-[45%] left-[30%] 
        w-3 h-3 sm:w-4 sm:h-4 
        bg-blue-600 rounded-full 
        shadow-lg shadow-blue-500"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              title="India"
            />

            <motion.div
              className="absolute top-[40%] left-[55%] 
        w-3 h-3 sm:w-4 sm:h-4 
        bg-blue-600 rounded-full 
        shadow-lg shadow-blue-500"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              title="UAE"
            />

            <motion.div
              className="absolute top-[35%] left-[75%] 
        w-3 h-3 sm:w-4 sm:h-4 
        bg-blue-600 rounded-full 
        shadow-lg shadow-blue-500"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              title="UK"
            />

            {/* Curved Animated Route Line */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M150 180 Q350 20 650 160"
                stroke="#2563eb"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
          </div>

          <p
            className="mt-8 sm:mt-10 md:mt-12 
    text-sm sm:text-base md:text-lg 
    text-blue-800"
          >
            Serving international markets with reliability and excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
