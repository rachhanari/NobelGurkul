import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images
import img1 from "../../assets/Gallary-img1.jpeg";
import img2 from "../../assets/Gallary-img2.jpeg";
import img3 from "../../assets/Gallary-img3.jpeg";
import img4 from "../../assets/Gallary-img10.jpeg";
import img5 from "../../assets/Gallary-img5.jpeg";
import img6 from "../../assets/Gallary-img6.jpeg";
import img7 from "../../assets/Gallary-img7.jpeg";
import img8 from "../../assets/Gallary-img8.jpeg";

// Videos from public/videos/
const videoSources = [
  { id: 1, src: "/videos/Gallery-vid1.mp4" },
  { id: 2, src: "/videos/Gallery-vid2.mp4" },
  { id: 3, src: "/videos/Gallery-vid3.mp4" },
  { id: 4, src: "/videos/Gallery-vid4.mp4" },
];

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

const Gallery = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRefs = useRef([]);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    setVideoError(false);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? videoSources.length - 1 : prev - 1));
    setVideoError(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#6EE7B7] via-[#A78BFA] to-[#9333EA] p-8 sm:p-10 md:p-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our School Gallery
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full lg:w-3/5">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              className="overflow-hidden rounded-2xl shadow-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={img.src}
                alt={`Gallery Image ${img.id}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-2/5 flex flex-col items-center gap-6">
          {videoError ? (
            <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] flex items-center justify-center bg-gray-200 rounded-3xl text-red-600 font-semibold">
              ❌ Video not available
            </div>
          ) : (
            <video
              key={currentVideo}
              controls
              autoPlay
              muted
              playsInline
              className="w-full h-[220px] sm:h-[260px] md:h-[320px] rounded-2xl shadow-2xl object-cover"
              onCanPlay={() => setVideoError(false)}
              onError={() => setVideoError(true)}
            >
              <source
                src={videoSources[currentVideo]?.src || ""}
                type="video/mp4"
              />
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
                      ? "border-purple-600 scale-105 w-28 sm:w-32"
                      : "border-gray-300 hover:scale-105 w-20 sm:w-24"
                  }`}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.src}
                    muted
                    className="h-16 sm:h-20 object-cover w-full"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
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
