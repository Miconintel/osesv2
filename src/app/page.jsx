import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProductList from "@/components/ProductList/ProductList";

// import { useEffect, useState } from "react";
// import { useRef } from "react";

export default function Home() {
  // const [position, setPosition] = useState(200);
  // const bodyRef = useRef(null);

  // //
  // useEffect(() => {
  //   const target = document.querySelector("#main");
  //   const target2 = bodyRef.current;
  //   // console.log(target2);

  //   const options = {
  //     root: null,
  //     rootMargin: "-2px",
  //     threshold: 0,
  //   };

  //   const callBack = (entries, observer) => {
  //     const currentEntry = entries[0];
  //     const nowIntersecting = currentEntry.isIntersecting;
  //     if (nowIntersecting) {
  //       setPosition(0);
  //       observer.unobserve(target2);
  //     }
  //   };

  //   const observer = new IntersectionObserver(callBack, options);
  //   observer.observe(target2);

  //   () => {
  //     // console.log("running before and after");
  //     observer.unobserve(target2);
  //   };
  // }, []);
  return (
    <>
      <Hero />
      <main
        // ref={bodyRef}
        className={styles.container}
        id="main"
        // style={{
        //   transform: `translate(0,${position}px)`,
        // }}
      >
        <ProductList />
      </main>
    </>
  );
}
