import './input.css';
import React from 'react';

interface InputProps {
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value = "",
  placeholder,
  disabled = false,
  onChange,
  type = "text",
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};