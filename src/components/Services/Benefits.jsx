import React from "react";
import { motion } from "framer-motion";

const BenefitsData = [
  {
    id: 1,
    title: "Excellence in Academic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pQSLqgd2XTqNtNow8sdcc6JJI66VQ1d5dQ&s",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Infrastructure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmMfXqo4hULYl6cswKTNdMiyTLP7BHT_T8A&s",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Achievement",
    img: "https://cdn-icons-png.flaticon.com/512/6746/6746962.png",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Transport Facilities",
    img: "https://cdn-icons-png.flaticon.com/512/4727/4727479.png",
    delay: 0.5,
  },
  {
    id: 5,
    title: "24/7 CCTV Security",
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048927.png",
    delay: 0.6,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, delay, ease: "easeInOut" } },
});

const Benefits = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-12 pt-14 px-12">
        {/* Heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="text-3xl font-bold text-center pb-6 text-gray-800"
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
              className="bg-gradient-to-br from-gray-100 to-white rounded-xl flex flex-col gap-2 items-center justify-center p-8 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-20 h-20 mb-2 hover:rotate-12 transition-transform duration-300"
              />
              <h1 className="text-base font-semibold text-center text-gray-700">
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