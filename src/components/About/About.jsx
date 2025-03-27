import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaBookOpen, FaTrophy, FaChalkboardTeacher } from "react-icons/fa";
import img1 from "../../assets/Father-img1.jpeg";
import img2 from "../../assets/Teacher.jpeg";
import img3 from "../../assets/Brother.png";

const experts = [
  {
    name: "Late Shri Dibyalochan D. Mohanty",
    role: "Founder",
    img: img1,
    description: "At [NOBEL GURUKUL CONVENT SCHOOL & COLLEGE], we nurture young minds with knowledge, creativity, and values to shape future leaders.",
  },
  {
    name: "Miss. Priyanka D.mohanty",
    role: "Principal",
    img: img2,
    description: "As Principal of [NOBEL GURUKUL CONVENT SCHOOL & COLLEGE], I am dedicated to fostering a nurturing and dynamic learning environment for all students..",
  },
  {
    name: "Mr. Biswajeet D. Mohanty",
    role: "President",
    img: img3,
    description: "As the President of [NOBEL GURUKUL CONVENT SCHOOL & COLLEGE], I am committed to fostering excellence, innovation, and holistic development for every student.",
  },
];

const CombinedPage = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => (prev - 1 + experts.length) % experts.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % experts.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % experts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-600 flex flex-col lg:flex-row items-center justify-center p-6 gap-12">
      <div className="relative w-full lg:w-1/2 text-center bg-transparent">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-900 drop-shadow">Our Founder's</h2>

        <div className="relative flex justify-center items-center">
          <motion.img
            src={experts[(index + experts.length - 1) % experts.length].img}
            alt="Previous Expert"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover absolute left-0 top-10 opacity-70 shadow-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <motion.img
            src={experts[index].img}
            alt="Current Expert"
            className="w-52 h-52 sm:w-56 sm:h-56 rounded-full border-8 border-white object-cover shadow-2xl z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <motion.img
            src={experts[(index + 1) % experts.length].img}
            alt="Next Expert"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover absolute right-0 top-10 opacity-70 shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-2xl font-bold text-pink-700">{experts[index].name}</h3>
          <p className="text-pink-500 text-lg mt-1">{experts[index].role}</p>
          <p className="text-gray-700 mt-4 px-6">{experts[index].description}</p>
        </motion.div>

        <div className="flex justify-between items-center mt-8 px-4">
          <button onClick={prevSlide} className="bg-white p-3 rounded-full shadow hover:bg-yellow-200 transition-all">
            <FaArrowLeft className="text-yellow-600" />
          </button>
          <button onClick={nextSlide} className="bg-white p-3 rounded-full shadow hover:bg-yellow-200 transition-all">
            <FaArrowRight className="text-yellow-600" />
          </button>
        </div>
      </div>

      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="text-white text-center px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-blue-700 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          >
            About Us
          </motion.h2>
          <motion.h3
            className="text-2xl sm:text-3xl font-extrabold mt-3 text-blue-900 drop-shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            Nobel Gurukul Convent School & Jr College
          </motion.h3>
          <p className="mt-4 text-base sm:text-lg text-gray-800 leading-relaxed">
            Where excellence meets innovation! We provide a dynamic learning environment that nurtures academic growth, creativity, and leadership.
          </p>

          <div className="mt-6 space-y-6">
            {[{
                icon: <FaBookOpen className="text-3xl text-yellow-500" />,
                title: "Shaping Bright Futures",
                text: "Empowering students with knowledge, values, and confidence to succeed in an ever-evolving world.",
                hoverGradient: "hover:from-yellow-400 hover:via-orange-300 hover:to-pink-400",
              },
              {
                icon: <FaTrophy className="text-3xl text-green-500" />,
                title: "Excellence Beyond Academics",
                text: "We focus on holistic development, blending academics with creativity, leadership, and life skills.",
                hoverGradient: "hover:from-green-400 hover:via-blue-300 hover:to-purple-400",
              },
              {
                icon: <FaChalkboardTeacher className="text-3xl text-blue-500" />,
                title: "Learn with Experts",
                text: "Gain knowledge from experienced educators who inspire, guide, and nurture every student’s potential.",
                hoverGradient: "hover:from-purple-500 hover:via-pink-400 hover:to-yellow-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-center p-4 bg-white/30 backdrop-blur-xl rounded-xl shadow-md gap-4 text-center sm:text-left transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r ${item.hoverGradient} cursor-pointer`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
              >
                {item.icon}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-800 text-sm sm:text-base">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CombinedPage;
