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
  useEffect(() => {
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.loop = false;
    audio.volume = 0;
    audio.muted = true; // muted initially to pass autoplay restrictions

    audio.play()
      .then(() => {
        // Unmute and fade-in volume
        audio.muted = false;
        let currentVolume = 0;
        const fadeInterval = setInterval(() => {
          if (currentVolume < 1) {
            currentVolume += 0.05;
            audio.volume = currentVolume;
          } else {
            clearInterval(fadeInterval);
          }
        }, 100);
      })
      .catch((err) => {
        console.log("Autoplay might be blocked:", err);
      });

    const timer = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      onFinish();
    }, 4000);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#111827]"
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
