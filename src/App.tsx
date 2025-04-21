import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { ProductSection } from "./components/ProductSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
