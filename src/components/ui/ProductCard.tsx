import { useState } from "react";
import { Button } from "../ui/Button";

interface ProductCardProps {
  name: string;
  image: string;
  stock: string;
  price: string;
}

export const ProductCard = ({
  name,
  image,
  stock,
  price,
}: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center group p-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-60 h-60 object-cover rounded-lg border border-gray-500"
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-1 w-full bg-white text-black hover:bg-gray-500 hover:text-white border-lime-500 text-s font-semibold px-2 py-2 border shadow opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out cursor-pointer"
        >
          Vista rápida
        </button>
      </div>

      <p className="mt-1 text-lg font-medium text-gray-700 text-center">
        {name}
      </p>
      <p className="text-gray-600 text-sm mb-1">{stock}</p>
      <p className="text-gray-800 font-semibold">{price}</p>

      <Button onClick={() => alert(`Producto añadido al carrito: ${name}`)}>
        Comprar
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-20">
          <div className="relative bg-gray-500 p-6 border border-white max-w-lg w-full rounded-lg">
            <img src={image} alt={name} className="w-full h-auto rounded" />
            <h3 className="text-xl font-semibold mt-4 text-center">{name}</h3>
            <p className="text-gray-300 text-center">{stock}</p>
            <p className="text-white text-lg text-center font-bold">{price}</p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-black text-2xl mr-1 font-bold p-2 cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
