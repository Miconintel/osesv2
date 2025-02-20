import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductItem.module.css";
import Icon from "@/components/Icon/Icon";
import { getBlobImage } from "@/lib/utilities/blob";

//
//

const ProductItem = async ({ product }) => {
  const {
    name,
    discountPrice,
    price,
    category,
    promo,
    ratingsAverage,
    coverImage,
    id,
  } = product;
  // console.log(id);

  // this is not necessary since bucket is created and hosted at the backend
  // const imageSrc = await getBlobImage(coverImage);

  return (
    <li className={styles.item}>
      <Link href={`/products/${id}`}>
        <div className={styles.imageContainer}>
          <Image
            alt={name + category}
            // src={coverImage ? `/images/${coverImage}` : "/placeholder.jpg"}
            // src={imageSrc || "/images/placeholder.jpg"}
            src={coverImage || "/images/placeholder.jpg"}
            fill
            className={styles.img}
          />
          {promo && <span className={styles.promo}>{promo}% off</span>}
        </div>
        <div className={styles.description}>
          <p className={styles.product}>
            {name}
            <span className={styles.icon}>
              <Icon
                icon="star"
                inStyle={{
                  width: "14px",
                  height: "14px",
                  fill: "var(--color-secondary)",
                }}
              />
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
