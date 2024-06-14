"use client";
import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./Nav.module.css";
import { auth } from "@/lib/auth/auth";
import Drop from "./Responsive/Drop";
import Logo from "../Logo/Logo";
import { useStyleSlice } from "@/lib/hooks/useStyleSlice";

// import NavIntersectionObserver from "../Providers/ObserverProviders/NavIntersectionObserver";
// import { useStyleSlice } from "@/lib/hooks/useStyleSlice";
// this couldnt work in nav cos when it is not intersecting , it is set to fixed.
// when it is set to fixed, which will force intersection and it will now be intersecting which will call the else block to set it to relative
// when it is set to relative it will now force not intersecting, it now means again that is not intersecting, loop continues.

const Nav = ({ session }) => {
  // const session = await auth();
  console.log(session);
  const { state, actions, dispatch } = useStyleSlice();

  const { fixed } = state;
  console.log(fixed);

  return (
    <nav
      className={`${styles.container} ${fixed ? styles.sticky : ""} `}
      id="nav"
    >
      <Logo />
      <NavLinks session={session} />
      <Drop session={session} />
    </nav>
  );
};

export default Nav;
