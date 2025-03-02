"use client";

import React, { useRef } from "react";
import NavIntersectionObserver from "../Providers/ObserverProviders/NavIntersectionObserver";
// import Carousel from "../Carousel/Carousel";
// import Image from "next/image";
// import styles from "./Hero.module.css";
// import CarouselApi from "../CarouselApi/CarouselApi";
import CarouselApi2 from "../CarouselApi2/CarouselApi2";

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

      {/* <Carousel refm={heroRef} /> */}
      {/* <CarouselApi refm={heroRef} /> */}
      <CarouselApi2 refm={heroRef} />
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
