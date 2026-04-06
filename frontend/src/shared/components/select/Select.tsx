import './select.css';
// ARCHIVO: frontend/src/shared/components/select/Select.tsx

import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  disabled = false,
}) => {
  return (
    <div className="select-wrapper">
      <label className="select-label">{label}</label>
      <select className="select-field" disabled={disabled}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};