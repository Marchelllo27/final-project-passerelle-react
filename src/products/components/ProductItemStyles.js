const ProductItemStyles = {
  productItem: {
    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.1)",
      outline: "6px solid #78bf35",
    },
    "@media (max-width: 48rem)": {
      "&:hover": {
        transform: "scale(1)",
      },
    },
  },
  addToBasketBox: {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    width: "40px",
    height: "40px",
    "border-radius": "50%",
    border: "1px solid var(--main-color)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#78bf35",
    },
    "& svg": {
      color: "#78bf35",
      "font-size": "1.2rem",
    },
    "&:hover svg": {
      color: "#fff",
    },
  },
  adminButtons: {
    position: "absolute",
    backgroundColor: "#222",
    display: "flex",
    gap: "0.5rem",
    padding: "0.3rem",
    flexDirection: "column",
    "border-bottom-right-radius": "10px"
  },
  deleteButton: {
    color: "rgb(245, 96, 96)",
    fontSize: "2rem",
    "&:hover": {
      color: "red",
    },
  },
  updateButton: {
    fontSize: "2rem",
    color: "#fbf972",
    "&:hover": {
      color: "#fddd04",
    },
  },
};

export default ProductItemStyles;
