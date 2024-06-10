"use client";
import React, { useState } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Menu.module.css";

const Menu = ({ open, onOpen, onClose }) => {
  return (
    <div className={styles.iconContainer}>
      {!open && <Icon icon="menu" onClick={onOpen}></Icon>}
      {open && <Icon icon="x" onClick={onClose}></Icon>}
    </div>
  );
};

export default Menu;
