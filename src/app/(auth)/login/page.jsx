import React from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import styles from "./login.module.css";
import Image from "next/image";
const page = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/hero-1.jpg"
          alt="login image"
          fill
          className={styles.img}
        />
      </div>
      <LoginForm />
    </main>
  );
};

export default page;
