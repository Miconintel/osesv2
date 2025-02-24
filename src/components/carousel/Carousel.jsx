import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";

const imgObj = [
  {
    src: "/hero-1.jpg",
    alt: "image of groceries on bag",
    width: 500,
    height: 500,
  },
  {
    src: "/hero-2.jpg",
    alt: "image of groceries on bag",
    width: 500,
    height: 500,
  },
  {
    src: "/hero-3.jpg",
    alt: "image of groceries on bag",
    width: 500,
    height: 500,
  },
];

const Carousel = ({ refm }) => {
  const [tracker, setTracker] = useState(0);
  const counterRef = useRef();

  useEffect(
    function () {
      counterRef.current = setInterval(() => {
        const moveForward = tracker < imgObj.length - 1;

        if (moveForward) {
          setTracker((tracker) => tracker + 1);
        } else {
          setTracker(0);
        }
      }, 10000);

      return () => {
        clearInterval(counterRef.current);
      };
    },
    [tracker]
  );

  const handleForward = () => {
    clearInterval(counterRef.current);
    const moveForward = tracker < imgObj.length - 1;

    if (moveForward) {
      setTracker((tracker) => tracker + 1);
    } else {
      setTracker(0);
    }
  };

  const handleBackward = () => {
    //

    clearInterval(counterRef.current);
    const moveBackward = tracker > 0;
    if (moveBackward) {
      setTracker((tracker) => tracker - 1);
    } else {
      setTracker(imgObj.length - 1);
    }
  };

  //   generator

  const images = imgObj.map((img, index) => {
    const currentIndex = index - tracker;

    // styles
    const inStyle = {
      transform: `translateX(${currentIndex * 100}%)`,
    };

    // element
    return (
      <div
        className={`${styles.imageWrapper}`}
        key={index}
        style={inStyle}
        id="used"
      >
        <Image
          className={styles.img}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
        />
      </div>
    );
  });

  return (
    <div className={styles.container} ref={refm}>
      <div className={styles.chevronContainer}>
        <p onClick={handleBackward}>
          <HiOutlineChevronDoubleLeft />
        </p>
        <p onClick={handleForward}>
          <HiOutlineChevronDoubleRight />
        </p>
      </div>

      {images}
    </div>
  );
};

export default Carousel;

//
//
//
//
