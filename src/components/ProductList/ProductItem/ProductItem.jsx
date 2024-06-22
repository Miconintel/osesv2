import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductItem.module.css";
const ProductItem = ({ product }) => {
  const { name, discountPrice, price, category, promo, rating, coverImage } =
    product;
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
            <span>⭐{rating}</span>
          </p>
          <p className={styles.price}>
            {discountPrice ? `${discountPrice}$` : `${price}$`}
            {discountPrice && <span className={styles.crossed}>{price}$</span>}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
