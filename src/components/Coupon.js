import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../redux/actions";

export default function Coupon() {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Coupon"
      />

      <button onClick={() => dispatch(applyCoupon(code))}>
        Apply
      </button>
    </div>
  );
}