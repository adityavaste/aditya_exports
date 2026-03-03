import React from "react";

const Footbar = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-sky-800 text-white 
    pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-10 sm:gap-12 mb-10 sm:mb-12">

          {/* Company Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Aditya Exports
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Delivering premium-quality agricultural products to global
              markets with trust, sustainability, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-blue-100 text-sm sm:text-base">
              <li><a href="Home" className="hover:text-white transition">Home</a></li>
              <li><a href="About_us" className="hover:text-white transition">About Us</a></li>
              <li><a href="Products" className="hover:text-white transition">Products</a></li>
              <li><a href="Contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-blue-100 text-sm sm:text-base">
              <li>Onion</li>
              <li>Potato</li>
              <li>Ginger</li>
              <li>Tomato</li>
              <li>Green Chilli</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Contact
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              📞 +91 7350247244
            </p>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              <a
  href="mailto:info@adityaexports.com"
  className="hover:underline"
>
  ✉ info@adityaexports.com
</a>
            </p>
            <p className="text-blue-100 mt-2 text-sm sm:text-base leading-relaxed">
              Industrial Area,<br /> India
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-4 sm:pt-6 
        text-center text-blue-200 text-xs sm:text-sm">
          © {new Date().getFullYear()} Aditya Exports. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footbar;