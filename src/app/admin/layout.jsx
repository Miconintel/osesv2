import React from "react";
import MiniNav from "@/components/MiniNav/MiniNav";

import classes from "./adminGlobal.module.css";

const layout = ({ children }) => {
  // return (
  //   <main className={classes.container}>
  //     {/* <MiniNav /> */}
  //     {children}
  //   </main>
  // );
  return (
    <>
      <MiniNav />
      {children}
    </>
  );
};

export default layout;
