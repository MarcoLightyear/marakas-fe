// components/Button.tsx
import React from 'react';

interface ButtonProps {
  styles?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ styles, text }) => {
  return (
    <button className={styles}>
      {text}
    </button>
  );
};

export default Button;
