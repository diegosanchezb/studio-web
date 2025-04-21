import { useEffect, useState } from "react";

const images = [
  "/imgs/diseño/fondo1.jpg",
  "/imgs/diseño/fondo2.jpg",
  "/imgs/diseño/fondo3.JPG",
  "/imgs/diseño/fondo4.JPG",
  "/imgs/diseño/fondo5.jpg",
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="inicio" className="w-full h-[85vh] relative overflow-hidden">
      
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-3000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        />
      ))}
    </div>
  );
};
