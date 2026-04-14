import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../Hero/Hero.css";
import About from "../About/About";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_go3ktcp",
        "template_hrpkmq4",
        form.current,
        "c24d1YlNFNEuFIgQP"
      )
      .then(() => {
        alert("Form submitted successfully!");
        e.target.reset();
      });
  };

  return (
    <>
      <section id="home" className="hero-section m-0 p-0">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] text-white px-4 py-10 md:py-0">

          {/* LEFT */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#FFFF00]">
              WELCOME TO NOBEL GURUKUL CONVENT <br />
              SCHOOL & JUNIOR COLLEGE
            </h1>

            <p className="text-lg">
              A Bright Future, Cultivated by the Wise Hands of the Gurukul.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center justify-center">
            <div className="form-container">
              <h2>Admissions Open for 2026-27</h2>

              <form ref={form} onSubmit={sendEmail}>
                <input name="name" placeholder="Student Name*" required />
                <input name="parent" placeholder="Parent Name" />
                <select name="std">
                  <option>Current Std</option>
                  <option>Nursery</option>
                  <option>JrKG</option>
                  <option>SrKG</option>
                </select>
                <input name="mobile" placeholder="Mobile No*" required />
                <input name="email" placeholder="Email ID" />
                <input name="city" placeholder="City*" required />
                <button type="submit">Submit</button>
              </form>

            </div>
          </div>

        </div>
      </section>

      <About />
    </>
  );
};

export default Hero;