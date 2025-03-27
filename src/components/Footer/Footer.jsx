import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-gray-900 to-black opacity-10"></div>

      <div className="relative container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-semibold text-white">NOBEL GURUKUL CONVENT SCHOOL & JUNIOR COLLEGE</h2>
            <p className="mt-4 text-sm text-gray-400">
              We believe that the initial steps in education begin here. We do this by providing a secure, caring, and nurturing environment.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border-none rounded-l w-full text-gray-900"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-3 rounded-r transition-transform transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-all duration-300">About us</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Admission Enquiry</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Mandatory Info</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">News & Events</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Photo Gallery</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-all duration-300">Admission</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">News & Blogs</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Library</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Career Enquiry</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Contact us</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Nobel School. All Rights Reserved | Design by{" "}
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-all">Accevate Technologies</a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/search/top?q=nobel%20gurukul%20convent%20school&__stsd__=eyJwcmltYXJ5Ijp7InR5cGUiOiJUWVBFQUhFQURfUEVPUExFX0VOVElUSUVTIn19" target="value" className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="https://www.youtube.com/@nobelgurukulconventschoola7857" target="value" className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-400">
              <FaYoutube className="text-white text-lg" />
            </a>
            <a href="https://www.instagram.com/nobel_gurukul_convent_school/?hl=en" target="value" className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-700">
              <IoLogoInstagram className="text-white text-lg" />
            </a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline text-gray-400 hover:text-white transition-all">Refund Policy</a>
            <a href="#" className="hover:underline text-gray-400 hover:text-white transition-all">Accessibility</a>
            <a href="#" className="hover:underline text-gray-400 hover:text-white transition-all">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
