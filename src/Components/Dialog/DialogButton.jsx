import React from 'react';

const DialogButton = ({ label, onClick }) => (
  <button className="dialog-button" onClick={onClick}>
    {label}
  </button>
);

export default DialogButton;