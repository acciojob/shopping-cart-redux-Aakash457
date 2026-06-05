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
    <div>
      <div>
        {/* ✅ Cypress expects h3 (NOT h4) */}
        <h3 className="text-center">
          Shopping Cart
        </h3>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="text-center w-100">
          <div className="d-flex justify-content-center gap-2">
            <button onClick={() => setTab("products")}>
              Products
            </button>
            <button onClick={() => setTab("cart")}>
              Cart
            </button>
            <button onClick={() => setTab("wishlist")}>
              Wishlist
            </button>
          </div>
        </div>
      </nav>

      {/* Pages */}
      <div>
        {tab === "products" && <ProductList />}
        {tab === "cart" && <Cart />}
        {tab === "wishlist" && <Wishlist />}
      </div>

      <Coupon />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}