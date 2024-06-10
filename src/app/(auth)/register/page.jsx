import React from "react";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import styles from "./register.module.css";
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
      <RegisterForm />
    </main>
  );
};

export default page;
