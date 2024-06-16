"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import NavIntersectionObserver from "../Providers/ObserverProviders/NavIntersectionObserver";

const products = [
  {
    name: "product",
    category: "category",
    image: "image",
    rating: 4.5,
    price: 8,
    discountPrice: 8,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    rating: 4.5,
    price: 8,
    discountPrice: 8,
    promo: null,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    rating: 4.5,
    discountPrice: 8,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: null,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: 8,
    rating: 4.5,
    promo: 10,
  },
  {
    name: "product",
    category: "category",
    image: "image",
    price: 8,
    discountPrice: null,
    rating: 4.5,
    promo: 10,
  },
];
const ProductList = () => {
  const productRef = useRef(null);
  // create product map
  const productMap = products.map((product, i) => {
    // const { name, price, discountPrice } = product;
    return <ProductItem key={i} product={product} />;
  });

  // //   return jsx
  return <ul className={styles.list}>{productMap}</ul>;

  //   return jsx

  // return (
  //   <NavIntersectionObserver threshold={0} theRef={productRef}>
  //     <ul className={styles.list} ref={productRef}>
  //       {productMap}
  //     </ul>
  //   </NavIntersectionObserver>
  // );
};

export default ProductList;
