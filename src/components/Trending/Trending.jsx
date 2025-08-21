'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Trending.module.css';
import Image from 'next/image';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi2';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi2';
import { useCallback } from 'react';

const imgObjs = [
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

// const imgObj2 = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

const Trending = () => {
  const [tracker, setTracker] = useState(0);
  const counterRef = useRef();
  const carouselRef = useRef();

  const handleForward = useCallback(
    function handleForward() {
      clearInterval(counterRef.current);
      const moveForward = tracker < imgObjs.length / 2;

      if (moveForward) {
        const elements = [...carouselRef?.current.querySelectorAll('#used')];
        elements.forEach((el) => {
          el.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        setTracker((tracker) => tracker + 1);
      } else {
        return;
      }
    },
    [tracker]
  );

  // useEffect(
  //   function () {
  //     counterRef.current = setInterval(() => {
  //       handleForward();
  //     }, 5000);

  //     return () => {
  //       clearInterval(counterRef.current);
  //     };
  //   },
  //   [tracker, handleForward]
  // );

  const handleTransitionEnd = (e) => {
    if (tracker === imgObjs.length / 2) {
      const elements = [...carouselRef?.current.querySelectorAll('#used')];
      elements.forEach((el) => {
        el.style.transition = 'none';
      });
      setTracker(0);
    } else if (tracker === -1) {
      const elements = [...carouselRef?.current.querySelectorAll('#used')];
      elements.forEach((el) => {
        el.style.transition = 'none';
      });
      setTracker(imgObjs.length / 2 - 1);
    }
  };

  const handleBackward = () => {
    //
    clearInterval(counterRef.current);
    const moveBackward = tracker > -1;
    if (moveBackward) {
      const elements = [...carouselRef?.current.querySelectorAll('#used')];
      elements.forEach((el) => {
        el.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      });
      setTracker((tracker) => tracker - 1);
    }
  };

  //   generator

  const images = imgObjs.map((img, index) => {
    const currentIndex = index - tracker;

    const inStyle = {
      transform: `translateX(${currentIndex * 100}%)`,
    };

    // element
    return (
      <div
        className={styles.detailContainer}
        key={index}
        style={inStyle}
        id="used"
        index={index}
        calcindex={currentIndex}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className={`${styles.imageWrapper} }`}>
          <Image className={styles.img} src={img.src} alt={img.alt} fill />
        </div>
        <div>word of the wise</div>
      </div>
    );
  });

  // TRANSFORM TRANSITION AND STYLE FOR THE LAST DUPLICATE
  //
  const theTransformLast = tracker === -1 ? 0 : -100;

  // calculate transition

  const transitionActionLast =
    tracker == -1 ? 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';

  const inStyleLast = {
    transform: `translateX(${theTransformLast}%)`,
    transition: `${transitionActionLast}`,
  };

  //
  return (
    <div className={styles.parentContainer}>
      <h2>Trending products</h2>
      <div className={`${styles.container}`} ref={carouselRef}>
        <div className={styles.chevronContainer}>
          <p onClick={handleBackward}>
            <HiOutlineChevronDoubleLeft />
          </p>
          <p onClick={handleForward}>
            <HiOutlineChevronDoubleRight />
          </p>
        </div>

        {images}

        {/* back duplicate */}
        <div className={styles.detailContainer} style={inStyleLast}>
          <div className={`${styles.imageWrapper} `}>
            <Image
              className={styles.img}
              src={imgObjs[imgObjs.length - 1].src}
              alt={'my alt'}
              fill
            />
          </div>
          <div>word of the wise</div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

//
//
//
//
