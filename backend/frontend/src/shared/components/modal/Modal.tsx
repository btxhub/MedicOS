import './modal.css';
// ARCHIVO: frontend/src/shared/components/modal/Modal.tsx

import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, open }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};