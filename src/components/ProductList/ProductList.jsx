import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { getProducts } from "@/lib/data/productData";
import styles from "./ProductList.module.css";
import { unstable_noStore as noStore } from "next/cache";
import { list } from "@vercel/blob";

//
//
//
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

//
//
//
const ProductList = async () => {
  // noStore();
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const blob = await allImages();
  const images = blob.blobs;

  // you can use this to get all the images

  const getImage = (imageIn) => {
    const theImage = images.find((image) => image?.pathname === imageIn)?.url;
    console.log(theImage);
    return theImage;
  };

  const productLoad = await getProducts();
  // console.log(productLoad);
  // create product map
  const productMap = productLoad?.map((product, i) => {
    // const imageUrl = images[i]?.url;
    const imageUrl = getImage(product.coverImage);
    return <ProductItem key={i} product={product} imageSrc={imageUrl} />;
  });

  // //   return jsx
  return <ul className={styles.list}>{productMap}</ul>;
};

export default ProductList;
