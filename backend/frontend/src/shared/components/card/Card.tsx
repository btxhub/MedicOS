import './card.css';
// ARCHIVO: frontend/src/shared/components/card/Card.tsx

import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};