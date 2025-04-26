import React from 'react';
import DialogButtonGroup from './DialogButtonGroup';
import DialogIconText from './DialogIconText';
const DialogHeader = ({ icon, title, buttons }) => (
  <div className="dialog-header">
    

<DialogIconText icon={icon} title={title} />

    <DialogButtonGroup buttons={buttons} />
  </div>
);

export default DialogHeader;