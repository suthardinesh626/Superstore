import BuyNow from "./components/pages/BuyNow";
import Cart from "./components/pages/Cart";
import Navbar from "./components/pages/Navbar";
import "./input.css";
import { Route, Routes } from "react-router-dom";
import SelectedProductContext from "./context/SelectedProductContext";
import { useState } from "react";
import Home from "./components/pages/Home";

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
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/buynow" element={<BuyNow/>} />
        </Routes>
      </SelectedProductContext.Provider>
    </div>
  );
}

export default App;
