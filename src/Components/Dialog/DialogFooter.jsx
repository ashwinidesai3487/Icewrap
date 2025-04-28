import React from 'react';
import DialogButtonGroup from './DialogButtonGroup';

const DialogFooter = ({ buttons }) => {
  
  if (!buttons || buttons.length === 0) {
    return null; 
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
       
      >
        Copyright @2025
      </div>

     
      <DialogButtonGroup buttons={buttons} />
    </div>
  );
};

export default DialogFooter;
