"use client";

import React from "react";
// import { useFormStatus } from "react-dom";

const ActionButton = ({ userAction, className, disable }) => {
  // const data = useFormStatus();
  // const { pending } = data;
  const { disabled, isLoading } = disable;

  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      className={className}
    >
      {isLoading ? "...Loading" : userAction}
    </button>
  );
};

export default ActionButton;
