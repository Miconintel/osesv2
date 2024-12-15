import React from "react";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./page.module.css";

const page = () => {


  return (
    <>
      <main className={styles.container}>
        <ProductList />
      </main>
    </>
  );
};

export default page;
