import React from "react";
import classes from "./MiniNavItem.module.css";

const MiniNavItem = ({ id, onHandleActive, content, selected }) => {
  //see
  const handleActive = (id) => {
    onHandleActive(id);
  };

  // jsx
  return (
    <li
      id={id}
      onClick={() => handleActive(id)}
      // className={classes.item}
      className={`${classes.item} ${selected === id && classes.active} `}
    >
      <button
        className={classes.button}
        // className={`${classes.button} ${selected === id && classes.active} `}
      >
        {content}
      </button>
    </li>
  );
};

export default MiniNavItem;
