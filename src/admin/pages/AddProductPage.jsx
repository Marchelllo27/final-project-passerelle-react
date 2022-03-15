import React, { useState } from "react";
import { useFormik } from "formik";

import { TextField, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SuccessSnackBar from "../../shared/UIElements/SuccessSnackbar";
import BackDropSpinner from "../../shared/UIElements/BackDropSpinner";
import ChoiceProductInput from "../components/ChoiceProductInput";
import sendHttpRequest from "../../utils/sendHttpRequest";
import classes from "./AddProductPage.module.css";
import ImageUpload from "../../shared/UIElements/ImageUpload";
import { addNewProductValidationForm } from "../../utils/addNewProductValidationForm";
import NutrientInput from "../components/NutrientInput";
import TypeOfProductChoice from "../components/TypeOfProductChoice";

const AddProductPage = props => {
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [clearPreview, setClearPreview] = useState(false);
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      product: "",
      name: "",
      weight: "",
      description: "",
      type: "",
      ingredients: "",
      energy: 0,
      proteins: 0,
      carbohydrates: 0,
      lipids: 0,
      sugar: 0,
      dietaryFiber: 0,
      calcium: 0,
      iron: 0,
      magnesium: 0,
      zinc: 0,
      vitaminE: 0,
      vitaminK1: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminB1: 0,
      vitaminB2: 0,
      vitaminB3: 0,
      vitaminB5: 0,
      vitaminB6: 0,
      vitaminB9: 0,
      vitaminB12: 0,
      price: "",
    },
    // INPUT VALIDATION
    validationSchema: addNewProductValidationForm,
    // SUBMIT HANDLER
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const { token } = JSON.parse(localStorage.getItem("userData"));

      const nutrientsData = [
        {
          name: "energy",
          quantity: values.energy,
        },
        {
          name: "proteins",
          quantity: values.proteins,
        },
        {
          name: "carbohydrates",
          quantity: values.carbohydrates,
        },
        {
          name: "lipids",
          quantity: values.lipids,
        },
        {
          name: "sugar",
          quantity: values.sugar,
        },
        {
          name: "dietaryFiber",
          quantity: values.dietaryFiber,
        },
        {
          name: "calcium",
          quantity: values.calcium,
        },
        {
          name: "iron",
          quantity: values.iron,
        },
        {
          name: "magnesium",
          quantity: values.magnesium,
        },
        {
          name: "zinc",
          quantity: values.zinc,
        },
        {
          name: "vitaminE",
          quantity: values.vitaminE,
        },
        {
          name: "vitaminK1",
          quantity: values.vitaminK1,
        },
        {
          name: "vitaminC",
          quantity: values.vitaminC,
        },
        {
          name: "vitaminD",
          quantity: values.vitaminD,
        },
        {
          name: "vitaminB1",
          quantity: values.vitaminB1,
        },
        {
          name: "vitaminB2",
          quantity: values.vitaminB2,
        },
        {
          name: "vitaminB3",
          quantity: values.vitaminB3,
        },
        {
          name: "vitaminB5",
          quantity: values.vitaminB5,
        },
        {
          name: "vitaminB6",
          quantity: values.vitaminB6,
        },
        {
          name: "vitaminB9",
          quantity: values.vitaminB9,
        },
        {
          name: "vitaminB12",
          quantity: values.vitaminB12,
        },
      ];

      let url;
      switch (values.product) {
        case "dish":
          url = "/admin/products/dish/add";
          break;
        case "drink":
          url = "/admin/products/drink/add";
          break;
        case "dessert":
          url = "/admin/products/dessert/add";
          break;
        default:
          url = "/admin/products/dish/add";
      }
      try {
        const formData = new FormData();
        formData.append("product", values.product);
        formData.append("name", values.name);
        formData.append("ingredients", JSON.stringify([values.ingredients]));
        formData.append("image", image);
        formData.append("weight", values.weight);
        formData.append("description", values.description);
        formData.append("type", isChecked ? type : "");
        formData.append("price", values.price);
        formData.append("nutrients", JSON.stringify(nutrientsData));

        await sendHttpRequest(
          process.env.REACT_APP_URL_API + url,
          "POST",
          formData,
          {
            Authorization: "Bearer " + token,
          }
        );
        setIsLoading(false);
        setIsProductAdded(true);
        setClearPreview(true);
        resetForm();
        setIsChecked(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    },
  });

  const onInputHandler = file => {
    setImage(file);
  };

  const onTypeChangeHandler = e => {
    setIsChecked(prevState => !prevState);
    setType(e.target.value);
  };

  const closeModalHandler = () => {
    setIsProductAdded(false);
  };

  return (
    <>
      {isProductAdded && (
        <SuccessSnackBar
          message="Produit a été bien ajouté dans la base de donneés"
          closeModal={closeModalHandler}
        />
      )}
      {isLoading && <BackDropSpinner />}
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <p>Ajouter un nouveau produit!</p>
        <ImageUpload
          id="image"
          name="image"
          center
          onInput={onInputHandler}
          clearPreview={clearPreview}
        />
        <ChoiceProductInput
          onChange={formik.handleChange}
          value={formik.values.product}
        />
        <TextField
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          id="name"
          label="Nom du produit"
          variant="outlined"
          required
        />
        {formik.touched.name && formik.errors.name && (
          <small className={classes.invalidFeedback}>
            {formik.errors.name}
          </small>
        )}

        <TextField
          value={formik.values.ingredients}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="ingredients"
          id="ingredients"
          label="Ingrédients(séparées par des virgules)"
          variant="outlined"
          required
        />
        {formik.touched.ingredients && formik.errors.ingredients && (
          <small className={classes.invalidFeedback}>
            {formik.errors.ingredients}
          </small>
        )}

        <TextField
          value={formik.values.weight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="weight"
          id="weight"
          type="number"
          label="Poids(grammes)"
          variant="outlined"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          required
        />
        {formik.touched.weight && formik.errors.weight && (
          <small className={classes.invalidFeedback}>
            {formik.errors.weight}
          </small>
        )}

        <TypeOfProductChoice
          checked={isChecked}
          onChange={onTypeChangeHandler}
        />

        <Accordion
          sx={{
            "& .MuiAccordionSummary-content": {
              margin: 0,
            },
          }}
          className={classes.nutrients}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Nutrients</p>
          </AccordionSummary>
          <AccordionDetails>
            <NutrientInput
              label="Energy"
              id="energy"
              name="energy"
              onChange={formik.handleChange}
              value={formik.values.energy}
            />

            <NutrientInput
              label="Protéines"
              id="proteins"
              name="proteins"
              onChange={formik.handleChange}
              value={formik.values.proteins}
            />

            <NutrientInput
              label="Glucides"
              id="carbohydrates"
              name="carbohydrates"
              onChange={formik.handleChange}
              value={formik.values.carbohydrates}
            />

            <NutrientInput
              label="Lipides"
              id="lipids"
              name="lipids"
              onChange={formik.handleChange}
              value={formik.values.lipids}
            />

            <NutrientInput
              label="Sucre"
              id="sugar"
              name="sugar"
              onChange={formik.handleChange}
              value={formik.values.sugar}
            />

            <NutrientInput
              label="Fibre alimentaire"
              id="dietaryFiber"
              name="dietaryFiber"
              onChange={formik.handleChange}
              value={formik.values.dietaryFiber}
            />

            <NutrientInput
              label="Calcium"
              id="calcium"
              name="calcium"
              onChange={formik.handleChange}
              value={formik.values.calcium}
            />

            <NutrientInput
              label="Fer"
              id="iron"
              name="iron"
              onChange={formik.handleChange}
              value={formik.values.iron}
            />

            <NutrientInput
              label="Magnésium"
              id="magnesium"
              name="magnesium"
              onChange={formik.handleChange}
              value={formik.values.magnesium}
            />

            <NutrientInput
              label="Zinc"
              id="zinc"
              name="zinc"
              onChange={formik.handleChange}
              value={formik.values.zinc}
            />

            <NutrientInput
              label="Vitamine E"
              id="vitaminE"
              name="vitaminE"
              onChange={formik.handleChange}
              value={formik.values.vitaminE}
            />

            <NutrientInput
              label="Vitamine K1"
              id="vitaminK1"
              name="vitaminK1"
              onChange={formik.handleChange}
              value={formik.values.vitaminK1}
            />

            <NutrientInput
              label="Vitamine C"
              id="vitaminC"
              name="vitaminC"
              onChange={formik.handleChange}
              value={formik.values.vitaminC}
            />

            <NutrientInput
              label="Vitamine D"
              id="vitaminD"
              name="vitaminD"
              onChange={formik.handleChange}
              value={formik.values.vitaminD}
            />

            <NutrientInput
              label="Vitamine B1"
              id="vitaminB1"
              name="vitaminB1"
              onChange={formik.handleChange}
              value={formik.values.vitaminB1}
            />

            <NutrientInput
              label="Vitamine B2"
              id="vitaminB2"
              name="vitaminB2"
              onChange={formik.handleChange}
              value={formik.values.vitaminB2}
            />

            <NutrientInput
              label="Vitamine B3"
              id="vitaminB3"
              name="vitaminB3"
              onChange={formik.handleChange}
              value={formik.values.vitaminB3}
            />

            <NutrientInput
              label="Vitamine B5"
              id="vitaminB5"
              name="vitaminB5"
              onChange={formik.handleChange}
              value={formik.values.vitaminB5}
            />

            <NutrientInput
              label="Vitamine B6"
              id="vitaminB6"
              name="vitaminB6"
              onChange={formik.handleChange}
              value={formik.values.vitaminB6}
            />

            <NutrientInput
              label="Vitamine B9"
              id="vitaminB9"
              name="vitaminB9"
              onChange={formik.handleChange}
              value={formik.values.vitaminB9}
            />

            <NutrientInput
              label="Vitamine B12"
              id="vitaminB12"
              name="vitaminB12"
              onChange={formik.handleChange}
              value={formik.values.vitaminB12}
            />
          </AccordionDetails>
        </Accordion>

        <TextField
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="description"
          id="description"
          type="description"
          multiline
          minRows={4}
          className={classes.description}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            "& .MuiInputBase-multiline": {
              padding: "0.5rem",
            },
          }}
          required
          label="Description du produit"
          variant="outlined"
        />
        {formik.touched.description && formik.errors.description && (
          <small className={classes.invalidFeedback}>
            {formik.errors.description}
          </small>
        )}

        <TextField
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="price"
          id="price"
          type="number"
          label="Prix"
          variant="outlined"
          required
        />
        {formik.touched.price && formik.errors.price && (
          <small className={classes.invalidFeedback}>
            {formik.errors.price}
          </small>
        )}

        <Button
          color="success"
          type="submit"
          variant="contained"
          sx={{ maxWidth: "20rem", margin: "0 auto" }}
        >
          Ajouter Produit !
        </Button>
        {error && <p className={classes.invalidFeedback}>{error} </p>}
      </form>
    </>
  );
};

export default AddProductPage;
