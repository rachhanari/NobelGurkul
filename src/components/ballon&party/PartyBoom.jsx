import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

const PartyBoom = ({ onFinish }) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => {
      setShowConfetti(false);
      if (typeof onFinish === "function") {
        onFinish(); // safe check
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {showConfetti && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed top-0 left-0 w-full h-full z-[9999]"
        >
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
            numberOfPieces={300}
            recycle={false}
            gravity={0.3}
            wind={0.01}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PartyBoom;
