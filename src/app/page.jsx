import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProductList from "@/components/ProductList/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.container} id="main">
        <ProductList />
      </main>
    </>
  );
}
