import React, { useContext } from "react";
import { CartContext } from "../../context/Context";

const Cart = () => {
  const { cartItems, clearCart, removeFromCart, getCartTotal } = useContext(CartContext);

  return (

    <div className="flex flex-col items-start m-10 p-4 ">
      <h4 className="text-3xl font-bold text-gray-400 m-3 px-10">My Bag: </h4>
      <div className="w-full flex flex-row p-4 border-4 divide-x-8">
        <div className="w-2/3 bg-slate-500 font-semibold text-xl p-3  ">
          <h4 className="m-4 underline">Items</h4>
          <div className="m-3 flex flex-wrap">

            {cartItems.length > 0 ? cartItems.map((item) => (

              <div key={item.id} className="flex flex-col items-center border-2 shadow-xl	rounded-lg	outline-1	w-64 mx-3 px-4 text-base">

              </div>
            )) : (
              <div className="w-full flex flex-row justify-center items-center">
                <p>Add products to your cart</p>
              </div>
            )}

          </div>
          <button onClick={clearCart} className="border-2  border-slate-800	rounded-lg mx-6 my-3 p-2 text-blue-900 text-sm">Clear Cart</button>


        </div>


        <div className="w-1/3 bg-yellow-300 font-semibold text-xl p-3 c ">
          <h4 className="m-4 underline">Amount</h4>
          {cartItems.map((item) => (
            <div key={item.id} className="m-3">
              <p>${item.price}  Qty. - {item.quantity}</p>

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
