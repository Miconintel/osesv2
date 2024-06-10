import React from "react";
import MiniNavLinks from "./MiniNavLink/MiniNavLinks";
import classes from "./MiniNav.module.css";

const MiniNav = () => {
  return (
    <nav className={classes.nav}>
      <MiniNavLinks />
    </nav>
  );
};

export default MiniNav;
