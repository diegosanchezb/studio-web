import { useCartStore } from "../stores/cartStore";

interface CartProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const { items, removeFromCart, clearCart } = useCartStore();

  return (
    <div
      className={`fixed -top-1 bg-white p-5 rounded-lg transition-all duration-300 
        ${
          isVisible
            ? "right-0 sm:right-8 w-full sm:w-[300px] h-screen sm:h-auto opacity-100 z-[100]"
            : "right-[-100%] sm:right-[-400px] opacity-0 z-[5]"
        }`}
    >
      <h2 className="text-xl font-bold mb-2">Carrito de compras</h2>

      <div className="overflow-y-auto h-full sm:h-auto uppercase">
        {items.length === 0 ? (
          <p className="text-gray-500">El carrito está vacío</p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover"
                  />
                  <span>
                    {item.name} - {item.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 cursor-pointer font-bold ml-2"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white hover:bg-red-600 cursor-pointer w-full py-3 sm:py-2 rounded-lg mt-3"
            >
              VACIAR CARRITO
            </button>
            <button className="bg-green-500 text-white hover:bg-green-600 cursor-pointer w-full py-3 sm:py-2 rounded-lg mt-3">
              SEGUIR CON LA COMPRA
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute cursor-pointer top-4 right-3 text-gray-700"
      >
        ❌
      </button>
    </div>
  );
};
