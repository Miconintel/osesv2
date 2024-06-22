import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductItem.module.css";
import Icon from "@/components/Icon/Icon";
const ProductItem = ({ product }) => {
  const {
    name,
    discountPrice,
    price,
    category,
    promo,
    ratingsAverage,
    coverImage,
  } = product;

  console.log(promo);
  console.log(discountPrice);
  return (
    <li className={styles.item}>
      <Link href="#">
        <div className={styles.imageContainer}>
          <Image
            alt={name + category}
            src={coverImage ? `/images/${coverImage}` : "/placeholder.jpg"}
            fill
            className={styles.img}
          />
          {promo && <span className={styles.promo}>{promo}% off</span>}
        </div>
        <div className={styles.description}>
          <p className={styles.product}>
            {name}
            <span className={styles.icon}>
              <Icon icon="star" inStyle={{ width: "16px", height: "16px" }} />
              {ratingsAverage}
            </span>
          </p>
          <p className={styles.price}>
            {discountPrice > 0 ? `${discountPrice}$` : `${price}$`}
            {discountPrice > 0 && (
              <span className={styles.crossed}>{price}$</span>
            )}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
