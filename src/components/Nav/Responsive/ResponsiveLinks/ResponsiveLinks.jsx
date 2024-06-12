"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import styles from "./ResponsiveLinks.module.css";
import logoutAction from "@/lib/actions/logoutAction";
import { useMenuSlice } from "@/lib/hooks/useMenuSlice";

// this is a lot for list map

// const links = [
//   { location: "/", action: "Home" },
//   { location: "/products", action: "Products" },
//   { location: "/contacts", action: "Contact" },
//   { location: ["/admin", "login"], action: ["admin", "login"] },
//   // { location: "/login", action: "Login" },
// ];

const ResponsiveLinks = ({ session }) => {
  const isAdmin = session?.role === "admin";
  const { actions, dispatch } = useMenuSlice();
  const { onClose } = actions;

  // const listMap = links.map((link, i) => {
  //   if (i < 3) {
  //     return (
  //       <li key={i}>
  //         <Link href={link.location}> {link.action} </Link>
  //       </li>
  //     );
  //   }
  //   return session?.user ? (
  //     <Fragment key={i}>
  //       {isAdmin && (
  //         <li>
  //           <Link href={link.location[0]}>{link.location[0]}</Link>
  //         </li>
  //       )}
  //       <li>
  //         <form action={logoutAction}>
  //           <button className={styles.logout}>Logout</button>
  //         </form>
  //       </li>
  //     </Fragment>
  //   ) : (
  //     <li key={i}>
  //       <Link href={link.location[1]} className={styles.action}>
  //         {link.location[1]}
  //       </Link>
  //     </li>
  //   );
  // });

  const handleClick = (e) => {
    // console.log(e.target);
    const closest = e.target.closest("li");

    if (closest) {
      dispatch(onClose());
    }
  };

  return (
    <ul className={styles.list} onClick={handleClick}>
      {/* {listMap} */}
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
