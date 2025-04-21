import { Link } from "react-router-dom";
import { products } from "../products";
import { Button } from "./ui/Button";
import { ProductCard } from "./ui/ProductCard";
import { FondoEstrellas } from "./ui/FondoEstrellas";

export const Main = () => {
  const currentProducts = products.slice(0, 6);

  return (
    <main
      id="main"
      className="relative w-full min-h-screen flex flex-col items-center justify-start py-16"
    >

      <FondoEstrellas />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold mb-12 text-gray-700">ÚLTIMO DROP</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl mb-4">
          {currentProducts.map((product) => (
            <div key={product.id}>
              <ProductCard id={product.id} name={product.name} image={product.image} />
            </div>
          ))}
        </div>

        <Button>
          <Link to="/products">Ver todo</Link>
        </Button>

        <footer className="w-full mt-25 bg-black text-white text-center text-xl font-semibold py-3">
          ENVIOS A TODO EL PAIS
        </footer>
      </div>
    </main>
  );
};
