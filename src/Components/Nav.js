import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { phoneNo } = useContext(MyContext);

  return (
    <header className="w-full font-sans">
      {/* Top Info Bar */}
      <div className="bg-[#946b45] text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 text-sm">
        <div className="flex-1 flex items-center justify-start gap-2 ">
          <FaMapMarkerAlt />
          <span className="whitespace-normal md:whitespace-nowrap text-center md:text-left">
            Near Bhadkeshwar Temple, Near Patel Samaj Rd, Dwarka, Gujarat 361335
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 mt-1 md:mt-0">
          <FaPhoneAlt />
          <span className="font-semibold">{phoneNo}</span>
        </div>
        <div className="flex-1 flex items-center justify-end gap-4 mt-1 md:mt-0">
          <a href="#" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Saurashtra Leuva Patel Samaj Bhavan"
            className="h-12"
          />
        </div>

        {/* Hamburger Toggle for mobile */}
        <button
          className="md:hidden block text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {/* Using FaBars from react-icons/fa for hamburger menu */}
          <FaBars className="w-7 h-7" />
        </button>

        {/* Links - Desktop & Mobile */}
        <ul
          className={`flex-col md:flex-row md:flex items-center gap-8 text-black font-semibold text-lg absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-20 transition-all ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block py-3 px-4 md:p-0 hover:text-[#946b45]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="block py-3 px-4 md:p-0 hover:text-[#946b45]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="block py-3 px-4 md:p-0 hover:text-[#946b45]"
            >
              Our Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="block py-3 px-4 md:p-0 hover:text-[#946b45]"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Book Now Button */}
        <a
          href={`https://wa.me/${phoneNo}`}
          className="bg-[#946b45] hidden md:inline-block text-white px-6 py-3 font-semibold hover:bg-[#805d3b] transition rounded-none"
        >
          BOOK NOW
        </a>
      </nav>
      {/* Floating Book Now on mobile */}
     
    </header>
  );
}
