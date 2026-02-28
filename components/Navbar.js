"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center 
      px-6 sm:px-8 md:px-12 
      py-4 sm:py-5 md:py-6 
      shadow-md bg-white fixed w-full z-50">

        {/* Logo */}
        <h1 className="font-serif text-xl sm:text-2xl text-green-900">
          <a href="Home" className="hover:text-green-700 transition">
            Aditya Exports
          </a>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium text-sm md:text-base">
          <a href="Home" className="hover:text-green-700 transition">
            Home
          </a>
          <a href="About_us" className="hover:text-green-700 transition">
            About us
          </a>
          <a href="products" className="hover:text-green-700 transition">
            Products
          </a>
          <a href="Why_choose_us" className="hover:text-green-700 transition">
            Why choose us
          </a>
          <a href="Contact" className="hover:text-green-700 transition">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-green-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[70px] left-0 w-full bg-white shadow-lg py-6 px-6 space-y-4 text-gray-700 font-medium z-40">
          <a href="Home" className="block hover:text-green-700 transition">
            Home
          </a>
          <a href="About_us" className="block hover:text-green-700 transition">
            About us
          </a>
          <a href="products" className="block hover:text-green-700 transition">
            Products
          </a>
          <a href="Why_choose_us" className="block hover:text-green-700 transition">
            Why choose us
          </a>
          <a href="Contact" className="block hover:text-green-700 transition">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;