import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

import sendHttpRequest from "../../utils/sendHttpRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const productId = props.BackdropProps.productId;

  const closeModalHandler = () => {
    props.closeModal();
  };

  const deleteProductHandler = async () => {
    const { token } = JSON.parse(localStorage.getItem("userData"));

    try {
      const response = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/admin/products/dessert/delete/${productId}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + token,
        }
      );
      console.log("reponse =>", response)
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

    props.closeModal();
  };

  return (
    <Modal
      open={props.show}
      onClose={props.closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ "& .MuiBox-root": { border: "none", borderRadius: "10px" } }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Voulez-vous vraiment supprimé le produit ?
        </Typography>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            color="error"
            startIcon={<BlockIcon sx={{ color: "red" }} />}
            onClick={closeModalHandler}
          >
            Non
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "1rem" }}
            endIcon={<DeleteIcon sx={{ color: "white" }} />}
            onClick={deleteProductHandler}
          >
            Oui!
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
