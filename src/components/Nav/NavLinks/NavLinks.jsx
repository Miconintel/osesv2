'use client';

import React from 'react';
import Link from 'next/link';
import styles from './NavLinks.module.css';
import logoutAction from '@/lib/actions/logoutAction';
import { usePathname } from 'next/navigation';

const NavLinks = ({ session }) => {
  const pathname = usePathname();

  // imported
  const isAdmin = session?.role === 'admin';

  // jsx
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/" className={pathname === '/' ? styles.action : ''}>
          Home
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link
          href="/products"
          className={pathname === '/products' ? styles.action : ''}
        >
          Products
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link
          href="/contact"
          className={pathname === '/contact' ? styles.action : ''}
        >
          Contact
        </Link>
      </li>
      {session?.user ? (
        <>
          {isAdmin && (
            <li className={styles.listItem}>
              <Link
                href="/admin"
                className={pathname === '/admin' ? styles.action : ''}
              >
                Admin
              </Link>
            </li>
          )}
          <li className={styles.listItem}>
            <form action={logoutAction}>
              <button className={styles.logout}>Logout</button>
            </form>
          </li>
        </>
      ) : (
        <li className={styles.listItem}>
          <Link href="/login" className={styles.cta}>
            shop now
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
