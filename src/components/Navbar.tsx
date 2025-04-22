import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./ui/Cart";
import { useCartStore } from "./stores/cartStore";

interface NavbarProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export const Navbar = ({ isVisible, setIsVisible }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCartStore();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto relative gap-6">
          {/* logo izquierdo */}
          <div className="md:absolute md:left-10 lg:left-40">
            <img
              src="/imgs/icons/logo.png"
              alt="Studio Peroxido Logo 1"
              className="h-[60px] w-auto"
            />
          </div>

          {/* logo central */}
          <div className="flex justify-center w-full">
            <img
              src="/imgs/icons/logo2.webp"
              alt="Studio Peroxido Logo 2"
              className="w-auto h-[80px] sm:h-[90px] lg:h-[170px]"
            />
          </div>

          {/* redes sociales y carrito */}
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

            {/* Icono del carrito con contador */}
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="relative text-3xl cursor-pointer"
            >
              <AiOutlineShoppingCart className="text-gray-700 hover:text-lime-500" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>

            {/* Botón hamburguesa en mobile */}
            <button
              className="text-gray-700 hover:text-lime-500 text-3xl sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* menú de navegación */}
        <div
          className={`flex-col items-center mt-4 ${
            isOpen ? "flex" : "hidden"
          } sm:flex`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-12 text-xl mb-5 font-semibold gap-4 sm:gap-0">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-lime-500"
                onClick={() => setIsOpen(false)}
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-700 hover:text-lime-500"
                onClick={() => setIsOpen(false)}
              >
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-lime-500"
                onClick={() => setIsOpen(false)}
              >
                SOBRE NOSOTROS
              </Link>
            </li>
            <li>
              <a
                href="#footer"
                className="text-gray-700 hover:text-lime-500"
                onClick={() => setIsOpen(false)}
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>

        <Cart isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </nav>
  );
};
