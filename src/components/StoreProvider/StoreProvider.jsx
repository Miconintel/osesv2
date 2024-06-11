"use client";
import React from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";

const StoreProvider = ({ children }) => {
  const storeState = useRef();
  // const { current } = storeState;

  if (!storeState.current) {
    storeState.current = store();
  }

  return <Provider store={storeState.current}>{children}</Provider>;
};

export default StoreProvider;
