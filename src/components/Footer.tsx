import { FaInstagram, FaGoogle, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-neutral-400 text-black text-sm font-bold flex items-center justify-center relative px-4"
    >
      <div className="flex flex-col items-center text-center absolute left-1/2 transform -translate-x-1/2">
        <p className="mb-3 uppercase">
          Serigrafía Textil y Diseño
          <br />
          STUDIO.PEROXIDO@GMAIL.COM
          <br />
          Argentina, Buenos Aires
          <br />
          1138589202
        </p>

        <hr className="border-black w-200 mb-4" />

        <div className="flex justify-center gap-3">
          <FaInstagram className="text-2xl cursor-pointer hover:text-lime-500 transition-colors duration-400" />
          <FaGoogle className="text-2xl cursor-pointer hover:text-lime-500 transition-colors duration-400" />
          <FaWhatsapp className="text-2xl cursor-pointer hover:text-lime-500 transition-colors duration-400" />
        </div>

        <p className="mt-4 text-s text-black font-semibold">
          © 2025 Todos los derechos reservados - Creado por
        </p>
      </div>

      <div className="ml-350">
        <img
          src="/imgs/diseño/footer.png"
          alt="Exploded View"
          className="w-54 h-64 object-contain"
        />
      </div>
    </footer>
  );
};
