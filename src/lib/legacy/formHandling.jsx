"use client";
import React, { useState, useEffect } from "react";
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
  // though this is redundant, seperationg this helps for ease of computing, incase, ther is something
  // that should be done to the payload
  const nameAction = (payloadf) => {
    // you should not reassign return state
    // returnedState = { ...returnedState, nameInput: payloadf };
    // return returnedState;
    return { ...returnedState, nameInput: payloadf };
  };

  // hadndle category
  const categoryAction = (payloadf) => {
    return { ...returnedState, categoryInput: payloadf };
  };

  // hadndle price
  const priceAction = (payloadf) => {
    const notANumber = isNaN(payloadf);
    if (notANumber) {
      return { ...returnedState, priceInput: "" };
    }

    // keep working with target
    const priceInputf = Number(payloadf);
    return { ...returnedState, priceInput: priceInputf };
  };

  // hadndle price
  const discountAction = (payloadf) => {
    const notANumber = isNaN(payloadf);

    if (notANumber) {
      return { ...returnedState, discountInput: "" };
    }
    // keep working
    const discountInputf = Number(target.value);
    return { ...returnedState, discountInput: discountInputf };
  };

  // handle description
  const descriptionAction = (payloadf) => {
    return { ...returnedState, descriptionInput: payloadf };
  };

  // handle file
  const fileAction = (payloadf) => {
    return { ...returnedState, upload: payloadf };
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
// JSX
const AdminPostForm = () => {
  // state
  // these are independent states.
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

  // refs
  // refs uses closure, that is why
  // also when it changes, it does not result to a rerender that paints the screen.
  // as it is carried around in closure and still modifiable even when, the parent component
  // where it is rendered could have said to have been called and returned a value which is a jsx
  // Also, when components rerender,
  // it still has its same value. cos the component which is the function that
  // houses it, might run completely and returne or recreated,
  // yet the app, carries the variable around
  // using closure mechanism to ensure that the value of the ref remains accross renders
  // when new components are born and easily passes it to that component.

  // closure is, when you create a variable inside a function.
  // you can use that variable inside another function created inside the main function.
  // such that even if you are returning the inner function after calling the main function
  // the inner function will still carry around, the value of that variable created in the
  // main function.

  // it is never a good practice to read or write ref in a component
  // it is permisible in input elements, however, even at that, you should also be careful.
  const nameRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();

  const discountRef = useRef();
  const descriptionRef = useRef();
  const uploadRef = useRef();

  // values
  const nameValue = nameRef.current?.value;
  const priceValue = priceRef.current?.value;
  const categoryValue = categoryRef.current?.value;
  const discountValue = discountRef.current?.value;
  const descriptionValue = descriptionRef.current?.value;
  const uploadValue = uploadRef.current?.files[0];
  // console.log(uploadValue);
  // effects
  //
  //
  useEffect(() => {
    setMessage("");
    // const nameVal = nameInput.length > 0;
    // const catVal = categoryInput.length > 0;
    // const priceVal = priceInput > 0;

    const priceVal = Number(priceValue) > 0;

    if (nameValue && categoryValue && priceVal) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nameValue, categoryValue, priceValue]);

  useEffect(() => {
    setMessage("");

    // check if input they are number first
    // now handling this with input attribute
    // const priceNotANumber = isNaN(priceValue);
    // const discountNotANumber = isNaN(discountValue);
    // if (priceValue && priceNotANumber) {
    //   priceRef.current.value = "";
    //   return;
    // }
    // if (discountValue && discountNotANumber) {
    //   discountRef.current.value = "";
    //   return;
    // }

    // then convert input to a calculable number, since all input returns a string

    const isValid = priceValue > discountValue;

    if (discountValue && !isValid) {
      console.log("this should be less than the price value");
      discountRef.current.value = "";
    }
    //  if (discountValue > priceValue || discountValue === priceValue) {
    //    console.log("this should be less than the price value");
    //    discountRef.current.value = "";
    //  }
  }, [discountValue, priceValue]);

  // HANDLERS
  // handle name
  //
  //
  //
  const handleChangeInputName = (e) => {
    const target = e.target;
    const nameInputf = target.value;
    const actionObject = { type: "name", payload: nameInputf };
    action(actionObject);
    nameRef.current.style.border = "none";
  };
  // handle Category
  const handleChangeInputCategory = (e) => {
    const target = e.target;
    const categoryInputf = target.value;

    const actionObject = { type: "cat", payload: categoryInputf };
    action(actionObject);
    categoryRef.current.style.border = "none";
  };

  // handle price
  const handleChangeInputPrice = (e) => {
    const target = e.target;
    action({ type: "price", payload: target.value });

    //
    priceRef.current.style.border = "none";
    //
    //
    // this should happen inside the reducer.
    // const notANumber = isNaN(target.value);
    // if (notANumber) {
    //   return action({ type: "price", payload: "" });
    // }

    // // keep working with target
    // const priceInputf = Number(target.value);
    // const actionObject = { type: "price", payload: priceInputf };
    // action(actionObject);
    // priceRef.current.style.border = "none";
  };

  // handle discount
  const handleChangeInputDiscount = (e) => {
    const target = e.target;
    action({ type: "discount", payload: target.value });

    // this is happening in reducer
    // const notANumber = isNaN(target.value);
    // if (notANumber) {
    //   return action({ type: "discount", payload: "" });
    // }
    // // keep working
    // const discountInputf = Number(target.value);
    // const actionObject = { type: "discount", payload: discountInputf };
    // action(actionObject);
  };

  // handle description

  const handleChangeInputDescription = (e) => {
    const target = e.target;
    const descriptionInputf = target.value;
    const actionObject = { type: "desc", payload: descriptionInputf };
    action(actionObject);
  };

  // handle file

  const handleChangeInputFile = (e) => {
    const target = e.target;
    const fileTarget = target.files[0];
    // const blob = fileTarget.arrayBuffer();

    const actionObject = { type: "file", payload: fileTarget };
    action(actionObject);
  };

  // handle focus checks
  //BLURS
  //
  //

  const handleNameBlur = () => {
    const element = nameRef.current;
    if (nameInput.length === 0) {
      element.style.border = "solid 1px red";
    }
  };

  const handleCategoryBlur = () => {
    const element = categoryRef.current;
    if (categoryInput.length === 0) {
      element.style.border = "solid 1px red";
    }
  };

  const handlePriceBlur = () => {
    const element = priceRef.current;
    if (priceInput.length === 0) {
      element.style.border = "solid 1px red";
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

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("something went wrong, upload failed");
      }

      const data = await res.json();
      if (data) {
        setMessage("upload successful");
      }
    } catch (e) {
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
          // never read a ref value on a component directly
          // value={nameValue}
          // value={nameInput}
          type="text"
          placeholder="PRODUCT NAME"
          id="product-name"
          name="productname"
          onChange={handleChangeInputName}
          onBlur={handleNameBlur}
          ref={nameRef}
          required
        />
      </div>
      <div>
        <input
          // value={categoryValue}
          // value={categoryInput}
          type="text"
          placeholder="CATEGORY"
          id="product-category"
          name="category"
          onChange={handleChangeInputCategory}
          onBlur={handleCategoryBlur}
          ref={categoryRef}
          required
        />
      </div>
      <div>
        <input
          // value={priceInput}
          // value={priceValue}
          type="number"
          placeholder="PRICE"
          id="product-price"
          name="price"
          onChange={handleChangeInputPrice}
          onBlur={handlePriceBlur}
          ref={priceRef}
          required
        />
      </div>
      <div className={styles.discount}>
        <label>PROMO:</label>
        <select
          value={discountSelect}
          onChange={(e) => {
            setDiscountSelect(e.target.value);
          }}
        >
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        {discountSelect === "YES" && (
          <input
            // value={discountInput}
            // value={discountValue}
            ref={discountRef}
            type="number"
            placeholder="DISCOUNT PRICE"
            id="product-discount-price"
            name="discount-price"
            onChange={handleChangeInputDiscount}
          />
        )}
      </div>
      <div>
        <textarea
          // value={descriptionValue}
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
          ref={uploadRef}
          accept="image/*"
          type="file"
          onChange={handleChangeInputFile}
          name="image"
          id="coverImage"
          className={styles.upload}
          required
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
