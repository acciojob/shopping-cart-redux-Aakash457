import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/actions";

function Wishlist() {
  const wishlist = useSelector(
    (state) => state.wishlist
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>

          <button
            onClick={() =>
              dispatch(removeFromWishlist(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;