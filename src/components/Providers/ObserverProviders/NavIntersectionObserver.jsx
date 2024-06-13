"use client";
// with intersection obsever you check if the threshhold percentage of the target is in or out of the root i.e
//target ia inside the parent container upto to an amount or point that is at least equal or greater than the stated threshold, when it runs.
// if the % is in, intersection is true, if it is not , intersection is false. and call back is trigerred each time
// when the % mark is reached
import React, { useRef, useEffect, useState } from "react";
import { Fragment } from "react";
import styles from "./ObserverProviders.module.css";

const NavIntersectionObserver = ({ children }) => {
  const navRef = useRef(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    let myObserver;
    let myTarget;
    // const nav = document.querySelector("#nav");

    const observeEvent = () => {
      const target = navRef.current;
      myTarget = target;
      const nav = document.querySelector("#nav");
      //
      //

      const navClientHeight = nav.getBoundingClientRect().height;
      const halfHeroHeight = target.getBoundingClientRect().height / 3;
      // console.log(halfHeroHeight);
      // console.log(navClientHeight);

      //    options
      const observerOptions = {
        root: null,
        rootMargin: `-${halfHeroHeight}px`,
        threshold: 0,
        // rootMargin: "0px",
      };
      // callback
      const observerCallback = (entry, observer) => {
        myObserver = observer;
        // console.log(entry);
        //
        const currentEntry = entry[0];
        const intersecting = currentEntry.isIntersecting;
        const confirmHomePage = currentEntry.rootBounds.x > 0;
        // console.log(confirmHomePage);
        // console.log(intersecting);

        if (!intersecting && confirmHomePage) {
          // console.log("is not intersecting");
          nav.style.position = "fixed";
          nav.style.boxShadow = "1px 1px 1rem 0rem var(--color-text-2)";

          //   setFixed(true);
          //   observer.unobserve(target);
        } else {
          // here it is intersecting
          // console.log("is intersecting");
          nav.style.position = "static";
          nav.style.boxShadow = "none";
          //   setFixed(false);
          //   observer.unobserve(target);
        }
      };

      //   obsever
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      // observing target
      observer.observe(target);
    };

    observeEvent();

    return () => {
      // returning to static
      nav.style.position = "static";
      // nav.style.boxShadow = "1px 1px 1rem 0rem var(--color-text-2)";
    };
  }, []);

  return (
    <div className={styles.container} ref={navRef}>
      {children}
    </div>
  );
};

export default NavIntersectionObserver;
