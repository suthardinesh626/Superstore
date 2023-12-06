import Cart from "./components/pages/Cart";
import Footer from "./components/pages/Footer";
import Login from "./components/pages/Login";
import Navbar from "./components/pages/Navbar";
import Product from "./components/pages/Product";
import Signup from "./components/pages/Signup";
import "./input.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      {/* <Login/>
     <Signup/> */}
      <Navbar />
      <Product />
      <hr></hr>
      <Footer />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
