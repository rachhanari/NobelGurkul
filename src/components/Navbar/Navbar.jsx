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
import img1 from "../../assets/School-logo.jpeg";
import pdf1 from "../../assets/Addmision 25-26.pdf";
import { BsDownload } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md text-[17px]">
      <div className="bg-red-800 text-white px-4 sm:px-6 py-3">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={img1} alt="logo" className="w-14 h-14 object-contain" />
            <span className="font-bold text-sm sm:text-base md:text-lg uppercase leading-tight">
              Nobel Gurukul Convent <br className="hidden sm:block" /> SCHOOL & JUNIOR COLLEGE
            </span>
          </div>

          {/* Toggle button for mobile */}
          <div className="ml-auto md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-wrap items-center gap-4 text-sm lg:text-base">
            <a href={pdf1} download className="bg-black px-4 py-2 rounded text-white flex items-center gap-2">
              Admissions 2025-26 <BsDownload className="animate-bounce" />
            </a>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> +91 9892538534
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg" /> info@nobelgurukul.edu.in
            </div>
            <a href="https://wa.me/919892538534" target="_blank" className="flex items-center gap-2 p-2 bg-green-600 rounded-full animate-zoom">
              <FaWhatsapp className="text-white text-xl" /> WhatsApp
            </a>
            <div className="flex gap-2">
              <a href="https://www.facebook.com" target="_blank" className="p-2 bg-blue-600 rounded-full animate-zoom"><FaFacebookF /></a>
              <a href="https://www.youtube.com" target="_blank" className="p-2 bg-red-600 rounded-full animate-zoom"><FaYoutube /></a>
              <a href="https://www.instagram.com" target="_blank" className="p-2 bg-pink-500 rounded-full animate-zoom"><IoLogoInstagram /></a>
            </div>
          </div>
        </div>

        {/* Mobile dropdown with scrollable horizontal layout */}
        {isOpen && (
          <div className="mt-4 md:hidden overflow-x-auto">
            <div className="flex items-center gap-3 whitespace-nowrap min-w-fit text-[clamp(10px,3vw,15px)] px-1">

              <a href={pdf1} download className="bg-black px-3 py-2 rounded text-white flex items-center gap-1 shrink-0">
                Admissions 2025-26 <BsDownload className="text-sm animate-bounce" />
              </a>

              <div className="flex items-center gap-1 shrink-0">
                <FaPhoneAlt className="text-sm" /> +91 9892538534
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <MdEmail className="text-sm" /> info@nobelgurukul.edu.in
              </div>

              <a href="https://wa.me/919892538534" target="_blank" className="flex items-center gap-1 px-2 py-1 bg-green-600 rounded-full animate-zoom shrink-0">
                <FaWhatsapp className="text-white text-base" /> WhatsApp
              </a>

              <a href="https://www.facebook.com" target="_blank" className="p-2 bg-blue-600 rounded-full animate-zoom text-xs shrink-0"><FaFacebookF /></a>
              <a href="https://www.youtube.com" target="_blank" className="p-2 bg-red-600 rounded-full animate-zoom text-xs shrink-0"><FaYoutube /></a>
              <a href="https://www.instagram.com" target="_blank" className="p-2 bg-pink-500 rounded-full animate-zoom text-xs shrink-0"><IoLogoInstagram /></a>
            </div>
          </div>
        )}
      </div>

      {/* Animation */}
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
