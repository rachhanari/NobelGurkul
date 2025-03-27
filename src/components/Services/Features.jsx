import React from "react";
import { motion } from "framer-motion";

const FeaturesData = [
  {
    id: 1,
    title: "Dance",
    img: "https://cdn-icons-png.flaticon.com/512/5600/5600929.png",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Yoga",
    img: "https://www.shutterstock.com/image-vector/yoga-person-relaxing-lotus-pose-260nw-2403393711.jpg",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Karate",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5gU1KlfZGbdNtwMPcFN4ERQeIg7VEc0n3A&s",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Boxing",
    img: "https://cdn.vectopus.com/leremy/icons/54424BAD93AC/27861D7D850C/icons-icons-sport-boxing-boxer-glove-fight-competition-stick-figure-pictogram-512.png",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Taekwondo",
    img: "https://cdn-icons-png.flaticon.com/512/5789/5789324.png",
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
          className="text-3xl font-bold text-center pb-8 text-gray-800"
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
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mb-2 hover:rotate-12 transition-transform duration-300"
              />
              <h1 className="text-base font-semibold text-center text-gray-700">
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
