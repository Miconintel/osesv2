import React from "react";
import Link from "next/link";
import styles from "./FooterLinks.module.css";

const lists = [
  {
    name: "Home",
    location: "/",
  },
  {
    name: "Products",
    location: "/products",
  },
  {
    name: "Contact",
    location: "/contact",
  },
];

const FooterLinks = () => {
  const listMap = lists.map((el, i) => {
    return (
      <li className={styles.item} key={i}>
        <Link href={el.location}>{el.name}</Link>
      </li>
    );
  });
  return <ul className={styles.list}>{listMap}</ul>;
};

export default FooterLinks;
