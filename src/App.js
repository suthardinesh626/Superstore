import { Carousel } from "flowbite-react";
import BuyNow from "./components/pages/BuyNow";
import Cart from "./components/pages/Cart";
import Footer from "./components/pages/Footer";
import Login from "./components/pages/Login";
import Navbar from "./components/pages/Navbar";
import Product from "./components/pages/Product";
import Signup from "./components/pages/Signup";
import "./input.css";
import { Route, Routes } from "react-router-dom";
import HomeCarousel from "./components/pages/HomeCarousel";
import SelectedProductContext from "./context/SelectedProductContext";
import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full">
      <SelectedProductContext.Provider
        value={{ selectedProduct, setSelectedProduct }}
      >
        {/* <Login/>
     <Signup/> */}
        <Navbar />
        <HomeCarousel />
        <Product />
        <hr></hr>
        <Footer />
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <BuyNow />
      </SelectedProductContext.Provider>
    </div>
  );
}

export default App;
