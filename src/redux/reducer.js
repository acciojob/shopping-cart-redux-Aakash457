import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  APPLY_COUPON,
} from "./actions";

const initialState = {
  cart: [],
  wishlist: [],
  discount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.cart.find(
        (p) => p.id === action.payload.id
      );

      if (item) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === action.payload.id
              ? { ...p, quantity: p.quantity + 1 }
              : p
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: 1 },
        ],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (p) => p.id !== action.payload
        ),
      };

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.payload
            ? { ...p, quantity: p.quantity + 1 }
            : p
        ),
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart
          .map((p) =>
            p.id === action.payload
              ? { ...p, quantity: p.quantity - 1 }
              : p
          )
          .filter((p) => p.quantity > 0),
      };

    case ADD_TO_WISHLIST:
      if (
        state.wishlist.find(
          (p) => p.id === action.payload.id
        )
      ) {
        return state;
      }

      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (p) => p.id !== action.payload
        ),
      };

    case APPLY_COUPON:
      let discount = 0;

      if (action.payload === "SAVE10") {
        discount = 10;
      } else if (action.payload === "SAVE20") {
        discount = 20;
      }

      return {
        ...state,
        discount,
      };

    default:
      return state;
  }
};

export default reducer;