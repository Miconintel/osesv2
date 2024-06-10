"use server";

import { signOut } from "../auth/auth";

const logoutAction = async () => {
  await signOut();
};

export default logoutAction;
