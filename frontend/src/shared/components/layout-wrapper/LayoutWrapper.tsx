import './layout-wrapper.css';
// ARCHIVO: frontend/src/shared/components/layout-wrapper/LayoutWrapper.tsx

import React from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {children}
    </div>
  );
};