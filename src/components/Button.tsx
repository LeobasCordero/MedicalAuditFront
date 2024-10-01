import React from 'react';
//import '../styles/components/button.scss';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Abrir Cámara
    </button>
  );
};

export default Button;
