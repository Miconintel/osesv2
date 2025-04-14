import React from 'react';
import styles from './ClassificationSection.module.css';
import Image from 'next/image';

const ClassificationSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src="/hero-1.jpg" alt="this image" fill={true} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src="/hero-1.jpg" alt="this image" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationSection;
