"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import logoutAction from "@/lib/actions/logoutAction";
import { usePathname } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "@/lib/redux/stateSlices/cartSlice";
import Cart from "@/components/Cart/Cart";

const NavLinks = ({ session }) => {
  const pathname = usePathname();
  const totalCartQuantiy = useSelector(getTotalQuantity);

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
        <li className={styles.shop}>
          <Link
            href="/login"
            className={pathname === "/login" ? styles.action : ""}
          >
            Shop Now
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
