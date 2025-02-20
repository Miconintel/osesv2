import React, { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";
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

const imgObj2 = ["/hero-1", "/hero-2", "/hero-3"];

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

  const images = imgObj.map((img, index) => {
    const currentIndex = index - tracker;

    return (
      <div
        className={`${styles.imageWrapper}`}
        key={index}
        style={{ left: `${100 * currentIndex}%` }}
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
    clearInterval(counterRef.current);
    const moveBackward = tracker > 0;
    if (moveBackward) {
      setTracker((tracker) => tracker - 1);
    } else {
      setTracker(imgObj.length - 1);
    }
  };
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
      {/* <div className={`${styles.imageWrapper}`} ref={counterRef}>
        <Image
          alt="image of groceries on bag"
          className={styles.img}
          src={`${imgObj2[tracker]}.jpg`}
          width={500}
          height={500}
        />
      </div> */}

      {images}
    </div>
  );
};

export default Carousel;
