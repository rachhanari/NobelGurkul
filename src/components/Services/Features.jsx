import React from "react";
import { motion } from "framer-motion";

const FeaturesData = [
  {
    id: 1,
    title: "Dance",
    img: "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=612x612&w=0&k=20&c=HdANesx3xHmz_yitFvG49pYv8BFHhGdVot9FVaDX3Jk=",
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
    img: "https://png.pngtree.com/png-vector/20220208/ourmid/pngtree-karate-man-illustration-png-image_4382092.png",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Boxing",
    img: "data:image/jpeg;base64,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",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Taekwondo",
    img: "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-taekwondo-training-figures-png-image_2829473.jpg",
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
              className="bg-gradient-to-br from-gray-100 to-white rounded-xl flex flex-col gap-3 items-center justify-center p-8 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-40 h-40 mb-3 hover:rotate-12 transition-transform duration-300"
              />
              <h1 className="text-lg font-semibold text-center text-gray-800">
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
