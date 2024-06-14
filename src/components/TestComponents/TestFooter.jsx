import React from "react";
import LoginProviders from "../Providers/LoginProviders/LoginProviders";

const TestFooter = ({ session }) => {
  console.log(session);
  return <div>TestFooter</div>;
};

export default TestFooter;
// export default <LoginProviders Component={TestFooter} />;
