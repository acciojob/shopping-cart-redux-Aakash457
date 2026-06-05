import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/actions";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((item) => (
        <div className="custom-card card" key={item.id}>
          <div className="card-body">
            <h5>{item.name}</h5>
            <p>₹{item.price}</p>

            <button
              className="btn"
              onClick={() => dispatch(decreaseQty(item.id))}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              className="btn"
              onClick={() => dispatch(increaseQty(item.id))}
            >
              +
            </button>

            <button
              className="btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}