import React from "react";
import classes from "./icon.module.css";

const Icon = ({ icon, onClick }) => {
  return (
    <svg className={classes.iconStyle} onClick={onClick}>
      <use href={`/feather-sprite.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
