import React, { useState } from "react";
import { useFormik } from "formik";

import { TextField, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ChoiceProductInput from "../components/ChoiceProductInput";
import ChoiceTypeOfProduct from "../components/ChoiceTypeOfProduct";
import classes from "./AddProductPage.module.css";

const AddProductPage = props => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      weight: "",
      description: "",
      type: "",
      ingredients: "",
      nutrients: "",
      price: "",
    },
    // INPUT VALIDATION
    validationSchema: {},
    // SUBMIT HANDLER
    onSubmit: async values => {
      setIsLoading(true);
      try {
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    },
  });

  return (
    <form className={classes.form}>
      <p>Ajouter un nouveau produit!</p>
      <ChoiceProductInput />
      <TextField
        defaultValue={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="name"
        id="name"
        label="Nom du produit"
        variant="outlined"
        required
      />
      {formik.touched.name && formik.errors.name && (
        <small className={classes.invalidFeedback}>{formik.errors.name}</small>
      )}

      <TextField
        defaultValue={formik.values.ingredients}
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
        defaultValue={formik.values.weight}
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

     <ChoiceTypeOfProduct/>

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
          <div className={classes.formControl}>
            <label htmlFor="energy">Energy</label>
            <input type="number" name="energy" id="energy" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="proteins">Protéines</label>
            <input type="number" name="proteins" id="proteins" min="0" step="0.1" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="carbohydrates">Glucides</label>
            <input type="number" id="carbohydrates" name="carbohydrates" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="lipids">Lipides</label>
            <input type="number" id="lipids" name="lipids" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="sugar">Sucre</label>
            <input type="number" id="sugar" name="sugar" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="dietaryFiber">Fibre alimentaire</label>
            <input type="number" id="dietaryFiber" name="dietaryFiber" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="calcium">Calcium</label>
            <input type="number" id="calcium" name="calcium" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="iron">Fer</label>
            <input type="number" id="iron" name="iron" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="magnesium">Magnésium</label>
            <input type="number" id="magnesium" name="magnesium" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="zinc">Zinc</label>
            <input type="number" id="zinc" name="zinc" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminE">Vitamine E</label>
            <input type="number" id="vitaminE" name="vitaminE" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminK1">Vitamine K1</label>
            <input type="number" id="vitaminK1" name="vitaminK1" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminC">Vitamine C</label>
            <input type="number" id="vitaminC" name="vitaminC" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminD">Vitamine D</label>
            <input type="number" id="vitaminD" name="vitaminD" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB1">Vitamine B1</label>
            <input type="number" id="vitaminB1" name="vitaminB1" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB2">Vitamine B2</label>
            <input type="number" id="vitaminB2" name="vitaminB2" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB3">Vitamine B3</label>
            <input type="number" id="vitaminB3" name="vitaminB3" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB5">Vitamine B5</label>
            <input type="number" id="vitaminB5" name="vitaminB5" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB6">Vitamine B6</label>
            <input type="number" id="vitaminB6" name="vitaminB6" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB9">Vitamine B9</label>
            <input type="number" id="vitaminB9" name="vitaminB9" min="0" step="0.1"/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="vitaminB12">Vitamine B12</label>
            <input type="number" id="vitaminB12" name="vitaminB12" min="0" step="0.1"/>
          </div>
        </AccordionDetails>
      </Accordion>


      <TextField
        defaultValue={formik.values.description}
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
        defaultValue={formik.values.price}
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
        Ajouter Produit!
      </Button>
      {error && <p>{error} </p>}
    </form>
  );
};

export default AddProductPage;
