export default {
  root: {},
  container: {
    "@media (max-width: 48rem)": {
      width: "100%",
    },
    display: "flex",
    alignItems: "center",
    justifyContente: "Center",
    paddingTop: "2rem",
  },
  backButton: {
    paddingLeft: "2rem",
    paddingBottom: "2rem",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    marginBottom: "2rem",
    borderRadius: "30px",
    background: "#f5f5f5",
  },
  image: {
    width: "40%",
    objectFit: "cover",
    borderRadius: "15px",
    border: "solid 5px #f5f5f5",
    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.01)",
      outline: "3px solid #78bf35",
    },
    "@media (max-width: 48rem)": {
      width: "100%",
      minHeight: "12rem",
    },
  },
  main: {
    borderRadius: "35px",
    marginTop: "20px",
    width: "100%",
  },
  cardContent: {
    fontSize: "1rem",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 614px)": {
      maxWidth: "100%",
    },
  },
  title: {
    fontSize: "2rem ! important",
    padding: "1rem",
    fontWeight: "bold",
    color: "#cd5c5c",
    alignSelf: "center",
    "@media (max-width: 414px)": {
      fontSize: "1.5rem ! important",
    },
  },
  description: {
    fontSize: "1rem ! important",
  },
  cardActions: {
    paddingTop: "6rem",
    paddingBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    background: "white",
    borderRadius: "15px",
  },
  composants: {
    with: "100%",
    padding: "1rem",
    paddingTop: "2rem",
    "@media (max-width: 48rem)": {
      width: "100%",
      padding: 0,
      overflowWrap: "anywhere",
    },
  },
  ingredientsTypo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    fontSize: "1rem",
    margin: "1rem",
    "@media (max-width: 48rem)": {
      width: "100%",
      padding: 0,
      paddingTop: "2rem",
      margin: 0,
    },
  },
  p: {
    fontSize: "2rem",
    fontWeight: "300",
  },
  ingredientsList: {
    color: "#78bf35",
    padding: "5px",
    fontSize: "1rem",
  },
  priceWeight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "1rem",
    color: "#616161",
    fontWeight: "bold",
    fontSize: "1rem",
    alignSelf: "flex-end",
    paddingRight: "1rem",
  },
  price: {
    paddingBottom: "1rem",
  },
  stPriceWeight: {
    color: "#cd5c5c",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "180px",
    alignItems: "flex-end",
    color: "#616161",
    "@media (max-width: 18rem)": {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  button: {
    marginTop: "1.5rem",
    color: "#78bf35",
    border: "2px solid",
    borderColor: "#78bf35",
    "&:hover ": {
      borderColor: "#78bf35",
      background: "#eeeeee",
    },
  },

  buttonTop: {
    marginTop: "1.5rem",
    color: "#78bf35",
    border: "2px solid",
    borderColor: "#78bf35",
    "&:hover ": {
      borderColor: "#78bf35",
      background: "#eeeeee",
    },
    "@media (max-width: 18rem)": {
      marginBottom: "1.5rem !important",
    },
  },
  buttonAddTobasket: {
    marginTop: "1.5rem",
    color: "#78bf35",
    border: "2px solid",
    borderColor: "#78bf35",
    "&:hover ": {
      borderColor: "#78bf35",
      background: "#eeeeee",
    },
    "@media (max-width: 18rem)": {
      marginBottom: "1.5rem !important",
      flexDirection:"column",
    },
  },
};
