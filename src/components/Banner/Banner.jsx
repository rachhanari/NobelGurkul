import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

import img1 from "../../assets/Gallary-img1.jpeg";
import img2 from "../../assets/Gallary-img9.jpeg";
import img3 from "../../assets/Gallary-img3.jpeg";
import img4 from "../../assets/Gallary-img10.jpeg";
import img5 from "../../assets/Gallary-img5.jpeg";
import img6 from "../../assets/Gallary-img6.jpeg";
import img7 from "../../assets/Gallary-img7.jpeg";
import img8 from "../../assets/Gallary-img8.jpeg";

const videoLinks = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/utcB8R0f5Lg?si=HXyvTXWq6lJFcRSP",
    thumbnail: "https://img.youtube.com/vi/utcB8R0f5Lg/maxresdefault.jpg",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/0zBWFRjkzdQ?si=79ragb40fL6t343w",
    thumbnail: "https://img.youtube.com/vi/0zBWFRjkzdQ/maxresdefault.jpg",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/77jVrdaM2Ks?si=FvHKXUUkrnTrGlAi",
    thumbnail: "https://img.youtube.com/vi/77jVrdaM2Ks/maxresdefault.jpg",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/eX4luQr4e3Q?si=oEbFrCcmTUP3YwkN",
    thumbnail: "https://img.youtube.com/vi/eX4luQr4e3Q/maxresdefault.jpg",
  },
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

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videoLinks.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? videoLinks.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gradient-to-br from-[#6EE7B7] via-[#A78BFA] to-[#9333EA] p-4 sm:p-8 md:p-12">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-10">
        Our School Gallery
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
        {/* Image Gallery */}
        <div className="gallery-grid lg:w-3/5">
          {galleryImages.map((img) => (
            <div className="gallery-card" key={img.id}>
              <img src={img.src} alt={`Gallery Image ${img.id}`} className="gallery-img" />
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-2/5 flex flex-col items-center gap-4 sm:gap-6">
          <motion.div
            key={currentVideo}
            className="w-full h-[200px] sm:h-[260px] md:h-[320px] rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <iframe
              width="100%"
              height="100%"
              src={videoLinks[currentVideo].src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-4 w-full justify-center">
            <button
              onClick={handlePrev}
              className="min-w-[40px] bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2 sm:gap-3 overflow-x-auto w-full px-1 scrollbar-hide">
              {videoLinks.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`transition-all duration-300 rounded-xl overflow-hidden cursor-pointer border-4 ${
                    currentVideo === index
                      ? "border-purple-600 scale-105 w-24 sm:w-28"
                      : "border-gray-300 hover:scale-105 w-20 sm:w-24"
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Video Thumbnail ${video.id}`}
                    className="h-16 sm:h-20 object-cover w-full"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="min-w-[40px] bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
