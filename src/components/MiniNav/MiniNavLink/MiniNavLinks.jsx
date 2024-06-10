"use client";

import React, { useState } from "react";
import MiniNavItem from "./MiniNavItem/MiniNavItem";
import classes from "./MiniNavLinks.module.css";

const linkItem = [
  { id: 1, content: "SUMMARY" },
  { id: 2, content: "PRODUCTS" },
  { id: 3, content: "ORDERS" },
  { id: 4, content: "USERS" },
];

const MiniNavLinks = () => {
  const [active, setActive] = useState(1);
  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <ul className={classes.list}>
      {linkItem.map((el, i) => (
        <MiniNavItem
          key={el.id}
          id={el.id}
          onHandleActive={handleActive}
          content={el.content}
          selected={active}
          // className={active === el.id && classes.active}
        />
      ))}
    </ul>
  );
};

export default MiniNavLinks;
