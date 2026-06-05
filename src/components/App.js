import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";

function AppContent() {
  const [tab, setTab] = useState("products");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="text-center w-100">
          <h4 className="text-center text-white">
            Shopping Cart
          </h4>

          <div>
            <button onClick={() => setTab("products")}>Products</button>
            <button onClick={() => setTab("cart")}>Cart</button>
            <button onClick={() => setTab("wishlist")}>Wishlist</button>
          </div>
        </div>
      </nav>

      {tab === "products" && <ProductList />}
      {tab === "cart" && <Cart />}
      {tab === "wishlist" && <Wishlist />}
      <Coupon />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}