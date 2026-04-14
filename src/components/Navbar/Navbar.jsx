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
import pdf1 from "../../assets/Addmision 26-27.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0db196] text-white sticky top-0 z-50">

      <div className="flex justify-between items-center px-6 lg:px-10 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img
            src={img1}
            alt="logo"
            className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
          />
          <h1 className="font-bold text-sm lg:text-lg xl:text-xl">
            Nobel Gurukul Convent School & Junior College
          </h1>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {/* Admission */}
          <a
            href={pdf1}
            download
            className="bg-black px-4 py-2 rounded flex items-center gap-2"
          >
            Admissions 2026-27 <BsDownload />
          </a>

          {/* Phone */}
          <a href="tel:+919892538534" className="flex items-center gap-2">
            <FaPhoneAlt /> +91 9892538534
          </a>

          {/* Email */}
          <a href="mailto:info@nobelgurukul.edu.in" className="flex items-center gap-2">
            <MdEmail /> info@nobelgurukul.edu.in
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919892538534"
            className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-full"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          {/* SOCIAL ICONS (FIXED ✅) */}
          <div className="flex gap-3">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-blue-600 rounded-full text-white text-lg"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-red-600 rounded-full text-white text-lg"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-pink-500 rounded-full text-white text-lg"
            >
              <IoLogoInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">

          <a href={pdf1} download className="bg-black px-4 py-2 rounded">
            Admissions 2026-27
          </a>

          <a href="tel:+919892538534">
            <FaPhoneAlt /> +91 9892538534
          </a>

          <a href="mailto:info@nobelgurukul.edu.in">
            <MdEmail /> info@nobelgurukul.edu.in
          </a>

          <a href="https://wa.me/919892538534">
            <FaWhatsapp /> WhatsApp
          </a>

          <div className="flex gap-3">
            <FaFacebookF className="text-xl" />
            <FaYoutube className="text-xl" />
            <IoLogoInstagram className="text-xl" />
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;