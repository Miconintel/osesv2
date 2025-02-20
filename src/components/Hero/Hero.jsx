"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import NavIntersectionObserver from "../Providers/ObserverProviders/NavIntersectionObserver";
import Carousel from "../carousel/Carousel";

//
//
//
//
//
const Hero = () => {
  const heroRef = useRef(null);
  return (
    <NavIntersectionObserver theRef={heroRef}>
      {/* <div className={styles.imgContainer} ref={heroRef}>
        <Image
          className={styles.img}
          fill
          src="/hero-1.jpg"
          alt="image of groceries on bag"
        />
      </div> */}
      <Carousel refm={heroRef} />
    </NavIntersectionObserver>
  );

  // return (
  //   <div className={styles.imgContainer} ref={heroRef}>
  //     <Image
  //       className={styles.img}
  //       fill
  //       src="/hero-1.jpg"
  //       alt="image of groceries on bag"
  //     />
  //   </div>
  // );
};

export default Hero;
