'use client';

import React, { useRef } from 'react';
import NavIntersectionObserver from '../Providers/ObserverProviders/NavIntersectionObserver';
import CarouselApi2 from '../CarouselApi2/CarouselApi2';
import styles from './Hero.module.css';
import HeroText from './HeroText/HeroText';

//
//
//
//
//
const imgObj = [
  {
    src: '/hero-1.jpg',
    alt: 'image of groceries on bag',
    width: 500,
    height: 500,
  },
  {
    src: '/hero-1.jpg',
    alt: 'image of groceries on bag',
    width: 500,
    height: 500,
  },
];
const Hero = () => {
  const heroRef = useRef(null);
  return (
    <NavIntersectionObserver theRef={heroRef}>
      <div ref={heroRef} className={styles.heroContainer}>
        {/* <HeroText /> */}
        <CarouselApi2 imgObjs={imgObj} />
      </div>
    </NavIntersectionObserver>
  );
};

export default Hero;
