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
    <nav className="w-full bg-[#10b39a] sticky top-0 z-50">

      <div className="flex items-center justify-between px-5 lg:px-8 py-3">

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-4">

          <img
            src={img1}
            alt="School Logo"
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0"
          />

          <h1 className="font-bold text-white text-[15px] lg:text-[17px] xl:text-[18px] whitespace-nowrap">
            Nobel Gurukul Convent School & Junior College
          </h1>

        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* ================= DESKTOP ================= */}

        <div className="hidden lg:flex items-center gap-4">

          {/* Admission */}

          <a
            href={pdf1}
            download
            className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2 text-[15px] font-medium whitespace-nowrap hover:bg-gray-900 duration-300"
          >
            Admissions 2026-27
            <BsDownload />
          </a>

          {/* Phone */}

          <a
            href="tel:+919892538534"
            className="flex items-center gap-2 text-white text-[15px] whitespace-nowrap hover:text-yellow-300 duration-300"
          >
            <FaPhoneAlt />
            +91 9892538534
          </a>

          {/* Email */}

          <a
            href="mailto:nobelgurukulschool.com@gmail.com"
            className="flex items-center gap-2 text-white text-[14px] whitespace-nowrap hover:text-yellow-300 duration-300"
          >
            <MdEmail />
            nobelgurukulschool.com@gmail.com
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/919892538534"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full flex items-center gap-2 text-[15px] font-medium whitespace-nowrap duration-300"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          {/* Facebook */}

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaFacebookF />
          </a>

          {/* YouTube */}

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>

          {/* Instagram */}

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 duration-300"
          >
            <IoLogoInstagram />
          </a>

        </div>

      </div>
            {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div className="lg:hidden bg-[#10b39a] border-t border-white/20 px-5 py-5">

          <div className="flex flex-col gap-4">

            {/* Admission */}

            <a
              href={pdf1}
              download
              className="bg-black text-white py-3 rounded-lg text-center font-semibold"
            >
              Admissions 2026-27
            </a>

            {/* Phone */}

            <a
              href="tel:+919892538534"
              className="flex items-center gap-3 text-white"
            >
              <FaPhoneAlt />
              +91 9892538534
            </a>

            {/* Gmail */}

            <a
              href="mailto:nobelgurukulschool.com@gmail.com"
              className="flex items-center gap-3 text-white break-all"
            >
              <MdEmail />
              nobelgurukulschool.com@gmail.com
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919892538534"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Social Icons */}

            <div className="flex items-center gap-3 pt-2">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center"
              >
                <FaYoutube />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center"
              >
                <IoLogoInstagram />
              </a>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;