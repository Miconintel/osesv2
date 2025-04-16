import React from 'react';
import styles from './ClassificationSection.module.css';
import Image from 'next/image';
import ClassificationText from './ClassificationText/ClassificationText';

const ClassificationSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <ClassificationText />
            <Image
              src="/hero-1.jpg"
              alt="this image"
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <ClassificationText />
            <Image
              src="/hero-1.jpg"
              alt="this image"
              fill
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationSection;
