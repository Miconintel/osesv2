'use client';

import React from 'react';
import CarouselApi2 from '../CarouselApi2/CarouselApi2';
import styles from './VectorImages.module.css';

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

const VectorImages = () => {
  return (
    <div className={styles.container}>
      <CarouselApi2
        imgObjs={imgObj}
        fixSize="smallWidth"
        chevron={false}
        checkPad={true}
      />
    </div>
  );
};

export default VectorImages;
