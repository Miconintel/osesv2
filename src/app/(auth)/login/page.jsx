import React from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import styles from "./login.module.css";
const page = () => {
  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  );
};

export default page;
