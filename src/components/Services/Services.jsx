import React from "react";
import { motion } from "framer-motion";
import Robotics from "../../assets/robotic.png";
import CS from "../../assets/computer.png";
import Learning from "../../assets/e-learning.png";
import motivation from "../../assets/motivational (1).png";
import bagavat from "../../assets/bhagvat-gita.jpeg";

const ServicesData = [
  {
    id: 1,
    title: "Robotics",
    img: Robotics,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Computer Science",
    img: CS,
    delay: 0.3,
  },
  {
    id: 3,
    title: "E-Learning",
    img: Learning,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Motivational Lecture",
    img: motivation,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Bhagavad Gita Classes",
    img: bagavat,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Personality Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOtaRqufu9vkF6SqWDa-mXuObVJjuXcExtA&s",
    delay: 0.7,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: "easeInOut" },
  },
});

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-16 pt-20 px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          className="text-4xl font-bold text-center pb-12 text-gray-800"
        >
          Our Courses
        </motion.h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-white rounded-2xl flex flex-col gap-4 items-center justify-center p-8 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-24 h-24 mb-3 hover:rotate-12 transition-transform duration-300 sm:w-32 sm:h-32 md:w-24 md:h-24"
              />
              <h1 className="text-lg font-semibold text-center text-gray-700">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
