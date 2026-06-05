import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/actions";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const discount = useSelector(
    (state) => state.discount
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total =
    subtotal - (subtotal * discount) / 100;

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span> ₹{item.price}</span>

          <button
            onClick={() =>
              dispatch(decreaseQty(item.id))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(increaseQty(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Subtotal: ₹{subtotal}</h3>
      <h3>Discount: {discount}%</h3>
      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;