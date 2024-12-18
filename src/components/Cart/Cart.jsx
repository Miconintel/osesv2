"use client";

import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "@/lib/redux/stateSlices/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const totalCartQuantiy = useSelector(getTotalQuantity);
  return (
    <>
      <IoCartOutline className={styles.cart} />
      <span className={styles.quantity}>{totalCartQuantiy}</span>
    </>
  );
};

export default Cart;
