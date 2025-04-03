import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";
import styles from "./Chevron.module.css";

const Chevron = () => {
  return (
    <div className={styles.chevronContainer}>
      <p onClick={handleBackward}>
        <HiOutlineChevronDoubleLeft />
      </p>
      <p onClick={handleForward}>
        <HiOutlineChevronDoubleRight />
      </p>
    </div>
  );
};

export default Chevron;
