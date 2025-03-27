import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import "../Hero/Hero.css";
import About from "../About/About";
import emailjs from "@emailjs/browser";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.6,
      delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Debugging: console check form values
    const data = new FormData(form.current);
    console.log("Form Data:", Object.fromEntries(data.entries()));

    emailjs
      .sendForm(
        "service_go3ktcp",
        "template_hrpkmq4",
        form.current,
        "c24d1YlNFNEuFIgQP"
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Email sending error:", error);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <>
      <section id="home" className="hero-section">
        <Navbar />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative z-10 text-white px-4 py-10 md:py-0">
          <div className="flex flex-col justify-center space-y-6 lg:max-w-[500px]">
            <motion.h1
              variants={fadeUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold leading-snug font-playfair text-center md:text-left"
            >
              <motion.span
                variants={fadeUp(0.6)}
                initial="initial"
                animate="animate"
                className="welcome block text-yellow-400"
              >
                WELCOME TO NOBEL GURUKUL CONVENT
              </motion.span>
              <motion.span
                variants={fadeUp(0.8)}
                initial="initial"
                animate="animate"
                className="school block text-yellow-400"
              >
                SCHOOL & JUNIOR COLLEGE
              </motion.span>
              <motion.span
                variants={fadeUp(1)}
                initial="initial"
                animate="animate"
                className="education block mt-4 font-poppins"
              >
                Best Education For Your Child
              </motion.span>
            </motion.h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="form-container">
              <h2>Admissions Open for 2025-26</h2>
              <form ref={form} onSubmit={sendEmail}>
                <input name="name" type="text" placeholder="Student Name" required />
                <input name="parent" type="text" placeholder="Parent Name" required />
                <select name="std" required>
                  <option value="">Current Std</option>
                  <option>Nursery</option>
                  <option>JrKG</option>
                  <option>SrKG</option>
                  <option>Std 1</option>
                  <option>Std 2</option>
                  <option>Std 3</option>
                  <option>Std 4</option>
                  <option>Std 5</option>
                  <option>Std 6</option>
                  <option>Std 7</option>
                  <option>Std 8</option>
                  <option>Std 9</option>
                  <option>Std 10</option>
                  <option>Std 11</option>
                  <option>Std 12</option>
                </select>
                <input name="mobile" type="tel" placeholder="Mobile No." required />
                <input name="email" type="email" placeholder="Email ID" required />
                <input name="city" type="text" placeholder="City" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>
    </>
  );
};

export default Hero;
