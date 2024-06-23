"use client";
import React, { useState, useEffect, act } from "react";
import styles from "./AdminPostForm.module.css";
import ActionButton from "../ActionButton/ActionButton";
import { useReducer } from "react";
import { useRef } from "react";

// initialStat

const initialState = {
  nameInput: "",
  categoryInput: "",
  descriptionInput: "",
  priceInput: "",
  discountInput: "",
  upload: "",
};

const reducerFunction = function (prevState, action) {
  let returnedState = { ...prevState };
  const { type, payload } = action;

  // handle name
  const nameAction = (payloadf) => {
    // const { type, payload } = action;
    // console.log(payloadf);
    returnedState = { ...returnedState, nameInput: payloadf };
    return returnedState;
  };

  // hadndle category
  const categoryAction = (payloadf) => {
    // const { type, payload } = action;
    // console.log(payloadf);
    returnedState = { ...returnedState, categoryInput: payloadf };
    return returnedState;
  };

  // hadndle price
  const priceAction = (payloadf) => {
    // const { type, payload } = action;
    // console.log(payloadf);
    returnedState = { ...returnedState, priceInput: payloadf };
    return returnedState;
  };

  // hadndle price
  const discountAction = (payloadf) => {
    // const { type, payload } = action;
    // console.log(payloadf);
    returnedState = { ...returnedState, discountInput: payloadf };
    return returnedState;
  };

  // handle description
  const descriptionAction = (payloadf) => {
    // const { type, payload } = action;
    // console.log(payloadf);
    returnedState = { ...returnedState, descriptionInput: payloadf };
    return returnedState;
  };

  // handle file
  const fileAction = (payloadf) => {
    // const { type, payload } = action;
    // console.log(payloadf);
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
    case "price":
      return priceAction(payload);
    case "discount":
      return discountAction(payload);
    case "clear":
      return { ...initialState };
  }

  // here we are using switch statement to return directly from the function/
  // so it returns whatever file action returns

  return returnedState;
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
  const [discountSelect, setDiscountSelect] = useState("NO");
  const [message, setMessage] = useState("");

  // use reducer destructure
  const [state, action] = useReducer(reducerFunction, initialState);
  const {
    nameInput,
    categoryInput,
    descriptionInput,
    upload,
    priceInput,
    discountInput,
  } = state;
  // const [nameCheck, setNameCheck] = useState(false);

  // refs
  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);

  // effects
  //
  //
  useEffect(() => {
    setMessage("");
    const nameVal = nameInput.length > 0;
    const catVal = categoryInput.length > 0;
    const priceVal = priceInput > 0;
    // console.log({ nameVal, catVal });

    if (nameVal && catVal && priceVal) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nameInput, categoryInput, priceInput]);

  // console.log({ nameInput, categoryInput, descriptionInput, upload });

  // HANDLERS
  // handle name
  //
  //
  //
  const handleChangeInputName = (e) => {
    const target = e.target;
    const nameInputf = target.value;
    // console.log(nameInputf);
    const actionObject = { type: "name", payload: nameInputf };
    action(actionObject);
    nameRef.current.style.border = "none";
  };
  // handle Category
  const handleChangeInputCategory = (e) => {
    const target = e.target;
    const categoryInputf = target.value;
    // console.log(categoryInputf);
    const actionObject = { type: "cat", payload: categoryInputf };
    action(actionObject);
    categoryRef.current.style.border = "none";
  };

  // handle price
  const handleChangeInputPrice = (e) => {
    const target = e.target;

    const notANumber = isNaN(target.value);
    if (notANumber) {
      return action({ type: "price", payload: "" });
    }

    // keep working with target
    const priceInputf = Number(target.value);
    const actionObject = { type: "price", payload: priceInputf };
    action(actionObject);
    priceRef.current.style.border = "none";
  };

  // handle discount
  const handleChangeInputDiscount = (e) => {
    const target = e.target;

    const notANumber = isNaN(target.value);
    if (notANumber) {
      return action({ type: "discount", payload: "" });
    }
    // keep working
    const discountInputf = Number(target.value);
    const actionObject = { type: "discount", payload: discountInputf };
    action(actionObject);
    // categoryRef.current.style.border = "none";
  };

  // handle description

  const handleChangeInputDescription = (e) => {
    const target = e.target;
    const descriptionInputf = target.value;
    // console.log(descriptionInputf);
    const actionObject = { type: "desc", payload: descriptionInputf };
    action(actionObject);
  };

  // handle file

  const handleChangeInputFile = (e) => {
    const target = e.target;
    const fileTarget = target.files[0];
    // const reader = new FileReader();
    // reader.onload = (evt) => {
    //   console.log(evt.target.result);
    // };
    // reader.readAsArrayBuffer(fileTarget);
    const blob = fileTarget.arrayBuffer();

    console.log(fileTarget);
    const actionObject = { type: "file", payload: fileTarget };
    // const actionObject = { type: "file", payload: blob };
    action(actionObject);
  };

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

  const handlePriceBlur = () => {
    const element = priceRef.current;
    if (priceInput.length === 0) {
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
    action({ type: "clear", payload: null });

    try {
      const formData = new FormData();
      formData.append("image", upload);
      formData.append("name", nameInput);
      formData.append("category", categoryInput);
      formData.append("description", descriptionInput);
      formData.append("price", priceInput);
      formData.append("discount", discountInput);

      console.log(formData.get("image"));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      // console.log(res);
      // if (!res.ok) {
      //   console.log(res);
      //   throw new Error("something went wrong, request not sent");
      // }

      const data = await res.json();
      if (data) {
        setMessage("upload successful");
      }
      // console.log(data);
    } catch (e) {
      console.log(e);
      setMessage(e.message);
    }
  };

  // jsx rerturn

  return (
    <form
      className={styles.form}
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          value={nameInput}
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
          value={categoryInput}
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
        <input
          value={priceInput}
          type="text"
          placeholder="PRICE"
          id="product-price"
          name="price"
          onChange={handleChangeInputPrice}
          onBlur={handlePriceBlur}
          ref={priceRef}
        />
      </div>
      <div className={styles.discount}>
        <label>PROMO:</label>
        <select
          value={discountSelect}
          onChange={(e) => {
            console.log(e.target.value);
            setDiscountSelect(e.target.value);
          }}
        >
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        {discountSelect === "YES" && (
          <input
            value={discountInput}
            type="text"
            placeholder="DISCOUNT PRICE"
            id="product-discount-price"
            name="discount-price"
            onChange={handleChangeInputDiscount}
            // onBlur={handleCategoryBlur}
            // ref={categoryRef}
          />
        )}
      </div>
      <div>
        <textarea
          value={descriptionInput}
          type="text"
          placeholder="description"
          id="description"
          name="description"
          maxLength={200}
          minLength={2}
          rows={5}
          onChange={handleChangeInputDescription}
        ></textarea>
      </div>
      <div>
        <input
          // value={upload}
          accept="image/*"
          type="file"
          onChange={handleChangeInputFile}
          name="image"
          id="coverImage"
          className={styles.upload}
        />
      </div>

      <div>
        <ActionButton
          userAction="upload"
          className={styles.cursor}
          disable={disabled}
        ></ActionButton>
      </div>

      {message && (
        <p
          className={styles.errMessage}
          style={{
            color: message === "upload successful" && "green",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default AdminPostForm;
