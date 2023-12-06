import React, { useContext } from "react";
import { CartContext } from "../../context/Context";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex flex-col items-start m-10 p-4 ">
      <h4 className="text-3xl font-bold text-gray-400 m-3 px-10">My Bag: </h4>
      <div className="w-full flex flex-row p-4 border-4 divide-x-8">
        <div className="w-2/3 bg-slate-500 font-semibold text-xl p-3  ">
          <h4 className="m-4 underline">Items</h4>
          <div className="m-3 ">
            {cartItems.map((item) => (
              <div key={item.id} className="m-3">
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 bg-yellow-300 font-semibold text-xl p-3 c ">
          <h4 className="m-4 underline">Amount</h4>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
