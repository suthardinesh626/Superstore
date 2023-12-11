import React, { useContext } from "react";
import { CartContext } from "../../context/Context";

const Cart = () => {
  const { cartItems, clearCart, removeFromCart, getCartTotal } = useContext(CartContext);

  return (

    <div className="flex flex-col items-center p-4 w-full">
      <h4 className=" text-3xl  font-bold text-black-200 m-3 px-10 underline ">My Bag </h4>
      <div className="flex flex-row justify-center items-center w-3/4 bg-white p-4 border-4 divide-x-8">
        <div className="w-2/3 bg-white font-semibold text-xl p-3  ">
          <h4 className="m-4 underline">Items</h4>
          <div className="m-3 flex flex-wrap">
            {cartItems.length > 0 ? cartItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center border-2 shadow-xl	rounded-lg	outline-1	w-64 mx-3 px-4 text-base">
                <svg onClick={() => removeFromCart(item)} className="h-6 m-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.52 34.52" id="cross"><g data-name="Layer 2" fill="#d85b53" class="color000000 svgShape"><g data-name="Layer 1" fill="#d85b53" class="color000000 svgShape"><path d="M21.51,23.44a1.46,1.46,0,0,1-1-.43L17.26,19.8,14.05,23A1.48,1.48,0,0,1,12,23l-.45-.45a1.47,1.47,0,0,1,0-2.09l3.21-3.21-3.21-3.21a1.47,1.47,0,0,1,0-2.09l.45-.45a1.48,1.48,0,0,1,2.09,0l3.21,3.21,3.21-3.21a1.48,1.48,0,0,1,2.09,0L23,12a1.47,1.47,0,0,1,0,2.09l-3.2,3.21L23,20.47a1.47,1.47,0,0,1,0,2.09l-.44.45A1.47,1.47,0,0,1,21.51,23.44Z" fill="#d85b53" class="color000000 svgShape"></path><path d="M17.26,34.52A17.26,17.26,0,1,1,34.52,17.26,17.28,17.28,0,0,1,17.26,34.52Zm0-31.07A13.81,13.81,0,1,0,31.07,17.26,13.83,13.83,0,0,0,17.26,3.45Z" fill="#d85b53" class="color000000 svgShape"></path></g></g></svg>
                <img className="h-48" src={item.thumbnail} alt="" />
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
            )) : (
              <div className="w-full flex flex-row justify-center items-center">
                <p>Add products to your cart </p>
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="cart"
                >
                  <g fill="#134563">
                    <path d="M48.5 45.7H18.2c-.5 0-.9-.2-1.1-.6-.3-.4-.3-.9-.1-1.3l2.6-6.6L17 12.6H8.6V9.8h9.6c.7 0 1.3.5 1.4 1.2l2.8 26.1c0 .2 0 .4-.1.7l-2 5h28.2v2.9"></path>
                    <path d="m21.3 38.8-.6-2.7 31.9-6.6V18.2h-33v-2.8H54c.8 0 1.4.6 1.4 1.4v13.8c0 .7-.5 1.2-1.1 1.3l-33 6.9M49.9 54c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8zm-33 8.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"></path>
                  </g>
                </svg>
              </div>
            )}

          </div>
          <button onClick={clearCart} className="border-2  border-slate-800	rounded-lg mx-6 my-3 p-2 text-blue-900 text-sm">Clear Cart</button>


        </div>


        <div className="w-1/3 bg-white font-semibold text-xl p-3 c ">
          <h4 className="m-4 underline">Amount</h4>
          {cartItems.map((item) => (
            <div key={item.id} className="m-3">
              <p>${item.price} | Qty. - {item.quantity}</p>

            </div>
          ))}
          <hr />
          <div className="m-3">
            Total: $ {getCartTotal()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
