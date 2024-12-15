import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./stateSlices/menuSlice";
import styleReducer from "./stateSlices/styleSlice";
import cartReducer from "./stateSlices/cartSlice";
export const store = function () {
  return configureStore({
    reducer: {
      menuReducer: menuReducer,
      styleReducer: styleReducer,
      cartReducer,
    },
  });
};
