"use client";
import React, { useState, useEffect, act } from "react";
import styles from "./AdminPostForm.module.css";
import ActionButton from "../ActionButton/ActionButton";
import { useReducer } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

// initialStat

const initialState = {
  nameInput: "",
  categoryInput: "",
  descriptionInput: "",
  priceInput: "",
  discountInput: "",
  upload: "",
  isLoading: false,
};

const reducerFunction = function (prevState, action) {
  let returnedState = { ...prevState };
  const { type, payload } = action;

  const nameAction = (payloadf) => {
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
    const discountInputf = Number(payloadf);
    return { ...returnedState, discountInput: discountInputf };
  };

  // handle description
  const descriptionAction = (payloadf) => {
    return { ...returnedState, descriptionInput: payloadf };
  };

  // handle description
  const loadingAction = (payloadf) => {
    return { ...returnedState, isLoading: !returnedState.isLoading };
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
    case "loading":
      return loadingAction(payload);
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
  const router = useRouter();
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // selects
  const [discountSelect, setDiscountSelect] = useState("NO");
  const [inStockSelect, setInStockSelect] = useState(1);

  // not recommended, this is used as a hack to force a rerender on each blur, so the
  // side effect can run
  // all this can be avoided by simply using state for input validations which I dont want to.
  // const [tracker, setTracker] = useState(true);
  // use reducer destructure
  const [state, action] = useReducer(reducerFunction, initialState);
  const {
    nameInput,
    categoryInput,
    descriptionInput,
    upload,
    priceInput,
    discountInput,
    isLoading,
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

  // never read the values on render.
  // effects
  //
  //
  useEffect(() => {
    // setMessage("");

    if (nameInput && categoryInput && priceInput && upload) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [priceInput, categoryInput, nameInput, upload]);

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
  };

  // handle discount
  const handleChangeInputDiscount = (e) => {
    const target = e.target;
    action({ type: "discount", payload: target.value });
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
  //BLURS used to change the styles, to avoid rerenders cos of style.
  //
  //

  const handleNameBlur = () => {
    const element = nameRef.current;
    // instead of reading the value direct, I am using the state
    if (!nameInput) {
      element.style.border = "solid 1px red";
    } else {
      element.style.border = "none";
    }
  };

  const handleCategoryBlur = () => {
    const element = categoryRef.current;
    if (!categoryInput) {
      element.style.border = "solid 1px red";
    } else {
      element.style.border = "none";
    }
  };

  const handlePriceBlur = () => {
    const element = priceRef.current;
    // console.log(element.classList.toggle("inputerror"));
    const isValid = priceInput > 0;

    if (!isValid) {
      element.style.border = "solid 1px red";
    } else {
      element.style.border = "none";
    }
  };

  const handleDiscountBlur = () => {
    const element = priceRef.current;
    const isValid = priceInput > discountInput;

    if (!isValid) {
      element.style.border = "solid 1px red";
      action({ type: discount, payload: "" });
    } else {
      element.style.border = "none";
    }
  };

  // complete blurs for other input
  // handle submit
  //
  //
  //

  const handleSubmit = async (e) => {
    // console.log(inStockSelect);
    e.preventDefault();
    action({ type: "loading", payload: null });

    try {
      const formData = new FormData();

      formData.append("image", upload);
      formData.append("name", nameInput);
      formData.append("category", categoryInput);
      formData.append("description", descriptionInput);
      formData.append("price", priceInput);
      formData.append("discount", discountInput);
      formData.append("instock", Boolean(inStockSelect));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      //

      if (!res.ok) {
        throw new Error("something went wrong, upload failed");
      }

      const data = await res.json();

      if (data) {
        action({ type: "clear", payload: null });
        setMessage("upload successful");
        // console.log(uploadRef.current.value);
        uploadRef.current.value = "";
        router.refresh();
      }
    } catch (e) {
      setMessage(e.message);
    } finally {
      console.log("finally");
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
          required
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
          required
        />
      </div>
      {/* in stock */}
      <div className={styles.discount}>
        <label>IN-STOCK:</label>
        <select
          name="instock"
          value={inStockSelect}
          onChange={(e) => {
            const inStock = Number(e.target.value);
            // const inStock = Boolean(changeIt);
            setInStockSelect(inStock);

            // mongoose casts number and no as true or false, so I am going to use mongoose style. though I want to
            // see this one too.
          }}
        >
          <option value={1}>YES</option>
          <option value={0}>NO</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          value={priceInput}
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
            ref={discountRef}
            value={discountInput}
            type="number"
            placeholder="DISCOUNT PRICE"
            id="product-discount-price"
            name="discount-price"
            onChange={handleChangeInputDiscount}
            onBlur={handleDiscountBlur}
          />
        )}
      </div>

      {/* description */}
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
          ref={descriptionRef}
          onChange={handleChangeInputDescription}
        ></textarea>
      </div>

      {/* file upload */}
      <div>
        <input
          // value={upload}
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
          disable={{ disabled, isLoading }}
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
