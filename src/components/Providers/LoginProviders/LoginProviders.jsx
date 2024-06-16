import React, { Fragment } from "react";
import { auth } from "@/lib/auth/auth";

const LoginProviders = async ({ Component }) => {
  const session = await auth();

  return (
    <Fragment>
      <Component session={session}></Component>
    </Fragment>
  );
};

export default LoginProviders;
