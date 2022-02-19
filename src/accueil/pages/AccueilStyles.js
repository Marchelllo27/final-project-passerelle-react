export default {
  container: {
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "100%",
    marginTop: "-2rem"
  },

  slider1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#98fb9847",
    padding: "1rem",
    width: "100%",
    "@media (max-width: 48rem)": {
      flexDirection: "column",
    },
  },

  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    "@media (max-width: 48rem)": {
      width: "100%",
    },
  },
  img: {
    width: "100%",
    maxWidth: "20rem",
    animation:
      "backInRight" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
    "@media (max-width: 48rem)": {
      width: "60%",
    },
  },
  slider1Content: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    color: "#585858",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "1rem",
    animation:
      "backInLeft" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
    "@media (max-width: 48rem)": {
      width: "100%",
      "& .MuiTypography-h4": {
        fontSize: "1.5rem",
        marginBottom: "1rem",
      },
    },
  },
  serviceLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "3rem",
    "@media (max-width: 30rem)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  serviceLayoutContain: {
    width: "33%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    animation:
      "backInUp" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
  },
  card: {
    display: "flex",
    padding: "1rem",
  },
  blocks: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "1rem",
    alignItems: "center",
    background: "linear-gradient( #deebdd75 0%, #bbdbbe 74%)",
  },
  aboutUs: {
    width: "70%",
    margin: "1rem 0",
    fontFamily: "inherit",
  },
  productList: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  textAlign: {
    texAalign: "center",
  },
  seeMore: {
    fontSize: "larger",
    marginTop: "2rem",
  },
};
