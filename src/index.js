import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/Context";
import { BrowserRouter } from "react-router-dom";
import { APIProvider } from "../src/context/APIContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <APIProvider>
          <App />
        </APIProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
