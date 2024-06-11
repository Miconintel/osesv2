import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.open = true;
    },

    onClose: (state) => {
      state.open = false;
    },
  },
});

export const { actions, reducer } = menuSlice;

export const { onClose, onOpen } = actions;

export default reducer;
