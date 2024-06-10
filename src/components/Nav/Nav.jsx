import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./Nav.module.css";
import { auth } from "@/lib/auth/auth";
import Drop from "./Responsive/Drop";

const Nav = async () => {
  const session = await auth();

  return (
    <nav className={styles.container}>
      <p className={styles.logo}>Logo</p>
      <NavLinks session={session} />
      <Drop session={session} />
    </nav>
  );
};

export default Nav;
