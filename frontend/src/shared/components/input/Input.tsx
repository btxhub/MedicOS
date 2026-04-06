import './input.css';
// ARCHIVO: frontend/src/shared/components/input/Input.tsx

import React from 'react';

interface InputProps {
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
      />
    </div>
  );
};