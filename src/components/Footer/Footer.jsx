import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <nav className={styles.container}>
      <p className={styles.logo}>LOGO</p>

      <FooterLinks />
    </nav>
  );
};

export default Footer;
