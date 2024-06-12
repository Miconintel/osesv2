import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <nav className={styles.container}>
      <Logo />
      <FooterLinks />
    </nav>
  );
};

export default Footer;
