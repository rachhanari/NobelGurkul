import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Benefits from "./components/Services/Benefits";
import Features from "./components/Services/Features";
import PartyBoom from "./components/ballon&party/PartyBoom";
import { motion, AnimatePresence } from "framer-motion";
import DiwaliFireworkRain from "./components/ballon&party/DiwaliBurst";
import TrusterImages from "./components/Turster/TrusterImages";

const SplashScreen = ({ onFinish }) => {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audio] = useState(new Audio("/Noble-school/Audio/OM.mp3"));

  const handleStart = () => {
    if (!audioPlayed) {
      audio.play()
        .then(() => console.log("✅ Audio playing..."))
        .catch((err) => console.error("🚫 Audio blocked:", err));
      setAudioPlayed(true);
    }
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      onFinish();
    }, 5000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#111827]"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

        <img
          src="https://t4.ftcdn.net/jpg/09/24/14/05/360_F_924140594_YUjBubwd7VKcLTJgouLGGDoGoKUCxzUX.jpg"
          alt="Splash"
          className="absolute object-cover w-full h-full opacity-30"
        />

        <PartyBoom />
        <DiwaliFireworkRain />

        <div className="relative text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className="text-white text-3xl md:text-5xl font-bold mb-4"
          >
            Welcome to
            <span className="block text-yellow-400">
              NOBEL GURUKUL CONVENT SCHOOL & JUNIOR COLLEGE
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
            className="text-white text-lg md:text-2xl opacity-90"
          >
            Best education for your child's future
          </motion.p>
          <motion.button
            onClick={handleStart}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg"
          >
            Click to Play & Visit
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <section id="home">
            <Hero />
          </section>
          <section id="courses">
            <Services />
          </section>
          <section id="courses">
            <Benefits />
          </section>
          <section id="courses">
            <Features />
          </section>
          <section id="gallery">
            <Banner />
          </section>
          <section id="joining">
            <Subscribe />
          </section>
          <section id="Truster">
            <TrusterImages />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
