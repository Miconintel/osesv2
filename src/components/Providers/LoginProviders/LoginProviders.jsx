import React, { Fragment } from "react";
import { auth } from "@/lib/auth/auth";

const LoginProviders = async ({ Component, prop }) => {
  const session = await auth();
  console.log(prop);

  return (
    <Fragment>
      <Component session={session}></Component>
    </Fragment>
  );
};

export default LoginProviders;
