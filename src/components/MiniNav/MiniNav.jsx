import React from "react";
import MiniNavLinks from "./MiniNavLinks/MiniNavLinks";
import classes from "./MiniNav.module.css";

const MiniNav = () => {
  return (
    <nav className={classes.nav}>
      <MiniNavLinks />
    </nav>
  );
};

export default MiniNav;
