import React from "react";
import MiniNav from "@/components/MiniNav/MiniNav";

import classes from "./adminGlobal.module.css";

const layout = ({ children }) => {
  return (
    <>
      <MiniNav />
      {children}
    </>
  );
};

export default layout;
