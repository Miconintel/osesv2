"use client";
import React from "react";
import styles from "./Drop.module.css";
import Menu from "./Menu/Menu";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ResponsiveLinks from "./ResponsiveLinks/ResponsiveLinks";

const Drop = ({ session }) => {
  // const [open, setOpen] = useState(false);

  const state = useSelector((state) => state.menuReducer);
  console.log(state);
  const { open } = state;
  // const handleOnOpen = () => {
  //   setOpen(true);
  // };
  // const handleOnClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      {/* {open && (
        <div className={`${styles.drop} ${!open && styles.effect}`}>
          <ResponsiveLinks session={session}></ResponsiveLinks>
        </div>
      )} */}

      {/* <div className={`${styles.drop} ${!open && styles.effect}`}>
        <ResponsiveLinks session={session}></ResponsiveLinks>
      </div>

      <Menu open={open} onOpen={handleOnOpen} onClose={handleOnClose}></Menu> */}
      <div className={`${styles.drop} ${!open && styles.effect}`}>
        <ResponsiveLinks session={session}></ResponsiveLinks>
      </div>

      <Menu></Menu>
    </>
  );
};

export default Drop;
