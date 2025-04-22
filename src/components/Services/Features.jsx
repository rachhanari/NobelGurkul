import React from "react";
import { motion } from "framer-motion";
import dance from "../../assets/dance-removebg-preview.png";
import yoga from "../../assets/yoga-removebg-preview.png";
import karate from "../../assets/karate-removebg-preview.png";
import boxing from "../../assets/boxing-removebg-preview.png";
import taekwondo from "../../assets/Taekwondo-removebg-preview.png";

const FeaturesData = [
  {
    id: 1,
    title: "Dance",
    img: dance,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Yoga",
    img: yoga,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Karate",
    img: karate,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Boxing",
    img: boxing,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Taekwondo",
    img: taekwondo,
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

const Features = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-12 pt-14 px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="text-4xl font-bold text-center pb-8 text-gray-800"
        >
          Our Activities
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {FeaturesData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={SlideLeft(feature.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-white rounded-xl flex flex-col gap-3 items-center justify-center p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              {/* Uniform Image Container */}
              <div className="w-full h-24 sm:h-32 md:h-40 flex items-center justify-center overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-full object-contain hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-center text-gray-800">
                {feature.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
