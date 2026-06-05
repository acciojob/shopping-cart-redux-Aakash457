import React from "react";
import { useDispatch } from "react-redux";

import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";

import { addToCart, addToWishlist } from "../redux/actions";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart Application</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>

          <button onClick={() => dispatch(addToWishlist(product))}>
            Add to Wishlist
          </button>
        </div>
      ))}

      <Coupon />
      <Cart />
      <Wishlist />
    </div>
  );
}

export default App;
