const stylesForDescription = {
  root: {},
  container: {
    display: "flex",
    alignItems: "center",
    justifyContente: "Center",
    paddingTop: "2rem",
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
    position: "absolute",
    top: "0",
    right: "0",
    background: "var(--main-color)",
    padding: "0.5rem 1rem",
    borderBottomLeftRadius: "10px",
  },
  paperImage: {
    width: "500px",
    height: "300px",
    margin: "5%",
    borderRadius: "15px",
    padding: "1.5rem",
    border: "solid 3px #78bf35",
    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.1)",
      outline: "3px solid #78bf35",
    },
  },
  main: {
    borderRadius: "15px",

    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.01)",
      outline: "4px solid #616161",
    },
  },
  cardContent: {
    fontSize: "1rem",
    height: "300px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "1.5rem",
    padding: "1rem",
    fontWeight: "bold",
    color: "#616161",
    alignSelf: "center",
  },
  description: {
    fontSize: "1.2rem",
  },
  cardActions: {
    paddingTop: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    background: "white",
  },
  composants: {
    padding: "1rem",
    paddingTop: "2rem",
  },
  nutrientsList: {
    padding: "5px",
    fontSize: "1.1rem",
  },
  priceWeight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    color: "#78bf35",
    fontWeight: "bold",
    fontSize: "1rem",
    alignSelf: "flex-end",
    paddingRight: "1rem",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "180px",
    alignItems: "flex-end",
    color: "#616161",
  },
  button: {
    marginTop: "1rem",
    color: "#78bf35",
    borderColor: "#78bf35",
    "&:hover ": {
      borderColor: "#78bf35",
      background: "#eeeeee",
    },
    number: {
      color: "green",
      background: "green",
    },
  },
}


export default stylesForDescription;