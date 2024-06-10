import React from "react";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import styles from "./register.module.css";
const page = () => {
  return (
    <main className={styles.container}>
      <RegisterForm />
    </main>
  );
};

export default page;
