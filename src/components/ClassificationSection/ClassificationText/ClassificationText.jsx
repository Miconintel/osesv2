import React from 'react';
import styles from './ClassificationText.module.css';
import Button from '@/components/ui/Button/Button';

const ClassificationText = () => {
  return (
    <div className={styles.container}>
      <h4>Fresh fruit vegetable on our product</h4>
      <Button>shop now</Button>
    </div>
  );
};

export default ClassificationText;
