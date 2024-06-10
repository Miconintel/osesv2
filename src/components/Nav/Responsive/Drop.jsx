"use client";
import React from "react";
import styles from "./Drop.module.css";
import Menu from "./Menu/Menu";
import { useState } from "react";
import { auth } from "@/lib/auth/auth";

import ResponsiveLinks from "./ResponsiveLinks/ResponsiveLinks";

const Drop = ({ session }) => {
  const [open, setOpen] = useState(false);

  const handleOnOpen = () => {
    setOpen(true);
  };
  const handleOnClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* {open && (
        <div className={`${styles.drop} ${!open && styles.effect}`}>
          <ResponsiveLinks session={session}></ResponsiveLinks>
        </div>
      )} */}

      <div className={`${styles.drop} ${!open && styles.effect}`}>
        <ResponsiveLinks session={session}></ResponsiveLinks>
      </div>

      <Menu open={open} onOpen={handleOnOpen} onClose={handleOnClose}></Menu>
    </>
  );
};

export default Drop;
