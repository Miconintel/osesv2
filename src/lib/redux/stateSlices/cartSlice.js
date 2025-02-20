import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // array of objects.
  //   the object is going to be an object containing the product and quantity added.
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        (cart) => cart.product.id !== action.payload.id
      );
    },
    increaseQuantity(state, action) {
      const { payload } = action;
      const cartItem = state.cart.find(
        (cart) => payload.id === cart.product.id
      );
      cartItem.quantity++;
    },
    decreaseQuantity(state, action) {
      const { payload } = action;
      const cartItem = state.cart.find(
        (cart) => payload.id === cart.product.id
      );
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        state.cart = state.cart.filter(
          (cart) => cart.product.id !== payload.id
        );
      }
    },
  },
});

export const getTotalQuantity = (state) => {
  const cart = state.cartReducer.cart;

  const getTotal = cart.reduce((acc, cart) => {
    return acc + cart.quantity;
  }, 0);

  return getTotal;
};

export const getCartQuantity = function (product) {
  return function (state) {
    const cartItem = state.cartReducer.cart.find((cart) => {
      return cart.product.id === product.id;
    });

    return cartItem?.quantity || 0;
  };
};

const { actions, reducer } = cartSlice;

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  actions;

export default reducer;
