import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { getProducts } from "@/lib/data/productData";
import styles from "./ProductList.module.css";

//
//
// const products = [
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     rating: 4.5,
//     price: 8,
//     discountPrice: 8,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     rating: 4.5,
//     price: 8,
//     discountPrice: 8,
//     promo: null,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     rating: 4.5,
//     discountPrice: 8,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: null,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: 8,
//     rating: 4.5,
//     promo: 10,
//   },
//   {
//     name: "product",
//     category: "category",
//     image: "image",
//     price: 8,
//     discountPrice: null,
//     rating: 4.5,
//     promo: 10,
//   },
// ];

//
//
//
const ProductList = async () => {
  try {
    // this is getting data for this route.
    const productLoad = await getProducts();

    const productMap = productLoad?.map((product, i) => {
      return <ProductItem key={i} product={product} />;
    });

    // //   return jsx
    if (productMap.length == 0)
      return <h3>THERE ARE NO PRODUCTS AVAILABLE NOW!!!</h3>;
    return <ul className={styles.list}>{productMap}</ul>;
  } catch (e) {
    console.log(e);
  }
};

export default ProductList;
