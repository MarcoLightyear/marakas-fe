import { useRouter } from 'next/router';
import React from 'react';

interface ButtonProps {
  styles?: string;
  text: string;
  redirectTo: string;
}

const Button: React.FC<ButtonProps> = ({ styles, text, redirectTo }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirectTo);
  };

  return (
    <button className={styles} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
