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

  try {
    // I had to do this to make sure I am returning a brand new object and not the previous object passed in

    const { email, password } = Object.fromEntries(formData);
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
    console.log(e.name);

    if (e.message !== "NEXT_REDIRECT") {
      // sstop redirectiong from happening
      runFinally = false;

      // handle network error
      if (e.name === "CallbackRouteError") {
        console.log(e.cause.err);
        toReturn = {
          ...toReturn,
          success: false,
          message: "check your internet connection ⚠",
        };

        return toReturn;
      }
      if (e.type === "CredentialsSignin") {
        // handle credentials error
        toReturn = {
          ...toReturn,
          success: false,
          message: "incorrect username or password",
        };

        return toReturn;
      }
    }
  } finally {
    if (runFinally) {
      redirect("/");
    }
  }
};

export default LoginAction;
