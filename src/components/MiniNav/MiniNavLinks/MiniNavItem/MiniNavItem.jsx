import React from "react";
import classes from "./MiniNavItem.module.css";
import Link from "next/link";

const MiniNavItem = ({
  content,
  href,
  pathname,
  id,
  onHandleActive,
  selected,
}) => {
  //see
  // const handleActive = (id) => {
  //   onHandleActive(id);
  // };

  // jsx
  return (
    <li
      // id={id}
      // onClick={() => handleActive(id)}
      // className={`${classes.item} ${selected === id && classes.active} `}
      className={`${classes.item} ${pathname === href && classes.active}`}
    >
      <Link href={href} className={classes.link}>
        {content}
      </Link>
    </li>
  );
};

export default MiniNavItem;
