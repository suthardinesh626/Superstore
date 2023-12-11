import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";
import { useContext } from "react";

const Navbar = () => {
  const { cartItems } = useContext(CartContext)



  return (
    <div className="">
      <nav>
        <ul className="flex flex-row justify-evenly items-center bg-white-300 h-14 border-2">
          <li><h1 className="text-4xl font-sans font-extrabold underline" ><Link to="/">SuperStore</Link></h1></li>
          <li className="font-semibold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl">Product</li>
          <li className="font-semibold text-xl w-24 ">
            <Link to="/cart">Cart {cartItems.length > 0 && `[${cartItems.length}]`}</Link>
          </li>
          <li className="font-semibold text-base text-white bg-gray-500 border-2 py-1 px-2 rounded-lg"><Link to="/login">Login</Link></li>
          <li className="font-semibold text-base text-white bg-gray-500 border-2 py-1 px-2 rounded-lg"><Link to="/signup ">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
