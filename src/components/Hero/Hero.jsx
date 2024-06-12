import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import NavIntersectionObserver from "../Providers/ObserverProviders/NavIntersectionObserver";
const Hero = () => {
  return (
    <NavIntersectionObserver>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill
          src="/hero-1.jpg"
          alt="image of groceries on bag"
        />
      </div>
    </NavIntersectionObserver>
  );
};

export default Hero;
