"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { signOut } from "@/lib/auth/auth";
import logoutAction from "@/lib/actions/logoutAction";
import { usePathname } from "next/navigation";

const NavLinks = ({ session }) => {
  const [state, setState] = useState();
  const pathname = usePathname();
  console.log(pathname);

  // imported
  const isAdmin = session?.role === "admin";

  // jsx
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/" className={pathname === "/" ? styles.action : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={pathname === "/products" ? styles.action : ""}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={pathname === "/contact" ? styles.action : ""}
        >
          Contact
        </Link>
      </li>
      {session?.user ? (
        <>
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className={pathname === "/admin" ? styles.action : ""}
              >
                Admin
              </Link>
            </li>
          )}
          <li>
            <form action={logoutAction}>
              <button className={styles.logout}>Logout</button>
            </form>
          </li>
        </>
      ) : (
        <li>
          <Link
            href="/login"
            className={pathname === "/login" ? styles.action : ""}
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
