import React from "react";
import classes from "./MiniNavItem.module.css";

const MiniNavItem = ({ id, onHandleActive, content, selected }) => {
  console.log(selected);

  const handleActive = (id) => {
    onHandleActive(id);
  };
  return (
    <li
      id={id}
      onClick={() => handleActive(id)}
      //   className={`${classes.item} ${selected === id && classes.active} `}
      className={classes.item}
    >
      <button
        className={`${classes.button} ${selected === id && classes.active} `}
      >
        {content}
      </button>
    </li>
  );
};

export default MiniNavItem;
