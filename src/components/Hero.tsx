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
    <div
      id="inicio"
      className="w-full h-screen pt-[120px] relative mt-28 flex flex-col items-center"
    >
      {/* galería de remeras */}
      <div className="w-full bg-white shadow-md sticky z-[10] py-4 overflow-x-auto sm:overflow-visible">
        <div className="flex justify-center flex-wrap gap-4 px-4 sm:px-8">
          <img
            src="/imgs/diseño/remenaranja.png"
            alt="Remera naranja"
            className="h-[230px] sm:h-[230px] w-auto object-cover"
          />
          <img
            src="/imgs/diseño/remenegra.png"
            alt="Remera negra"
            className="h-[230px] sm:h-[230px] w-auto object-cover"
          />
          <img
            src="/imgs/diseño/remeblanca.png"
            alt="Remera blanca"
            className="h-[230px] sm:h-[230px] w-auto object-cover"
          />
          <img
            src="/imgs/diseño/remerosa.webp"
            alt="Remera rosa"
            className="h-[230px] sm:h-[230px] w-auto object-cover"
          />
        </div>
      </div>

      {/* contenedor para las imágenes de fondo */}
      <div className="absolute inset-0 w-full h-full mt-70 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-3000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            } lg:w-full lg:h-full md:w-[90%] md:h-[90%] sm:w-[70%] sm:h-[70%] sm:object-full`}
          />
        ))}
      </div>
    </div>
  );
};
