import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { ProductSection } from "./components/ProductSection";
import { Cart } from "./components/ui/Cart";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isVisible={isCartOpen} setIsVisible={setIsCartOpen} />
      <Cart isVisible={isCartOpen} setIsVisible={setIsCartOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main />
              <Gallery />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
