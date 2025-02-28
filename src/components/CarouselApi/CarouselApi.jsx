// after the last item from the arrays of images moves out of the screen, the duplicate
// item should move in, so that the carousel image can return to the first positions by updating the
// the tracker state using the on transition end event listener
// as soon as the even listener is triggered, the transition is removed on all the images and tracker updated
// also causing the duplicate images to return back to their original position.
// while the duplicate images return back to its original postion, the transition of the duplicate images is removed too.
import React, { useEffect, useRef, useState } from "react";
import styles from "./CarouselApi.module.css";
import Image from "next/image";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";
import { useCallback } from "react";

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

const imgObj2 = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

const Carousel = ({ refm }) => {
  const [tracker, setTracker] = useState(0);
  const counterRef = useRef();

  const handleForward = useCallback(
    function handleForward() {
      clearInterval(counterRef.current);
      const moveForward = tracker < imgObj.length;

      // if (moveForward) {
      //   setTracker((tracker) => tracker + 1);
      // } else {
      //   setTracker(1);
      // }
      if (moveForward) {
        const elements = [...refm?.current.querySelectorAll("#used")];
        elements.forEach((el) => {
          el.style.transition = "all 0.4s ease-in";
        });
        setTracker((tracker) => tracker + 1);
      }
    },
    [refm, tracker]
  );

  useEffect(
    function () {
      counterRef.current = setInterval(() => {
        // const moveForward = tracker < imgObj.length - 1;
        // if (moveForward) {
        //   setTracker((tracker) => tracker + 1);
        // } else {
        //   setTracker(0);
        // }
        handleForward();
      }, 5000);

      return () => {
        clearInterval(counterRef.current);
      };
    },
    [tracker, handleForward]
  );

  const handleTransitionEnd = (e) => {
    if (tracker === imgObj.length) {
      // const element = e.target;
      const elements = [...refm?.current.querySelectorAll("#used")];
      elements.forEach((el) => {
        el.style.transition = "none";
      });

      setTracker(0);
    } else if (tracker === -1) {
      const elements = [...refm?.current.querySelectorAll("#used")];
      elements.forEach((el) => {
        el.style.transition = "none";
      });
      setTracker(imgObj.length - 1);
    }
  };

  const handleBackward = () => {
    //

    //
    //

    clearInterval(counterRef.current);
    const moveBackward = tracker > -1;
    if (moveBackward) {
      const elements = [...refm?.current.querySelectorAll("#used")];
      elements.forEach((el) => {
        el.style.transition = "all 0.4s ease-in";
      });
      setTracker((tracker) => tracker - 1);
    }
    // if (moveBackward) {
    //   setTracker((tracker) => tracker - 1);
    // } else {
    //   setTracker(imgObj.length - 1);
    // }
  };

  //   generator

  const images = imgObj.map((img, index) => {
    const currentIndex = index - tracker;
    // const lastIndex = tracker === imgObj.length - 1;
    // const firstIndex = tracker === 0;

    // generateTransiton

    // const theTransition = tracker === 0 ? "none" : "all 0.4s ease-in";

    const inStyle = {
      transform: `translateX(${currentIndex * 100}%)`,
      // transition: "all 0.4s ease-in",
    };

    // element
    return (
      <div
        className={`${styles.imageWrapper}`}
        key={index}
        id="used"
        index={index}
        calcindex={currentIndex}
        style={inStyle}
        onTransitionEnd={handleTransitionEnd}
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

  // TRANSFORM,  TRANSITION AND STYLE FOR THE FIRST DUPLICATE
  // calculate transform

  const theTransform = tracker === imgObj.length ? 0 : 100;

  // calculate transition

  const transitionAction =
    tracker == imgObj.length ? "all 0.4s ease-in" : "none";

  const inStyle = {
    transform: `translateX(${theTransform}%)`,
    transition: `${transitionAction}`,
  };

  // TRANSFORM TRANSITION AND STYLE FOR THE LAST DUPLICATE
  //
  const theTransformLast = tracker === -1 ? 0 : -100;

  // calculate transition

  const transitionActionLast = tracker == -1 ? "all 0.4s ease-in" : "none";

  const inStyleLast = {
    transform: `translateX(${theTransformLast}%)`,
    transition: `${transitionActionLast}`,
  };

  //
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
      {/* ORIGINAL IMAGES */}
      {images}
      {/* front duplicate */}
      <div className={`${styles.imageWrapper} `} style={inStyle}>
        <Image
          className={styles.img}
          src={imgObj[0].src}
          alt={"my alt"}
          width={500}
          height={500}
        />
      </div>
      {/* back duplicate */}
      <div className={`${styles.imageWrapper} `} style={inStyleLast}>
        <Image
          className={styles.img}
          src={imgObj[imgObj.length - 1].src}
          alt={"my alt"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Carousel;

//
//
//
//
