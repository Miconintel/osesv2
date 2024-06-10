import React from "react";
import Link from "next/link";
import styles from "./ResponsiveLinks.module.css";
import logoutAction from "@/lib/actions/logoutAction";

const ResponsiveLinks = ({ session }) => {
  const isAdmin = session?.role === "admin";
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/"> Home </Link>
      </li>
      <li>
        <Link href="/products"> Products</Link>
      </li>
      <li>
        <Link href="/contact"> Contact</Link>
      </li>
      {session?.user ? (
        <>
          {isAdmin && (
            <li>
              <Link href="/admin">Admin</Link>
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
          <Link href="/login" className={styles.action}>
            Login
          </Link>
        </li>
      )}
    </ul>
  );
};

export default ResponsiveLinks;
