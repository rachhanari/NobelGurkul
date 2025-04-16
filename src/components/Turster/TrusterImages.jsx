import React from "react";
import img8 from "../../assets/truste-img1.jpg";
import img2 from "../../assets/truster-img2.jpg";
import img3 from "../../assets/truster-img3.jpg";
import img4 from "../../assets/truster-img4.jpg";
import img5 from "../../assets/truste-img5.jpg";
import img6 from "../../assets/truste8.jpg";
import img7 from "../../assets/truste-img7.jpg";
import img1 from "../../assets/truste-img8.jpg";

const TrusterImages = () => {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
  ];

  return (
    <div
      className="p-4"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 123, 255, 0.2), 
          rgba(0, 123, 255, 0.3)
        )`,
      }}
    >
      <h2 className="text-center text-5xl font-extrabold text-black mb-8">
        Our Trustee
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={`Image ${img.id}`}
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110 object-cover shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default TrusterImages;
