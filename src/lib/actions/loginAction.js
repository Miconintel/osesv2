"use server";

import { z } from "zod";
import validator from "validator";
import { signIn } from "../auth/auth";
import { redirect } from "next/navigation";

const emailValidation = z
  .object({
    email: z
      .string({
        invalid_type_error: "Invalid email",
      })
      .min(3, {
        message: "minimum required",
      }),
  })
  .refine((data) => validator.isEmail(data.email), {
    message: "invalid email",
    path: ["email"], // path of error
  });

const LoginAction = async (prevState, formData) => {
  let runFinally = true;
  let toReturn = { ...prevState };
  const { email, password } = Object.fromEntries(formData);

  try {
    // I had to do this to make sure I am returning a brand new object and not the previous object passed in
    // const { email, password } = Object.fromEntries(formData);
    const emailCheck = emailValidation.safeParse({
      email: email,
    });

    if (!emailCheck.success) {
      const message = emailCheck.error.issues[0].message;
      toReturn = { ...toReturn, message: message };
      return toReturn;
    }

    await signIn("credentials", { email, password });

    toReturn = {
      ...toReturn,
      success: true,
      message: "logged in successfully",
    };
    return toReturn;
  } catch (e) {
    // if errors are not thrown on the authorize, the login throws an error that is
    // called credential error to this place and it is called
    // credentials error

    // if the error is from the authorize function, the error is thrown to the login, and the login throws it
    // as a callback error
    console.log(e);

    if (e.message !== "NEXT_REDIRECT") {
      // stop redirectiong from happening
      runFinally = false;

      // handle network error/this error will be thrown from authorize and will bear the name
      // credential sign in
      if (e.name === "CallbackRouteError") {
        toReturn = {
          ...toReturn,
          success: false,
          message: "check your internet connection ⚠",
        };

        return toReturn;
      } else if (e.name === "CredentialsSignin") {
        console.log(e.name);
        toReturn = {
          ...toReturn,
          success: false,
          message: "incorrect username or password",
        };

        return toReturn;
      } else {
        toReturn = {
          ...toReturn,
          success: false,
          message: "something went wrong ,we are fixing it",
        };
      }

      return toReturn;
    }
  } finally {
    if (runFinally && email && password) {
      redirect("/");
    }
  }
};

export default LoginAction;
