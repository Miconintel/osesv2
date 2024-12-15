import React from "react";
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";

const StoreProvider = () => {
  // handle store initials if any

  //
  //
  //
  return <Provider store={store}></Provider>;
};

export default StoreProvider;
