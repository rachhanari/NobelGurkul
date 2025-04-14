import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/DSC_0128.jpg";
import img2 from "../../assets/DSC_0216.jpg";
import img3 from "../../assets/DSC_0229.jpg";
import img4 from "../../assets/DSC_0238.jpg";
import img5 from "../../assets/DSC_0268.jpg";
import img6 from "../../assets/DSC_0358.jpg";
import img7 from "../../assets/hero.png";
import img8 from "../../assets/hero.png";

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

// ✅ Vercel-friendly paths (from public/)
const videoSources = [
  { id: 1, src: "/Videos/DSC_0088.MOV" },
  { id: 2, src: "/Videos/DSC_0088.MOV" },
  { id: 3, src: "/Videos/InShot_20250312_132129600.mp4" },
  { id: 4, src: "/Videos/InShot_20250312_132129600.mp4" },
];

const Gallery = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    setVideoError(false);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? videoSources.length - 1 : prev - 1
    );
    setVideoError(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-8 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our School Gallery
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full lg:w-1/2">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              className="overflow-hidden rounded-2xl shadow-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to={`/gallery-view/${img.id}`}>
                <img
                  src={img.src}
                  alt={`Gallery Image ${img.id}`}
                  className="w-full h-40 sm:h-44 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          {videoError ? (
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-200 rounded-3xl text-red-600 font-semibold">
              ❌ Video not available
            </div>
          ) : (
            <video
              key={currentVideo} // This ensures the video re-renders when the `currentVideo` changes
              controls
              autoPlay
              muted
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-3xl shadow-2xl object-cover"
              onCanPlay={() => setVideoError(false)}
              onError={() => setVideoError(true)}
            >
              <source src={videoSources[currentVideo].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Video Controls */}
          <div className="flex items-center gap-4 sm:gap-6 w-full overflow-x-auto">
            <button
              onClick={handlePrev}
              className="min-w-[40px] bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-3 sm:gap-4 overflow-x-auto w-full px-2 scrollbar-hide">
              {videoSources.map((video, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentVideo(index);
                    setVideoError(false);
                  }}
                  className={`transition-all duration-300 rounded-xl overflow-hidden cursor-pointer border-4 ${
                    currentVideo === index
                      ? "border-purple-600 scale-105 w-36 sm:w-40"
                      : "border-gray-300 hover:scale-105 w-24 sm:w-28"
                  }`}
                >
                  <video
                    src={video.src}
                    muted
                    loop
                    autoPlay
                    className="h-20 sm:h-24 object-cover w-full"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="min-w-[40px] bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
