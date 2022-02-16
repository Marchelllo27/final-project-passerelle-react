import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';

// import Button from '@mui/material/Button';

export default function SimpleBackdrop(props) {

  const handleClose = () => {
    props.onBackdropClick()
  };

  return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.showBackDrop}
        onClick={handleClose}
      >
        {/* {props.children} */}
      </Backdrop>
  );
}