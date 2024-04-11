import React from 'react';
import './index.css';

const Modale = ({ isOpen, onClose, message }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>&times;</span>
          <p>{message}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modale;

