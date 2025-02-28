"use client";
import React from "react";
import { useEffect } from "react";
import styles from "./error.module.css";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return <div className={styles.container}>error</div>;
};

export default Error;
