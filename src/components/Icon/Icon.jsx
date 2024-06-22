"use client";
import React from "react";
import classes from "./icon.module.css";

const Icon = ({ icon, onClick, inStyle }) => {
  const getStyle = inStyle;

  return (
    <svg className={classes.iconStyle} onClick={onClick} style={inStyle}>
      <use href={`/feather-sprite.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
