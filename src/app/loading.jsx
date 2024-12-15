import React from "react";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.container}>
      <p className={styles.loader}></p>
    </div>
  );
};

export default loading;
