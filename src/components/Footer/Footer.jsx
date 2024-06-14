import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";
import Logo from "../Logo/Logo";
import LoginProviders from "../Providers/LoginProviders/LoginProviders";
import TestFooter from "../TestComponents/TestFooter";

const Footer = (prop) => {
  return (
    <nav className={styles.container}>
      <Logo />
      <FooterLinks />
      {/* <LoginProviders Component={TestFooter}></LoginProviders> */}
      {/* <TestFooter /> */}
    </nav>
  );
};

export default Footer;
