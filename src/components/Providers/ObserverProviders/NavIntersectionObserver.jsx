"use client";

import React, { useRef, useEffect, useState } from "react";
import { Fragment } from "react";
import styles from "./ObserverProviders.module.css";

const NavIntersectionObserver = ({ children }) => {
  const navRef = useRef(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const observeEvent = () => {
      const target = navRef.current;
      const nav = document.querySelector("#nav");
      const navClientHeight = nav.getBoundingClientRect().height;
      const halfHeroHeight = target.getBoundingClientRect().height / 3;
      console.log(halfHeroHeight);
      console.log(navClientHeight);

      //    options
      const observerOptions = {
        root: null,
        // rootMargin: "0px",
        rootMargin: `-${halfHeroHeight}px`,
        threshold: 0,
      };
      // callback
      const observerCallback = (entry, observer) => {
        const currentEntry = entry[0];
        const intersecting = currentEntry.isIntersecting;
        // console.log(currentEntry);
        // console.log(intersecting);
        // console.log(target.style);
        if (!intersecting) {
          nav.style.position = "fixed";
          nav.style.boxShadow = "1px 1px 1rem 0rem var(--color-text-2)";

          //   setFixed(true);
          //   observer.unobserve(target);
        } else {
          // here it is intersecting
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
  }, []);

  return (
    <div className={styles.container} ref={navRef}>
      {children}
    </div>
  );
};

export default NavIntersectionObserver;
