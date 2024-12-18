"use client";
import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./Nav.module.css";
import { auth } from "@/lib/auth/auth";
import Responsive from "./Responsive/Responsive";
import Logo from "../Logo/Logo";
import { useStyleSlice } from "@/lib/hooks/useStyleSlice";
import Cart from "../Cart/Cart";

// import NavIntersectionObserver from "../Providers/ObserverProviders/NavIntersectionObserver";
// import { useStyleSlice } from "@/lib/hooks/useStyleSlice";
// this couldnt work in nav cos when it is not intersecting , it is set to fixed.
// when it is set to fixed, which will force intersection and it will now be intersecting which will call the else block to set it to relative
// when it is set to relative it will now force not intersecting, it now means again that is not intersecting, loop continues.

const Nav = ({ session }) => {
  // const session = await auth();

  const { state, actions, dispatch } = useStyleSlice();
  const { fixed } = state;

  return (
    <nav
      className={`${styles.container} ${fixed ? styles.sticky : ""} `}
      id="nav"
    >
      <div className={styles.leftSide}>
        {/* shows on small screen */}
        <Responsive session={session} />

        {/* shows on all screen */}
        <Logo />
      </div>
      {/* <div className={styles.cartContainer}>
        <Cart />
      </div> */}
      {/* <Responsive session={session} /> */}

      <div className={styles.rightSide}>
        {/* shows on big screen */}
        <NavLinks session={session} />

        {/* shows on all screen */}
        <div className={styles.cartContainer}>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
