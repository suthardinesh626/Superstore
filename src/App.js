import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
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
        {/* <Login /> */}
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/buynow" element={<BuyNow />} />
        </Routes>
      </SelectedProductContext.Provider>
    </div>
  );
}

export default App;
