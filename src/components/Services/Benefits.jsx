import React from "react";
import { motion } from "framer-motion";
import excellence from "../../assets/akedamy-removebg-preview.png";
import infracture from "../../assets/infrastuter.jpeg";
import achiment from "../../assets/achivment.png";
import transport from "../../assets/transport.png";
import cctv from "../../assets/camara-removebg-preview.png";

const BenefitsData = [
  {
    id: 1,
    title: "Excellence in Academic",
    img: excellence,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Infrastructure",
    img: infracture,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Achievement",
    img: achiment,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Transport Facilities",
    img: transport,
    delay: 0.5,
  },
  {
    id: 5,
    title: "24/7 CCTV Security",
    img: cctv,
    delay: 0.6,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay, ease: "easeInOut" },
  },
});

const Benefits = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-12 pt-14 px-8">
        {/* Heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="text-4xl font-bold text-center pb-6 text-gray-800"
        >
          Our Benefits
        </motion.h1>

        {/* Benefit Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {BenefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={SlideLeft(benefit.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-white rounded-xl flex flex-col gap-3 items-center justify-center p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              {/* Image container for uniform sizing */}
              <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center overflow-hidden">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="h-full object-contain hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-center text-gray-800">
                {benefit.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
