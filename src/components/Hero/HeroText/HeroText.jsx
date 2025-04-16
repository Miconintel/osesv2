import React from 'react';
import styles from './HeroText.module.css';
import Button from '@/components/ui/Button/Button';
const HeroText = () => {
  return (
    <div className={styles.container}>
      <h4>Summer vege sale</h4>
      <h2>Fresh Fruits & Vegetable</h2>
      <Button>shop now</Button>
      {/* <button className={styles.button}>shop now</button> */}
    </div>
  );
};

export default HeroText;
