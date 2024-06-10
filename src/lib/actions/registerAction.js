"use server";

import { connectDb } from "../utilities/util";
import { z } from "zod";
import validator from "validator";
import { User } from "../model/User";
import bcrypt from "bcryptjs";

// will come back and update my zod validations

// validating email starts

const emailValidation = z
  .object({
    email: z.string({
      invalid_type_error: "Invalid email",
    }),
  })
  .refine((data) => validator.isEmail(data.email), {
    message: "invalid email",
    path: ["email"], // path of error
  });

// password count

const passwordCount = z
  .object({
    password: z.string(),
  })
  .refine((data) => validator.isLength(data.password, { min: 1 }), {
    message: "input at least 8 characters",
    path: ["password"], // path of error
  });

// validationg passswordstarts
const passwordForm = z
  .object({
    password: z.string({
      invalid_type_error: "Invalid password",
    }),
    confirmPassword: z.string({
      invalid_type_error: "Invalid password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });

const registerAction = async function (prev, formData) {
  try {
    let toReturn = { ...prev };

    const { email, password, confirmPassword } = Object.fromEntries(formData);

    // checking if email is valid

    const emailCheck = emailValidation.safeParse({
      email: email,
    });

    if (!emailCheck.success) {
      const message = emailCheck.error.issues[0].message;
      toReturn = { ...toReturn, message: message };
      return toReturn;
    }

    // check if password is less than 8
    const passCountCheck = passwordCount.safeParse({
      password: password,
    });

    if (!passCountCheck.success) {
      const message = passCountCheck.error.issues[0].message;
      toReturn = { ...toReturn, message: message };
      return toReturn;
    }

    // password confirm check

    const passWordCheck = passwordForm.safeParse({
      password: password,
      confirmPassword: confirmPassword,
    });
    // console.log(passWordCheck);
    if (!passWordCheck.success) {
      const message = passWordCheck.error.issues[0].message;
      toReturn = { ...toReturn, message: message };
      return toReturn;
    }

    //
    //DATABASE USE
    await connectDb();

    const saltrounds = 10;
    const salt = await bcrypt.genSalt(saltrounds);

    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = {
      email,
      password: hashedPassword,
      role: "user",
    };

    const users = await User.create(newUser);

    toReturn = { ...toReturn, message: "success", success: true };
    return toReturn;
  } catch (err) {
    // aut
    if (err.code === 8000) {
      console.log(err.errmsg);
      const errMessage = { ...prev };
      errMessage.message = "Something went wrong, it is our fault";
      return errMessage;
    }
    // duplicate
    if (err.code === 11000) {
      console.log(err.errmsg);
      const errMessage = { ...prev };
      const key = Object.keys(err.keyPattern)[0];
      errMessage.message = `${key} already exists, try logging in`;
      return errMessage;
    }
    // timeout
    if (err.code === "ETIMEOUT") {
      const errMessage = { ...prev };
      errMessage.message = "no internet: check your internet connection";
      return errMessage;
    }

    console.log(err);

    return {
      ...prev,
      message: "something went wrong ",
    };
  }
};

export default registerAction;
