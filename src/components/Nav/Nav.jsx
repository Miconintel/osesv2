import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./Nav.module.css";
import { auth } from "@/lib/auth/auth";

const Nav = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <p className={styles.logo}>Logo</p>
      <NavLinks session={session} />
    </div>
  );
};

export default Nav;
