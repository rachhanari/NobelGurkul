import React from "react";
import img1 from "../../assets/DSC_0128.jpg";
import img2 from "../../assets/DSC_0216.jpg";
import img3 from "../../assets/DSC_0229.jpg";
import img4 from "../../assets/DSC_0238.jpg";
import img5 from "../../assets/DSC_0268.jpg";
import img6 from "../../assets/DSC_0358.jpg";
import img7 from "../../assets/hero.png";
import img8 from "../../assets/hero.png";

const TrusterImages = () => {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img3 },
    { id: 8, src: img5 },
  ];

  return (
    <div className="p-4">
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
