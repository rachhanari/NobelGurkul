import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "../../assets/DSC_0128.jpg";
import img2 from "../../assets/DSC_0216.jpg";
import img3 from "../../assets/DSC_0229.jpg";
import img4 from "../../assets/DSC_0238.jpg";
import img5 from "../../assets/DSC_0268.jpg";
import img6 from "../../assets/DSC_0358.jpg";
import img7 from "../../assets/hero.png";
import img8 from "../../assets/hero.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video1 from "../../../public/Videos/InShot_20250312_132129600.mp4";
import video2 from "../../../public/Videos/InShot_20250311_202104574.mp4";
import video3 from "../../../public/Videos/InShot_20250311_202104574.mp4";
import video4 from "../../../public/Videos/InShot_20250312_132129600.mp4";

const galleryImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
];

const videoSources = [
  { src: video1 },
  { src: video2 },
  { src: video3 },
  { src: video4 },
];

const Gallery = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? videoSources.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-4 sm:p-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our School Gallery
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-1/2">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              className="overflow-hidden rounded-2xl shadow-none cursor-pointer bg-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to={`/gallery-view/${img.id}`}>
                <img
                  src={img.src}
                  alt={`Gallery Image ${img.id}`}
                  className="w-full h-44 object-cover rounded-2xl transition-transform duration-300 hover:scale-105 m-0 p-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          <video
            key={currentVideo}
            controls
            autoPlay
            className="w-full h-[450px] rounded-3xl shadow-2xl object-cover"
          >
            <source src={videoSources[currentVideo].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="flex items-center gap-10 w-full">
            <button
              onClick={handlePrev}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-xl"
            >
              <ChevronLeft size={28} />
            </button>

            <div
              className="flex gap-4 overflow-x-auto w-full px-2 scrollbar-hide"
            >
              {videoSources.map((video, index) => (
                <video
                  key={index}
                  src={video.src}
                  muted
                  loop
                  autoPlay
                  onClick={() => setCurrentVideo(index)}
                  className={`w-28 h-20 rounded-xl cursor-pointer object-cover border-4 transition-all duration-300 ${
    currentVideo === index
      ? "border-purple-600 scale-110"
      : "border-gray-300 hover:scale-105"
  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-xl"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 