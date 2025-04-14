'use client';
// with intersection obsever you check if the threshhold percentage of the target is in or out of the root i.e
//target ia inside the parent container upto to an amount or point that is at least equal or greater than the stated threshold, when it runs.
// if the % is in, intersection is true, if it is not , intersection is false. and call back is trigerred each time
// when the % mark is reached
import React, { useEffect } from 'react';
import { useStyleSlice } from '@/lib/hooks/useStyleSlice';

const NavIntersectionObserver = ({
  children,
  inStyles,
  threshold,
  rootMargin,
  theRef,
}) => {
  const { actions, dispatch } = useStyleSlice();
  const { onAddFixed, onRemoveFixed } = actions;

  useEffect(() => {
    let myObserver;
    let myTarget;

    const observeEvent = () => {
      const target = theRef?.current;
      const nav = document.querySelector('#nav');
      myTarget = target;
      //

      const halfHeroHeight = target?.getBoundingClientRect().height / 3;
      const myMargin = rootMargin || -halfHeroHeight;

      //    options
      const observerOptions = {
        root: null,
        rootMargin: `${myMargin}px`,
        threshold: threshold || 0,
      };
      // callback
      const observerCallback = (entry, observer) => {
        myObserver = observer;
        const currentEntry = entry[0];
        const intersecting = currentEntry?.isIntersecting;
        const confirmHomePage = currentEntry?.rootBounds?.x > 0;

        if (!intersecting && confirmHomePage) {
          // intersecting is false
          dispatch(onAddFixed());
        } else {
          // intersecting is true
          dispatch(onRemoveFixed());
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

  return <>{children}</>;
};

export default NavIntersectionObserver;
