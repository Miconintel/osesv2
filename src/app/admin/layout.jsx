import React from "react";
import MiniNav from "@/components/MiniNav/MiniNav";

const layout = ({ children }) => {
  return (
    <>
      <MiniNav />
      {children}
    </>
  );
};

export default layout;
