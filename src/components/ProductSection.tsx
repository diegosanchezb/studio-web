import { useState } from "react";
import { products } from "../products";
import { ProductCard } from "./ui/ProductCard";

export const ProductSection = () => {
  const [selectedPrenda, setSelectedPrenda] = useState("");
  const [selectedTalle, setSelectedTalle] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchPrenda = selectedPrenda ? product.prenda === selectedPrenda : true;
    const matchTalle = selectedTalle ? product.talle === selectedTalle : true;
    return matchPrenda && matchTalle;
  });

  return (
    <div
      className="flex flex-col md:flex-row w-full bg-black/12 mx-auto px-4 sm:px-6 lg:px-8 mt-28"
      style={{
        backgroundImage: "url('/imgs/diseño/estrellas.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* FILTROS */}
      <aside className="w-full md:w-72 mt-6 md:mt-14 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pr-4 md:pl-20 flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">FILTROS</h3>

        <div className="mb-3">
          <p className="text-lg font-semibold text-gray-800 mb-2">PRENDA</p>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelectedPrenda("remera")}
                className={`text-gray-700 hover:text-lime-500 cursor-pointer ${
                  selectedPrenda === "remera" ? "text-lime-500 font-bold" : ""
                }`}
              >
                REMERAS
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedPrenda("buzo")}
                className={`text-gray-700 hover:text-lime-500 cursor-pointer ${
                  selectedPrenda === "buzo" ? "text-lime-500 font-bold" : ""
                }`}
              >
                BUZOS
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-800 mb-2">TALLE</p>
          <ul className="space-y-2">
            {["S", "M", "L"].map((talle) => (
              <li key={talle}>
                <button
                  onClick={() => setSelectedTalle(talle)}
                  className={`text-gray-700 hover:text-lime-500 cursor-pointer ${
                    selectedTalle === talle ? "text-lime-500 font-bold" : ""
                  }`}
                >
                  {talle}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {(selectedPrenda || selectedTalle) && (
          <button
            onClick={() => {
              setSelectedPrenda("");
              setSelectedTalle("");
            }}
            className="mt-6 text-sm text-red-500 hover:underline cursor-pointer"
          >
            Limpiar filtros
          </button>
        )}
      </aside>

      {/* PRODUCTOS */}
      <section className="flex-1 flex flex-col items-center w-full mt-6 md:mt-1 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mt-10">PRODUCTOS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 w-full px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                stock={product.stock}
                price={product.price}
                name={product.name}
              />
            ))
          ) : (
            <p className="text-gray-600 mt-8">No se encontraron productos.</p>
          )}
        </div>
      </section>
    </div>
  );
};
