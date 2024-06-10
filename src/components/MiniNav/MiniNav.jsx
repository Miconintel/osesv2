import React from "react";
import MiniNavLink from "./MiniNavLink/MiniNavLink";
import classes from "./MiniNav.module.css";

const MiniNav = () => {
  return (
    <nav className={classes.nav}>
      <MiniNavLink />
    </nav>
  );
};

export default MiniNav;
