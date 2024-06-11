import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./stateSlices/menuSlice";
// export const store = configureStore({
//   reducer: {
//     counter: menuReducer,
//   },
// });

export const store = function () {
  return configureStore({
    reducer: {
      menuReducer: menuReducer,
    },
  });
};
