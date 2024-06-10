import React from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { signOut } from "@/lib/auth/auth";

const NavLinks = ({ session }) => {
  // const isLogged = false;
  // const isAdmin = false;
  const isAdmin = session?.role === "admin";
  return (
    <nav className={styles.nav}>
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
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
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
    </nav>
  );
};

export default NavLinks;
