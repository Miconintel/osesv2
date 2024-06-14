"use client";
// with intersection obsever you check if the threshhold percentage of the target is in or out of the root i.e
//target ia inside the parent container upto to an amount or point that is at least equal or greater than the stated threshold, when it runs.
// if the % is in, intersection is true, if it is not , intersection is false. and call back is trigerred each time
// when the % mark is reached
import React, { useRef, useEffect, useState } from "react";
// import { Fragment } from "react";
import styles from "./ObserverProviders.module.css";
import { useStyleSlice } from "@/lib/hooks/useStyleSlice";

const NavIntersectionObserver = ({ children, inStyles }) => {
  const { actions, dispatch } = useStyleSlice();
  const { onAddFixed, onRemoveFixed } = actions;
  // console.log(state);

  const navRef = useRef(null);

  useEffect(() => {
    let myObserver;
    let myTarget;

    const observeEvent = () => {
      const target = navRef.current;
      const nav = document.querySelector("#nav");
      myTarget = target;

      //
      //

      const navClientHeight = nav?.getBoundingClientRect().height;
      const halfHeroHeight = target.getBoundingClientRect().height / 3;

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
        const currentEntry = entry[0];
        const intersecting = currentEntry?.isIntersecting;
        const confirmHomePage = currentEntry?.rootBounds?.x > 0;

        if (!intersecting && confirmHomePage) {
          dispatch(onAddFixed());
          // nav.style.position = "fixed";
          // nav.style.boxShadow = "1px 1px 1rem 0rem var(--color-text-2)";
        } else {
          // here it is intersecting
          dispatch(onRemoveFixed());
          // nav.style.position = "static";
          // nav.style.boxShadow = "none";
        }

        // you can make this a seperate if statement
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
      console.log("it");
      myObserver?.unobserve(myTarget);
    };
  }, [dispatch, onAddFixed, onRemoveFixed]);

  return (
    <div className={`${styles.container}`} style={inStyles} ref={navRef}>
      {children}
    </div>
  );
};

export default NavIntersectionObserver;
