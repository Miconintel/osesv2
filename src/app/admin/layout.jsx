import React from "react";
import MiniNav from "@/components/MiniNav/MiniNav";

const layout = ({ children, products }) => {
  return (
    <>
      {/* <MiniNav /> */}
      {children}
      {products}
    </>
  );
};

export default layout;
