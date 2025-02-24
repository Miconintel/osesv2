import React, { useState, useEffect, useRef } from "react";
import styles from "./CarouselAi.module.css";
import Image from "next/image";

// const images = [
//   "https://via.placeholder.com/800x400?text=Slide+1",
//   "https://via.placeholder.com/800x400?text=Slide+2",
//   "https://via.placeholder.com/800x400?text=Slide+3",
// ];
const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

const CarouselAi = ({ refm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      setCurrentIndex(0);
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(0%)`;
    } else if (currentIndex === -1) {
      setCurrentIndex(images.length - 1);
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(-${
        (images.length - 1) * 100
      }%)`;
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className={styles.carousel} ref={refm}>
      <button className={styles.button} onClick={handlePrev}>
        Previous
      </button>
      <div
        className={styles.imageContainer}
        ref={carouselRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              height={500}
              width={500}
              src={image}
              alt={`Slide ${index}`}
              className={styles.img}
            />
          </div>
        ))}
        {/* Duplicate first and last images for infinite scroll effect */}
        <div className={styles.imageWrapper}>
          <Image
            height={500}
            width={500}
            src={images[0]}
            alt={`Slide ${images.length}`}
            className={styles.img}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            height={500}
            width={500}
            src={images[images.length - 1]}
            alt={`Slide -1`}
            className={styles.img}
          />
        </div>
      </div>
      <button className={styles.button} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CarouselAi;
