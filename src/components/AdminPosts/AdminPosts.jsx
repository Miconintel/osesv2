"use client";
import React from "react";
import { useState, useEffect } from "react";

const AdminPosts = () => {
  const [inputState, setInputState] = useState("");

  const handleChangeInput = (e) => {
    const target = e.target;
    const fileTarget = target.files[0];
    setInputState(fileTarget);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", inputState);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    console.log(await res.json());
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="file" onChange={handleChangeInput} name="image" id="image" />
      <button>submit</button>
    </form>
  );
};

export default AdminPosts;
