import React from 'react';
import DialogButtonGroup from './DialogButtonGroup';

const DialogFooter = ({ buttons }) => {
  // Check if we have any buttons
  if (!buttons || buttons.length === 0) {
    return null; // Nothing to show
  }

  return (
    <div 
      className="dialog-footer" 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px 0', 
        borderTop: '1px solid #ccc', 
        marginTop: '20px'
      }}
    >
     
      <div 
        className="footer-description" 
        style={{ color: '#666', fontStyle: 'italic',whiteSpace:'nowrap' }}
      >
        Copyright @2025
      </div>

     
      <DialogButtonGroup buttons={buttons} />
    </div>
  );
};

export default DialogFooter;
