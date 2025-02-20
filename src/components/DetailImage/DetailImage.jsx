import React from "react";
import Image from "next/image";
import styles from "./DetailImage.module.css";
import { getBlobImage } from "@/lib/utilities/blob";
//
//
//
const DetailImage = async ({ image }) => {
  // no longer necessary since I am saving blob url at back end
  // const coverImage = await getBlobImage(image);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image || "/images/placeholder.jpg"} fill alt="product" />
      </div>
    </div>
  );
};

export default DetailImage;
