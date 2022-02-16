import React from "react";

import Modal from "@mui/material/Modal";

export default function BasketModal(props) {

  return (
    <Modal
      open={props.show}
      onClose={props.onBackdropClick}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "& .MuiBox-root": { border: "none", borderRadius: "10px" },
      }}
    >
      {props.children}
    </Modal>
  );
}
