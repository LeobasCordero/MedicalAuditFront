import React from 'react';
import styles from '../../styles/components/error.scss';

const Error: React.FC = () => {
  return (
    <div className={styles.error}>
      <p>Error: Camera access denied or not available.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default Error;
