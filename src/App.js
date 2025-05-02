import React, { useState } from 'react';
import Dialog from './Components/Dialog/Dialog';
import DialogContent from './Components/Dialog/DialogContent';
const App = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const [showFooterButtons, setShowFooterButtons] = useState(true);
  const [dynamicHeaderButtons, setDynamicHeaderButtons] = useState([]);
 
  const [buttonCount, setButtonCount] = useState(1);

  const closeDialog = () => setIsDialogVisible(false);


  const handleAddHeaderButton = () => {
    setDynamicHeaderButtons(prev => [
      ...prev,
      {
        label: `Button ${buttonCount}`,
        onClick: () => alert(`Button ${buttonCount} clicked`)
      }
    ]);
    setButtonCount(prev => prev + 1);
  };


  const handleRemoveHeaderButton = () => {
    setDynamicHeaderButtons(prev => prev.slice(0, -1)); 
    setButtonCount(prev => (prev > 1 ? prev - 1 : 1));   
  };


  const headerButtons = [
    { 
      label: showFooterButtons ? 'Hide Footer' : 'Show footer', 
      onClick: () => setShowFooterButtons(!showFooterButtons) 
    },
    ...dynamicHeaderButtons,
    {
      label: '+', 
      title: 'Add New button', 
      onClick: handleAddHeaderButton 
    },

    ...(dynamicHeaderButtons.length > 0 ? [
      {
        label: '-', 
        title: 'Remove button', 
        onClick: handleRemoveHeaderButton 
      }
    ] : []),
    
    { 
      label: '✖', 
      onClick: closeDialog 
    },
    
  ];



  const footerButtons = showFooterButtons
    ? [
        { label: 'Cancel', onClick: closeDialog },
        { label: 'OK', onClick: () => alert('OK Thankyou') },
      ]
    : [];

 

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{textAlign:"center"}}>Dialog window Task</h2>
      <div className="open-dialog-button-wrapper">
     
  <button className="open-dialog-button" onClick={() => setIsDialogVisible(true)}>
    Open Dialog
  </button>
</div>


      {isDialogVisible && (
        <Dialog
          title="Test Dialog"
          icon="🧩"
          headerButtons={headerButtons}

          footerButtons={footerButtons}
         
        >

         <DialogContent>
           
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default App;
