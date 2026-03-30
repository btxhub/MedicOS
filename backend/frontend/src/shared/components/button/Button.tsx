import './button.css';
// ARCHIVO: frontend/src/shared/components/button/Button.tsx

import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};