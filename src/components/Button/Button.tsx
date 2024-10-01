import React from 'react';
import styles from '../../styles/components/button.scss';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Open Camera
    </button>
  );
};

export default Button;
