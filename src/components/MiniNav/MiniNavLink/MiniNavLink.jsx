"use client";

import React, { useState } from "react";
import classes from "./MiniNavLink.module.css";
import MiniNavItem from "./MiniNavItem/MiniNavItem";

const linkItem = [
  { id: 1, content: "SUMMARY" },
  { id: 2, content: "PRODUCTS" },
  { id: 3, content: "ORDERS" },
  { id: 4, content: "USERS" },
];

const MiniNavLink = () => {
  const [active, setActive] = useState(1);
  console.log(active);
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

export default MiniNavLink;
