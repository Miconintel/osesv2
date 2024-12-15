"use client";
import React from "react";
import styles from "./Responsive.module.css";
import Menu from "./Menu/Menu";
import { useSelector } from "react-redux";
import ResponsiveLinks from "./ResponsiveLinks/ResponsiveLinks";

const Responsive = ({ session }) => {
  const state = useSelector((state) => state.menuReducer);

  const { open } = state;

  return (
    <>
      <div className={`${styles.drop} ${!open ? styles.effect : ""}`}>
        <ResponsiveLinks session={session}></ResponsiveLinks>
      </div>
      <Menu></Menu>
    </>
  );
};

export default Responsive;
