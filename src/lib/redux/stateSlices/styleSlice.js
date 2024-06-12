import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fixed: false,
};

export const menuSlice = createSlice({
  name: "styleSlice",
  initialState,
  reducers: {
    onAddFixed: (state) => {
      state.fixed = true;
    },

    onRemoveFixed: (state) => {
      state.fixed = false;
    },
  },
});

export const { actions, reducer } = menuSlice;

export const { onRemoveFixed, onAddFixed } = actions;

export default reducer;
