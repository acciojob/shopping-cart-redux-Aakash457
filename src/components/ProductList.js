import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../redux/actions";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((p) => (
        <div className="custom-card card" key={p.id}>
          <div className="card-body">
            <h5>{p.name}</h5>
            <p>₹{p.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(p))}
            >
              Add To Cart
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => dispatch(addToWishlist(p))}
            >
              Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}