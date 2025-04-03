"use client";
import React from "react";
import { useEffect } from "react";
import styles from "./error.module.css";
import { MongooseError } from "mongoose";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error.stack.get(MongooseError));
    console.error(Object.keys(error.stack)[0]);
  }, [error]);
  return <div className={styles.container}>error</div>;
};

export default Error;
