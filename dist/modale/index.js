import React from 'react';
const Modale = ({
  isOpen,
  onClose,
  message
}) => {
  const handleClose = () => {
    onClose();
  };
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "close",
    onClick: handleClose
  }, "\xD7"), /*#__PURE__*/React.createElement("p", null, message)));
};
export default Modale;