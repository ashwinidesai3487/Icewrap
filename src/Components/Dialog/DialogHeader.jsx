import React from 'react';
import DialogButtonGroup from './DialogButtonGroup';
import DialogIconText from './DialogIconText';

const DialogHeader = ({ icon, title, buttons, headerStyle }) => (
  <div className="dialog-header" style={headerStyle}>
    <DialogIconText icon={icon} title={title} />
    <DialogButtonGroup buttons={buttons} />
  </div>
);

export default DialogHeader;
