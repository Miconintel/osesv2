"use client";
import React from "react";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";
import ActionButton from "../ActionButton/ActionButton";
import LoginAction from "@/lib/actions/loginAction";
import { useState, useEffect } from "react";

const initialState = {
  success: false,
  message: null,
};

const LoginForm = () => {
  const [state, formAction] = useFormState(LoginAction, initialState);
  const [tempMessage, setTemp] = useState(null);

  const turnOffMessage = (e) => {
    if (e.target.localName === "input") {
      setTemp(null);
    }
  };

  // setting message when the temp message has a message,
  useEffect(() => {
    setTemp(state?.message);
  }, [state?.message]);

  return (
    <form className={styles.form} action={formAction} onClick={turnOffMessage}>
      <div>
        {/* <label for="email">Email</label> */}
        <input type="text" placeholder="EMAIL" id="email" name="email" />
      </div>
      <div>
        {/* <label for="password">Password</label> */}
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          name="password"
        />
      </div>
      <div>
        {/* <button type="submit">Login</button> */}
        <ActionButton userAction="Login" className={styles.cursor}></ActionButton>
      </div>
      <Link href="/register" className={styles.redirect}>
        <span className={styles.tag}>Do not have account </span>
        <span>REGISTER</span>
      </Link>
      {state?.message && tempMessage && (
        <p className={styles.errMessage}>{state.message}</p>
      )}
    </form>
  );
};

export default LoginForm;
