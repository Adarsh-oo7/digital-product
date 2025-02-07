"use client";
import Image from 'next/image';

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-80 bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold">
        <Image
  src="./img/loges.png" // Make sure the path is relative to the public folder
  alt="Digital Product Logo"
  title="Digital Product - Leading Web Development Agency"
  width={100} // Width in pixels
  height={50} // Height in pixels (adjust this to maintain aspect ratio)
  className="h-auto w-16 mr-2" // Using Tailwind CSS for responsive sizing
/>

          


          
          <span>Digital Product</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/book" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-gray-400 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="space-y-4 px-4 py-4">
            <li>
              <Link href="/" className="block text-white hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-white hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block text-white hover:text-blue-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-white hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
            <li>
            <Link href="/book" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">
              Book Now
            </Link>
          </li>
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
