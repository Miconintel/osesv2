"use client";

import React from "react";
import styles from "./ProductDescriptionAction.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/lib/redux/stateSlices/cartSlice";
import { getCartQuantity } from "@/lib/redux/stateSlices/cartSlice";

const theProduct = {
  id: 1,
  name: "yam",
  category: "tuber",
  price: 24,
  promo: 0,
};

const ProductDescriptionAction = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(theProduct);
  const dispatch = useDispatch();

  // selectors variables

  const cartQuantity = useSelector(getCartQuantity(product));

  // variables
  const cartIsEmpty = cartQuantity === 0;
  // const shouldDisable = cartQuantity < 1;

  const handleIncrease = function () {
    dispatch(increaseQuantity(product));
  };
  const handleDecrease = function () {
    // setQuantity((curr) => curr - 1);
    dispatch(decreaseQuantity(product));
  };
  const handleAddToCart = function () {
    const cartItem = {
      product,
      quantity: 1,
      totalPrice: cartQuantity * product.price,
    };
    dispatch(addItem(cartItem));
  };
  const handleRemoveCart = function () {
    dispatch(removeItem(product));
  };

  return (
    <div className={styles.action}>
      {!cartIsEmpty && (
        <div className={styles.quantity}>
          <button onClick={handleDecrease} disabled={cartIsEmpty} type="button">
            -
          </button>
          <input type="text" required disabled value={cartQuantity} />
          <button onClick={handleIncrease} type="button">
            +
          </button>
        </div>
      )}
      {cartIsEmpty ? (
        <button type="submit" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      ) : (
        <button type="submit" onClick={handleRemoveCart}>
          DELETE
        </button>
      )}
    </div>
  );
};

export default ProductDescriptionAction;
