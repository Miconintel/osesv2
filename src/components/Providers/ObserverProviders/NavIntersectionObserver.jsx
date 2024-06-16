"use client";
// with intersection obsever you check if the threshhold percentage of the target is in or out of the root i.e
//target ia inside the parent container upto to an amount or point that is at least equal or greater than the stated threshold, when it runs.
// if the % is in, intersection is true, if it is not , intersection is false. and call back is trigerred each time
// when the % mark is reached
import React, { useRef, useEffect, useState } from "react";
// import { Fragment } from "react";
import styles from "./ObserverProviders.module.css";
import { useStyleSlice } from "@/lib/hooks/useStyleSlice";

const NavIntersectionObserver = ({
  children,
  inStyles,
  threshold,
  rootMargin,
  theRef,
}) => {
  const { actions, dispatch } = useStyleSlice();
  const { onAddFixed, onRemoveFixed } = actions;
  // console.log(state);
  // const navRef = useRef(null); stopped using

  useEffect(() => {
    let myObserver;
    let myTarget;

    const observeEvent = () => {
      console.log(theRef?.current);
      const target = theRef?.current;
      const nav = document.querySelector("#nav");
      myTarget = target;

      //
      //

      const navClientHeight = nav?.getBoundingClientRect().height;
      const halfHeroHeight = target?.getBoundingClientRect().height / 3;
      const myMargin = rootMargin || -halfHeroHeight;

      //    options
      const observerOptions = {
        root: null,
        rootMargin: `${myMargin}px`,
        threshold: threshold || 0,
        // rootMargin: "0px",
      };
      // callback
      const observerCallback = (entry, observer) => {
        console.log(myMargin);
        myObserver = observer;
        const currentEntry = entry[0];
        const intersecting = currentEntry?.isIntersecting;
        // no longer using confirm home page
        const confirmHomePage = currentEntry?.rootBounds?.x > 0;

        if (!intersecting && confirmHomePage) {
          // intersecting is false
          dispatch(onAddFixed());
          console.log("not intersect");
          // nav.style.position = "fixed";
          // nav.style.boxShadow = "1px 1px 1rem 0rem var(--color-text-2)";
        } else {
          // intersecting is true
          dispatch(onRemoveFixed());
          console.log("intersect");
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
      dispatch(onRemoveFixed());
      myObserver?.unobserve(myTarget);
    };
  }, [dispatch, onAddFixed, onRemoveFixed, rootMargin, threshold, theRef]);

  // if (!theRef) {
  //   return (
  //     <div className={`${styles.container}`} style={inStyles} ref={navRef}>
  //       {children}
  //     </div>
  //   );
  // }

  return <>{children}</>;
};

export default NavIntersectionObserver;
