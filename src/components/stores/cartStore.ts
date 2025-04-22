import { create } from "zustand";

interface Product {
    id: number;
    name: string;
    price: string;
    stock: string;
    image: string;
  }
  

interface CartState {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (productId) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
  clearCart: () => set({ items: [] }),
}));
