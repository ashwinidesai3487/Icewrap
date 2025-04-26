import React from 'react';
import DialogButton from './DialogButton';

const DialogButtonGroup = ({ buttons = [] }) => (
  <div className="dialog-button-group">
    {buttons.map((btn, index) => (
      <DialogButton key={index} label={btn.label} onClick={btn.onClick} />
    ))}
  </div>
);

export default DialogButtonGroup;