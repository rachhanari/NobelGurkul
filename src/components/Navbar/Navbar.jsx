import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img1 from "../../assets/School-logo.jpeg";
import { Link } from "react-scroll";
import pdf1 from "../../assets/Addmision 25-26.pdf";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md text-[17px]">
      <div className="bg-red-800 text-white py-4 px-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={img1} alt="logo" className="w-20 h-20 object-contain" />
          <span className="font-bold text-2xl uppercase leading-tight">
            Nobel Gurukul Convent <br /> SCHOOL & JUNIOR COLLEGE
          </span>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/search/top?q=nobel%20gurukul%20convent%20school&__stsd__=eyJwcmltYXJ5Ijp7InR5cGUiOiJUWVBFQUhFQURfUEVPUExFX0VOVElUSUVTIn19"
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
            href="https://www.instagram.com/nobel_gurukul_convent_school/?hl=en"
            target="_blank"
            className="p-3 bg-pink-500 rounded-full animate-zoom"
          >
            <IoLogoInstagram className="text-white text-lg" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-base">
          <a href={pdf1} download>
            <button className="bg-gray-900 px-4 py-2 rounded text-white text-sm">
              Admissions Open 2025-26
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
            href="https://wa.me/919892538534?text=Greeting!!%0A%0ADear%20Admissions%20Team%2C%0A%0AI%20am%20interested%20in%20enrolling%20my%20child%20at%20Nobel%20Gurukul%20Convent%20School%20%26%20Jr.%20College%20for%20the%20upcoming%20academic%20session.%20Could%20you%20please%20provide%20details%20regarding%20the%20admission%20process%2C%20eligibility%20criteria%2C%20required%20documents%2C%20and%20fee%20structure%3F%0A%0ALooking%20forward%20to%20your%20response."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer p-3 bg-green-600 rounded-full animate-zoom"
          >
            <FaWhatsapp className="text-white text-xl" />
            <span className="text-base">WhatsApp</span>
          </a>
        </div>
      </div>

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
