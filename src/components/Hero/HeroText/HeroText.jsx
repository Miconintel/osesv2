import React from 'react';
import styles from './HeroText.module.css';

const HeroText = () => {
  return (
    <div className={styles.container}>
      <h4>Summer vege sale</h4>
      <h2>Fresh Fruits & Vegetable</h2>
      <button className={styles.button}>shop now</button>
    </div>
  );
};

export default HeroText;
