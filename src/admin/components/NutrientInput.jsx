import React from "react";

import classes from "./NutrientInput.module.css";

const NutrientInput = ({ label, name, type = "number", id, onChange, value }) => {
  return (
    <div className={classes.formControl}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        // min="0"
        // step="0.1"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default NutrientInput;
