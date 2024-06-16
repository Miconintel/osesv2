import React from "react";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./page.module.css";

const page = () => {
  // const stylesin = {
  //   gridColumn: "cont-start / cont-end",
  //   fontSize: "var(--font-primary)",
  //   padding: "12rem 0",
  // };

  return (
    <>
      <main className={styles.container}>
        <ProductList />
      </main>
    </>
  );
};

export default page;
