import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const generarPosicionAleatoria = (offsetX: number, offsetY: number) => ({
  x: Math.random() * (window.innerWidth - offsetX) + offsetX / 2,
  y: Math.random() * (window.innerHeight - offsetY) + offsetY / 2,
});

export const FondoEstrellas = () => {
  const [posiciones, setPosiciones] = useState(() => [
    generarPosicionAleatoria(200, 100),
    generarPosicionAleatoria(400, 300),
    generarPosicionAleatoria(600, 500),
    generarPosicionAleatoria(800, 700),
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosiciones([
        generarPosicionAleatoria(200, 100),
        generarPosicionAleatoria(400, 300),
        generarPosicionAleatoria(600, 500),
        generarPosicionAleatoria(800, 700),
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {posiciones.map((pos, index) => (
        <motion.img
          key={index}
          src="/imgs/diseño/estrellagris.png"
          alt="Decoración estrella"
          className="absolute w-1/4 opacity-20"
          animate={{ x: pos.x, y: pos.y }} // 🔥 Movimiento más separado entre cada estrella
          transition={{
            duration: 5, // Velocidad ajustada
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
