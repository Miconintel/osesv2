"use client";

import React, { useEffect, useState } from "react";
import styles from "./RegisterForm.module.css";
import Link from "next/link";
import registerAction from "@/lib/actions/registerAction";
import { useFormState } from "react-dom";
import ActionButton from "../ActionButton/ActionButton";

const initialState = {
  success: false,
  message: null,
};

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerAction, initialState);
  // const [messageState, setMessageState] = useState(null);
  const [tempMessage, setTemp] = useState(null);

  const turnOffMessage = (e) => {
    if (e.target.localName === "input") {
      setTemp(null);
    }
  };

  // setting message when the temp message has a message,
  useEffect(() => {
    setTemp(state.message);
  }, [state.message]);

  //
  return (
    <form className={styles.form} action={formAction} onClick={turnOffMessage}>
      <div>
        {/* <label for="email">Email</label> */}
        <input
          required
          type="text"
          placeholder="EMAIL"
          id="email"
          name="email"
        />
      </div>
      <div>
        {/* <label for="password">Password</label> */}
        <input
          required
          type="password"
          id="password"
          placeholder="PASSWORD"
          name="password"
        />
      </div>
      <div>
        {/* <label for="password">Password</label> */}
        <input
          required
          type="password"
          id="confirmPassword"
          placeholder="CONFIRM PASSWORD"
          name="confirmPassword"
        />
      </div>
      {/* <div>
        <button type="submit">Register</button>
      </div> */}
      <div>
        <ActionButton userAction="Register" />
      </div>

      <Link href="/login" className={styles.redirect}>
        <span className={styles.tag}> Already has an account </span>
        <span>LOGIN</span>
      </Link>
      {state?.message && tempMessage && (
        <p className={styles.errMessage}>{state.message}</p>
      )}
    </form>
  );
};

export default RegisterForm;
