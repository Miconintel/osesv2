"use client";
import React, { useState, useEffect } from "react";
import styles from "./AdminPostForm.module.css";
import ActionButton from "../ActionButton/ActionButton";
import { useReducer } from "react";
import { useRef } from "react";
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";

// unused
// import { useFormState } from "react-dom";

const reducerFunction = function (prevState, action) {
  let returnedState = { ...prevState };
  const { type, payload } = action;

  // handle name
  const nameAction = (payloadf) => {
    // const { type, payload } = action;
    console.log(payloadf);
    returnedState = { ...returnedState, nameInput: payloadf };
    return returnedState;
  };

  // hadndle category
  const categoryAction = (payloadf) => {
    // const { type, payload } = action;
    console.log(payloadf);
    returnedState = { ...returnedState, categoryInput: payloadf };
    return returnedState;
  };

  // handle description
  const descriptionAction = (payloadf) => {
    // const { type, payload } = action;
    console.log(payloadf);
    returnedState = { ...returnedState, descriptionInput: payloadf };
    return returnedState;
  };

  // handle file
  const fileAction = (payloadf) => {
    // const { type, payload } = action;
    console.log(payloadf);
    returnedState = { ...returnedState, upload: payloadf };
    return returnedState;
  };

  // switch reducer variable
  switch (type) {
    case "name":
      return nameAction(payload);
    case "cat":
      return categoryAction(payload);
    case "desc":
      return descriptionAction(payload);
    case "file":
      return fileAction(payload);
    // default:
    //   return returnedState;
  }

  // here we are using switch statement to return directly from the function/
  // so it returns whatever file action returns

  return returnedState;
};

const initialState = {
  nameInput: "",
  categoryInput: "",
  descriptionInput: "",
  upload: "",
};

//
//
//
//
//
// JSX
const AdminPostForm = () => {
  // state

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [state, action] = useReducer(reducerFunction, initialState);
  const { nameInput, categoryInput, descriptionInput, upload } = state;
  // const [nameCheck, setNameCheck] = useState(false);

  // refs
  const nameRef = useRef(null);
  const categoryRef = useRef(null);

  // effects
  //
  //
  useEffect(() => {
    setError("");
    const nameVal = nameInput.length > 0;
    const catVal = categoryInput.length > 0;
    // console.log({ nameVal, catVal });
    if (nameVal && catVal) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nameInput, categoryInput]);

  // console.log({ nameInput, categoryInput, descriptionInput, upload });

  // HANDLERS
  // handle name
  //
  //
  //
  const handleChangeInputName = (e) => {
    const target = e.target;
    const nameInputf = target.value;
    console.log(nameInputf);
    const actionObject = { type: "name", payload: nameInputf };
    action(actionObject);
    nameRef.current.style.border = "none";
  };
  // handle Category
  const handleChangeInputCategory = (e) => {
    const target = e.target;
    const categoryInputf = target.value;
    console.log(categoryInputf);
    const actionObject = { type: "cat", payload: categoryInputf };
    action(actionObject);
    categoryRef.current.style.border = "none";
  };

  // handle description

  const handleChangeInputDescription = (e) => {
    const target = e.target;
    const descriptionInputf = target.value;
    console.log(descriptionInputf);
    const actionObject = { type: "desc", payload: descriptionInputf };
    action(actionObject);
  };

  // handle file

  const handleChangeInputFile = (e) => {
    const target = e.target;
    const fileTarget = target.files[0];
    console.log(fileTarget);
    const actionObject = { type: "file", payload: fileTarget };
    action(actionObject);
  };

  // for a single state,
  // const handleChangeInputFile = (e) => {
  //   const target = e.target;
  //   const fileTarget = target.files[0];
  //   setInputState(fileTarget);
  // };

  // handle focus checks
  //
  //
  //

  const handleNameBlur = () => {
    // console.log(nameRef.current);
    const element = nameRef.current;
    if (nameInput.length === 0) {
      element.style.border = "solid 1px red";
      // setNameCheck(true);
    }
  };

  const handleCategoryBlur = () => {
    // console.log(categoryRef.current);
    const element = categoryRef.current;
    if (categoryInput.length === 0) {
      element.style.border = "solid 1px red";
      // setNameCheck(true);
    }
  };

  // handle submit
  //
  //
  //

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", upload);
      formData.append("name", nameInput);
      formData.append("category", categoryInput);
      formData.append("description", descriptionInput);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      console.log(res);
      if (!res.ok) {
        throw new Error("something went wrong, request not sent");
      }

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <form
      className={styles.form}
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text"
          placeholder="PRODUCT NAME"
          id="product-name"
          name="productname"
          onChange={handleChangeInputName}
          onBlur={handleNameBlur}
          ref={nameRef}
          // style={{
          //   border: nameCheck ? "solid 1px red" : "none",
          // }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="CATEGORY"
          id="product-category"
          name="category"
          onChange={handleChangeInputCategory}
          onBlur={handleCategoryBlur}
          ref={categoryRef}
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="description"
          id="description"
          name="description"
          maxLength={200}
          minLength={48}
          rows={5}
          onChange={handleChangeInputDescription}
        ></textarea>
      </div>
      <div>
        <input
          accept="image/*"
          type="file"
          onChange={handleChangeInputFile}
          name="image"
          id="coverImage"
        />
      </div>
      {/* <div>
        <input
          type="file"
          onChange={handleChangeInput}
          name="photos"
          id="photos"
          multiple
          placeholder="select other images"
        />
      </div> */}
      <div>
        <ActionButton
          userAction="upload"
          className={styles.cursor}
          disable={disabled}
        ></ActionButton>
      </div>

      {error && <p className={styles.errMessage}>{error}</p>}
    </form>
  );
};

export default AdminPostForm;
