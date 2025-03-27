import React from "react";
import { motion } from "framer-motion";
import BgImage from "../../assets/bg.png";

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative flex items-center justify-center text-center min-h-[300px] md:min-h-[500px] w-full"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="p-5 sm:p-6 md:p-10 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center"
>
  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-gray-900">
    Join 20000+ students who are learning and growing with us!
  </h1>
  <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-700">
    Trusted by 20000+ students and growing!
  </p>
</motion.div>

      </motion.div>
    </section>
  );
};

export default Subscribe;
