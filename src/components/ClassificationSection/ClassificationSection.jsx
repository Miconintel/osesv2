import React from "react";
import styles from "./ClassificationSection.module.css";

const ClassificationSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.left}>the left side</div>
        <div className={styles.right}>the right side</div>
      </div>
    </div>
  );
};

export default ClassificationSection;
