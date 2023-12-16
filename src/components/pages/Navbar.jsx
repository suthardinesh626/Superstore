import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";
import { useContext } from "react";
import { useState } from 'react';

const Navbar = () => {
  const { cartItems } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col border-2">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-sans font-extrabold underline m-1 mx-8" ><Link to="/">SuperStore</Link></h1>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          <svg className="w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
            <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g>
          </svg>
        </button>
      </div>

      <nav className={`w-full ${isOpen ? 'block' : 'hidden'} sm:block mt-4`}>
        <ul className="flex flex-col sm:flex-row items-center justify-center bg-white-300 h-14 ">
          <li className="font-semibold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl">
            <Link to="/">Product</Link>
          </li>
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
