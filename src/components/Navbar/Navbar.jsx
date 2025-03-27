import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img1 from "../../assets/School-logo.jpeg";
import { Link } from "react-scroll";
import pdf1 from "../../assets/Addmision 25-26.pdf";

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
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaWhatsapp className="text-xl text-green-600" />
            <span className="text-base">WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="bg-white flex flex-wrap justify-between items-center px-10 py-4 shadow text-xl font-semibold">
        <div className="hidden lg:flex gap-10 text-black">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-700"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-700"
          >
            About Us
          </Link>
          <Link
            to="courses"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-700"
          >
            Courses
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-700"
          >
            Gallery
          </Link>
          <Link
            to="toprankker"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-700"
          >
            Our Trustee
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-700"
          >
            Contact Us
          </Link>
        </div>
        <div
          className="text-4xl cursor-pointer lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <IoMdMenu />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex flex-col">
          <div className="bg-white w-72 p-6 h-full shadow-lg z-50 relative text-lg">
            <button
              className="absolute top-4 right-4 text-4xl"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <div className="flex flex-col gap-6 mt-10 font-medium">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                About Us
              </Link>
              <Link
                to="courses"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                Courses
              </Link>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                Gallery
              </Link>
              <Link
                to="toprankker"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                Trustee
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
