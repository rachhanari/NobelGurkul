import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import img1 from "../../assets/School-logo.jpeg";
import pdf1 from "../../assets/Addmision 25-26.pdf";
import { BsDownload } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md text-[17px]">
      {/* Top Section */}
      <div className="bg-red-800 text-white py-4 px-6 flex flex-wrap justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img src={img1} alt="logo" className="w-16 h-16 object-contain" />
          <span className="font-bold text-lg sm:text-2xl uppercase leading-tight">
            Nobel Gurukul Convent <br /> SCHOOL & JUNIOR COLLEGE
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap items-center gap-6 text-base">
          {/* Admission Button */}
          <a href={pdf1} download>
            <button className="bg-gray-900 px-6 py-2 rounded text-white text-sm min-w-[240px] flex items-center justify-between gap-2 whitespace-nowrap">
              Admissions Open 2025-26
              <BsDownload className="animate-bounce text-lg" />
            </button>
          </a>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <span className="text-base">+91 9892538534</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <span className="text-base">info@nobelgurukul.edu.in</span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919892538534?text=Greeting!!%0A%0AI%20am%20interested%20in%20admission%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer p-3 bg-green-600 rounded-full animate-zoom"
          >
            <FaWhatsapp className="text-white text-xl" />
            <span className="text-base">WhatsApp</span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/search/top?q=nobel%20gurukul%20convent%20school"
              target="_blank"
              className="p-3 bg-blue-600 rounded-full animate-zoom"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.youtube.com/@nobelgurukulconventschoola7857"
              target="_blank"
              className="p-3 bg-red-600 rounded-full animate-zoom"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/nobel_gurukul_convent_school/"
              target="_blank"
              className="p-3 bg-pink-500 rounded-full animate-zoom"
            >
              <IoLogoInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-red-700 text-white px-6 py-4 flex flex-col gap-4">
          <a href={pdf1} download>
            <button className="bg-gray-900 px-6 py-2 rounded text-white text-sm min-w-[240px] flex items-center justify-between gap-2 whitespace-nowrap">
              Admissions Open 2025-26
              <BsDownload className="animate-bounce text-lg" />
            </button>
          </a>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <span className="text-base">+91 9892538534</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <span className="text-base">info@nobelgurukul.edu.in</span>
          </div>

          <a
            href="https://wa.me/919892538534?text=Greeting!!%0A%0AI%20am%20interested%20in%20admission%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 bg-green-600 rounded-full animate-zoom w-fit"
          >
            <FaWhatsapp className="text-white text-xl" />
            <span className="text-base">WhatsApp</span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-3 pt-3">
            <a
              href="https://www.facebook.com/search/top?q=nobel%20gurukul%20convent%20school"
              target="_blank"
              className="p-3 bg-blue-600 rounded-full animate-zoom"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.youtube.com/@nobelgurukulconventschoola7857"
              target="_blank"
              className="p-3 bg-red-600 rounded-full animate-zoom"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/nobel_gurukul_convent_school/"
              target="_blank"
              className="p-3 bg-pink-500 rounded-full animate-zoom"
            >
              <IoLogoInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes zoomInOut {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          .animate-zoom {
            animation: zoomInOut 1s infinite ease-in-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
