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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-black/70"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-8 md:px-16 lg:px-24 text-white max-w-5xl">
          {/* SEO H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-wide">
            Leading Fresh Vegetable Exporter from India <br />
            <span className="text-[#D4AF37]">Supplying UAE, USA & Europe</span>
          </h1>

          {/* SEO Description */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            Aditya Exports is a trusted Indian fresh vegetable exporter
            supplying onion, potato, tomato, ginger and green chilli to UAE, USA
            and European markets with international quality standards and
            reliable export logistics.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/products"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#1E90FF] hover:bg-[#187bcd] rounded-full text-base sm:text-lg font-semibold shadow-xl transition text-center"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-[#D4AF37] text-[#D4AF37] rounded-full text-base font-bold sm:text-lg hover:bg-[#D4AF37] hover:text-black transition text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    {/* CERTIFICATE SECTION */}
<section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">

  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="
      text-2xl 
      sm:text-3xl 
      md:text-4xl 
      lg:text-5xl
      font-bold 
      text-gray-800 
      leading-tight
    ">
      Government Recognized & Internationally Certified Exporter from India
    </h2>

    <p className="
      text-gray-700 
      mt-4 sm:mt-6 md:mt-8
      max-w-xl sm:max-w-3xl md:max-w-4xl 
      mx-auto 
      text-base sm:text-lg md:text-xl
      leading-relaxed
    ">
      Aditya Exports is a government-recognized fresh vegetable exporter from India,
      operating in full compliance with Indian export regulations and global trade
      standards. We follow strict quality control, food safety protocols, and
      international export requirements for fresh vegetable shipments worldwide.
    </p>

  </div>

  {/* Certificate Grid */}
  <div className="
    mt-12 sm:mt-16 md:mt-20
    max-w-6xl mx-auto
    grid grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    gap-6 sm:gap-8 md:gap-10
  ">

    {/* CARD COMPONENT STYLE */}
    {[
      {
        img: "/Fssai.webp",
        alt: "FSSAI Certified Fresh Vegetable Exporter India",
        title: "FSSAI Certified",
      },
      {
        img: "/iso.png",
        alt: "ISO Certified Indian Vegetable Export Company",
        title: "ISO Certified",
      },
      {
        img: "/Apeda.webp",
        alt: "APEDA Registered Exporter from India",
        title: "APEDA Registered",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="
          bg-gray-50 
          rounded-3xl 
          shadow-md 
          hover:shadow-2xl 
          hover:-translate-y-2
          transition duration-300
          p-5 sm:p-6 
          text-center
        "
      >
        <div className="relative">
          <img
            src={item.img}
            alt={item.alt}
            className="
              w-full 
              h-44 sm:h-52 md:h-60 
              object-contain 
              rounded-xl
            "
          />

          {/* Coming Soon Overlay */}
          <div className="
            absolute inset-0 
            bg-black/60 
            rounded-xl 
            flex items-center justify-center
            opacity-90
          ">
            <span className="
              text-white 
              text-base sm:text-lg 
              font-semibold 
              tracking-wide
            ">
              Coming Soon
            </span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mt-4">
          {item.title}
        </h3>
      </div>
    ))}

  </div>
</section>
{/* ABOUT SEO SECTION */}
<section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white px-4 sm:px-6 md:px-10">
  <div className="max-w-xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-center">
    
    <h2 className="
      text-2xl 
      sm:text-3xl 
      md:text-4xl 
      lg:text-5xl 
      font-bold 
      text-gray-800
      leading-snug
    ">
      Trusted Indian Fresh Vegetable Export Company
    </h2>

    <p className="
      mt-4 sm:mt-6 md:mt-8
      text-gray-700
      text-base sm:text-lg md:text-xl
      leading-relaxed
    ">
      Aditya Exports specializes in bulk export of fresh vegetables from
      India including onion, potato, tomato, ginger and green chilli. We
      supply to UAE, USA and European markets with competitive pricing,
      export-grade packaging and on-time global shipment.
    </p>

  </div>
</section>

  {/* PRODUCTS SECTION */}
<section className="py-16 sm:py-20 md:py-24 bg-gray-100 px-4 sm:px-6 md:px-10">
  
  <h2 className="
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    lg:text-5xl 
    font-bold 
    text-center 
    text-gray-800
  ">
    Export Quality Fresh Vegetables from India
  </h2>

  <p className="
    text-center 
    text-gray-600 
    mt-4 sm:mt-6 
    max-w-xl sm:max-w-2xl md:max-w-4xl 
    mx-auto 
    text-base sm:text-lg md:text-xl
    leading-relaxed
  ">
    We export bulk fresh vegetables from India for international buyers in
    UAE, USA and Europe.
  </p>

  <div className="
    mt-10 sm:mt-12 md:mt-16
    max-w-6xl mx-auto
    grid grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    gap-6 sm:gap-8
  ">
    
    {/* Onion */}
    <div className="
      bg-white rounded-2xl shadow-md 
      hover:shadow-2xl hover:-translate-y-2 
      transition duration-300 
      p-5 sm:p-6 text-center
    ">
      <img
        src="/onion.webp"
        alt="Fresh Onion Exporter from India supplying UAE USA Europe"
        className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4">
        Fresh Onion Exporter
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
        Export-quality fresh onions supplied in bulk for international
        markets.
      </p>
    </div>

    {/* Potato */}
    <div className="
      bg-white rounded-2xl shadow-md 
      hover:shadow-2xl hover:-translate-y-2 
      transition duration-300 
      p-5 sm:p-6 text-center
    ">
      <img
        src="/potato.webp"
        alt="Premium Potato Exporter from India for UAE USA Europe"
        className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4">
        Fresh Potato Supplier
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
        High-grade Indian potatoes supplied in bulk for global export.
      </p>
    </div>

    {/* Ginger */}
    <div className="
      bg-white rounded-2xl shadow-md 
      hover:shadow-2xl hover:-translate-y-2 
      transition duration-300 
      p-5 sm:p-6 text-center
    ">
      <img
        src="/ginger.webp"
        alt="Indian Fresh Ginger Exporter for International Markets"
        className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4">
        Fresh Ginger Exporter
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
        Naturally grown Indian ginger exported with premium packaging.
      </p>
    </div>

  </div>
</section>

      {/* EXPORT SECTION */}
     <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white px-4 sm:px-6 md:px-10">
  <h2 className="
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    lg:text-5xl 
    font-bold 
    text-center 
    text-gray-800
    leading-snug
  ">
    Fresh Vegetable Exporter from India to UAE, USA & Europe
  </h2>

  <p className="
    text-center 
    text-gray-600 
    mt-6 sm:mt-8 md:mt-10 
    max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl 
    mx-auto 
    text-base sm:text-lg md:text-xl
    leading-relaxed
  ">
          Aditya Exports is a trusted fresh vegetable exporter from India,
          supplying premium-quality farm-fresh vegetables to the UAE, USA, and
          European countries. We specialize in international vegetable exports
          with reliable cold-chain logistics, strict quality control, and timely
          global shipments. As a leading Indian vegetable export company, we
          maintain strong trade partnerships across Dubai and other UAE markets,
          major US import hubs, and key European destinations. Our focus on
          consistent quality, competitive export pricing, and safe packaging
          ensures long-term relationships with global importers, wholesalers,
          and distributors.
        </p>
      </section>

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
