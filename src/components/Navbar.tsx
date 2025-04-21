import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full mt-8 top-10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Parte superior: logos y redes */}
        <div className="flex flex-col md:flex-row items-center justify-between h-auto relative gap-6">
          {/* Logo izquierdo */}
          <div className="md:absolute md:left-10 lg:left-40">
            <img
              src="/imgs/icons/logo.png"
              alt="Studio Peroxido Logo 1"
              className="h-[60px] w-auto"
            />
          </div>

          {/* Logo central */}
          <div className="flex justify-center w-full">
            <img
              src="/imgs/icons/logo2.webp"
              alt="Studio Peroxido Logo 2"
              className="w-auto h-[80px] sm:h-[90px] lg:h-[170px]"
            />
          </div>

          {/* Redes y carrito */}
          <div className="flex items-center justify-center gap-4 md:absolute md:right-10">
            <a
              href="https://www.instagram.com/studio.peroxido/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-lime-500 text-2xl"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://wa.me/+5491138589202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-lime-500 text-2xl"
            >
              <AiOutlineWhatsApp />
            </a>
            <a
              href="mailto:STUDIO.PEROXIDO@GMAIL.COM"
              className="text-gray-700 hover:text-lime-500 text-2xl"
            >
              <AiOutlineMail />
            </a>
            <a
              href="#cart"
              className="text-gray-700 hover:text-lime-500 text-3xl"
            >
              <AiOutlineShoppingCart />
            </a>

            {/* Botón hamburguesa en mobile */}
            <button
              className="text-gray-700 hover:text-lime-500 text-3xl sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Menú de navegación */}
        <div className={`flex-col items-center mt-4 ${isOpen ? "flex" : "hidden"} sm:flex`}>
          <ul className="flex flex-col sm:flex-row sm:space-x-12 text-xl font-semibold gap-4 sm:gap-0">
            <li>
              <Link to="/" className="text-gray-700 hover:text-lime-500" onClick={() => setIsOpen(false)}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-700 hover:text-lime-500" onClick={() => setIsOpen(false)}>
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-lime-500" onClick={() => setIsOpen(false)}>
                SOBRE NOSOTROS
              </Link>
            </li>
            <li>
              <a href="#footer" className="text-gray-700 hover:text-lime-500" onClick={() => setIsOpen(false)}>
                CONTACTO
              </a>
            </li>
          </ul>
        </div>

        {/* Galería de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-12 px-4">
          <img
            src="/imgs/diseño/remenaranja.png"
            alt="Remera naranja"
            className="h-[250px] w-full object-cover"
          />
          <img
            src="/imgs/diseño/remenegra.png"
            alt="Remera negra"
            className="h-[250px] w-full object-cover"
          />
          <img
            src="/imgs/diseño/remeblanca.png"
            alt="Remera blanca"
            className="h-[250px] w-full object-cover"
          />
          <img
            src="/imgs/diseño/remerosa.webp"
            alt="Remera rosa"
            className="h-[250px] w-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};
