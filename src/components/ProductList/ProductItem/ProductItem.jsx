import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductItem.module.css";
import Icon from "@/components/Icon/Icon";

//
//

const ProductItem = async ({ product, imageSrc }) => {
  const {
    name,
    discountPrice,
    price,
    category,
    promo,
    ratingsAverage,
    coverImage,
  } = product;
  // console.log(imageSrc);
  // console.log(coverImage);

  // async function allImages() {
  //   const blobs = await list();
  //   return blobs;
  // }
  // const blob = await allImages();
  // const images = blob.blobs;

  // const getImages = (imageIn) => {
  //   const theImage = images.find((image) => image?.pathname === imageIn)?.url;
  //   console.log(theImage);
  //   return theImage;
  // };

  // console.log(getImages());

  // console.log(promo);
  // console.log(discountPrice);
  return (
    <li className={styles.item}>
      <Link href="#">
        <div className={styles.imageContainer}>
          <Image
            alt={name + category}
            // src={coverImage ? `/images/${coverImage}` : "/placeholder.jpg"}
            src={imageSrc || "/images/placeholder.jpg"}
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
