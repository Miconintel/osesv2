"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const ActionButton = ({ userAction, className, disable }) => {
  const data = useFormStatus();
  const { pending } = data;
  console.log(disable);

  return (
    <button type="submit" disabled={disable || pending} className={className}>
      {pending ? "loading..." : userAction}
    </button>
  );
};

export default ActionButton;
