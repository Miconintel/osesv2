import React from "react";
import styles from "./loading.module.css";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
const loading = () => {
  return (
    <div className={styles.container}>
      <LoadingSpinner />
    </div>
  );
};

export default loading;
