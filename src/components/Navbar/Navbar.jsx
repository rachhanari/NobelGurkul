import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import img1 from "../../assets/School-logo.jpeg";
import pdf1 from "../../assets/Addmision 25-26.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md text-[17px] bg-white sticky top-0 z-50">
      <div className="bg-[#0db196] text-white px-4 sm:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img
              src={img1}
              alt="logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <span className="font-bold text-xs sm:text-sm md:text-base uppercase leading-snug break-words">
              Nobel Gurukul Convent School & Junior College
            </span>
          </div>

          {/* Toggle for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4 flex-wrap justify-end text-sm lg:text-base">
            <a
              href={pdf1}
              download
              className="bg-black px-4 py-2 rounded text-white flex items-center gap-2"
            >
              Admissions 2025-26 <BsDownload className="animate-bounce" />
            </a>
            <a href="tel:+919892538534" className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9892538534
            </a>
            <a href="mailto:info@nobelgurukul.edu.in" className="flex items-center gap-2">
              <MdEmail /> info@nobelgurukul.edu.in
            </a>
            <a
              href="https://wa.me/919892538534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-green-600 rounded-full text-white animate-zoom"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61575145043916"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full animate-zoom"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@nobelgurukulconventschoola7857"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-600 rounded-full animate-zoom"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/nobel_gurukul_convent_school/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-500 rounded-full animate-zoom"
              >
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col gap-3 text-sm">
            <a
              href={pdf1}
              download
              className="bg-black px-4 py-2 rounded text-white flex items-center gap-2"
            >
              Admissions 2025-26 <BsDownload className="animate-bounce" />
            </a>
            <a href="tel:+919892538534" className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9892538534
            </a>
            <a href="mailto:info@nobelgurukul.edu.in" className="flex items-center gap-2">
              <MdEmail /> info@nobelgurukul.edu.in
            </a>
            <a
              href="https://wa.me/919892538534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-green-600 rounded-full text-white animate-zoom"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61575145043916"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full animate-zoom"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@nobelgurukulconventschoola7857"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-600 rounded-full animate-zoom"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/nobel_gurukul_convent_school/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-500 rounded-full animate-zoom"
              >
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Zoom Animation */}
      <style>
        {`
          @keyframes zoomInOut {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          .animate-zoom {
            animation: zoomInOut 1.2s infinite ease-in-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
