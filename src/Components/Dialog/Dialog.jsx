import React from 'react';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';
import './Dialog.css';

const Dialog = ({ title, icon, headerButtons, footerButtons, footerDescription, children, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <DialogHeader icon={icon} title={title} buttons={headerButtons} />
        <DialogContent>{children}</DialogContent>
        <DialogFooter buttons={footerButtons} description={footerDescription} />
      </div>
    </div>
  );
};

export default Dialog;