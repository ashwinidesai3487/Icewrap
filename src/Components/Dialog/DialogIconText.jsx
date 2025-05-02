import React from 'react';

const DialogIconText = ({ icon, title, isSuccess }) => (
  <div className="dialog-header-left">
    <span className="dialog-icon" style={{ color: isSuccess === null ? '#3f51b5' : isSuccess ? 'green' : 'red' }}>
      {icon}
    </span>
    <h3 className="dialog-title" style={{ color: isSuccess === null ? '#333' : isSuccess ? 'green' : 'red' }}>
      {title}
    </h3>
  </div>
);

export default DialogIconText;
