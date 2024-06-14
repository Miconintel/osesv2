import React from "react";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./page.module.css";
import NavIntersectionObserver from "@/components/Providers/ObserverProviders/NavIntersectionObserver";
const page = () => {
  const styles = {
    gridColumn: "cont-start / cont-end",
    fontSize: "var(--font-primary)",
    padding: "12rem 0",
  };
  return (
    <>
      <NavIntersectionObserver inStyles={styles}>
        <main className={styles.container}>
          <ProductList />
        </main>
      </NavIntersectionObserver>
    </>
  );
};

export default page;
