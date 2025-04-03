"use client";

import React, { useState } from "react";
import MiniNavItem from "./MiniNavItem/MiniNavItem";
import classes from "./MiniNavLinks.module.css";
import { usePathname } from "next/navigation";

const linkItem = [
  { id: 1, content: "Summary", href: "/admin" },
  { id: 2, content: "Products", href: "/admin/products" },
  { id: 3, content: "Orders", href: "/admin/orders" },
  // { id: 4, content: "Users", href: "/admin/users" },
];

const MiniNavLinks = () => {
  const [active, setActive] = useState(1);
  // const handleActive = (id) => {
  //   setActive(id);
  // };
  const pathname = usePathname();

  return (
    <ul className={classes.list}>
      {linkItem.map((el, i) => (
        <MiniNavItem
          key={el.id}
          content={el.content}
          pathname={pathname}
          href={el.href}
          // id={el.id}
          // onHandleActive={handleActive}
          // selected={active}
        />
      ))}
    </ul>
  );
};

export default MiniNavLinks;
