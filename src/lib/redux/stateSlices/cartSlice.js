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
      // console.log(action.payload);
      // console.log("clicked");
      state.cart.push(action.payload);
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
      // console.log(cartItem.quantity);
    },
  },
});

export const getTotalQuantity = (state) => {
  const cart = state.cartReducer.cart;
  // console.log(cart);
  const getTotal = cart.reduce((acc, cart) => {
    return acc + cart.quantity;
  }, 0);

  return getTotal;
};

export const getCartQuantity = function (product) {
  return function (state) {
    // console.log(state.cartReducer.cart);
    const cartItem = state.cartReducer.cart.find((cart) => {
      return cart.product.id === product.id;
    });
    // console.log(cartItem);
    return cartItem?.quantity || 0;
  };
};

const { actions, reducer } = cartSlice;

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  actions;

export default reducer;
