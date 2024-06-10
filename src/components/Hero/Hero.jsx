import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        fill
        src="/hero-1.jpg"
        alt="image of groceries on bag"
      />
    </div>
  );
};

export default Hero;
