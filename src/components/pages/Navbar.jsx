import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul className="flex flex-row justify-evenly items-center bg-white-300 h-14 border-2">
          <li className="font-semibold text-xl">
          <Link to="/">Home</Link>
            </li>
          <li className="font-semibold text-xl">Product</li>
          <li className="font-semibold text-xl">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
