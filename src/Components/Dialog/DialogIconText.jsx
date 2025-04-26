import React from 'react';

const DialogIconText = ({ icon, title }) => {
  if (!icon && !title) return null; 

  return (
    <div className="dialog-icon-text" style={{ display: 'flex', alignItems: 'center', gap: '10px',whiteSpace:'nowrap' }}>
      {icon && <span className="dialog-icon" style={{ fontSize: '24px' }}>{icon}</span>}
      {title && <span style={{ margin: 0 }}>{title}</span>}
    </div>
  );
};

export default DialogIconText;
