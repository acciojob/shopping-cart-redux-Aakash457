import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../redux/actions";

function Coupon() {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Coupon Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={() => dispatch(applyCoupon(code))}
      >
        Apply Coupon
      </button>
    </div>
  );
}

export default Coupon;