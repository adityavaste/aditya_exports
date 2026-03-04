import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-sky-50 to-white">

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
          About Aditya Exports
        </h1>
        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          Delivering premium-quality vegetables to global markets with trust,
          sustainability, and excellence at the core of everything we do.
        </p>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 
      grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-5 sm:mb-6">
            Our Journey
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
            Aditya Exports was founded with a vision to connect India’s rich
            agricultural heritage with global markets. We specialize in
            exporting fresh, high-quality vegetables sourced directly from
            trusted farms.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            With a strong commitment to quality, sustainability, and timely
            delivery, we ensure that every shipment meets international
            standards and exceeds customer expectations.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl 
        shadow-lg text-center border border-blue-100">
          <h3 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-3">
            100+
          </h3>
          <p className="text-lg sm:text-xl font-semibold text-blue-900">
            Trusted Farmer Partnerships
          </p>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            We proudly tie up with more than 100 dedicated farmers who share
            our commitment to sustainable and quality-driven agriculture.
          </p>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To deliver farm-fresh vegetables to global markets while
              supporting local farmers, maintaining international quality
              standards, and building long-term partnerships.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To become a globally recognized export brand known for
              reliability, sustainability, and excellence in agricultural
              trade.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-12 sm:mb-16">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { role: "Founder", image: "/photo.jpeg" },
              { role: "Quality Head", image: "/team-quality.jpg" },
              { role: "Operations Manager", image: "/team-production.jpg" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto mb-5 sm:mb-6 object-cover border-4 border-blue-100"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {member.role}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Dedicated to delivering quality and excellence worldwide.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-14 sm:py-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
          Growing Together, Exporting Excellence
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base text-gray-700">
          Partner with Aditya Exports and experience trusted quality,
          sustainable sourcing, and global reliability.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-700 
          font-semibold rounded-full hover:bg-blue-100 transition shadow-lg"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
};

export default About;