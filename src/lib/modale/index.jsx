import React from 'react';


const Modale = ({ isOpen, onClose, message }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>&times;</span>
          <p>{message}</p>  
        </div>    
    </div>
  );
};

export default Modale;

