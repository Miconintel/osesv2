"use client";
import React, { useState } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Menu.module.css";

import { useDispatch, useSelector } from "react-redux";
import { onOpen, onClose } from "@/lib/redux/stateSlices/menuSlice";

const Menu = () => {
  const state = useSelector((state) => state.menuReducer);
  const { open } = state;

  //
  const dispatch = useDispatch();

  // const closeHandler = dispatch(onClose());

  // JSX
  return (
    <div className={styles.iconContainer}>
      {!open && <Icon icon="menu" onClick={() => dispatch(onOpen())}></Icon>}
      {open && <Icon icon="x" onClick={() => dispatch(onClose())}></Icon>}
    </div>
  );
};

export default Menu;
